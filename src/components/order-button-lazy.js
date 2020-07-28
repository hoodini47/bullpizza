import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ClientSideOnlyLazy = React.lazy(() =>
  import("./order-button-modal")
)

const OrderButtonLazy = (props) => {
  const isSSR = typeof window === "undefined"

  const data = useStaticQuery(graphql`
  query MyGoorderQuery {
    LangPL: datoCmsNavMobile(locale: {eq: "pl"}) {
      order
      home
      menu
      location
      terms
    }
    LangEN: datoCmsNavMobile(locale: {eq: "en"}) {
      order
      home
      menu
      location
      terms
    }
  }
  `)

  let allData;
  props.langChosen ? allData = data.LangEN : allData = data.LangPL;

  return (
    <div id={`widget-wrapper`}>
    <a onClick={() => {
                            document.getElementById('goorderButton').click();
                            props.setNavState(false)
                            }
                          }
     id={`orderText`} className={`${props.navScrolled ? "order-text-light" : "order-text-dark"}`}>
      {allData.order}
      </a>
      {!isSSR && (
        <React.Suspense fallback={<div />}>
          <ClientSideOnlyLazy />
        </React.Suspense>
      )}
    </div>
  )
}

export default OrderButtonLazy