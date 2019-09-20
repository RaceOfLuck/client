<template>
  <div class="room">
    <div class="head">
      <h4>{{room.name}}</h4>
    </div>
    <div class="body">
      <h5>Member : {{room.players.length}}</h5>
      <div v-if="room.isPlaying">
        <h5>Status : Playing</h5>
      </div>
      <div v-else>
        <h5>Status : Waiting</h5>
      </div>
    </div>
    <div v-if="!room.isPlaying">
      <button @click.prevent="joinRoom(`${ room.id }`)">Join room</button>
    </div>
    <div v-if="room.isPlaying">
      <button disabled>Join room</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "RoomCard",
  data: function() {
    return {};
  },
  props: ["room"],
  methods: {
    joinRoom(roomId) {
      this.$store.dispatch("joinRoom", roomId);
      console.log(" ROOM JO IN DONGGGGG");
      // this.$store.dispatch('fetchRoom')
      this.$router.push("/userRoom").catch(_ => {});
    }
  }
};
</script>

<style scoped>
* {
  font-size: 20px;
}

.head {
  background-color: black;
  width: 100%;
  display: flex;
  justify-content: center;
}

h4 {
  color: white;
}
h5 {
  margin-bottom: 0;
  line-height: 1;
}

.room {
  background-color: #fff;
  width: 200px;
  height: 150px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
}
</style>
