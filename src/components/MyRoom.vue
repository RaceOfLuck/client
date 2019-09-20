<template>
  <div>
    <div v-if="$store.state.room.isPlaying === true">
      <Game></Game>
    </div>
    <div v-else>
      <div class="lobby">
        <h1>GAME ROOM</h1>
        <!-- <pre>{{ this.$store.state.room.isPlaying }}</pre> -->
        <!-- <div>Room Name : {{ this.$store.state.room.name }} : OWNER {{ this.$store.state.room.admin }}</div>
        <div v-for="(player,index) in this.$store.state.room.players" :key="index" >
            <div v-if=" $store.state.username === $store.state.room.admin && player.username === $store.state.username"> Room Admin </div>
            <div>Player Username - {{ index }} : {{ player.username }}</div>
            <div>Player Position : {{ player.position }}</div><div v-if="player.position >= 29">WIN!</div>
            <div v-if=" $store.state.username === $store.state.room.admin && player.username === $store.state.username"> <button @click="startGame()">start Game</button></div>
        <br><br>-->
        
        <div>
          Room Name : {{ this.$store.state.room.name }}
          <br />
          OWNER {{ this.$store.state.room.admin }}
        </div>
        <div class="card" v-for="(player,index) in this.$store.state.room.players" :key="index">
            <div v-if="player.position > 10">
          <button @click.prevent="out">GO OUT</button>
        </div>
         <div v-if=" $store.state.username === $store.state.room.admin && player.username === $store.state.username">Room Admin</div>
          <div>Player Username {{ player.username }}</div>
          <div
            v-if=" $store.state.username === $store.state.room.admin && player.username === $store.state.username">
        <button @click="startGame()">start Game</button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "../api/db";
import Game from "../components/Game";
export default {
  name: "MyRoom",
  data: function() {
    return {};
  },
  components: {
    Game
  },
  methods: {
    startGame() {
      console.log(this.$store.state.room.id);
      console.log(this.$store.state.room.name);
      db.doc(this.$store.state.room.id)
        .update({ isPlaying: true })
        .then(_ => {
          console.log("PLAYING");
          this.$router.push("/game");
        })
        .catch(console.log);
    },
    roomOut() {
      this.$router.push("./room");
    },
    out () {
        localStorage.clear()
        this.$router.push('/');
    }
  }
};
</script>

<style scoped>
* {
  font-size: 20px;
}
.lobby {
  padding-top: 20px;
  background: #ffe000;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}

.card {
  margin-top: 20px;
  border: 1px solid black;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  font-size: 50px;
  font-family: "Courgette", cursive;
}
</style>
