<template>
  <div>
      <input type="text" v-model="username" required>
      <button @click="homePage()">Let's go</button>
  </div>
</template>

<script>
export default {
    name: 'UsernameForm',
    data: function () {
        return {
            username: ''
        }
    },
    methods: {
        homePage () {
            this.$store.commit('setUsername', this.username )
            localStorage.setItem('username' , this.username );
            this.$router.push('/createroom').catch(_ => {})
        }
    }
}
</script>

<style>

</style>
