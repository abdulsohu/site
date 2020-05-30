import React from "react"
require("../styles/styles.scss")

const NavBar = () => {
  return (
    <div style={{ marginTop: "1rem", marginBottom: "3rem" }}>
      <div className="columns is-mobile is-variable is-1 is-narrow">
        <div className="column is-narrow">
          <a href="/">
            <span className="tag has-background-grey-dark has-text-white has-text-weight-bold">
              Home
            </span>
          </a>
        </div>

        <div className="column is-narrow">
          <a href="/blog">
            <span className="tag has-background-grey-dark has-text-white has-text-weight-bold">
              Blog
            </span>
          </a>
        </div>

        <div className="column is-narrow">
          <a href="/design">
            <span className="tag has-background-grey-dark has-text-white has-text-weight-bold">
              Design
            </span>
          </a>
        </div>

        <div className="column is-narrow">
          <a href="/projects">
            <span className="tag has-background-grey-dark has-text-white has-text-weight-bold">
              Ideas
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default NavBar
