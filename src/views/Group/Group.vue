
<script setup>
import Header from "@/views/includes/Header.vue";
import Footer from "@/views/includes/Footer.vue";
import {onMounted, ref} from "vue";

import {auth} from "@/compossables/auth";
const {base_url,storage_notes,authHeader}=auth()
import axios from "axios";
const groups = ref([])

const showGroup = async () =>{
  const res = await axios.get(base_url.value+'group/show')
  groups.value =res.data.group
}
onMounted(() => {
  showGroup()
})
</script>

<template>
<Header />
{{groups}}
      <router-link v-for="group in groups" :key="group" :to="{ path: `/show_group/posts`, query: { name: group.group_id } }" class="text-decoration-none btn btn-primary m-1 text-uppercase">
        {{ group.group_name }}
      </router-link>

  <Footer />
</template>

<style scoped>

</style>