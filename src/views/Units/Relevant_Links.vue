<script setup>
import {onMounted, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
const router = useRouter();
const route = useRoute();
const unit_id = ref('');
unit_id.value = route.query.name;

if(unit_id.value ===''){
  router.push('/all_units')
}
onMounted(() => {

})
</script>

<template>
  <div className="row">
    <div className="col sidebar d-none d-md-block col-md-3 col-lg-3 ps-5 bg-dark">

      <h3 className="text-white">Database Design</h3>
      <div className="ul">
        <li class="list-unstyled text-uppercase text-white  ps-4">
          <router-link :to="{ path: `/unit`, query: { name: unit_id } }" class="text-decoration-none "><i style="color:#398BF6;" class="bi p-2 bi-house"></i> Home</router-link>
        </li>
        <li class="list-unstyled text-uppercase text-white ps-4">
          <router-link :to="{ path: `/unit/notes`, query: { name: unit_id } }" class="text-decoration-none text-white"><i style="color:#398BF6;" class="bi p-2 bi-pencil"></i> Notes</router-link>
        </li>
        <li class="list-unstyled text-uppercase text-white  ps-4">
          <router-link :to="{ path: `/unit/relevant_videos`, query: { name: unit_id } }" class="text-decoration-none text-white"><i style="color:#398BF6;" class="bi p-2 bi-file-play-fill"></i>Relevant Videos </router-link>
        </li>
        <li class="list-unstyled text-uppercase text-white active ps-4 ps-4">
          <router-link :to="{ path: `/unit/relevant_links`, query: { name: unit_id } }" class="text-decoration-none text-white"><i style="color:#398BF6;" class="bi p-2 bi-link"></i>Relevant links</router-link>

        </li>
      </div>
    </div>
    <div className="col col-md-8 col-lg-8">
      <!--      Modal button-->
      <div style="color:#8f13e8; width: 4rem; background: bisque;" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" class="d-block d-md-none d-lg-none d-flex flex-column align-items-center">
        <span>Menu</span><br>
        <i style="font-size:30px;" class="bi  p-2 bi-list " ></i>
      </div>
      <!--      Modal button end -->

      <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasScrollingLabel">UNIT name here</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div style="background-color: #398BF6" class="offcanvas-body ">
          <router-link to="/all_units" class="btn btn-success">View All Units</router-link>

          <!--          <p class="text-white">{{ unit_details.unit_name  }}</p>-->
          <div class="ul">
            <li class="list-unstyled text-uppercase text-white  ps-4">
              <router-link :to="{ path: `/unit`, query: { name: unit_id } }" class="text-decoration-none "><i style="color:white;" class="bi p-2 bi-house"></i> Home</router-link>
            </li>
            <li class="list-unstyled text-uppercase  text-white ps-4">
              <router-link :to="{ path: `/unit/notes`, query: { name: unit_id } }" class="text-decoration-none text-white"><i style="color:white;" class="bi p-2 bi-pencil"></i> Notes</router-link>
            </li>
            <li class="list-unstyled text-uppercase text-white ps-4">
              <router-link :to="{ path: `/unit/relevant_videos`, query: { name: unit_id } }" class="text-decoration-none text-white"><i style="color:white;" class="bi p-2 bi-file-play-fill"></i>Relevant Videos </router-link>

            </li>
            <li class="list-unstyled text-uppercase active text-white ps-4 ps-4">
              <router-link :to="{ path: `/unit/relevant_links`, query: { name: unit_id } }" class="text-decoration-none text-white"><i style="color:white;" class="bi p-2 bi-link"></i>Relevant links</router-link>

            </li>
          </div>          </div>
      </div>

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