
<script setup>
import Header from "@/views/includes/Header.vue";
import Footer from "@/views/includes/Footer.vue";
import {group} from "@/compossables/group";
import {onMounted} from "vue";
const {create_group,group_name,group_description,group_category,showGroup,groups} = group()
onMounted(() => {
  showGroup()
})
</script>

<template>
<Header />


  <div class="d-flex bg-light justify-content-between align-items-center">
    <p class="pt-3" style="font-size: 23px;">Available groups</p>
    <button class="btn btn-primary btn-sm" data-bs-target="#create_group" data-bs-toggle="modal">
      <i class="bi bi-plus"></i>
      Create group</button>
  </div>
  <!-- Modal pop up start    for create group  -->
  <div class="modal fade" id="create_group" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Create a Post</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form @submit.prevent="create_group">
          <div class="modal-body">
            <label for="">Group Name</label>
            <input type="text" v-model="group_name" class="form-control">
            <label for="">Group Category</label>
            <select v-model="group_category" class="form-control">
              <option value="" disabled selected>-- Select a category --</option>
              <option value="Robotics">Robotics</option>
              <option value="Android">Android</option>
              <option value="Databases">Databases</option>
              <option value="Other">Other</option>
            </select>
            <label for="">Group Description</label>
            <textarea name="" id="" v-model="group_description"   class="form-control"></textarea>
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

  <router-link v-for="group in groups" :key="group" :to="{ path: `/show_group/posts`, query: { name: group.group_id } }" class="text-decoration-none btn btn-primary m-1 text-uppercase">
        {{ group.group_name }}
      </router-link>

  <Footer />
</template>

<style scoped>

</style>