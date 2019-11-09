import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Gatsby Starter Personal Website"
    const title = this.props.data.markdownRemark.frontmatter.title
    return (
      <Layout location={this.props.location} title={title}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" />
        <h1>
          Hey people, I'm Francis{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Welcome to my portfolio site.</p>

        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    markdownRemark(fileAbsolutePath: { regex: "/home.md/" }) {
      frontmatter {
        title
      }
    }
  }
`

export default IndexPage
