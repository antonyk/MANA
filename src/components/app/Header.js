import React from 'react';

export default function Header() {
  return (
    <header>
      <div id='navbar' data-uk-sticky='sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar'>
        <nav className='uk-navbar-container ' data-uk-navbar>
          <div className='uk-navbar-left uk-margin-left'>
            <a href='/' className='uk-navbar-item uk-logo uk-text-bold'>
              {/* <img src='./brand/power-petz-logo.svg' height='auto' width='150px' alt='Power Petz Logo' /> */}
              <i className="fad fa-code"></i>&nbsp;&nbsp;&nbsp;Rekit
            </a>
          </div>
          {/* <div className='uk-navbar-center'>
            <div className='uk-navbar-nav'>
              <ul className='uk-navbar-nav'>
                <li>
                  <a href="#products" data-uk-scroll='offset:100'>Products</a>
                </li>
                <li>
                  <a href="#about" data-uk-scroll='offset:100'>About</a>
                </li>
                <li>
                  <a href="#contact" data-uk-scroll='offset:100'>Contact</a>
                </li>
              </ul>
            </div>
          </div> */}
          <div className='uk-navbar-right uk-margin-right'>
            <ul className='uk-navbar-nav'>
              <li>
                <a className='uk-hidden@m' type="button" data-uk-toggle="target: #sidebar"><i className="fad fa-bars fa-2x"></i></a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}