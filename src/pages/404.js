import React from "react"
import Layout from "../components/Layout"
import errorStyle from "./error.module.css"
import Head from "../components/Head"

const PageNotFound = ({ location }) => {
  return (
    <Layout>
      <Head title={"Error 404"} />
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
