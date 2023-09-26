<script setup>
import {onMounted, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import axios from "axios";
import {auth} from "@/compossables/auth";
import Swal from "sweetalert2";
const router = useRouter();
const route = useRoute();
const file = ref('');
const title = ref('');
const notes_description = ref('');
const unit_details = ref([]);


const {base_url,storage_notes,authHeader}=auth()
const unit_id = ref('');
unit_id.value = route.query.name;

if(unit_id.value ===''){
  router.push('/all_units')
}

function fileUpload(e){
  file.value=e.target.files[0];
}
const notes = ref([])



const showNotes = async () =>{
  const res = await axios.get(`${base_url.value}notes/show/${unit_id.value}`);
  notes.value =res.data.notes
}

const addNotes = async () => {
  const formData = new FormData()
  formData.append('notes_description', notes_description.value)
  formData.append('title', title.value)
  formData.append('file', file.value)
  formData.append('unit_code', unit_id.value)
  const response = await axios.post(base_url.value+'notes/upload', formData,authHeader);
  if (response.status === 200) {
    await  Swal.fire(
        'Success!',
        'Notes added successfully',
        'success'
    )
    await showNotes()
  }
}

function showExtension(name) {
  const filenameParts = name.split('.');
  const extension = filenameParts[filenameParts.length - 1];
  return extension;
}
const valid_extensions =[
  'pdf','png','jpeg','jpg'
]

const showDetails = async () => {
  const res = await axios.get(`${base_url.value}unit/details/${unit_id.value}`);
  unit_details.value = res.data.details[0];
};

onMounted(() => {
  showNotes()
  showDetails()
})
</script>

<template>
  <div class="row">
    <div class="col sidebar d-none d-md-block col-md-3 col-lg-3 ps-5 bg-dark">
    <router-link to="/all_units" class="btn btn-success">View All Units</router-link>
      <h3 class="text-white">{{ unit_details.unit_name }}</h3>
      <div class="ul">
        <li class="list-unstyled text-uppercase text-white  ps-4">
          <router-link :to="{ path: `/unit`, query: { name: unit_id } }" class="text-decoration-none "><i style="color:#398BF6;" class="bi p-2 bi-house"></i> Home</router-link>
        </li>
        <li class="list-unstyled text-uppercase text-white active ps-4">
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
      <div class="card" style="width: 100%;  height: 100vh">
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
                <li class="list-unstyled text-uppercase text-white  ps-4">
                  <router-link :to="{ path: `/unit`, query: { name: unit_id } }" class="text-decoration-none "><i style="color:white;" class="bi p-2 bi-house"></i> Home</router-link>
                </li>
                <li class="list-unstyled text-uppercase active text-white ps-4">
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

          <p>{{ unit_details.unit_name }}</p>
          <button data-bs-target="#add_notes" data-bs-toggle="modal" class="btn btn-primary float-end"><i style="color:#398BF6;" class="bi p-2 bi-plus"></i>Add Notes</button>
        </div>
        <!-- Modal pop up start    for adding notes   -->
        <div class="modal fade" id="add_notes" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Upload notes</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form @submit.prevent="addNotes">
                <div class="modal-body">
                  <label for="">Title</label>
                  <input type="text" v-model="title" class="form-control">

                  <label for="">Notes Description</label>
                  <textarea name="" id="" v-model="notes_description"   class="form-control"></textarea>

                  <label for="">Title</label>
                  <input type="file" @change="fileUpload" class="form-control" placeholder="upload file">

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



        <div  class="notes" >

          <div  class="notes-conted border m-1 d-flex align-items-center flex-column  justify-content-center" v-for="note in notes" :key="note">
            <h2 class="text-decoration-underline">{{note.title}}</h2>

            <p>{{note.notes_description}}</p>
            <p v-if="valid_extensions.includes(showExtension(note.file))">
              <router-link :to="{ path: `notes/read`, query: { name:note.file  } }"  class="text-decoration-none btn btn-primary">Read Now</router-link>
            </p>
            <p v-else>
              <a :href="storage_notes+note.file" class="text-decoration-none">Download {{ note.title }}</a>
            </p>
          </div>

        </div>

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
.notes{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>