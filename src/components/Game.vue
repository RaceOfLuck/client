<template>
  <div>
      <Board></Board>
      <div class="container">
        <Track v-for="player in players" :key="player.username" :player="player"/>
      </div>
  </div>
</template>

<script>
import Board from '../components/Board'
import Track from '../components/Track'
export default {
    components: { Board, Track },
    name : "Game",
    computed: {
    dice() {
      return this.$store.state.dice.result
    },
    players() {
      return this.$store.state.players
    }
  },
  watch: {
    dice(to, from) {
      console.log(this.dice)
      // this.players[0].position += this.dice;
      this.players.forEach(player => {
        player.position += this.dice
      })
    }
  },
}
</script>

<style>

</style>