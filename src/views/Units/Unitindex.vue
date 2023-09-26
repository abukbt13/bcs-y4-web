<script setup>
import {onMounted, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import axios from "axios";
import Swal from "sweetalert2";
import {auth} from "@/compossables/auth";
const router = useRouter();
const route = useRoute()

const {base_url,authHeader}=auth()

const unit_id = ref('');
unit_id.value = route.query.name;

if(unit_id.value ===''){
  router.push('/all_units')
}
const date = ref('');
const event = ref('');
const description = ref('');
const events = ref([]);
const unit_details = ref([]);

const showEvent = async () =>{
  const res = await axios.get(`${base_url.value}event/show/${unit_id.value}`);
  events.value =res.data.events
}
const showDetails = async () => {
  const res = await axios.get(`${base_url.value}unit/details/${unit_id.value}`);
  unit_details.value = res.data.details[0];
};

const addEvent = async () => {
  const formData = new FormData()
  formData.append('date', date.value)
  formData.append('event', event.value)
  formData.append('description', description.value)
  formData.append('unit_code', unit_id.value)
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
  showDetails()
})


</script>

<template>
  <div class="row">
    <div class="col sidebar d-none d-md-block col-md-3 col-lg-3 ps-5 bg-dark">
      <router-link to="/all_units" class="btn btn-success">View All Units</router-link>

      <h3 class="text-white">{{ unit_details.unit_name  }}</h3>
      <div class="ul">
        <li class="list-unstyled text-uppercase text-white active ps-4">
          <router-link :to="{ path: `/unit`, query: { name: unit_id } }" class="text-decoration-none "><i style="color:#398BF6;" class="bi p-2 bi-house"></i> Home</router-link>
        </li>
        <li class="list-unstyled text-uppercase text-white ps-4">
          <router-link :to="{ path: `/unit/notes`, query: { name: unit_id } }" class="text-decoration-none text-white"><i style="color:#398BF6;" class="bi p-2 bi-pencil"></i> Notes</router-link>
        </li>
        <li class="list-unstyled text-uppercase text-white ps-4">
          <router-link :to="{ path: `/unit/relevant_videos`, query: { name: unit_id } }" class="text-decoration-none text-white"><i style="color:#398BF6;" class="bi p-2 bi-file-play-fill"></i>Relevant Videos </router-link>

        </li>
        <li class="list-unstyled text-uppercase text-white ps-4 ps-4">
          <router-link :to="{ path: `/unit/relevant_links`, query: { name: unit_id } }" class="text-decoration-none text-white"><i style="color:#398BF6;" class="bi p-2 bi-link"></i>Relevant links</router-link>

        </li>
      </div>
    </div>
    <div class="col col-md-8 col-lg-8">
<!--      {{unit_details}}-->
      <div class="card-header d-flex justify-content-between">

<!--      Modal button-->
        <div style="color:#8f13e8; width: 4rem; background: bisque;" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" class="d-block d-md-none d-lg-none d-flex flex-column align-items-center">
          <span>Menu</span><br>
          <i style="font-size:30px;" class="bi  p-2 bi-list " ></i>
        </div>
        <!--      Modal button end -->

        <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasScrollingLabel">{{ unit_details.unit_name  }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div style="background-color: #398BF6" class="offcanvas-body ">
            <router-link to="/all_units" class="btn btn-success">View All Units</router-link>

            <div class="ul">
              <li class="list-unstyled text-uppercase text-white active ps-4">
                <router-link :to="{ path: `/unit`, query: { name: unit_id } }" class="text-decoration-none "><i style="color:white;" class="bi p-2 bi-house"></i> Home</router-link>
              </li>
              <li class="list-unstyled text-uppercase text-white ps-4">
                <router-link :to="{ path: `/unit/notes`, query: { name: unit_id } }" class="text-decoration-none text-white"><i style="color:white;" class="bi p-2 bi-pencil"></i> Notes</router-link>
              </li>
              <li class="list-unstyled text-uppercase text-white ps-4">
                <router-link :to="{ path: `/unit/relevant_videos`, query: { name: unit_id } }" class="text-decoration-none text-white"><i style="color:white;" class="bi p-2 bi-file-play-fill"></i>Relevant Videos </router-link>

              </li>
              <li class="list-unstyled text-uppercase text-white ps-4 ps-4">
                <router-link :to="{ path: `/unit/relevant_links`, query: { name: unit_id } }" class="text-decoration-none text-white"><i style="color:white;" class="bi p-2 bi-link"></i>Relevant links</router-link>

              </li>
            </div>          </div>
        </div>

        <h5>{{unit_details.unit_name}}</h5>
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

                <label for="">description</label>
                <textarea v-model="description"  class="form-control" rows="2"></textarea>
              </div>
              <div class="d-flex justify-content-between mx-4 my-2">
                <button type="reset" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" data-bs-dismiss="modal"  class="btn btn-primary">Add event</button>
              </div>

            </form>
          </div>
        </div>
      </div>
      <!-- Modal pop up end      -->

      <div class="card">
        <div class="card-head">
          <h5>Unit Code: {{unit_id}}</h5>
          <p>Upcoming events</p>
        </div>
        <div class="card-body" >
<!--          {{events}}-->
            <div class="events" >
              <div  class="sigle-event border m-1 d-flex flex-column align-items-center" v-for="sigle_event in events" :key="sigle_event">
                <h3>Event</h3>
                <h5 class="text-primary">{{sigle_event.event}}</h5>
                <p class="text-center">{{sigle_event.description}}</p>
                <h4>Date:</h4>
                  <span class="text-primary">{{sigle_event.date}}</span>
              </div>
            </div>
        </div>
      </div>

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
.events{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>