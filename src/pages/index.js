import React from "react"
import Layout from "../components/Layout"
import indexStyle from "./index.module.css"
import "./index.css"
import { GrGatsbyjs, GrGraphQl } from "react-icons/gr"
import { FaReact, FaGithubAlt, FaHtml5, FaCss3Alt } from "react-icons/fa"
import { SiJavascript, SiTypescript } from "react-icons/si"
import Head from "../components/Head"

export default function Home() {
  return (
    <Layout>
      <Head title={"Home"} />
      <div>
        <h1># ABOUT ME</h1>
        <p>
          Hi, my name is Roberto and I'm a Project Manager. Since I was a
          youngster I had a passion for programming languages.
        </p>
        <p>
          In 2019 I decided to bring into fruition my avid interest in this
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
          <a
            href="https://developer.mozilla.org/it/docs/Web/JavaScript"
            target="_black"
            rel="noreferrer noopener"
          >
            <li>
              <SiJavascript /> JAVASCRIPT
            </li>
          </a>
          <a
            href="https://developer.mozilla.org/it/docs/Web/JavaScript"
            target="_black"
            rel="noreferrer noopener"
          >
            <li>
              <FaHtml5 /> HTML + <FaCss3Alt /> CSS
            </li>
          </a>
          <a
            href="https://it.reactjs.org/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <li>
              <FaReact /> REACT
            </li>
          </a>
          <a
            href="https://github.com/RobertoCastelli"
            target="_blank"
            rel="noreferrer noopener"
          >
            <li>
              <FaGithubAlt /> GIT
            </li>
          </a>
        </ul>
        <h1># LEARNING</h1>
        <ul className={indexStyle.indexList}>
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <li>
              <SiTypescript /> TYPESCRIPT
            </li>
          </a>
          <a
            href="https://graphql.org/"
            target="_blank"
            rel="noreferrer noreferrer"
          >
            <li>
              <GrGraphQl /> GRAPHQL
            </li>
          </a>
          <a
            href="https://www.gatsbyjs.org/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <li>
              <GrGatsbyjs /> GATSBY
            </li>
          </a>
        </ul>
      </div>
    </Layout>
  )
}
