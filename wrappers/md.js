import React from 'react'
import 'css/markdown-styles.css'
import Helmet from "react-helmet"
import { config } from 'config'

module.exports = React.createClass({
  propTypes () {
    return {
      router: React.PropTypes.object,
    }
  },
  render () {
    const post = this.props.route.page.data
    return (
		  <section className="mw-100 center bg-near-white pa3 ph5-ns">
        <Helmet
          title={`${config.siteTitle} | ${post.title}`}
        />
        <article className="pa1 pa3-ns mw-100 mw8-ns center">
          <h1 className="f2 f1-ns mb4 maroon">{post.title}</h1>
          <p className="gray f6 mb4 ttu tracked">Von {post.author}</p>
          <p className="f5 f4-ns lh-copy dark-gray" dangerouslySetInnerHTML={ {    __html: post.body} } />
        </article>
      </section>
    )
  },
})
