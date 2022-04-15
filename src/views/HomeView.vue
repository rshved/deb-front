<template>
  <main>
    <input v-model="sock" type="text" @keydown.enter="sendMsg"/>
<!--    <input v-model="userId" type="text" @keydown.enter="sendMsg" />-->
    <div></div>
    <input v-model="roomId" type="text" />
    <button @click="joinLobby">join room</button>
    <button @click="getData">get</button>
<!--    <div>{{ userId }}</div>-->
  </main>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, inject } from "vue";
// import SocketIoService from "@/services/socketio.service";

const sock = ref('')
const roomId = ref('')
const socket = inject('socket')
const userId = ref(null)

const allCards = ref(null)
const userPile = ref(null)

const sendMsg = () => {}

const joinLobby = () => {}

const getData = () => {
  userPile.value = allCards.value?.get(userId.value)
  console.log(userPile.value)
}

onMounted(() => {
  socket.on('piles', piles => {
    allCards.value = new Map(piles)
  })
  socket.on('id', id => {
    userId.value = id
  })
})

onBeforeUnmount(() => {
  if (socket) {
    socket.disconnect()
  }
})
</script>
