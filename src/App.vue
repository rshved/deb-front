<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <input v-model="sock" type="text" @keydown.enter="sendMsg"/>
        <input v-model="userId" type="text" @keydown.enter="sendMsg" />
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { RouterLink, RouterView } from 'vue-router'
import SocketIoService from "./services/socketio.service";

const sock = ref('')
const userId = ref('')

const sendMsg = () => {
  SocketIoService.sendMessage(sock.value, userId.value)
}

onMounted(() => {
  SocketIoService.setupSocketConnection()
})

onBeforeUnmount(() => {
  SocketIoService.disconnect()
})
</script>

<style>

</style>
