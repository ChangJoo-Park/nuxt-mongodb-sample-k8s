import createRepository from '~/api/repository'

export default (ctx, inject) => {
  const repositoryWithAxios = createRepository(ctx.$axios)

  const repositories = {
    create: repositoryWithAxios.create,
    read: repositoryWithAxios.read,
    update: repositoryWithAxios.update,
    delete: repositoryWithAxios.delete
  }

  inject('repo', repositories)
}
