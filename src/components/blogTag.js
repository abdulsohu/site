import React from "react"
require("../styles/styles.scss")
var Color = require("color")

function getColour(name, size) {
  let sizer = " is-normal"
  if (size) {
    sizer = " " + size
  }

  if (name === "education") return "is-success is-light" + sizer
  if (name === "personal") return "is-danger is-light" + sizer
  if (name === "design") return "is-primary is-light" + sizer
  if (name === "notes") return "is-warning is-light" + sizer
  if (name === "series") return "is-info is-light" + sizer
  if (name === "programming") return "is-link is-light" + sizer

  return sizer
}

function hashCode(str) {
  var hash = 0
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }
  return hash
}

function intToRGB(i) {
  var c = (i & 0x00ffffff).toString(16).toUpperCase()
  return "#" + "00000".substring(0, 6 - c.length) + c
}

function createColour(name) {
  return intToRGB(hashCode(name))
}

const blogTag = props => {
  var attributes = getColour(props.name, props.size)

  if (attributes === " is-normal") {
    const color = Color(createColour(props.name)).alpha(0.5).lighten(0.1)
    const inverted = Color(createColour(props.name)).darken(0.5)

    return (
      <a href={"/tags/" + props.name}>
        <span
          className={"tag" + attributes}
          style={{
            backgroundColor: color,
            color: inverted,
          }}
        >
          {props.name}
        </span>{" "}
        &nbsp;
      </a>
    )
  }

  return (
    <a href={"/tags/" + props.name}>
      <span className={"tag " + attributes}>{props.name}</span> &nbsp;
    </a>
  )
}

export default blogTag
