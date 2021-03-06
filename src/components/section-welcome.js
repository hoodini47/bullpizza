import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "../styles/section-welcome.scss"
import BbgSvgLogo from "../images/bullpizza-logo-large.inline.svg"
import ArrowLogo from "../images/arrow.inline.svg"
import scrollTo from "gatsby-plugin-smoothscroll"
import Zoom from "react-reveal/Zoom"

export const SectionWelcome = () => {
  const data = useStaticQuery(graphql`
    query MyMainPhotoQuery {
      datoCmsMainPhoto {
        mainPhoto {
          fluid {
            src
          }
        }
      }
    }
  `)

  return (
    <section id={`welcome`} className={`first-section`}>
      <Img fluid={data.datoCmsMainPhoto.mainPhoto.fluid} />

      <Zoom>
        <div className={`bullpizza-logo`}>
          <BbgSvgLogo />
        </div>
      </Zoom>

      <div
        role="button"
        tabIndex={0}
        className={`scroll-icon`}
        onClick={() => scrollTo("#menu")}
      >
        <span className={`arrow-container`}>
          <ArrowLogo />
        </span>
      </div>
    </section>
  )
}

export default SectionWelcome
