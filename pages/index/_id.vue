<template>
  <div>
    <h1>View</h1>
    <div>
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  asyncData ({ app, params, error }) {
    return app.$repo.read(params.id)
      .then(({ data }) => {
        return {
          item: data
        }
      }).catch((err) => {
        error(err.response)
      })
  }
}
</script>

<style>

</style>
