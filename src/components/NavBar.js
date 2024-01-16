import React from 'react'

function NavBar() {
  const links = ['home', 'about', 'projects']
  const linkRef = links.map((linkItem) => {
    return (
      <a href={'#' + '' + linkItem} key={linkItem}>
        {linkItem}
      </a>
    )
  })
  return (
    <nav>
      {/* display an <a> tag for each link here */}
      {linkRef}
    </nav>
  )
}

export default NavBar
