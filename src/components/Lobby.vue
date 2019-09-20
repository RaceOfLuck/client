<template>
  <div class="lobby">
    <div class="text">
      <a href="#" @click.prevent="roomOut" class="logout">
        <i class="fas fa-sign-out-alt fa-2x"></i>
      </a>
      <h1>Lobby Room</h1>
      <h4>Username Join Room</h4>
    </div>
    <h4>ROOM ID</h4>
    <a href="#" @click.prevent="changePage()">
      <i class="fas fa-sign-in-alt fa-2x"></i>
    </a>
    <div class="box-card">
      <div class="card" v-for="(player, index) in players" :key="index">
        <p>{{ player.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      players: [
        { name: "ghozi" },
        { name: "Faras" },
        { name: "Guntoro" },
        { name: "Ricardo" }
      ]
    };
  },
  methods: {
    changePage() {
      this.$router.push("/game");
    },
    roomOut() {
      this.$router.push("./room");
    }
  }
};
</script>

<style scoped>
.text {
  display: flex;
  justify-content: space-between;
  width: 90%;
  align-items: center;
}
.lobby {
  padding-top: 20px;
  background: #ffe000;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}

.logout {
  transform: rotate(180deg);
}

h1 {
  justify-self: center;
  font-family: "Courgette", cursive;
  margin-left: 100px;
}
a {
  color: black;
}

.card {
  width: 250px;
  height: 50px;
  margin: 10px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
}

p {
  margin-bottom: 0;
  font-size: 30px;
}
</style>