<template>
  <div>
    <h1 class="page-title">
      Edit Employee
    </h1>
    <form class="p-4" @submit.prevent="submit">
      <div class="pb-4">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="item.name"
          inputmode="text"
          type="text"
          class="border"
          required
        >
      </div>
      <input type="submit" value="Update" class="button--grey">
    </form>
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
  },
  methods: {
    submit () {
      const { _id, name } = this.item
      this.$repo.update(_id, name)
        .then(result => this.$router.push(`/${_id}`))
        .catch(err => console.log(err))
    }
  }
}
</script>
