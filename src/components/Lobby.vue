<template>
  <div class="lobby">
    <h1>Lobby Room</h1>
    <button style="width : 100px" @click="changePage()">START</button>
    <div class="box-card">
      <div class="card" v-for="(player, index) in players" :key="index">
        <p class="">{{ player.name }}</p>
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
	}
},
	methods: {
		changePage() {
			this.$router.push('/game')	
		}
	}
};
</script>

<style scoped>
.lobby {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card {
  width: 250px;
  height: 50px;
  margin: 10px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>