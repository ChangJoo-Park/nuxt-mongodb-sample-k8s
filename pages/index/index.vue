<template>
  <div>
    <main>
      <ul>
        <nuxt-link
          v-for="item in list"
          :key="item._id"
          :to="`/${item._id}`"
          tag="li"
        >
          {{ item.name }}
        </nuxt-link>
      </ul>
    </main>
  </div>
</template>

<script>
export default {
  asyncData ({ app, error }) {
    return app.$repo.read()
      .then(({ data }) => {
        return {
          list: data
        }
      }).catch((err) => {
        error(err.response)
      })
  }
}
</script>

<style>

</style>
