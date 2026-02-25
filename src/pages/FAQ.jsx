import React from 'react'
import { Hero }  from "../constants" ;
import { Footer } from "../constants" ;

const FAQ = () => {
  return (
    <div>
      <Hero 
        badgeText=""
        titlePart1="Get all the "
        titlePart2="you’re looking for"
        titleHighlight="answers "
        description="Get powerful business insights, expert tips, and game-changing strategies—delivered straight to your inbox. "
        primaryBtnText="I'm in"
        input= "input-tertiary"
        placeholder="Enter your email address"
        className="input"
        width= "width"
      />
      <Footer />
    </div>
  )
}

export default FAQ