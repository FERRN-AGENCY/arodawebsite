import React from 'react'
import { Market} from "../components" ;
import { Hero}  from "../constants" ;
import { Footer, Faq } from "../constants" ;

const Merchants = () => {
  return (
    <div>
      <Hero 
        badgeText="ARODA MARKETPLACE"
        titlePart1="Buy and sell with"
        title="confidence"
        description="A marketplace designed to make buying and selling feel straightforward and dependable."
        secondaryBtnText="Become a Verified Merchant"
        primaryBtnText="Shop on Aroda"
        input="input"
      />
      <Market />
      <Faq />
      <Footer />
    </div>
  )
}

export default Merchants