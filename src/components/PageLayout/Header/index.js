import React from "react"
import PropTypes from "prop-types"
import Link from "next/link"
/* Emerald */
import Nav from "emerald-ui/lib/Nav"
import Navbar from "emerald-ui/lib/Navbar"
/* Styles */
import "./style.scss"

function Header({ navItems }) {
  return (
    <div id="Header">
      <Navbar
        breakAt="sm"
        className="page-header black"
        barClassName="container"
        fixedAtTop
      >
        <Navbar.Brand>
          <Link href="/">
            <a>
              <img src="/static/logo.svg" alt="Logo" />
              <img src="/static/logo-text.svg" alt="Condor Labs" />
            </a>
          </Link>
        </Navbar.Brand>

        <Nav grow collapsible className="nav-menu">
          {navItems.map((item, i) => (
            <Link key={`nav-item-${i}`} href={item.path}>
              <a>{item.name}</a>
            </Link>
          ))}
        </Nav>
      </Navbar>
    </div>
  )
}

Header.propTypes = {
  navItems: PropTypes.array.isRequired,
}

export default Header
