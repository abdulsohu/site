import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Footer from "../components/blogFooter"
import Tag from "../components/blogTag"

require("katex/dist/katex.min.css")
require("prismjs/themes/prism-solarizedlight.css")

const Template = ({ data }) => {
  const { markdownRemark } = data
  const html = markdownRemark.html
  const date = markdownRemark.frontmatter.date
  const tags = markdownRemark.frontmatter.tags
  const title = markdownRemark.frontmatter.title

  return (
    <section>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.0.0/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          nomodule=""
          src="https://unpkg.com/ionicons@5.0.0/dist/ionicons/ionicons.js"
        ></script>
      </Helmet>

      <div className="container">
        <div className="columns">
          <div className="column" />

          <div className="column is-half" style={{ padding: "2rem" }}>
            <br />
            <p className="is-size-7" style={{ marginBottom: "0.5rem" }}>
              <ion-icon name="pricetags-outline"></ion-icon> &nbsp;
              <a href="/tags">
                <span className="tag has-background-white-bis has-text-black">
                  all
                </span>
              </a>
              &nbsp;
              {tags.map((tag, index) => (
                <Tag name={tag} key={index} />
              ))}
            </p>

            <p className="is-size-7" style={{ marginBottom: "1rem" }}>
              <ion-icon name="calendar-outline"></ion-icon> &nbsp; {date}
            </p>

            <article className="markdown-body">
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </article>
            <Footer></Footer>
          </div>

          <div className="column" />
        </div>
      </div>
    </section>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      rawMarkdownBody
      html
      frontmatter {
        title
        date
        tags
      }
    }
  }
`

export default Template
