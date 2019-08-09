import createRepository from '~/api/repository'

export default (ctx, inject) => {
  const repositoryWithAxios = createRepository(ctx.$axios)
  console.log('repositoryWithAxios => ', repositoryWithAxios)
  const repositories = {
    create: repositoryWithAxios.create,
    read: repositoryWithAxios.read,
    update: repositoryWithAxios.update,
    delete: repositoryWithAxios.delete
  }

  console.log('repositories => ', repositories)

  inject('repo', repositories)
}
