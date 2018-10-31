<template>
    <div>
        <img :src="imgUrl" alt="avatar">
    </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
        imgUrl: '/static/avatar.png'
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
    margin-bottom: 1.2rem;
    border-radius: 100%;
    img{
        border: 6px solid #fff;
        border-radius: 100%;
        max-width: 148px;
        max-height: 148px;
    }
}
</style>
