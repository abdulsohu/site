import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout.js"
import Tag from "../components/blogTag.js"

const SingleTagTemplate = ({ data, pageContext }) => {
  const { posts, tagName } = pageContext

  return (
    <Layout>
      <SEO title={"Blog: " + tagName}></SEO>
      <br />

      <div className="container">
        <br />

        <div style={{ marginBottom: "1.5rem" }}>
          <p>
            <strong style={{ borderBottom: "2px solid red" }}>
              all posts about
            </strong>{" "}
            &nbsp;
            <Tag name={tagName} />
          </p>
        </div>

        <div>
          <ul style={{ listStyle: "disc" }}>
            {posts.map((post, index) => {
              return (
                <li key={index}>
                  <Link to={post.frontmatter.path}>
                    {post.frontmatter.title}{" "}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <br />
    </Layout>
  )
}

export default SingleTagTemplate
