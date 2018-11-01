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
        imgUrl: 'https://shizu17.pw/assets/img/avatar.png'
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
    @media screen and (max-width: 770px) {
        max-height: 100px;
    }
    img{
        border: 6px solid #fff;
        border-radius: 100%;
        max-width: 148px;
        max-height: 148px;
        @media screen and (max-width: 770px) {
            width: 100px;
        }
    }
}
</style>
