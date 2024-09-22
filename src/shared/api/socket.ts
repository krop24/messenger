class Socket {
  private socket: WebSocket | null

  constructor() {
    this.socket = null
  }

  connect(url: string): void {
    if (!this.socket) {
      this.socket = new WebSocket(url)
    }
  }

  disconnect(): void {
    if (this.socket) {
      this.socket.close()
      this.socket = null
    }
  }

  send(message: any): void {
    if (this.socket) {
      this.socket.send(JSON.stringify(message))
    }
  }

  on(eventName: string, callback: (event: Event) => void): void {
    if (this.socket) {
      this.socket.addEventListener(eventName, callback)
    }
  }
}

export { Socket }
