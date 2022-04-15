import { io } from 'socket.io-client'

export default {
  install: (app, { connection, options }) => {
    const socket = io(connection, options)
    app.config.globalProperties.$socket = socket

    app.provide('socket', socket)
  }
}


// class SocketIoService {
//   socket;
//   lobby
//   constructor() {}
//
//   setupSocketConnection() {
//     this.socket = io('http://localhost:8000')
//
//   }
//
//   getUserId () {
//     return this.socket.on('id', id => id)
//   }
//
//   sendMessage(msg, id) {
//     if (msg) {
//       this.socket.emit('message', msg, id)
//     }
//
//     this.socket.on('broadcast', data => {
//       console.log(data)
//     })
//   }
//
//   getCards() {
//     return this.socket.on('piles', piles => new Map(piles))
//   }
//
//   joinRoom (roomId) {
//     this.socket.emit('join', roomId)
//   }
//
//   disconnect() {
//     if (this.socket) {
//       this.socket.disconnect()
//     }
//   }
//
// }
//
// export default new SocketIoService()