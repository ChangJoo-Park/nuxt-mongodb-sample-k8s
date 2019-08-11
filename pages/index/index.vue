<template>
  <div>
    <main>
      <h1 class="page-title">
        Employee Listing
      </h1>
      <ul>
        <nuxt-link
          v-for="item in list"
          :key="item._id"
          :to="`/${item._id}`"
          tag="li"
          class="border px-2 py-4 mb-2 border-l-4 cursor-pointer hover:bg-blue-400 hover:text-white hover:border-blue-500 rounded-sm"
        >
          <div>
            {{ item._id }}
          </div>
          <div class="font-bold">
            {{ item.name }}
          </div>
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
