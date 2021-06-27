/*
 * @Author: Miya
 * @Date: 2021-06-28 00:48:43
 * @LastEditTime: 2021-06-28 00:48:56
 * @LastEditors: Miya
 * @Description: Home Page
 * @FilePath: \Single-Search-Backend\src\page\Home.tsx
 */
import {defineComponent,reactive} from 'vue'
const data = reactive({})

const Home = defineComponent({
  setup(props,ctx){
    return { data }
},
  render(){
return(<div class="home">11</div>)
}
})
export default Home