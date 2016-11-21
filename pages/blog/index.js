import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import moment from 'moment'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'
import Newsletter from '../../components/Newsletter'

class BlogIndex extends React.Component {
    render() {
        const pageLinks = []
        // Sort pages.
        const sortedPages = sortBy(this.props.route.pages, (page) => access(page, 'data.date')
        ).reverse()
        sortedPages.forEach((page) => {
            if (access(page, 'file.ext') === 'md' && access(page, 'data.layout') === 'post') {
                const title = access(page, 'data.title') || page.path
                const description = access(page, 'data.description')
                const datePublished = access(page, 'data.date')
                const category = access(page, 'data.category')
                const author = access(page, 'data.author')

                pageLinks.push(
                  <div>
                    <article className="center mw8 mw7-ns br3 dark-gray hidden ba b--black-10 mv4">
                      <h1 className="link f4 bg-maroon br3 br--top white mv0 pv2 ph3"><Link className="link white" to={ prefixLink(page.path) }>{ title }</Link></h1>
                      <div className="pa3 bt b--black-10">
                        <span>> Geschrieben von { author } - </span>    
                        <time dateTime={ moment(datePublished).format('MMMM D, YYYY') }>
                           { moment(datePublished).format('MMMM YYYY') }
                        </time>
                        <p className="f6 f5-ns lh-copy">
                          { description }
                        </p>
                        <Link className='link dim dark-gray' to={ prefixLink(page.path) }> Mehr
                        </Link>
                      </div>
                    </article>
                    <div className="center mw5 mw7-ns">
                      <div className="center mw3"><p className="tc">***</p></div>
                    </div>
                  </div>
                )
            }
        })

        return (
          <DocumentTitle title={ config.siteTitle }>
            <section className="mw-100 center bg-near-white pa3 ph5-ns">
              { pageLinks }
            </section>
          </DocumentTitle>
        )
    }
}

BlogIndex.propTypes = {
    route: React.PropTypes.object,
}

export default BlogIndex
