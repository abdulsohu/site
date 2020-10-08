import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Tag from "../components/blogTag"

import WritingCreatures from "../images/blog.svg"

function handleClick() {
  const div = document.getElementsByClassName("notification").item(0)
  div.style.display = "none"
}

const Blog = ({ data }) => {
  const { edges } = data.allMarkdownRemark

  return (
    <Layout>
      <SEO title="Blog"></SEO>
      <div className="notification is-info is-light" style={{ padding: "1em" }}>
        <button className="delete" onClick={handleClick}></button>
        <p style={{ fontSize: "14px" }}>
          Sometimes, life gives you lemons. Right now, I'm making some lemonade
          and can't update this page frequently{" "}
          <span role="img" aria-label="lemon emoji">
            🍋
          </span>
        </p>
      </div>

      <img
        style={{ paddingTop: "0.5rem", paddingBottom: "2rem" }}
        className="image is-square"
        src={WritingCreatures}
        alt="I write, and these cute little creatures assist me with it!"
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
