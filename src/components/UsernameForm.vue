<template>
  <div class="cover">
    <h3>Race Of Luck</h3>
    <div class="input">
      <form>
        <input type="text" placeholder="Input Your Name" v-model="username" />
        <button @click="homePage()">Let's go</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "UsernameForm",
  data: function() {
    return {
      username: ""
    };
  },
  methods: {
    homePage() {
      this.$store.commit("setUsername", this.username);
      localStorage.setItem("username", this.username);
      this.$router.push("/createroom").catch(_ => {});
    }
  }
};
</script>

<style scoped>
* {
  font-size: 20px;
}

form button {
  width: 200px;
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

h3 {
  font-size: 50px;
  font-family: "Courgette", cursive;
}

.input {
  height: 30%;
  width: 50%;
}

form {
  display: flex;
  justify-content: space-between;
}

input {
  outline: none;
  width: 100%;
  background-color: transparent;
  border: 3px solid black;
  padding: 5px;
}

input[type="submit"] {
  width: 100px;
  height: 40px;
}
input:focus {
  border: 3px solid red;
}
</style>
