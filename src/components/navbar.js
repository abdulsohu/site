import React from "react"
import Emoji from "./emoji.js"

require("../styles/styles.scss")

const NavBar = () => {
  return (
    <div style={{ marginTop: "1rem", marginBottom: "3rem" }}>
      <div className="columns is-mobile is-variable is-1 is-narrow">
        <div className="column is-narrow">
          <a href="/">
            <span className="tag has-background-grey-dark has-text-white has-text-weight-bold">
              Home &nbsp; <Emoji symbol="🏠" label="home" />
            </span>
          </a>
        </div>

        <div className="column is-narrow">
          <a href="/blog">
            <span className="tag has-background-grey-dark has-text-white has-text-weight-bold">
              Blog &nbsp; <Emoji symbol="📝" label="pencil and paper" />
            </span>
          </a>
        </div>

        <div className="column is-narrow">
          <a href="/design">
            <span className="tag has-background-grey-dark has-text-white has-text-weight-bold">
              Design &nbsp; <Emoji symbol="🎨" label="artist palette" />
            </span>
          </a>
        </div>

        <div className="column is-narrow">
          <a href="/projects">
            <span className="tag has-background-grey-dark has-text-white has-text-weight-bold">
              Ideas &nbsp; <Emoji symbol="💡" label="idea bulb flashes" />
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default NavBar
