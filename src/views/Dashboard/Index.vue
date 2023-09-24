
<script setup>
import {onMounted} from "vue";

import {auth} from "@/compossables/auth";
const {authUser} =auth()
import Header from "@/views/includes/Header.vue";
import Footer from "@/views/includes/Footer.vue";
const status=localStorage.getItem('status')
const logOut =()=>{
  localStorage.removeItem('token')
  localStorage.removeItem('status')
}
const Cancel =()=>{
  localStorage.removeItem('status')
  window.location.reload();
}
onMounted(()=>{
  authUser()
})
</script>

<template>
<Header />
  <div class="status" v-if="status">
      <h2 class="p-2 text-warning">You are logged in do you wish to log out or login with your account ?</h2>
     <div class="">
       <div class="float-end me-4">
         <button @click="logOut()" class="btn btn-danger">Logout </button>
         <button @click="Cancel()" class="btn btn-primary">Cancel </button></div>
     </div>
  </div>
  <router-view></router-view>
  <Footer />
</template>


<style scoped>
.status{
  width: 23rem;
  background: grey;
  height: 12rem;
  position: absolute;
  left: 23vw;
  top: 29vh;
  border: solid 1px seagreen;
}
</style>