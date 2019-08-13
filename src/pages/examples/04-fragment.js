import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../../components/layout"

/*
  1. in an existing image query replace the fields in fluid/fixed with an equivalent fragment
*/

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "corgi.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Using GraphQL Fragments</h1>
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="A corgi smiling happily"
      />
    </Layout>
  )
}
