import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "../styles/section-welcome.scss"
import BbgSvgLogo from "../images/bullpizza-logo-large.inline.svg"
import ArrowLogo from "../images/arrow.inline.svg"
import scrollTo from 'gatsby-plugin-smoothscroll'
import Zoom from 'react-reveal/Zoom';


export const SectionWelcome = () => {

  const data =  useStaticQuery(graphql`
  query MyQuery {
    file(relativePath: {eq: "BullPizzaMainPhoto.jpeg"}) {
      childImageSharp {
        fluid(quality: 100, maxHeight: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  
`)

 return (
  <section id={`welcome`} className={`first-section`}>
    <Img fluid={data.file.childImageSharp.fluid} />

    <Zoom>
      <div className={`bullpizza-logo`}>
        <BbgSvgLogo />
      </div>
    </Zoom>
    
    <div className={`scroll-icon`} onClick={() => scrollTo('#menu')}>
      <span className={`arrow-container`}><ArrowLogo /></span>
    </div>
  </section>
 )
}

export default SectionWelcome



