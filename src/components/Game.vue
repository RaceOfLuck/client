<template>
  <div class="game">
      <Board></Board>
      <!-- <pre> {{ players }} </pre> -->

      <div class="container-fluid">
        <div class="d-flex align-items-center" v-for="player in players" :key="player.username">
          <span class="mx-2"> {{ player.username }} </span>
          <Track :player="player"/>
        </div>
      </div>
  </div>
</template>

<script>
import Board from '../components/Board'
import Track from '../components/Track'
import room from '../api/db'
export default {
    components: { Board, Track },
    name : "Game",
    computed: {
    dice() {
      return this.$store.state.dice.result
    },
    players() {
      // return this.$store.state.players
      return this.$store.state.players
    }
  },
  watch: {
    dice(to, from) {
      // console.log(this.dice)
      // this.players[0].position += this.dice;
      this.$store.state.room.players.forEach( player => {
        if ( player.username == localStorage.getItem('username') ) {
          console.log( player.username , " <<<<<<<<< " )
          player.position += this.dice
          let myroom = this.$store.state.room
            room.doc( this.$store.state.room.id )
            .set(myroom)
            .then(_ => { console.log( " UPDATed")})
            .catch ( console.log )
          if ( player.position >= 29) {
            
            // this.$swal(`${player.username} is win!!!`);
            let myroom = this.$store.state.room
            myroom.isPlaying = false;
            room.doc( this.$store.state.room.id )
            .set(myroom)

            this.$router.push('/userRoom')

          }
        }
      })
      // this.players.forEach(player => {
      // })
    }
  },
  created () {
    let audio = new Audio( require('../assets/song.mp3') );
    audio.play()
    .then( _ => {
      console.log('Play song')
    })
    .catch( console.log )
  }
}
</script>

<style scoped>
  .game {
    background: #ffe000;
    height: 100vh;

  }
</style>