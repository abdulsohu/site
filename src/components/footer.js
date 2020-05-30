import React from "react"
require("../styles/styles.scss")

const Footer = () => {
  return (
    <footer className="footer" style={{ borderTopColor: "transparent" }}>
      <div className="content has-text-centered">
        <p>
          <strong>made with </strong>
          <a href="https://github.com/abdulsohu">
            <ion-icon id="heart" name="heart"></ion-icon>
          </a>
          <strong> by abdul</strong>
        </p>
      </div>
    </footer>
  )
}

export default Footer
