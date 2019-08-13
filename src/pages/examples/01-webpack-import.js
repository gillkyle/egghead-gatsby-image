import React from "react"
import Dog from "../../images/corgi.jpg"

import Layout from "../../components/layout"

/*
  1. include import at top of file
  2. use named import as the src
*/

export default () => {
  return (
    <Layout>
      <h1>webpack Import</h1>
      <img src={Dog} />
    </Layout>
  )
}
