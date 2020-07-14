import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/menu.scss"
import Fade from 'react-reveal/Fade';


export const MainMenu = (props) => {

    const data = useStaticQuery(graphql`
    query MyMainMenuQuery {
      LangPL: datoCmsMenuItem(locale: {eq: "pl"}) {
        menuItem {
          fluid {
            src
            srcSet
            height
            width
            base64
          }
        }
      }
      LangEN: datoCmsMenuItem(locale: {eq: "en"}) {
        menuItem {
          fluid {
            src
            srcSet
            height
            width
            base64
          }
        }
      }
    }
  `)


    let allData;

    props.langChosen ? allData = data.LangEN : allData = data.LangPL;


 return (
  
  <div className={`main-menu`}>

    <div className={`menu-item-container`}>

    <Fade bottom delay={100} duration={600}>
    <Img fluid={allData.menuItem.fluid} />
    </Fade>

    </div>

  </div>
 )
}

export default MainMenu



