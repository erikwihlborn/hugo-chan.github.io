import React from "react"

/**
 * Container for centered divs (specify margin on top)
 * @param {*} props 
 */
export default function Layout(props) {
  return (
    <div style={{ margin: `${props.topMargin} auto`, maxWidth: 700, padding: `0 1rem` }}>
      {props.children}
    </div>
  )
}