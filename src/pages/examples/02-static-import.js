import React from "react"

import Layout from "../../components/layout"

/*
  1. add file to root /static folder
  2. use src as the path in the static folder
*/

export default () => {
  return (
    <Layout>
      <h1>Static Import</h1>
      <img src={`../../corgi.jpg`} />
    </Layout>
  )
}
