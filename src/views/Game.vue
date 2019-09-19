<template>
    <div>
      <Board></Board>
    </div>
</template>

<script>
import Board from '../components/Board'
export default {
  name: 'Game',
  components: {
    Board
  },
  created : function () {
    this.$store.dispatch('fetchRooms')
  }
}
</script>
