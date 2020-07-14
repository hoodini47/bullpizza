import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/menu.scss"
import MainMenu from "./main-menu"
import Location from "./location"

export const Menu = (props) => {

  const data = useStaticQuery(graphql`
  query MyMenuQuery {
    LangPL: datoCmsMenu(locale: {eq: "pl"}) {
      menuSlogan
      menuHeader
    }
    LangEN: datoCmsMenu(locale: {eq: "en"}) {
      menuSlogan
      menuHeader
    }
  }
  `)

  let allData;
  props.langChosen ? allData = data.LangEN : allData = data.LangPL;

 return (
  <section id="menu" className={`menu-section`}>
    <div className={`menu-wrapper`}>

      <h4>
        {allData.menuSlogan}
      </h4>

      <h2>
        {allData.menuHeader}
      </h2>

        <MainMenu {...props}/>

    </div>


    <Location {...props} />

  </section>


 )
}


export default Menu



