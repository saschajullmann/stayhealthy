import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import '../css/markdown-styles'
import '../css/main.css'
import '../css/colors.min.css'


module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div>
        <Navbar />
        {this.props.children}
        <Newsletter />
        <Footer />
      </div>
    )
  },
})
