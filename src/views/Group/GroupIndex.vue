
<script setup>
import Header from "@/views/includes/Header.vue";

</script>
<template>
  <Header />
<div class="row">
  <div class="col col-2 bg-light">

    <!--Start of offcanvas-->
    <i style="font-size: 40px;color: #2818db;" class="bi bi-list d-flex flex-column d-none d-lg-block" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
      <span style="font-size: 13px;">Menu</span>
    </i>

    <div class="offcanvas offcanvas-start d-lg-show" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title text-decoration-underline" id="offcanvasExampleLabel">Groups</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div class="offcanvas-body sidebar">
          <li class="list-unstyled text-uppercase p-2 my-1 border">Web Development</li>
          <li class="list-unstyled text-uppercase p-2 my-1 border">Artificial Intelligence</li>
          <li class="list-unstyled text-uppercase p-2 my-1 border">Machine Learning</li>
        </div>
      </div>
    </div>

    <!--End of offcanvas-->

  </div>
<!--  start of tabs/links-->
  <div class="col col-10 bg-light">
    <ul class="nav nav-pills  nav-fill">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Posts</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Events</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Discussions</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Links</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Videos</a>
      </li>

    </ul>
  </div>
  <!--  End of tabs/links-->
</div>
  <div class="post">
    <div class="exact-post">
      <p>
        Feeling Excited about my coding it is running well
      </p>
      <img src="/student.jpeg" class="img-fluid" alt=""><br>
      <div style="background: #d3d3db;width: 100%;" class="feed row">
       <div class="col d-flex justify-content-center align-items-center">
         <i style="font-size:28px;color:#8f13e8;" class="bi p-2 bi-hand-thumbs-up-fill "></i><span class="">Like</span>
       </div>
      <div class="col d-flex justify-content-center border-start align-items-center">
        <i style="font-size:28px;color:#8f13e8;" class="bi p-2 bi-hand-thumbs-up-fill "></i><span class="">Like</span>
      </div>
      </div>

    </div>
  </div>
</template>


<style scoped>
li{
  text-transform: uppercase;
}
li:hover{
  background: #1515cf;
  color: yellow;
}
</style>