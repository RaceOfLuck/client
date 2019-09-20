<template>
  <div class="cover">
    <div class="formModal">
      <h2>Create New Room</h2>
      <form>
        <input type="text" placeholder="input room name" v-model="roomId" />
      </form>
      <a href="#" @click.prevent="newRoom" style="color:black; margin-left:10px">CREATE</a>
    </div>
    <div class="box-product">
      <div class="room" v-for="(room, index) in rooms" :key="index">
        <div class="head">
          <h4 class="name-room">NAMA ROOM</h4>
          <h4>ID ROOM</h4>
        </div>
        <div class="body">
          <h5>Member : {{rooms.length}}</h5>
          <h5>Status : Playing</h5>
        </div>
        <h4>
          <router-link to="/lobby" style="color:#6a6a6a; margin-top:5px">JOIN</router-link>
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      roomId: "",
      showForm: true,
      rooms: [1, 2, 3, 4, 5, 6]
    };
  },
  methods: {
    newRoom() {
      // setelah add
      // this.username = ""
    },
    showModal() {
      this.showForm = true;
    }
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

input[type="submit"] {
  width: 100px;
  height: 40px;
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

.head {
  width: 100%;
}

.name-room {
  width: 100%;
  background-color: black;
  color: white;
}

.form {
  display: flex;
  flex-direction: column;
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

h4,
h5 {
  margin-bottom: 0;
  line-height: 1;
}
</style>