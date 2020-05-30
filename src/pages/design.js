import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Tag from "../components/blogTag"

import DesignCreatures from "../images/design.svg"

const Design = ({ data }) => {
  const { edges } = data.allMarkdownRemark

  return (
    <Layout>
      <SEO title="Design"></SEO>

      <img
        style={{ paddingTop: "0rem", paddingBottom: "2rem" }}
        className="image is-square"
        src={DesignCreatures}
        alt="Design from me and these creatures!"
      />

      <h1 className="title is-2">some beauty.</h1>

      <p>
        I like to design things that look nice, and in doing so, I learn
        something new every day! It's not much, but it's honest work.
      </p>

      <br />

      <p
        style={{
          marginBottom: "1rem",
          textAlign: "center",
        }}
      >
        <strong style={{ borderBottom: "2px solid red" }}>all posts:</strong>
      </p>

      {edges.map(edge => {
        const { frontmatter } = edge.node
        return (
          <div
            className="card"
            style={{ color: "grey", marginBottom: "1rem" }}
            key={frontmatter.path}
          >
            <div className="card-image">
              <figure className="image is-5by4">
                <img
                  src={frontmatter.featuredImgUrl}
                  alt={frontmatter.featuredImgAlt}
                />
              </figure>
            </div>
            <div className="card-content">
              <p className="title" style={{ textAlign: "center" }}>
                {frontmatter.title}
              </p>
            </div>
            <footer className="card-footer">
              <p className="card-footer-item">
                {frontmatter.tags.map((tag, index) => (
                  <Tag name={tag} key={index} />
                ))}
              </p>
              <p className="card-footer-item">
                <span>
                  <Link to={frontmatter.path}>View</Link>
                </span>
              </p>
            </footer>
          </div>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  query DesignQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { tags: { eq: "design" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            date
            tags
            featuredImgUrl
            featuredImgAlt
          }
        }
      }
    }
  }
`

export default Design
