<template>
  <div class="cover">
    <div class="formModal">
      <h2>Create New Room</h2>
      <form>
        <input type="text" placeholder="input room name" v-model="newRoomName" />
      </form>
      <a href="#" @click="createRoom()" style="color:black">CREATE</a>
    </div>
    <div class="box-product">
      <RoomCard :room="room" v-for="room in this.$store.state.rooms" :key="room.id"></RoomCard>
    </div>
  </div>
</template>

<script>
import room from "../api/db";
import RoomCard from "../components/RoomCard";
export default {
  name: "CreateRoom",
  data: function() {
    return {
      newRoomName: "",
      roomName: ""
    };
  },
  methods: {
    createRoom() {
      room
        .add({
          name: this.newRoomName,
          players: [],
          admin: localStorage.getItem("username"),
          created: new Date(),
          isPlaying: false
        })
        .then(doc => {
          console.log(doc.id);
          localStorage.setItem("isAdmin", true);
          this.newRoomName = "";
        })
        .catch(console.log);
    }
  },
  components: {
    RoomCard
  }
};
</script>

<style scoped>
* {
  font-size: 20px;
}

.formModal {
  width: 300px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.cover {
  background: #ffe000;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

form {
  display: flex;
  justify-content: space-between;
}

input {
  outline: none;
  width: 80%;
  background-color: transparent;
  border: 1px solid black;
  padding: 5px;
  margin: auto;
}

input:focus {
  border: 3px solid red;
}

.box-product {
  display: grid;
  grid-template-columns: auto auto auto auto;
  padding-left: 50px;
  grid-gap: 20px;
}
</style>
