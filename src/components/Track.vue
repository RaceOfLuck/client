<template>
  <div class="card d-flex flex-row align-items-center" style="width: 100%; height: 40px;">
     <Pos></Pos>
     <Pos></Pos>
     <Pos></Pos>
     <Pos></Pos>
     <Pos></Pos>
  </div>
</template>

<script>
import Pos from './Pos'
export default {
    components: { Pos },
    data() {
        return {
            maxPosition: 30,
            position: 1,
            dice: 1
        }
    }, 
    methods: {
        advanced() {
            this.position += this.dice
        },
        backOff(){
            this.position -= this.dice
        }
    }
}
</script>

<style>
    /* .container {
        box-sizing: border-box;
    }
    .row {
        display: flex;
    }
    .column {
        width: 50px;
        border: 1px solid black;
        height: 40px;
    } */
</style>