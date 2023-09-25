
<script setup>
import Header from "@/views/includes/Header.vue";
const router = useRouter();
import {onMounted, ref} from "vue";

import {useRoute, useRouter} from "vue-router";
import {auth} from "@/compossables/auth";
const {base_url,storage_notes,authHeader}=auth()
const unit_id = ref('');
const route =  useRoute();
unit_id.value = route.query.name;

if(unit_id.value ===''){
  router.push('/all_units')
}

function goBack(){
  router.go(-1)
}
</script>
<template>

  <button @click="goBack" class="text-decoration-none btn btn-primary">
    <i style="color: yellow; font-size: 22px;" class="bi p-2 bi-house"></i> Go Back
  </button>

  <embed :src="storage_notes + unit_id" type="application/pdf" width="100%" height="600px" /></template>


<style scoped>

</style>