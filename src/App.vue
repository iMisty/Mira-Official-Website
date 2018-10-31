<template>
  <div id="app">
    <wrap/>
  </div>
</template>

<script>
import wrap from './components/wrap'

export default {
  name: 'app',
  components: {
    wrap
  }
}
</script>

<style lang="less">
#app {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,.28);
  height: 100vh;
}
</style>
