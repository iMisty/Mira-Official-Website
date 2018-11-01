<template>
<div>
    <header>
      <h2>{{title}}</h2>
    </header>
    <section class="items">
      <items/>
      <items/>
      <items/>
      <items/>
      <items/>
      <items/>
    </section>
</div>
</template>

<script>
import items from './items'
export default {
  components: {
    items
  },
  props: {},
  data () {
    return {
      title: 'Yukaric Fes'
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
div{
    display: flex;
    flex-direction: column;
    text-align: center;
    flex: 1;
    header{
      margin-top: 2.4rem;
    }
    .items{
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      align-content: center;
      justify-content: center;
      margin-top: 1.6rem;
      padding-bottom: 1.2rem;
    }
}
</style>
