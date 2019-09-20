<template>
  <div id="app">
    <!-- <div class="container"> -->
    <router-view />
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("fetchAllRoom");
    if (!localStorage.getItem("username")) {
      this.$router.push("/").catch(_ => {});
    } else {
      this.$router.push("/createRoom").catch(_ => {});
      this.$store.commit("setUsername", localStorage.getItem("username"));
    }
  }
};
</script>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
