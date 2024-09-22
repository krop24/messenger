import { Middleware } from '@reduxjs/toolkit'
import { setRemoteStreamId } from 'entities/chat'
import { io } from 'socket.io-client'

let peerConnection: RTCPeerConnection | null = null
let localStream: MediaStream | null = null
let remoteStream: MediaStream | null = null
const iceCandidatesQueue: RTCIceCandidate[] = []

export const websocketMiddleware: Middleware = ({ dispatch, getState }) => {
  const socket = io('http://localhost:9000')

  socket.on('joinRoom', data => {
    dispatch({ type: 'joinRoom', payload: data })
  })

  socket.on('newMessage', data => {
    dispatch({ type: 'newMessage', payload: data })
  })

  socket.on('chatMessages', data => {
    dispatch({ type: 'chatMessages', payload: data })
  })

  socket.on('user-connected', async (remoteUsername: string) => {
    dispatch({ type: 'userCallUsername', payload: { remoteUsername } })
  })

  socket.on('user-disconnected', (remoteUserId: string) => {
    console.log('User disconnected:', remoteUserId)
  })

  socket.on(
    'offer',
    async (offer: RTCSessionDescriptionInit, remoteUserUsername: string) => {
      dispatch({ type: 'callOffer', payload: { offer, remoteUserUsername } })
    },
  )

  socket.on('answer', async (answer: RTCSessionDescriptionInit) => {
    dispatch({ type: 'callAnswer', payload: { answer } })
  })

  socket.on('ice-candidate', async (candidate: RTCIceCandidateInit) => {
    dispatch({ type: 'callCandidate', payload: { candidate } })
  })

  socket.on('incomingCall', ({ chatId, sender, host }) => {
    dispatch({ type: 'incomingCall', payload: { chatId, sender, host } })
  })

  const createOffer = async (currentUserId: string) => {
    if (peerConnection) {
      const offer = await peerConnection.createOffer()
      await peerConnection.setLocalDescription(offer)
      socket.emit('offer', offer, getState().chat.video.roomId, currentUserId)
    }
  }

  return next => async action => {
    switch (action?.type) {
      case 'joinRoom':
        socket.emit('joinRoom', action?.payload)
        break
      case 'call':
        console.log(action)
        socket.emit('call', action?.payload)
        break
      case 'message':
        socket.emit('message', action?.payload)
        break
      case 'joinVideoRoom': {
        const state = getState().chat
        const { roomId, userId } = state.video

        socket.emit('joinVideoRoom', roomId, userId)

        socket.on('user-connected', async () => {
          await createOffer(userId)
        })

        socket.on('user-disconnected', (remoteUserId: string) => {
          console.log('User disconnected:', remoteUserId)
        })

        socket.on('offer', async (offer: RTCSessionDescriptionInit) => {
          if (peerConnection) {
            if (offer.type && offer.sdp) {
              await peerConnection.setRemoteDescription(new RTCSessionDescription(offer))
              const answer = await peerConnection.createAnswer()
              await peerConnection.setLocalDescription(answer)
              socket.emit('answer', answer, roomId, userId)

              // Add queued ICE candidates after setting remote description
              while (iceCandidatesQueue.length > 0) {
                const candidate = iceCandidatesQueue.shift()
                await peerConnection.addIceCandidate(candidate)
              }
            } else {
              console.error('Invalid offer received:', offer)
            }
          }
        })

        socket.on('answer', async (answer: RTCSessionDescriptionInit) => {
          if (peerConnection) {
            if (answer.type && answer.sdp) {
              await peerConnection.setRemoteDescription(new RTCSessionDescription(answer))

              // Add queued ICE candidates after setting remote description
              while (iceCandidatesQueue.length > 0) {
                const candidate = iceCandidatesQueue.shift()
                await peerConnection.addIceCandidate(candidate)
              }
            } else {
              console.error('Invalid answer received:', answer)
            }
          }
        })

        socket.on('ice-candidate', async (candidateString: string) => {
          const candidate = new RTCIceCandidate(JSON.parse(candidateString))
          if (peerConnection) {
            if (peerConnection.remoteDescription) {
              await peerConnection.addIceCandidate(candidate)
            } else {
              iceCandidatesQueue.push(candidate)
            }
          }
        })

        break
      }
      case 'startVideoChat': {
        try {
          const state = getState().chat

          localStream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true,
          })

          if (!peerConnection) {
            peerConnection = new RTCPeerConnection()

            localStream.getTracks().forEach(track => {
              peerConnection?.addTrack(track, localStream)
            })

            peerConnection.onicecandidate = event => {
              if (event.candidate) {
                socket.emit(
                  'ice-candidate',
                  JSON.stringify(event.candidate),
                  state.video.roomId,
                  state.video.userId,
                )
              }
            }

            peerConnection.ontrack = event => {
              remoteStream = event.streams[0]
              const remoteStreamId = new Date().getTime().toString()
              dispatch(setRemoteStreamId(remoteStreamId))

              const remoteStreamEvent = new CustomEvent('remoteStream', {
                detail: remoteStream,
              })
              window.dispatchEvent(remoteStreamEvent)
            }
          }
        } catch (error) {
          console.error('Error accessing media devices.', error)
        }

        break
      }
      default:
        next(action)
    }
  }
}
