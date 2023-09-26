
<script setup>
import Header from "@/views/includes/Header.vue";
import {useRoute, useRouter} from "vue-router";
import {ref} from "vue";
const router = useRouter()
const route = useRoute()
const group_id = ref('')
group_id.value = route.query.name;
if(group_id.value ===''){
  router.push('/show_group')
}
if(group_id.value==null){
  router.push('/show_group')
}
</script>

<template>

  <div class="header sticky-top">
    <Header />
    <!-- start of tabs/links -->
    <div class="bg-light d-flex">
      <div style="color:#8f13e8; width: 4rem; background: bisque;" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" class="d-block d-md-none d-lg-none d-flex flex-column align-items-center">
        <span>Menu</span><br>
        <i style="font-size:30px;" class="bi  p-2 bi-list " ></i>
      </div>
      <ul class="nav ps-4 nav-pills  nav-fill">
        <li class="nav-item">
          <router-link class="nav-link" :to="{ path: 'posts', query: { name: group_id } }">posts</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ path: 'discussion', query: { name: group_id } }">Discussion</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ path: 'links', query: { name: group_id } }">Links</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ path: 'events', query: { name: group_id } }">Events</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" :to="{ path: 'videos', query: { name: group_id } }">Videos</router-link>
        </li>

      </ul>    </div>
    <!--   start of offcanvas-->
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Groups</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div class="ms-4 mt-4 me-2">
          <li class="list-unstyled text-uppercase p-2 my-1 border"><router-link to="#">Web Development</router-link></li>
        </div>
      </div>
    </div>
    <!--   End of offcanvas-->
  </div>
  <!--  End of tabs/links-->



  <div class="row">
    <!--Links sidebar-->
    <div class="col d-none d-md-block d-lg-block col-md-3 col-lg-3">
      <div class="ms-4 mt-4 me-2">
        <li class="list-unstyled text-uppercase p-2 my-1 border"><router-link to="#">Web Development</router-link></li>
      </div>
    </div>
    <!--    Videos start here-->
    <div class="col m-1 col-md-5 col-lg-5 posts">
      <p>Videos  here</p>

    </div>
    <!--    Videos  end here-->
    <div class="col d-none d-md-block d-lg-block col-md-3 col-lg-3">
      <p class="text-center">Events here</p>
    </div>
  </div>
  <!--  end of posts -->
</template>


<style scoped>
li{
  text-transform: uppercase;
}
li:hover{
  background: #1515cf;
  color: yellow;
}
.posts{
  border:1px solid black;
  min-height: 90vh;
  max-height: 118vh;
  overflow: scroll;
}
.feed{
  padding-bottom: 1rem;
  border-bottom:1px solid black;
}
</style>