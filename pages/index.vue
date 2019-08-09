<template>
  <div class="container">
    <div>
      <h2 class="subtitle">
        My sensational Nuxt.js project
      </h2>
      <div>
        <nuxt-child />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  mounted () {
    console.log(this.$repo)
  }
}
</script>

<style>
</style>
