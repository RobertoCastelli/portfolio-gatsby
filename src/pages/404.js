import React from "react"
import Layout from "../components/Layout"
import errorStyle from "./error.module.css"

const PageNotFound = ({ location }) => {
  return (
    <Layout>
      <div className={errorStyle.errorContainer}>
        <h1>ERROR 404</h1>
        <p>
          page not found at <span>{location.pathname}</span>
        </p>
      </div>
    </Layout>
  )
}

export default PageNotFound
