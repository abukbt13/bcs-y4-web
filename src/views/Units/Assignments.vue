<template>
  <div className="row">
    <div className="col sidebar d-none d-md-block col-md-3 col-lg-3 ps-5 bg-dark">

      <h3 className="text-white">Database Design</h3>
      <div className="ul">
        <li className="list-unstyled text-uppercase text-white  ps-4">
          <router-link to="/unit" className="text-decoration-none "><i style="color:#398BF6;"
            className="bi p-2 bi-house"></i> Home
          </router-link>
        </li>
        <li className="list-unstyled text-uppercase text-white ps-4">
          <router-link to="/unit/notes" className="text-decoration-none text-white"><i style="color:#398BF6;"
             className="bi p-2 bi-pencil"></i>
            Notes
          </router-link>
        </li>
        <li className="list-unstyled text-uppercase text-white active ps-4">
          <router-link to="/unit/assignments" className="text-decoration-none  text-white"><i style="color:#398BF6;"
             className="bi p-2 bi-list-stars"></i>Assignments
          </router-link>
        </li>
        <li className="list-unstyled text-uppercase text-white ps-4">
          <router-link to="/unit/relevant_videos" className="text-decoration-none text-white"><i style="color:#398BF6;"
            className="bi p-2 bi-file-play-fill"></i>Relevant
            Videos
          </router-link>

        </li>
        <li className="list-unstyled text-uppercase text-white ps-4 ps-4">
          <router-link to="/unit/study_links" className="text-decoration-none text-white"><i style="color:#398BF6;"
             className="bi p-2 bi-link"></i>Relevant
            links
          </router-link>

        </li>
      </div>
    </div>
    <div className="col col-md-8 col-lg-8">
      <H2>Assingments</H2>

      </div>
      <h2></h2>
    </div>
</template>

<script>

</script>

<style scoped>
.sidebar {
  height: 100vh;
}

.active {
  background-color: #a8ed07;
  padding: 3px;
}
</style>