<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from "axios";

// Define a ref to store the captured name
const groupName = ref('');
const  description = ref('')
const  file = ref('')
// Access the router instance
const router = useRouter();
import {auth} from "@/compossables/auth";
import Header from "@/views/includes/Header.vue";



const {base_url,storage_posts,storage_profile,authHeader}=auth()
import {group} from "@/compossables/group";
const {create_group,group_name,group_description,group_category,showGroup,groups}=group()
function fileUpload(e){
  file.value=e.target.files[0];
}
const posts = ref([])



const showPosts = async () =>{
  const res = await axios.get(base_url.value+'posts/show')
  posts.value =res.data.posts

}

const savePost = async () => {
  const formData = new FormData()
  formData.append('description', description.value)
  formData.append('file', file.value)
  formData.append('group', groupName.value)
  const response = await axios.post(base_url.value+'post/upload', formData,authHeader);
  if (response.status === 200) {
   await showPosts()
  }
}

async function like(id) {
  try {
    const response = await axios.post(
        `${base_url.value}post/like/${id}`,
        null, // Request data (if needed)
        authHeader
    );

    // Handle the response here
    showPosts();

    // You can perform any additional actions based on the response if needed
  } catch (error) {
    // Handle errors here
    console.error('Error making POST request:', error);
  }
}
function showComment(post){
  console.log(post)
}
const comment_post = ref(null)
function toggleComment(postId) {
  // Toggle the comment_post property to show/hide the textarea for the selected post
  if (this.comment_post === postId) {
    this.comment_post = null; // Hide the textarea if it's already shown
  } else {
    this.comment_post = postId; // Show the textarea for the selected post
  }
}
const new_comment = ref ('')
const saveComment=async (id)=>{
  const formData = new FormData();
  formData.append('comment', new_comment.value)
  const response = await axios.post(`${base_url.value}post/comment/${id}`, formData,authHeader);
  if (response.status === 200) {
    new_comment.value=''
    comment_post.value=''
    await showPosts()
  }
}

// Use onMounted to capture the query parameter after the component is mounted
onMounted(() => {
  showPosts()
  showGroup()
  if (!router.currentRoute.value.query.name) {
    // Redirect to a specific route when the "name" query parameter is missing
    router.push('/show_group') // Replace with the actual route name
  } else {
    // Set groupName to the "name" query parameter value
    groupName.value = router.currentRoute.value.query.name
  }})


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
          <router-link class="nav-link active" :to="{ path: 'posts', query: { name: groupName } }">posts</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ path: 'discussion', query: { name: groupName } }">Discussion</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ path: 'links', query: { name: groupName } }">Links</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ path: 'events', query: { name: groupName } }">Events</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ path: 'videos', query: { name: groupName } }">Videos</router-link>
        </li>

      </ul>
    </div>
    <!--   start of offcanvas-->
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Groups</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div class="ms-4 mt-4 me-2">

          <router-link to="/show_group" class="text-decoration-none my-4 py-3 text-uppercase">Explore Group</router-link>


          <div class="d-flex bg-light justify-content-between align-items-center">
            <p class="pt-3" style="font-size: 23px;">My Groups</p>

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

          <div class=""  v-for="group in groups" :key="group">
            <router-link :to="{ path: `/show_group/posts`, query: { name: group.group_id } }"  class="text-decoration-none my-4 py-3 text-uppercase">
              <div data-bs-dismiss="offcanvas" class="button btn" >{{ group.group_name }}</div>
            </router-link>
          </div>
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

        <router-link to="/show_group" class="text-decoration-none my-4 py-3 text-uppercase">Explore Group</router-link>


        <div class="d-flex bg-light justify-content-between align-items-center">
          <p class="pt-3" style="font-size: 23px;">My Groups</p>
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

        <div class="" v-for="group in groups" :key="group">
          <router-link :to="{ path: `/show_group/posts`, query: { name: group.group_id } }" class="text-decoration-none my-4 py-3 text-uppercase">
            {{ group.group_name }}
          </router-link>
        </div>
      </div>
    </div>
    <!--    posts start here-->
    <div class="col m-1 col-md-5 col-lg-5 posts">
      <!--      CREATE POST-->
            <div class="create-post d-flex  justify-content-between align-items-center">
               <p class="text-uppercase mt-3 ps-2">What do you wish to share</p>
              <button class="btn btn-primary me-3" data-bs-toggle="modal" data-bs-target="#create">
              <i class="bi bi-plus"></i>
              Create a post
            </button>
            </div>


      <!-- Modal -->
                  <div class="modal fade" id="create" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="exampleModalLabel">Create a Post</h1>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form @submit.prevent="savePost">
                          <div class="modal-body">
                            <label for="">Tell us something</label>
                            <textarea name="" id="" v-model="description"   class="form-control"></textarea>
                            <!--                          <span class=" mx-3"><i class="bi bi-plus"></i>Picture</span>-->
                            <!--                          <span class=" mx-3"><i class="bi bi-plus"></i>short video</span>-->
                            <label for="">Upload file</label><br>

                            <input type="file" placeholder="upload file" @change="fileUpload">
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" data-bs-dismiss="modal"  class="btn btn-primary">Create post</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
      <!--      CREATE POST-->

    <div @mouseenter="showComment(post.id)" class="single-post" v-for="post in posts" :key="post">
      <div class="d-flex align-items-center">
        <img :src="storage_profile+post.profile" class="rounded" width="50" height="50" alt="No image"> <p class="ms-2 mt-3">Alan Kibet</p></div>
      <p>
        {{ post.description}}
      </p>
      <img :src="storage_posts+post.file" class="img-fluid" alt=""><br>
      <div  class="feed row ">
        <div class="col d-flex justify-content-center align-items-center">
          <i style="font-size:28px;color:#8f13e8;" @click="like(post.id)" class="bi p-2 bi-hand-thumbs-up-fill "></i><span class="">{{post.likes}}</span>
        </div>
        <div class="col d-flex justify-content-center border-start align-items-center">
          <i data-bs-toggle="modal" @click="toggleComment(post.id)"  style="font-size:28px;color:#8f13e8;" class="bi bi-chat-left-dots-fill p-2"></i><span class="">{{post.comments}}</span>
        </div>
      </div>
      <form @submit.prevent="saveComment(post)">
      <div class="d-flex justify-content-center align-items-center" >

        <textarea   v-show="comment_post ==post.id" class="form-control" v-model="new_comment" rows="2"></textarea>
        <button type="submit" style="border: none; background-color: white;">
          <i  style="font-size: 40px;color: blue;rotate: y 45deg;rotate: x 7deg" v-show="comment_post ==post.id" class="p-2 bi bi-cursor-fill"></i>
        </button>

      </div>
      </form>
      <div>
<!--          <p>jjjj</p>-->
      </div>
    </div>



    </div>
    <!--    posts end here-->
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
}
.comments{
  min-height: 0rem;
  max-height: 17rem;
  border-bottom:1px solid black;
  overflow: hidden;
}
.create-post{
  height: 4rem;
  border-bottom: 1px solid grey;
  background-color: #a8ed07;
}
</style>