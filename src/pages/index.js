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
      I'm an undergraduate at the University of Pennsylvania studying computer
      science and logic. At Penn, I currently maintain the front-end for
      <a href="https://www.nso.upenn.edu/" target="_blank" rel="noreferrer">
        {" "}
        NSOAI
      </a>
      , and work on interesting problems in Big Data for{" "}
      <a
        href="https://mgmt.wharton.upenn.edu/profile/kapoorr/"
        target="_blank"
        rel="noreferrer"
      >
        Dr. Rahul Kapoor
      </a>
      . Recently, I also built a website dedicated to UPenn's
      <a
        href="https://www.preceptorials.com"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        Preceptorials{" "}
      </a>
      as well!
    </p>
    <br />
    <p>
      Outside of school, I like playing chess, and making{" "}
      <a
        href="https://www.notion.so/abdulsohu/some-videos-6a407b5fb58b479e9310e8e92bb23b69"
        target="_blank"
        rel="noreferrer"
      >
        videos
      </a>
      . On this website, you can learn more about what I am upto! If you would
      like to reach out, feel free to
      <a href="mailto:sohu@sas.upenn.edu">
        {" "}
        email{" "}
        <ion-icon
          name="mail-outline"
          size="medium"
          className="hvr-grow"
        ></ion-icon>
      </a>{" "}
      me.
    </p>
    <br />
  </Layout>
)

export default IndexPage
