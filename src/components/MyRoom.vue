<template>
  <div>
      <div v-if="this.$store.state.room.isPlaying">
        <Game></Game>
      </div>
      <div v-else>
        <h1>GAME ROOM</h1>
        <!-- <pre>{{ this.$store.state.room.isPlaying }}</pre> -->
        <div>Room Name : {{ this.$store.state.room.name }} : OWNER {{ this.$store.state.room.admin }}</div>
        <div v-for="(player,index) in this.$store.state.room.players" :key="index" >
            <div v-if=" $store.state.username === $store.state.room.admin && player.username === $store.state.username"> Room Admin </div>
            <div>Player Username - {{ index }} : {{ player.username }}</div>
            <div>Player Position : {{ player.position }}</div><div v-if="player.position > 10">WIN!</div>
            <div v-if=" $store.state.username === $store.state.room.admin && player.username === $store.state.username"> <button @click="startGame()">start Game</button></div>
            <br><br>
        </div>
      </div>
      
  </div>
</template>

<script>
import db from '../api/db'
import Game from '../components/Game'
export default {
    name: 'MyRoom',
    data: function () {
        return {

        }
    },
    components: {
        Game
    },
    methods: {
        startGame(){
            console.log(this.$store.state.room.id )
            console.log(this.$store.state.room.name )
            db.doc(this.$store.state.room.id).update({ isPlaying : true })
            .then ( _ => {
                console.log("PLAYING")
                this.$router.push('/game')
            })
            .catch( conosle.log )
        }
    },
}
</script>

<style>

</style>
