<template>
    <div class="home">
      <LandingPage> </LandingPage>
    </div>
</template>

<script>
import LandingPage from '../components/LandingPage'
export default {
  name: 'home',
  components: {
    LandingPage
  },
  created : function () {
    // let audio = new Audio('../assets/sign.mp3');
    // audio.play()
    // .then( _ => { 

    //   console.log( "ASDSA")
    // })
    // .catch( console.log )
    this.$store.dispatch('fetchRooms')
  }
}
</script>
