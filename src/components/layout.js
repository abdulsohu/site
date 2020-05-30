/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import NavBar from "./navbar"
import { Helmet } from "react-helmet"
require("../styles/styles.scss")

const Layout = ({ children }) => {
  return (
    <section className="section" style={{ paddingTop: "1rem" }}>
      <Helmet>
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
          <div className="column is-one-fourth"></div>

          <div className="column">
            <NavBar></NavBar>
            <main>{children}</main>
          </div>

          <div className="column"></div>
        </div>
      </div>
    </section>
  )
}

export default Layout
