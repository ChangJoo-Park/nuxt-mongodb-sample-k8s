<template>
  <div class="w-full h-full">
    <div class="container">
      <nav class="mb-4">
        <nuxt-link to="/" class="text-lg no-underline hover:underline hover:text-blue-500 mr-4">
          Home
        </nuxt-link>
        <nuxt-link to="/new" class="text-lg no-underline hover:underline hover:text-blue-500">
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
