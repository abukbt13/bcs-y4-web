
<script setup>

</script>
<template>
  <div class="row my-2 px-5">

    <div class="col links">
      <h3 class="text-dark">Quick Liks</h3>
      <ul class="list-unstyled">
        <router-link class="text-decoration-none" to="login"> <li class="py-2">Login</li></router-link>
        <router-link class="text-decoration-none" to="/dashboard"> <li class="py-2">Profile</li></router-link>
        <router-link class="text-decoration-none" to="/show_group"> <li class="py-2">Groups</li></router-link>
        <router-link class="text-decoration-none" to="/all_units"> <li class="py-2">Units</li></router-link>
      </ul>
    </div>
    <div class="col">
      <h3 class="text-primary">Location</h3>

      <p class="p-2">We are located currently in Meru University but we are highly mobile as the technology</p>

    </div>
    <div class="col">
      <h3 class="text-primary">Contact Admin</h3>



      <div class="chat-container">

        <div class="chat-messages">
          <div class="message">
            <p>Hi! How can I help you?</p>
          </div>
          <!-- Add more messages here -->
        </div>
        <div class="input-container">
          <textarea class="form-control" id=""  rows="5" placeholder="Type your message..."></textarea>
          <button class="btn btn-success mt-2 float-end">Send</button>
        </div>
      </div>

    </div>
  </div>
  <hr>
  <div class=""><p class="text-center">Designed and developed by <span class="ms-2 text-primary">Masterminds Solutions   Email <b class="me-2">abukbt13@gmail.com</b></span> phone: <span class="text-primary">0728548760</span></p></div>
  <hr>
</template>


<style scoped>
.links ul li:hover{
  background: blue;
  color: pink;
}
.links ul li{
  padding-left: 2rem;
}

</style>
