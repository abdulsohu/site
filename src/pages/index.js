import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HelloCreatures from "../images/hello.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Abdul Sohu"></SEO>

    <div className="image">
      <img
        style={{
          paddingTop: "0.5rem",
          paddingBottom: "1rem",
          width: "100%",
          height: "auto",
        }}
        src={HelloCreatures}
        alt="Hello from me, and these cute little creatures!"
      />
    </div>

    <h1 className="title is-2" style={{ marginTop: "1rem" }}>
      Hi!
    </h1>

    <p>
      I'm Abdul. I studied computer science and logic at the University of Pennsylvania.
    </p>
    <br />
    {/**
     <p>
      Outside of school, I waste a lot of time on chess, and making{" "}
      <a
        href="https://www.notion.so/abdulsohu/some-videos-6a407b5fb58b479e9310e8e92bb23b69"
        target="_blank"
        rel="noreferrer"
      >
        videos
      </a>.
    </p>
    <br />
     */}
  </Layout>
)

export default IndexPage
