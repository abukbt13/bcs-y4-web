<template>
<Header />

  <div class="groups">

      <router-link :to="{ path: '/show_group/posts', query: { name: 'android' } }" class="btn btn-primary m-2">Android Developers</router-link>

<!--    <router-link to="group" class="btn btn-primary m-2">Mysql Databases</router-link>-->
<!--    <router-link to="group" class="btn btn-primary m-2">Java Developers</router-link>-->
<!--    <router-link to="group" class="btn btn-primary m-2">Laravel </router-link>-->
<!--    <router-link to="group" class="btn btn-primary m-2">Laravel </router-link>-->
<!--    <router-link to="group" class="btn btn-primary m-2">Laravel Developers</router-link>-->
<!--    <router-link to="group" class="btn btn-primary m-2">Laravel</router-link>-->
<!--    <router-link to="group" class="btn btn-primary m-2">Laravel Developers</router-link>-->
<!--    <router-link to="group" class="btn btn-primary m-2">Laravel Developers</router-link>-->
<!--    <router-link to="group" class="btn btn-primary m-2">Laravel Developers</router-link>-->
  </div>
  <Footer />
</template>

<script>
import Header from "@/views/includes/Header.vue";
import Footer from "@/views/includes/Footer.vue";
export default {
  name: "Group",
  components: {Footer, Header}
}
</script>

<style scoped>

</style>