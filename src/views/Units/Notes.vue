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
  <div class="row">
    <div class="col sidebar d-none d-md-block col-md-3 col-lg-3 ps-5 bg-dark">

      <h3 class="text-white">Database Design</h3>
      <div class="ul">
        <li class="list-unstyled text-uppercase text-white  ps-4">
          <router-link :to="{ path: `/unit`, query: { name: 'databases' } }" class="text-decoration-none "><i style="color:#398BF6;" class="bi p-2 bi-house"></i> Home</router-link>
        </li>
        <li class="list-unstyled text-uppercase text-white active ps-4">
          <router-link :to="{ path: `/unit/notes`, query: { name: 'databases' } }" class="text-decoration-none text-white"><i style="color:#398BF6;" class="bi p-2 bi-pencil"></i> Notes</router-link>
        </li>
        <li class="list-unstyled text-uppercase text-white ps-4">
          <router-link :to="{ path: `/unit/assignments`, query: { name: 'databases' } }" class="text-decoration-none text-white"><i style="color:#398BF6;" class="bi p-2 bi-list-stars"></i>Assignments</router-link>
        </li>
        <li class="list-unstyled text-uppercase text-white ps-4">
          <router-link :to="{ path: `/unit/relevant_videos`, query: { name: 'databases' } }" class="text-decoration-none text-white"><i style="color:#398BF6;" class="bi p-2 bi-file-play-fill"></i>Relevant Videos </router-link>

        </li>
        <li class="list-unstyled text-uppercase text-white ps-4 ps-4">
          <router-link :to="{ path: `/unit/relevant_links`, query: { name: 'databases' } }" class="text-decoration-none text-white"><i style="color:#398BF6;" class="bi p-2 bi-link"></i>Relevant links</router-link>

        </li>
      </div>
    </div>
    <div class="col col-md-8 col-lg-8">
      <div class="card" style="width: 100%;  height: 100vh">
        <div class="card-header d-flex justify-content-between">
          <h3>Notes</h3>
          <button data-bs-target="#add_notes" data-bs-toggle="modal" class="btn btn-primary float-end"><i style="color:#398BF6;" class="bi p-2 bi-plus"></i>Add Notes</button>
        </div>
        <!-- Modal pop up start    for adding notes   -->
        <div class="modal fade" id="add_notes" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Create a Post</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form @submit.prevent="addNotes">
                <div class="modal-body">
                  <label for="">Title</label>
                  <input type="text" v-model="group_name" class="form-control">

                  <label for="">Notes Description</label>
                  <textarea name="" id="" v-model="notes_description"   class="form-control"></textarea>

                  <label for="">Title</label>
                  <input type="file" @change="fileUpload" class="form-control" placeholder="upload file">

                </div>
                <div class="d-flex justify-content-between mx-4 my-2">
                  <button type="reset" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                  <button type="submit" data-bs-dismiss="modal"  class="btn btn-primary">Create group</button>
                </div>

              </form>
            </div>
          </div>
        </div>
        <!-- Modal pop up end      -->

        <p>Database overview</p>
      </div>
    </div>
  </div>
</template>


<style scoped>
.sidebar{
  height: 100vh;
}
.active{
  background-color: #a8ed07;
  padding: 3px;
}
</style>