import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import NotFoundCreatures from "../images/404.svg"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Problema!" />

    <img
      style={{ paddingTop: "0.5rem", paddingBottom: "2rem" }}
      className="image is-square"
      src={NotFoundCreatures}
      alt="What you are looking for doesn't exist, sadly."
    />

    <h1 className="title is-2">#404:</h1>

    <h1>PAGE NOT FOUND</h1>

    <p>
      Some pages don't exist, and others are just hiding. You just hit something
      that doesn&#39;t exist... ah the sadness.
    </p>
  </Layout>
)

export default NotFoundPage
