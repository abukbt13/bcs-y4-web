
<script setup>
import Header from "@/views/includes/Header.vue";
const router = useRouter();
const unit_id = ref('');
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
onMounted(() => {
  if (!router.currentRoute.value.query.name) {
    // Redirect to a specific route when the "name" query parameter is missing
    router.push('/all_units') // Replace with the actual route name
  } else {
    // Set groupName to the "name" query parameter value
    unit_id.value = router.currentRoute.value.query.name
  }})
</script>
<template>
<router-link class="btn btn-success m-3">Go back</router-link>

  <embed :src="'http://127.0.0.1:8000/notes/' + unit_id" type="application/pdf" width="100%" height="600px" /></template>


<style scoped>

</style>