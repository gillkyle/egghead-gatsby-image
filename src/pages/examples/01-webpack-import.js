import React from "react"
import Layout from "../../components/layout"
import Dog from "../../images/corgi.jpg"

export default () => {
  return (
    <Layout>
      <h1>webpack Import</h1>
      <img src={Dog} alt="A corgi smiling happily" />
    </Layout>
  )
}
