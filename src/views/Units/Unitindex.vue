<script setup>
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import axios from "axios";
import Swal from "sweetalert2";
import {auth} from "@/compossables/auth";
const router = useRouter();

const {base_url,authHeader}=auth()

const unit_id = ref('');
const date = ref('');
const event = ref('');
const events = ref([]);

const showEvent = async () =>{
  const res = await axios.get(base_url.value+'event/show',authHeader)
  events.value =res.data.events
}

const addEvent = async () => {
  const formData = new FormData()
  formData.append('date', date.value)
  formData.append('event', event.value)
  formData.append('unit_id', unit_id.value)
  const response = await axios.post(base_url.value+'event/add', formData,authHeader);
  if (response.status === 200) {

    await  Swal.fire(
        'Success!',
        'Event added successfully',
        'success'
    )
    await showEvent()
  }
}

onMounted(() => {
  showEvent()
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
        <li class="list-unstyled text-uppercase text-white active ps-4">
          <router-link :to="{ path: `/unit`, query: { name: 'databases' } }" class="text-decoration-none "><i style="color:#398BF6;" class="bi p-2 bi-house"></i> Home</router-link>
        </li>
        <li class="list-unstyled text-uppercase text-white ps-4">
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
<!--      {{events}}-->
      <div class="card-header d-flex justify-content-between">
        <h3>Events</h3>
        <button data-bs-target="#add_event" data-bs-toggle="modal" class="btn btn-primary float-end"><i style="color:#398BF6;" class="bi p-2 bi-plus"></i>Add Event</button>
      </div>
      <!-- Modal pop up start    for adding event   -->
      <div class="modal fade" id="add_event" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Upload notes</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form @submit.prevent="addEvent">
              <div class="modal-body">
                <label for="">Event</label>
                <input type="text" v-model="event" class="form-control">

                <label for="">Date</label>
                <input type="date" v-model="date" class="form-control">

              </div>
              <div class="d-flex justify-content-between mx-4 my-2">
                <button type="reset" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" data-bs-dismiss="modal"  class="btn btn-primary">Add notes</button>
              </div>

            </form>
          </div>
        </div>
      </div>
      <!-- Modal pop up end      -->
      <div style="width: 22rem;" class="card">
      <div class="card-header">
        Events in {{unit_id}}
      </div>
    <div class="" v-for="single_event in events" :key="single_event">
      <div class="card-body">
        <h5 class="card-title">{{ single_event.event }}</h5>
        <p class="card-text">
          Date:{{ single_event.date }}
        </p>
        <router-link to="all-events" class="btn btn-primary">View All Events</router-link>
      </div>
    </div>
    </div>
      <h2></h2>
    </div>
  </div>
</template>


<style scoped>
.sidebar{
  height: 92vh;
}
.active{
  background-color: #a8ed07;
  padding: 3px;
}
</style>