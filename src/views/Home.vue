<template>
    <div class="home">
      <div v-for="player in  this.$store.state.players" :key="player.id">
        {{ player.username }}
      </div >
      <Board></Board>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Board from './Board'
export default {
  name: 'home',
  components: {
    HelloWorld,
    Board
  },
  created : function () {
    this.$store.dispatch('fetchRooms')
  }
}
</script>
