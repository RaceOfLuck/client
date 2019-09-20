<template>
  <div class="card m-1" :style="{width: '2em', height: '30px', backgroundColor: posColor}">
    <slot></slot>
  </div>
</template>

<script>

export default {
  props: ['posColor', 'icon']
}
</script>

<style>

</style>