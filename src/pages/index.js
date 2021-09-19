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
      Hi, I'm Abdul :)
    </h1>

    <p>
      I studied computer science and logic at the University of Pennsylvania.
      These days, I work on interesting problems in software engineering,
      and application development.
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
    <p>
      This website serves no other purpose except that it boosts my ego
      and looks pretty. About that ego thing, my random thoughts in the blog 
      section don't count. Also, there might or might not be easter eggs on 
      this website :)
    </p>
  </Layout>
)

export default IndexPage
