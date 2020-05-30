import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import IdeasCreatures from "../images/projects.svg"
import OscarScraper from "../images/oscar.svg"
import Website from "../images/website.svg"

const Projects = () => (
  <Layout>
    <SEO title="Projects"></SEO>

    <img
      style={{ paddingTop: "0.5rem", paddingBottom: "2rem" }}
      className="image is-square"
      src={IdeasCreatures}
      alt="Ideas from me and these creatures!"
    />

    <h1 className="title is-2">some ideas!</h1>

    <p>
      I wrote up some code and made a thing (or two). These are ideas that I was
      able to turn into finished projects.
    </p>

    <br />

    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-128x128">
            <img src={Website} alt="Website making creature!" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <h3>
                <strong>My Personal Website</strong>
              </h3>
              I built this website (with my bare hands) using the
              <a href="https://www.gatsbyjs.org/"> Gatsby </a>
              framework. Let me know how I can improve it via{" "}
              <a href="mailto:sohu@sas.upenn.edu"> email</a> (or a pull
              request)!
            </p>
          </div>
        </div>
        <span className="hvr-grow">
          <a href="/404">
            <ion-icon name="logo-github" size="large"></ion-icon>
          </a>
        </span>
      </article>
    </div>

    <br />

    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-128x128">
            <img src={OscarScraper} alt="Oscar Scraping creature!" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <h3>
                <strong>OscarScraper</strong>
              </h3>
              A webscraper that allows access to common
              <a href="https://oscar.go.com/"> Oscar </a>
              queries. The Java code for this project serves as a good
              introduction to <a href="https://jsoup.org/">JSoup</a>.
            </p>
          </div>
        </div>
        <span className="hvr-grow">
          <a href="https://github.com/abdulsohu/OscarScraper">
            <ion-icon name="logo-github" size="large"></ion-icon>
          </a>
        </span>
      </article>
    </div>
  </Layout>
)

export default Projects