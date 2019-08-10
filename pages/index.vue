<template>
  <div class="w-full h-full">
    <div>
      <nuxt-link to="/" tag="h1">
        My sensational Nuxt.js project
      </nuxt-link>
      <nuxt-link to="/new">
        New Employee
      </nuxt-link>
    </div>
    <main>
      <nuxt-child />
    </main>
  </div>
</template>

<script>
export default {
}
</script>

<style>
</style>
