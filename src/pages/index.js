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
      These days, I write code. I am currently (actively) seeking research
      opportunities in computer science, and finance: I have a <em>penchant</em> for these.
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
      I also have a lot of randomly organized thoughts that would belong 
      in the blog section, at some point at least. Stay tuned, I guess? 
    </p>
  </Layout>
)

export default IndexPage
