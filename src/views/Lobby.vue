<template>
  <h1>
    Lobby
  </h1>

  <button @clik="get">get</button>
  <div>
    <pre v-if="piles">
      {{ piles }}
    </pre>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
// import SocketIoService from "@/services/socketio.service";

onMounted(() => {

})

let piles = ref(null)

const get = () => {
  SocketIoService.getCards()
}

</script>