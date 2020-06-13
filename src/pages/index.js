import React from "react"
import Layout from "../components/Layout"
import indexStyle from "./index.module.css"
import "./index.css"
import { FaReact, FaGithubAlt, FaNodeJs } from "react-icons/fa"
import { GrGatsbyjs, GrGraphQl } from "react-icons/gr"
import { DiJavascript1 } from "react-icons/di"

export default function Home() {
  return (
    <Layout>
      <div>
        <h1># ABOUT ME</h1>
        <p>
          Hi, my name is Roberto and I'm a Project Manager. Since I was a
          youngster I had a passion for programming languages.
        </p>
        <p>
          Recently I decided to bring into fruition my avid interest in this
          field to enhance my career, putting every possible effort to achieve
          this goal and pursue this path.
        </p>
        <p>
          In the meantime, I'm writing a blog named "Diary of an impostor" to
          keep track of my progress, in the hopes of helping other people to
          share this adventure.
        </p>
      </div>
      <div>
        <h1># MASTERING</h1>
        <ul className={indexStyle.indexList}>
          <li>
            <DiJavascript1 /> JS (HTML/CSS)
          </li>
          <li>
            <FaReact /> REACT
          </li>
          <li>
            <GrGatsbyjs /> GATSBY & <GrGraphQl /> GRAPHQL
          </li>
          <li>
            <FaNodeJs /> NODE JS
          </li>
          <li>
            <FaGithubAlt /> GITHUB
          </li>
        </ul>
      </div>
    </Layout>
  )
}
