<template>
  <div>
    <Header/>
    <router-view></router-view>
    <Footer v-show="isShow" />
  </div>
</template>

<script>
import Header from "./components/Header/index.vue";
import Footer from "./components/Footer/index.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  computed:{
    isShow(){
      return this.$route.meta.isShow
    }
  },
  mounted(){
    this.$store.dispatch("getCategoryList");
  }
};
</script>

<style lang="less">

</style>
