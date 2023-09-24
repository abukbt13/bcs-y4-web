
<script setup>
import {auth} from "@/compossables/auth";
import {onMounted, ref} from "vue";
import axios from "axios";
import Swal from "sweetalert2";
const {base_url,storage,storage_profile,authHeader}=auth()

const new_profile = ref('')
const first_name = ref('')
const last_name = ref('')
const phone = ref('')
const email = ref('')
const profile = ref('')
const getProfile = async () =>{
  const res= await axios.get(base_url.value+'user', authHeader);
  first_name.value=res.data.first_name
  last_name.value=res.data.last_name
  phone.value=res.data.phone
  email.value=res.data.email
  profile.value=res.data.profile
}


function fileUpload(e){
  new_profile.value=e.target.files[0];
}
const updateProfile =async () => {

  const formData = new FormData();
  formData.append('first_name', first_name.value)
  formData.append('last_name', last_name.value)
  formData.append('phone', phone.value)
  formData.append('new_profile', new_profile.value)

  const res = await axios.post(base_url.value+'profile/update',formData,authHeader)
  await  Swal.fire(
      'Success!',
      'Profile updated successfully',
      'success'
  )
}

onMounted(()=>{
  getProfile()
})
</script>
<template>
  <div className="container d-flex bg-light align-items-center">
    <div className="">
      <img  :src="storage_profile+profile" alt="Error loading the image">
    </div>

    <ul className="nav nav-tabs ms-4">
      <li className="nav-item">
        <router-link className="nav-link active" aria-current="page" to="/dashboard/">Profile</router-link>
      </li>
      <li className="nav-item">
        <router-link className="nav-link " aria-current="page" to="/dashboard/group">My Groups</router-link>
      </li>
      <li className="nav-item">
        <router-link className="nav-link" aria-current="page" to="/dashboard/videos">My Videos</router-link>
      </li>
      <li className="nav-item">
        <router-link className="nav-link" aria-current="page" to="/dashboard/links">My Links</router-link>
      </li>
      <li className="nav-item">
        <router-link className="nav-link" aria-current="page" to="/dashboard/discussion">My Discussion</router-link>
      </li>


    </ul>
  </div>

  <div class="container p-4">
    <h3>First name:    <span v-if="first_name">{{ first_name }}</span><span class="text-primary" v-else>?</span></h3>
    <h3>Last name:    <span v-if="last_name">{{ last_name }}</span><span class="text-primary" v-else>?</span></h3>
    <h2 class="text-capitalize text-decoration-underline">Contact Information</h2>
    <h3>Phone:    <span v-if="phone">{{ phone }}</span><span class="text-primary" v-else>?</span></h3>
    <h3>Email:    <span>{{ email }}</span></h3>
    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#profile">Edit Personal details</button>

  </div>
  <div class="modal fade" id="profile" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <form @submit.prevent="updateProfile">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Edit profile</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">MY Email</label>
              <h5>{{email}}</h5>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">First Name</label>
              <input type="text" class="form-control" v-model="first_name">
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Last Name</label>
              <input type="text" class="form-control" v-model="last_name" >
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
              <input type="number" class="form-control" v-model="phone">
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Profile Picture</label>
            </div>
            <img :src="storage_profile+profile" width="200" height="200" alt=""><br>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Upload New profile picture</label>
              <input type="file" class="form-control"  @change="fileUpload">
            </div>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" data-bs-dismiss="modal" class="btn btn-primary">Update Profile</button>
          </div>

        </div>
      </form>
    </div>
  </div>


</template>


<style scoped>
 li:hover{
  background: grey;
  color: pink;
}
img{
 border-radius: 50%;
  width: 200px;
  height: 200px;
}
@media screen and (max-width: 470px) {
  img{
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }
}
</style>