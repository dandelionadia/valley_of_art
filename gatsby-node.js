exports.createPages = async function ({ actions, graphql, reporter }) {
  const { data, errors } = await graphql(`
    query GetAllImages {
      images: allMdx(filter: { slug: { glob: "images/*" } }) {
        nodes {
          id
          slug
        }
      }
    }
  `)

  if (errors) {
    console.error(errors)
    reporter.panicOnBuild('Failed to fetch works')
    return
  }

  const workDetailTemplate = require.resolve('./src/templates/work-detail.js')

  data.images.nodes.forEach((image) => {
    actions.createPage({
      path: image.slug,
      component: workDetailTemplate,
      context: {
        id: image.id,
      },
    })
  })
}
