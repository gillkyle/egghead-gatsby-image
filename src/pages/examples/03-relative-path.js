import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../../components/layout"

/*
  1. write query to get image data
  2. pass data into Img component
*/

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "corgi.jpg" }) {
        childImageSharp {
          fluid {
            aspectRatio
            base64
            sizes
            src
            srcSet
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Local file at Relative Path</h1>
      <Img fluid={data.file.childImageSharp.fluid} />
    </Layout>
  )
}
