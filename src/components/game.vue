<template>
    <div>
        <header class="title">
            <h2>{{ title }}</h2>
        </header>
        <ul>
            <li v-for="item of list" :key="item.index">
                <span class="text">{{ item.name }}</span>
                <span> / </span>
                <span class="date">{{ item.value }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
        title: 'Game',
        list: [
            {
                name: 'Lovelive(JP)',
                value: '356 427 103'
            },{
                name: '奇迹暖暖(JP)',
                value: '100 680 952'
            },{
                name: 'ゴシックは魔法乙女',
                value: '98p3s2'
            },{
                name: 'バンドリ!(JP)',
                value: '912 16 956'
            },{
                name: 'OSU',
                value: 'Kannaduki En'
            }
        ]
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
    padding: 0;
    header{
        margin-top: 2.4rem;
    }
    ul{
        padding-left: 0;
        li{
            padding: .6rem 0;
        }
    }
}
</style>
