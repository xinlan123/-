<template>
  <div>
    <TypeNav />
    <ListContainer />
    <TodayRecommend />
    <Rank />
    <Like />
    <Floor v-for="floor in floorList" :key="floor.id" :floor="floor"/>
    <Brand />
  </div>
</template>

<script>
import {mapState} from "vuex"
import ListContainer from "./ListContainer"
import TodayRecommend from "./TodayRecommend"
import Rank from "./Rank"
import Like from "./Like"
import Floor from "./Floor"
import Brand from "./Brand"
export default {
    name:'Home',
    components:{
      ListContainer,
      TodayRecommend,
      Rank,
      Like,
      Floor,
      Brand
    },
    computed:{
      ...mapState({
        floorList:(state) => {
          return state.home.floorList
        }
      }),
    },
    mounted(){
      this.$store.dispatch('getFloorList')
    }
}
</script>

<style>

</style>