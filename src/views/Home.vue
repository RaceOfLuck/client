<template>
    <div class="home">
      <div v-for="room in  this.$store.state.rooms" :key="room.id">
        {{room }}
      </div >
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  created : function () {
    this.$store.dispatch('fetchRooms')
  }
}
</script>
