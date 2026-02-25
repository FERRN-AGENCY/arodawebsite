import React from 'react'
import { Hero }  from "../constants" ;
import { Footer } from "../constants" ;

const Community = () => {
  return (
    <div>
      <Hero 
        badgeText=""
        titlePart1="Join the Aroda Family"
        titleHighlight=""
        description="A home for business owners and entrepreneurs to connect, learn, and grow. Whether you're starting out or scaling up, find support, inspiration, and game-changing insights here."
        primaryBtnText="Join"
        input= "input"
        placeholder="Enter your email address"
        className="input"
        width= "width"
      />
      <Footer />
    </div>
  )
}

export default Community