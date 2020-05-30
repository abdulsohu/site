import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout.js"
import Tag from "../components/blogTag.js"

import TagsCreatures from "../images/tags.svg"

const AllTagsIndex = ({ data, pageContext }) => {
  const { tags } = pageContext

  return (
    <Layout>
      <SEO title="Blog: all tags 🦄"></SEO>

      <img
        style={{ paddingTop: "0.5rem", paddingBottom: "2rem" }}
        className="image is-square"
        src={TagsCreatures}
        alt="Tag creatures bring you some information!"
      />

      <div className="level">
        <div className="level-left">
          <div className="level-item">
            <h1
              className="title is-2"
              style={{ borderBottom: "2px solid red", paddingTop: "1rem" }}
            >
              all tags:
            </h1>
          </div>
        </div>
      </div>

      <ul style={{ padding: "0rem 0rem 0rem 4rem" }}>
        {tags.map((tagName, index) => {
          return (
            <li key={index} style={{ paddingBottom: "1rem" }}>
              <Link to={`tags/${tagName}`}>
                <Tag name={tagName} size="is-large" />
              </Link>
            </li>
          )
        })}
      </ul>

      <br />
    </Layout>
  )
}

export default AllTagsIndex
