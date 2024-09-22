import { useEffect, useRef, useState } from 'react'
import { authSelector } from 'entities/auth'
import { chatStoreSelector, handleCallOpen, setRoomId, setUserId } from 'entities/chat'
import { useAppDispatch, useAppSelector } from 'shared/lib/store'
import { IconButton } from 'shared/ui/icon'

import './video-call-modal.scss'

export const VideoCallModal = () => {
  const dispatch = useAppDispatch()
  const { user } = useAppSelector(authSelector)
  const { isCallOpen, chatId } = useAppSelector(chatStoreSelector)

  const [localStream, setLocalStreamState] = useState<MediaStream | null>(null)
  const [remoteStream, setRemoteStreamState] = useState<MediaStream | null>(null)

  const videoId = `${chatId}-video-call`

  const localVideoRef = useRef<HTMLVideoElement>(null)
  const remoteVideoRef = useRef<HTMLVideoElement>(null)

  const startCall = async () => {
    dispatch(setRoomId(videoId))
    dispatch(setUserId(user.username))

    dispatch({
      type: 'joinVideoRoom',
    })

    dispatch({
      type: 'startVideoChat',
    })
  }

  const startLocalStream = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      })
      setLocalStreamState(stream)
    } catch (error) {
      console.error('Error accessing media devices.', error)
    }
  }

  const handleRemoteStream = (event: CustomEvent) => {
    if (remoteVideoRef.current) {
      remoteVideoRef.current.srcObject = event.detail as MediaStream
      setRemoteStreamState(event.detail as MediaStream)
    }
  }

  useEffect(() => {
    if (localVideoRef.current && localStream) {
      localVideoRef.current.srcObject = localStream
      remoteVideoRef.current.srcObject = localStream
    }
  }, [localStream])

  useEffect(() => {
    if (remoteVideoRef.current && remoteStream) {
      remoteVideoRef.current.srcObject = remoteStream
    }
  }, [remoteStream])

  useEffect(() => {
    if (isCallOpen) {
      startLocalStream()
    }
  }, [isCallOpen])

  useEffect(() => {
    window.addEventListener('remoteStream', handleRemoteStream as EventListener)
    return () => {
      window.removeEventListener('remoteStream', handleRemoteStream as EventListener)
    }
  }, [])

  return (
    isCallOpen && (
      <div className="video-call">
        <button
          aria-label="Close video call"
          type="button"
          className="video-call__overlay"
          onClick={() => dispatch(handleCallOpen())}
        />

        <div className="video-call__content">
          <video
            ref={remoteVideoRef}
            controls={false}
            autoPlay
            className="video-call__video-remote"
          />
          <video
            ref={localVideoRef}
            controls={false}
            autoPlay
            muted
            className="video-call__video-local"
          />

          <div className="video-call__controls">
            <IconButton
              icon="fa-solid fa-phone"
              className="video-call__btn-accept"
              onClick={startCall}
            />
            <IconButton
              icon="fa-solid fa-phone-slash"
              className="video-call__btn-cancel"
            />
          </div>
        </div>
      </div>
    )
  )
}
