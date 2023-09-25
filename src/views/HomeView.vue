<script setup>
import Header from "@/views/includes/Header.vue";
import Footer from "@/views/includes/Footer.vue";
import {group} from "@/compossables/group";
import {onMounted, ref} from "vue";
import {auth} from "@/compossables/auth";
import axios from "axios";
const {base_url,authHeader}=auth()


const units = ref([])

const showUnits = async () =>{
  const res = await axios.get(base_url.value+'unit/show')
  units.value =res.data.units
}
const {create_group,group_name,group_description,group_category,showGroup,groups} = group()
onMounted(() => {
  showUnits()
  showGroup()
})
</script>

<template>
  <Header />
  <div class="main">
    <div id="carouselExampleAutoplaying" class="carousel slide " data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/Unknown.jpeg" class="d-block w-100" alt="..." style="height: 50vh; width: 60vw;"><br>
          <p class="text-center">Students during coding </p>
        </div>
        <div class="carousel-item">
          <img src="/student.jpeg" class="d-block w-100" alt="..." style="height: 50vh;width: 60vw;">
          <p class="text-center">Students during coding session</p>
        </div>
        <div class="carousel-item">
          <img src="/images.jpeg" class="d-block w-100" alt="..." style="height: 50vh; width: 60vw;">
          <p class="text-center">Students during coding session</p>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  <div class="section ms-5 mt-4 pt-4">
    <hr>
       <div class="pb-4 bg-light">
         <h3 class="text-center">This semester units </h3>

         <div class="align-items-center mx-5">
           <router-link  v-for="unit in units" :key="unit" :to="{ path: `/unit`, query: { name: unit.unit_code } }" class="text-decoration-none btn btn-primary m-1 text-uppercase">
             {{  unit.unit_name }}
           </router-link>

         </div>

         <div class=" mt-5">
           <h2 class="text-center">Forums</h2>
           <p class="text-center">Forums help us to expand more in an area of specification here more of the studies
             </p>

           <p class="text-center">
             are done here also here is the place to share knowledge with experienced individual in this area
           </p>
           <div class="groups" >

             <router-link v-for="group in groups" :key="group"  :to="{ path: `/show_group/posts`, query: { name: group.group_id } }" class="text-decoration-none btn btn-primary m-1 text-uppercase">
               {{ group.group_name }}
             </router-link>
           </div>
         </div>
       </div>
  </div>

  <!-- Footer start here-->
  <div style="background-color: rgb(13, 250, 5)" class="footer mx-3">
    <Footer/>
  </div>
  <!-- Footer ends here-->
</template>
<style scoped>
.main{
  height: 50vh;
  padding-bottom: 1rem;
}





</style>
