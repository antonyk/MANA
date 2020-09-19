import React from 'react';
import SidebarMenu from './SidebarMenu'

export default function Sidebar() {
  return (
    <div id="sidebar" data-uk-offcanvas="overlay: true">
      <div className="uk-offcanvas-bar">

        <button className="uk-offcanvas-close" type="button" data-uk-close></button>

        <SidebarMenu />
      </div>
    </div>
  )
}