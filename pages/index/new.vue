<template>
  <div>
    <h1 class="page-title">
      New Employee
    </h1>
    <form class="p-4" @submit.prevent="submit">
      <div class="pb-4">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="name"
          inputmode="text"
          type="text"
          class="border"
          required
        >
      </div>
      <input type="submit" value="Create" class="button--grey">
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: ''
    }
  },
  methods: {
    submit () {
      this.$repo.create(this.name)
        .then(response => this.$router.push(`/${response.data._id}`))
        .catch(err => console.log(err))
    }
  }
}
</script>

<style>

</style>
