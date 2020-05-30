import React from "react"
require("../styles/styles.scss")

function getColour(name, size) {
  let sizer = ""
  if (size) {
    sizer = " " + size
  }

  if (name === "education") return "is-success is-light" + sizer
  if (name === "personal") return "is-danger is-light" + sizer
  if (name === "design") return "is-primary is-light" + sizer
  if (name === "notes") return "is-warning is-light" + sizer
  if (name === "programming") return "is-info is-light" + sizer
  if (name === "random") return "is-link is-light" + sizer

  return sizer
}

const blogTag = props => {
  return (
    <a href={"/tags/" + props.name}>
      <span className={"tag " + getColour(props.name, props.size)}>
        {props.name}
      </span>{" "}
      &nbsp;
    </a>
  )
}

export default blogTag
