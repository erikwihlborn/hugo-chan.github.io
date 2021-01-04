import React from "react"
import Layout from "../components/layout"
import Links from "../components/links"
import SEO from "../components/seo"

export default function Home() {
  return (
    <Layout topMargin="5rem">
      <SEO/>
      <h1 style={{ textAlign: `center` }}>Hi, my name is Hugo Chan.</h1>
      <p style={{ textAlign: `center` }}>Welcome to my corner of the internet.</p>
      <ul style={{ margin: `auto`, listStyle: `none`, display: `flex`, justifyContent: "center"}}>
        <Links _marginRight="2rem" pageName="About" pageDir="/about"/>
      </ul>
    </Layout>
  )
}