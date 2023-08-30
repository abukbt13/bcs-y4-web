
<script setup>

</script>
<template>
  <div class="row my-2">

    <div class="col links">
      <h3 class="text-dark">Quick Liks</h3>
      <ul class="list-unstyled">
        <li class="py-2"><router-link class="text-decoration-none" to="login">Login</router-link></li>
        <li class="py-2"><router-link  class="text-decoration-none" to="profile">Profile</router-link></li>
        <li class="py-2"><router-link  class="text-decoration-none" to="profile">Groups</router-link></li>
        <li class="py-2"><router-link  class="text-decoration-none" to="profile">Courses</router-link></li>
        <li class="py-2"><router-link  class="text-decoration-none" to="dashboard">Dashboard</router-link></li>
      </ul>
    </div>
    <div class="col">
      <h3 class="text-primary">Contact Admin</h3>
      <p class="p-2">Email : finetectsolutions@gmail.com</p>
      <p class="p-2">Phone 1 : 0728548760</p>
      <p class="p-2">We are located currently in Meru University but we are highly mobile as the technology</p>

    </div>
  </div>
  <hr>
  <div class="mb-3 pb-4 d-flex align-items-center justify-content-center">Designed and developed by <span class="ms-2 text-primary">Finetech Solutions   Email <b class="me-2">abukbt13@gmail.com</b></span> phone: <span class="text-primary">0728548760</span></div>
</template>


<style scoped>
.links ul li:hover{
  background: blue;
  color: pink;
}
.links ul li{
  padding-left: 2rem;
}
</style>
