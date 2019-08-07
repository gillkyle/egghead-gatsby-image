import React from "react"

import Layout from "../../components/layout"

/*
  1. add file to root /static folder
  2. use src as the path in the static folder
*/

export default () => {
  return (
    <Layout>
      <img src={`corgi.jpg`} />
    </Layout>
  )
}
