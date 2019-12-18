import React from 'react';
import Logo from '../logo.png';
import './header.css';

const header = (props) =>{
  return(
<div>
   <nav className="dt dt--fixed w-100 border-box pl1 bb b--black-10 shadow-1 calisto ma1">
    <div className="dtc dn-ns w-third"></div>
      <a class="dtc v-mid mid-gray link dim w-25" href="#" title="Home">
    <img src={Logo} class="logo m0 h-5 w-20" alt="Logo"/>
      </a>
      <div id="menu" className="static-ns absolute mt5 mt0-ns left-100 db dtc-ns v-mid w-50 w-100-ns w-75-ns h-80 tr">
        <a className="link dim dark-gray tr tl-ns f2 f3-ns db dib-ns mr3 mr4-ns" href="#" title="Home"
        onClick ={props.init}>Home</a>
      </div>
  </nav>
</div>
    );
}
export default header;