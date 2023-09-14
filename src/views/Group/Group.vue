
<script setup>
import Header from "@/views/includes/Header.vue";
import Footer from "@/views/includes/Footer.vue";
import {group} from "@/compossables/group";
import {onMounted} from "vue";
const {create_group,group_name,group_description,group_category,showGroup,groups} = group()
onMounted(() => {
  showGroup()
})
</script>

<template>
<Header />

      <router-link v-for="group in groups" :key="group" :to="{ path: `/show_group/posts`, query: { name: group.group_id } }" class="text-decoration-none btn btn-primary m-1 text-uppercase">
        {{ group.group_name }}
      </router-link>

  <Footer />
</template>

<style scoped>

</style>