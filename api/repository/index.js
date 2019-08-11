export default $axios => ({
  create (newName) {
    return $axios({
      url: '/api/employees',
      method: 'post',
      data: {
        name: newName
      }
    })
  },

  read (id) {
    const url = id ? `/api/employees/${id}` : `/api/employees`
    return $axios({ url, method: 'get' })
  },

  delete (id) {
    const url = id ? `/api/employees/${id}` : `/api/employees`
    return $axios({ url, method: 'delete' })
  },

  update () {
    return $axios({ method: 'put' })
  }
})
