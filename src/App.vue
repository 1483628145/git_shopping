<template>
  <div>
    <Header></Header>
    <!-- 路由出口 -->
    <router-view></router-view>
    <!-- 通过判断path来决定是否展示Footer -->
    <!-- <Footer v-show="this.$route.path == '/home' || this.$route.path == '/search'"></Footer> -->
    <Footer v-show="this.$route.meta.showFooter"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style></style>