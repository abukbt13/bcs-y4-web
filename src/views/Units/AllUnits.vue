
<script setup>

import Header from "@/views/includes/Header.vue";
import axios from "axios";
import Swal from "sweetalert2";
import {auth} from "@/compossables/auth";
import {onMounted, ref} from "vue";

const {base_url,authHeader}=auth()

const unit_description = ref('')
const unit_name = ref('')

const units = ref([])

const showUnits = async () =>{
  const res = await axios.get(base_url.value+'unit/show')
  units.value =res.data.units
}
const addUnit = async () => {
  const formData = new FormData()
  formData.append('unit_description', unit_description.value)
  formData.append('unit_name', unit_name.value)
  const response = await axios.post(base_url.value+'unit/add', formData,authHeader);
  if (response.status === 200) {
    await  Swal.fire(
        'Success!',
        'Unit added successfully',
        'success'
    )
    await showUnits()
  }
}
onMounted(() => {
  showUnits()
}
)
</script>
<template>
  <Header />
<div class="d-flex bg-info justify-content-between">
  <h2>All notes</h2>
  <button data-bs-target="#add_unit" data-bs-toggle="modal" class="btn btn-primary float-end"><i style="color:#398BF6;" class="bi p-2 bi-plus"></i>Add Notes</button>
</div>

  <!-- Modal pop up start    for adding Unit   -->
  <div class="modal fade" id="add_unit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Add Unit</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form @submit.prevent="addUnit">
          <div class="modal-body">
            <label for="">Unit Name</label>
            <input type="text" v-model="unit_name" class="form-control">

            <label for="">Unit Description</label>
            <textarea name="" id="" v-model="unit_description"   class="form-control"></textarea>

          </div>
          <div class="d-flex justify-content-between mx-4 my-2">
            <button type="reset" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
            <button type="submit" data-bs-dismiss="modal"  class="btn btn-primary">Add Unit</button>
          </div>

        </form>
      </div>
    </div>
  </div>
  <!-- Modal pop up end      -->

  <div style="border: solid 1px grey;" class="" v-for="unit in units" :key="unit">

    <router-link :to="{ path: `/unit`, query: { name: unit.unit_name } }" class="text-decoration-none btn btn-primary m-1 text-uppercase">
      {{  unit.unit_name }}
    </router-link>

  </div>
</template>


<style scoped>

</style>