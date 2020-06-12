import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import layoutStyle from "./layout.module.css"

const Layout = ({ children }) => {
  return (
    <div className={layoutStyle.container}>
      <div className={layoutStyle.content}>
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
