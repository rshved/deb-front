import { io } from 'socket.io-client'

class SocketIoService {
  socket;
  constructor() {}

  setupSocketConnection() {
    this.socket = io('http://localhost:8000')
  }

  sendMessage(msg, id) {
    if (msg) {
      this.socket.emit('message', msg, id)
    }

    this.socket.on('broadcast', data => {
      console.log(data)
    })
  }

  getCards() {
    this.socket.emit('cards')
    this.socket.on('piles', pile => {
      console.log(pile)
    })
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect()
    }
  }

}

export default new SocketIoService()