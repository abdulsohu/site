import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import BloomingCreatures from "../images/blooming.svg"
import ResumePdf from "../files/Abdul_Sohu_Resume.pdf"

const Resume = () => (
  <Layout>
    <SEO title="Resume"></SEO>
    <div className="image">
      <img
        style={{
          paddingTop: "0.5rem",
          paddingBottom: "1rem",
          width: "100%",
          height: "auto",
        }}
        src={BloomingCreatures}
        alt="Professional blooming creatures welcome you to my resume page!"
      />
    </div>
    <h1 className="title is-2">some professional.</h1>
    <p>
      Are you a recruiter? Someone with a purpose? Or someone who has a curious
      cat? Consider{" "}
      <a href={ResumePdf} target="_blank" rel="noreferrer">
        downloading
      </a>{" "}
      my résumé, and carrying it to all the places you know{" "}
      <ion-icon
        name="airplane-outline"
        size="medium"
        className="hvr-grow"
      ></ion-icon>
    </p>

    <br />

    <p>
      Also, I have a feeling we are meant to connect on{" "}
      <a
        style={{ position: "relative", bottom: "-1px", left: "2px" }}
        href="https://www.linkedin.com/in/sohu/"
        target="_blank"
        rel="noreferrer"
      >
        <ion-icon
          style={{ color: "#2877b5" }}
          name="logo-linkedin"
          size="large"
          className="hvr-grow"
        ></ion-icon>
      </a>
    </p>

    <p>
      Not really? No worries, let's <em>git</em> together on{" "}
      <a
        style={{ position: "relative", bottom: "-1px", left: "2px" }}
        href="https://github.com/abdulsohu"
        target="_blank"
        rel="noreferrer"
      >
        <ion-icon
          style={{ color: "#24292e" }}
          name="logo-github"
          size="large"
          className="hvr-grow"
        ></ion-icon>
      </a>
    </p>

    <br />
  </Layout>
)

export default Resume
