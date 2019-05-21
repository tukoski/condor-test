import React from "react"
import PropTypes from "prop-types"
/* Components */
import Header from "./Header"
import Footer from "./Footer"
/* Styles */
import "emerald-ui/lib/styles.css"
import "../../styles/main.scss"
import "./style.scss"

function PageLayout({ children, navItems }) {
  return (
    <div id="PageLayout" className="full-height">
      <Header navItems={navItems} />

      <div className="content container">{children}</div>

      <Footer />
    </div>
  )
}

PageLayout.propTypes = {
  children: PropTypes.element.isRequired,
  navItems: PropTypes.array.isRequired,
}

export default PageLayout
