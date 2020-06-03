import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Tag from "../components/blogTag"

import WritingCreatures from "../images/blog.svg"

const Blog = ({ data }) => {
  const { edges } = data.allMarkdownRemark

  return (
    <Layout>
      <SEO title="Blog"></SEO>

      <img
        style={{ paddingTop: "0.5rem", paddingBottom: "2rem" }}
        className="image is-square"
        src={WritingCreatures}
        alt="Writing from me and these creatures!"
      />

      <h1 className="title is-2">some writing.</h1>

      <p>
        I like to write about interesting topics, things I care about, and
        (sometimes) my personal life. All (good) opinions are mostly my own.
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
            className="box"
            key={frontmatter.path}
            style={{ color: "grey", marginBottom: "1rem" }}
          >
            <span style={{ fontSize: "0.75rem" }}>{frontmatter.date} </span>
            <br />
            <Link to={frontmatter.path}>
              <p>{frontmatter.title}</p>
            </Link>
            <p
              style={{
                fontSize: "0.85rem",
                marginBottom: "0.5rem",
                marginTop: "0.1rem",
              }}
            >
              {frontmatter.excerpt}
            </p>
            {frontmatter.tags.map((tag, index) => (
              <Tag name={tag} key={index} />
            ))}
          </div>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  query FilterForNonDesignPosts {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { tags: { ne: "design" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            excerpt
            path
            date
            tags
          }
        }
      }
    }
  }
`

export default Blog
