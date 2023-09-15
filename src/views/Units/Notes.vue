<template>
  <div class="row">
    <div class="col sidebar d-none d-md-block col-md-3 col-lg-3 ps-5 bg-dark">

      <h3 class="text-white">Database Design</h3>
      <div class="ul">
        <li class="list-unstyled text-uppercase text-white  ps-4">
          <router-link to="/unit" class="text-decoration-none "><i style="color:#398BF6;" class="bi p-2 bi-house"></i> Home</router-link>
        </li>
        <li class="list-unstyled text-uppercase text-white active ps-4">
          <router-link to="/unit/notes" class="text-decoration-none text-white"><i style="color:#398BF6;" class="bi p-2 bi-pencil"></i> Notes</router-link>
        </li>
        <li class="list-unstyled text-uppercase text-white ps-4">
          <router-link to="/unit/assignments" class="text-decoration-none text-white"><i style="color:#398BF6;" class="bi p-2 bi-list-stars"></i>Assignments</router-link>
        </li>
        <li class="list-unstyled text-uppercase text-white ps-4">
          <router-link to="/unit/relevant_videos" class="text-decoration-none text-white"><i style="color:#398BF6;" class="bi p-2 bi-file-play-fill"></i>Relevant Videos </router-link>

        </li>
        <li class="list-unstyled text-uppercase text-white ps-4 ps-4">
          <router-link to="/unit/relevant_links" class="text-decoration-none text-white"><i style="color:#398BF6;" class="bi p-2 bi-link"></i>Relevant links</router-link>

        </li>
      </div>
    </div>
    <div class="col col-md-8 col-lg-8">
      <H2>Notes</H2>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.sidebar{
  height: 100vh;
}
.active{
  background-color: #a8ed07;
  padding: 3px;
}
</style>