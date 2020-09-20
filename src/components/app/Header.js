import React from 'react';

export default function Header() {
  return (
    <header>
      <div data-uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
        <nav className='uk-navbar-container uk-light' data-uk-navbar>
          <div className='uk-navbar-left uk-margin-left'>
            <a href='/' className='uk-navbar-item uk-logo uk-text-bold'>
              {/* <img src='./brand/power-petz-logo.svg' height='auto' width='150px' alt='Power Petz Logo' /> */}
              <i className="fad fa-code uk-margin-right"></i>Rekit
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
                <a href="#"><i className="fad fa-user-circle fa-2x"></i></a>
                <div className="uk-navbar-dropdown">
                    <ul className="uk-nav uk-navbar-dropdown-nav">
                        <li><a href="#"><i className="fad fa-user uk-margin-right"></i> Profile</a></li>
                        <li><a href="#"><i className="fad fa-cog uk-margin-right"></i>Settings</a></li>
                        <li><a href="#"><i className="fad fa-power-off uk-margin-right"></i>Logout</a></li>
                    </ul>
                </div>
              </li>
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