<template>
  <div class="courses">
    <router-link :to="{ path: `/unit`, query: { name: 123344 } }" class="text-decoration-none btn btn-primary m-1 text-uppercase">
      Data design
    </router-link>

    <router-link :to="{ path: `/unit`, query: { name: 'software-engineering' } }" class="text-decoration-none btn btn-primary m-1 text-uppercase">
      Software Engineering
    </router-link>
  </div>
</template>

<script>

</script>

<style scoped>

</style>