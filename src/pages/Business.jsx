import React from 'react'
import { Hero }  from "../constants" ;
import { Footer, Faq } from "../constants" ;

const Business = () => {
  return (
    <div>
      <Hero 
        badgeText="ARODA BUSINESS PRO"
        titlePart1="See what’s happening in your business."
        titleHighlight="Everyday. Anywhere."
        description="A marketplace designed to make buying and selling feel straightforward and dependable."
        secondaryBtnText="Start Free Trial"
        primaryBtnText="Sign In"
        input="input"
      />
      <Faq />
      <Footer />
    </div>
  )
}

export default Business