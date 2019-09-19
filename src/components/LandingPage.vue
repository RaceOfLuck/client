<template>
  <div class="cover">
    <div class="input">
      <form>
        <input type="text" placeholder="Input Your Name" />
        <router-link to="/lobby">
          <input type="submit" value="MASUK" />
        </router-link>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.cover {
  background-color: white;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.input {
  height: 50px;
  width: 450px;
}

form {
  display: flex;
  justify-content: space-between;
}
input {
  width: 300px;
  height: 40px;
  background-color: transparent;
  border: 3px solid black;
  padding: 5px;
}
input[type="submit"] {
  width: 100px;
  height: 40px;
}
</style>