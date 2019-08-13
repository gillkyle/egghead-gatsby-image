import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

const extractName = path => {
  const name = path.split("/")[2]
  return name
}

const IndexPage = ({
  data: {
    allSitePage: { nodes: pages },
  },
}) => (
  <Layout>
    <h1>Examples</h1>
    {pages.map((page, index) => {
      return (
        <div style={{ marginBottom: 20 }}>
          <Link
            style={{
              border: "1px solid #CCC",
              borderRadius: 4,
              padding: 10,
            }}
            to={page.path}
          >
            {extractName(page.path)}
          </Link>
          <br />
        </div>
      )
    })}
  </Layout>
)

export default IndexPage

export const query = graphql`
  query HomePageQuery {
    allSitePage(filter: { path: { regex: "/examples/" } }) {
      nodes {
        path
      }
    }
  }
`
