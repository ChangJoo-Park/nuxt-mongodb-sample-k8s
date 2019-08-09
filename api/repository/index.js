export default $axios => ({
  create () {
    return $axios({ method: 'post' })
  },

  read () {
    return $axios({ method: 'get' })
  },

  delete () {
    return $axios({ method: 'delete' })
  },

  update () {
    return $axios({ method: 'put' })
  }
})
