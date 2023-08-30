
<script setup>

</script>

<template>
  <nav style="background-color: rgb(13, 250, 5)" class="navbar navbar-expand-lg ">
    <div class="container-fluid sticky-top">
      <a class="navbar-brand text-primary" href="/">BCS YEAR FOUR</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">

          <li class="nav-item">
            <a  class="nav-link text-primary" href="/dashboard">Dashboard</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-primary" href="/login">Login</a>
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