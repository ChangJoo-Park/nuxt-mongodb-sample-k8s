<template>
  <div>
    <h1 class="page-title">
      Show Employee
    </h1>
    <div>
      <div>
        <label for="">ID : </label>
        {{ item._id }}
      </div>
      <div>
        <label for="">Name : </label>
        {{ item.name }}
      </div>
      <br>
      <button class="button--red" @click="remove">
        Remove
      </button>
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
  },
  methods: {
    remove (_id) {
      this.$repo.delete(this.item._id)
        .then((response) => {
          console.log(response)
          this.$router.push('/')
        })
        .catch(error => console.log(error))
    }
  }
}
</script>

<style>

</style>
