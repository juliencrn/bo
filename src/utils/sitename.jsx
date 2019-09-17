import { graphql, useStaticQuery } from 'gatsby'

export default function SiteName() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  const { title } = site.siteMetadata
  return title
}
