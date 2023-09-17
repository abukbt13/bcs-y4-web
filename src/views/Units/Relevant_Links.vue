<script setup>
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
const router = useRouter();
const unit_id = ref('');
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
  <div className="row">
    <div className="col sidebar d-none d-md-block col-md-3 col-lg-3 ps-5 bg-dark">

      <h3 className="text-white">Database Design</h3>
      <div className="ul">
        <li class="list-unstyled text-uppercase text-white  ps-4">
          <router-link :to="{ path: `/unit`, query: { name: 'databases' } }" class="text-decoration-none "><i style="color:#398BF6;" class="bi p-2 bi-house"></i> Home</router-link>
        </li>
        <li class="list-unstyled text-uppercase text-white ps-4">
          <router-link :to="{ path: `/unit/notes`, query: { name: 'databases' } }" class="text-decoration-none text-white"><i style="color:#398BF6;" class="bi p-2 bi-pencil"></i> Notes</router-link>
        </li>
        <li class="list-unstyled text-uppercase text-white ps-4">
          <router-link :to="{ path: `/unit/assignments`, query: { name: 'databases' } }" class="text-decoration-none text-white"><i style="color:#398BF6;" class="bi p-2 bi-list-stars"></i>Assignments</router-link>
        </li>
        <li class="list-unstyled text-uppercase text-white  ps-4">
          <router-link :to="{ path: `/unit/relevant_videos`, query: { name: 'databases' } }" class="text-decoration-none text-white"><i style="color:#398BF6;" class="bi p-2 bi-file-play-fill"></i>Relevant Videos </router-link>

        </li>
        <li class="list-unstyled text-uppercase text-white active ps-4 ps-4">
          <router-link :to="{ path: `/unit/relevant_links`, query: { name: 'databases' } }" class="text-decoration-none text-white"><i style="color:#398BF6;" class="bi p-2 bi-link"></i>Relevant links</router-link>

        </li>
      </div>
    </div>
    <div className="col col-md-8 col-lg-8">
      <H2>Relevant links</H2>

    </div>
    <h2></h2>
  </div>
</template>

<style scoped>
.sidebar {
  height: 100vh;
}

.active {
  background-color: #a8ed07;
  padding: 3px;
}
</style>