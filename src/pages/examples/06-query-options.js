import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../../components/layout"

/*
  1. write a query for sourced image
  2. add options like maxWidth and quality to the fluid fields arguments
  3. add a style prop to the Img component 
*/

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "corgi.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 75) {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Image Querying Options</h1>
      <Img
        style={{
          height: 250,
          border: "2px solid rebeccapurple",
          borderRadius: 5,
        }}
        fluid={data.file.childImageSharp.fluid}
        alt="A corgi smiling happily"
      />
    </Layout>
  )
}
