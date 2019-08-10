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
    if (id) {
      return $axios({ url: `/api/employees/${id}`, method: 'delete' })
    } else {
      return $axios({ url: `/api/employees`, method: 'delete' })
    }
  },

  update () {
    return $axios({ method: 'put' })
  }
})
