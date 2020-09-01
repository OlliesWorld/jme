import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            What did she say? It's your mom, she's tracked you down. Quick, let's cover the time machine.

            I guess you guys aren't ready for that yet. But your kids are gonna love it.
          </h2>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Large imagery is at the heart of this theme</figcaption>
          </figure>
          <h3 id="dynamic-styles">Dynamic styles</h3>
          <p>
            What's going on? Where have you been all week?

            C'mon, he's not that bad. At least he's letting you borrow the car tomorrow night
          </p>
          <p>
            Nothing's coming to my mind. Marty, you interacted with anybody else today, besides me? Who the hell is John F. Kennedy? It's uh, the other end of town, a block past Maple. Thanks a lot, kid.
            <a href="https://unsplash.com/photos/aKH9tG5VmVQ">
              Ghost Handlebars
            </a>{" "}
           Great good, good, Lorraine, I had a feeling about you two. Oh, pleased to meet you, Calvin Marty Klein. Do you mind if I sit here? Stop it. Ahh. Ahh. You can't, uh, that is, uh, nobody's home.
          </p>

        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
