import React from "react"

require("../styles/styles.scss")

const Footer = () => {
  return (
    <footer className="footer">
      <div className="level">
        <div className="level-left">
          <div className="level-item">
            <p className="is-size-6">
              <strong>Thank you for reading!</strong>
            </p>
          </div>
        </div>

        <div className="level-right">
          <div className="level-item">
            <a href="/blog">
              <button className="button is-info is-outlined is-rounded is-small">
                read more
              </button>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
