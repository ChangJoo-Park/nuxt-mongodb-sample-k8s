<template>
  <div>
    <div>New</div>
    <form class="p-4" @submit.prevent="submit">
      <h2 class="font-bold pb-4 text-lg">
        New Employee
      </h2>
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
      <input type="submit">
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
        .then((result) => {
          console.log(result)
          this.$router.push('/')
        }).catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>
