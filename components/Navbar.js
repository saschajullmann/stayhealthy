import React from 'react';
import logo from '../assets/img/owl.svg';
import { Link } from 'react-router';

const Navbar = () => 
		<nav className="db dt-ns w-100 border-box pa2 ph5-ns bg-dark-gray code">
      <a className="db dtc-ns v-mid orange b link dim w-100 w-25-ns ttu tracked tc tl-ns mb2 mb0-ns" href="/" title="Home">
        <img src={logo} className="dib v-mid w2 h2 border-box" alt="Site Name" />
        <span className="mt3">Stay Healthy Academy</span>
		  </a>
		  <div className="db dtc-ns v-mid w-100 w-75-ns tc tr-ns">
        <a className="link dim white f6 f5-ns dib mr3 mr4-ns" href="/" title="Home">Über</a>
        <a className="link dim white f6 f5-ns dib mr3 mr4-ns" href="/blog/" title="Blog">Blog</a>
        <a className="link dim white f6 f5-ns dib" href="/kontakt/" title="Kontakt">Kontakt</a>
		  </div>
		</nav>

export default Navbar;
