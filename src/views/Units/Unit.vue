<template>
  <Header />
  <router-view></router-view>

</template>

<script>
import Header from "@/views/includes/Header.vue";
export default {
  name: "Unit",
  components: {Header}
}
</script>

<style scoped>

</style>