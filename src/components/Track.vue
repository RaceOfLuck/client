<template>
  <div class="card d-flex flex-row justify-content-start align-items-center mt-2 mb-2" :style="{width: '100%', height: '40px', backgroundColor: player.trackColor}">
    <Pos v-for="n in 30" :key="n" :posColor="player.posColor">
        <span v-if="n == player.position + 1">{{ player.icon }}</span>
    </Pos>
  </div>
</template>

<script>
import Pos from './Pos'
export default {
    props: ['player'],
    components: { Pos },
    data() {
        return {
            
        }
    }, 
    methods: {
       
    }
}
</script>

<style scoped>
   
</style>