
<script setup>
import {useRouter} from "vue-router";

const router = useRouter()

const token = localStorage.getItem('token')
const logout =async ()=>{
  localStorage.removeItem('token')
  localStorage.removeItem('status')
  await router.push('/login')
}
</script>

<template>
  <nav style="background-color: rgb(13, 250, 5)" class="navbar sticky-top navbar-expand-lg ">
    <div class="container-fluid">
      <a class="navbar-brand text-primary" href="/">BCS YEAR FOUR</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">

          <li class="nav-item">
            <router-link  class="nav-link text-primary" to="/all_units">Notes</router-link>
          </li>
          <li class="nav-item">
            <router-link  class="nav-link text-primary" to="/show_group">Forums</router-link>
          </li>
          <li class="nav-item">
            <router-link  class="nav-link text-primary" to="/dashboard">Dashboard</router-link>
          </li>
          <li class="nav-item" v-if="token"  @click="logout()">
            <a class="nav-link text-primary" href="/login">Logout</a>
          </li>
          <li class="nav-item" v-else>
            <a  class="nav-link text-primary" href="/login">Login/Register</a>
          </li>

        </ul>

      </div>

    </div>
  </nav>
</template>


<style scoped>
ul li{
  padding: 1px;
}
ul li a:hover{
  background: grey;
  color:white;
  text-transform: uppercase;
}
</style>