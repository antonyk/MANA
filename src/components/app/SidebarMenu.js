import React from 'react'

export default function SidebarMenu() {
  return (
    <>
      <h3>Title</h3>
      <ul class="uk-nav uk-nav-default">
        {/* map all components in the framework and return a link */}
        <li><a href="#">Active</a></li>
      </ul>
    </>
  )
}