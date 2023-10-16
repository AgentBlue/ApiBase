import health from './health.js'

export default (context) => {
  const { resource } = context

  return resource({},
    health(context),
  )
}
