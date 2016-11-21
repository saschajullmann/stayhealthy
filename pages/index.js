import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'
import Newsletter from '../components/Newsletter'
import sugar from '../assets/img/sugar.svg'
import wheat from '../assets/img/wheat.svg'
import milk from '../assets/img/milk-products.svg'
import avatar from '../assets/img/avatar_1.jpg'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <section className="mw-100 center bg-orange pa3 ph5-ns">
          <article className="mw7 center ph3 ph5-ns tc br2 pv5 dark-gray mb5">
            <h1 className="fw6 f3 f2-ns lh-title mt0 mb3 ttu tracked">
              Meine Mission
            </h1> 
            <h2 className="fw2 f4 lh-copy mt0 mb3">
              This will change things. And we want you to be involved. This text needs to
              be longer for testing sake.
            </h2>
            <p className="fw1 f5 mt0 mb3">
              Sign up for beta access or learn more about x.
            </p>
            <div>
              <a className="f6 br-pill bg-dark-gray no-underline orange ba b--dark-gray grow pv2 ph3 dib mr3" 
                href="#">
                Sign Up
              </a>
              <a className="f6 br-pill dark-gray no-underline ba grow pv2 ph3 dib" 
                href="#">
                Learn More
              </a>
            </div>
          </article>


        </section>

        <section className="mw-100 center bg-white dark-gray pa3 ph5-ns">

          <h1 className="tc ttu tracked">Drei einfache Prinzipien</h1>

          <div className="dt-ns dt--fixed-ns">
            <div className="dtc-ns tc pv4">
              <img src={sugar} className="dib w3 h3" alt="Kein Zucker"/>
                <br/>
                <br/>
                <div className="">
                  <h1 className="f5 f4-ns fw6 lh-title tc mv0 ttu tracked">Kein Zucker</h1>
                  <p className="f6 f5-ns">Blahblah</p>
                </div>
              </div>
              <div className="dtc-ns tc pv4">
                <img src={wheat} className="dib w3 h3" alt="Kein Getreide"/>
                  <br/>
                  <br/>
                  <div className="">
                    <h1 className="f5 f4-ns fw6 lh-title tc mv0 ttu tracked">Kein Getreide</h1>
                    <p className="f6 f5-ns">Blahblah</p>
                  </div>
                </div>
                <div className="dtc-ns tc pv4">
                  <img src={milk} className="dib w3 h3" alt="Keine Milchprodukte"/>
                    <br/>
                    <br/>
                    <div className="">
                      <h1 className="f5 f4-ns fw6 lh-title tc mv0 ttu tracked">Keine Milchprodukte</h1>
                      <p className="f6 f5-ns">Blahblah</p>
                    </div>			    
                  </div>
                </div>

              </section>

              <section className="mw-100 center bg-light-gray dark-gray pa3 ph5-ns">
                <h1 className="tc ttu tracked">Warum ausgerechnet ICH dir helfen kann</h1>
                <article className="cf ph3 ph5-ns pv5">
                  <header className="fn fl-ns w-50-ns pr4-ns tc">
                    <h1 className="f5 f4-ns fw6 mid-gray">Sascha</h1>
                    <h2 className="f6 gray fw2 ttu tracked">Los Angeles</h2>
                    <img src={avatar} className="br-100 pa1 ba b--black-10 h3 w3" alt="avatar"/>
                  </header>
                  <div className="fn fl-ns w-50-ns">
                    <p className="lh-copy mt4 mt0-ns">
                      PERFECT typography is more a science than an art. Mastery of the trade is
                      indispensable, but it isn't everything. Unerring taste, the hallmark of
                      perfection, rests also upon a clear understanding of the laws of harmonious
                      design. As a rule, impeccable taste springs partly from inborn sensitivity:
                      from feeling. But feelings remain rather unproductive unless they can inspire a
                      secure judgment. Feelings have to mature into knowledge about the consequences
                      of formal decisions. For this reason, there are no born masters of typography,
                      but self- education may lead in time to mastery.
                    </p>
                  </div>
                </article>
              </section>
      </div>
    )
  }
}
