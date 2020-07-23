import React from 'react';
import {Helmet} from "react-helmet"
import "../styles/goorder.scss"

 
export default function OrderButtonModal(){

 
    return (
      <div>

      <Helmet>
      <script src="https://store.goorder.pl/goorder.js"></script>
      </Helmet>
      

      <button id={`goorderButton`} className={`goorder`} data-goorder-open data-goorder-modal="1" data-src="https://bullpub.goorder.pl">

        <img id={`widget-logo`} src="https://www.datocms-assets.com/26240/1588543443-goorder-icon.png"></img>

        </button>

      </div>
    );
}


