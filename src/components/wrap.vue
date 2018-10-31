<template>
<div class="main">
    <section class="left">
      <logo/>
      <div class="list">
        <router-link to="/home">Home</router-link>
        <router-link to="/archive">Archives</router-link>
        <router-link to="/game">Game</router-link>
        <router-link to="/about">About</router-link>
      </div>
    </section>
    <section class="right">
      <router-view></router-view>
    </section>
</div>
</template>

<script>
import logo from './logo'
export default {
  components: {
      logo
  },
  props: {},
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () {},
  mounted () {}
}
</script>
<style lang="less" scoped>
.main{
    display: flex;
    flex-direction: row;
    width: 48em;
    height: 32em;
    .left{
        display: flex;
        flex-direction: column;
        text-align: center;
        padding: 1.2rem;
        width: 24%;
        background-color: rgba(66,200,244,.6);
        .list{
            display: flex;
            flex-direction: column;
        }
    }
    .right{
        flex-direction: column;
        flex: 1;
        text-align: center;
        background-color: rgba(248,248,248,.68);
    }
}
</style>
