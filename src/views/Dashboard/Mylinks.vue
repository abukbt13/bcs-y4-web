<template>

  <div class="d-flex bg-light align-items-center">
    <div class="">
      <img style="border-radius: 50%;" src="/student.jpeg"  width="200" height="200" alt="">
    </div>
    <ul class="nav nav-tabs ms-4">
      <li class="nav-item">
        <router-link class="nav-link" aria-current="page" to="/dashboard/">Profile</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" aria-current="page" to="/dashboard/group">My Groups</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" aria-current="page" to="/dashboard/videos">My Videos</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link active" aria-current="page" to="/dashboard/links">My Links</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" aria-current="page" to="/dashboard/discussion">My Discussion</router-link>
      </li>


    </ul>
  </div>
  <p>My Links here</p>
</template>

<script>
export default {
  name: "Groups"
}
</script>

<style scoped>

</style>