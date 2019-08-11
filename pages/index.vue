<template>
  <div class="w-full h-full">
    <div class="container">
      <nav class="mb-4">
        <nuxt-link to="/" class="button--green">
          Home
        </nuxt-link>
        <nuxt-link to="/new" class="button--green">
          New Employee
        </nuxt-link>
      </nav>
      <main>
        <nuxt-child />
      </main>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
</style>
