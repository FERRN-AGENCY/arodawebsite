import React from 'react'
import { Hero }  from "../constants" ;
import { Footer } from "../constants" ;

const Blog = () => {
  return (
    <div>
      <Hero 
        badgeText=""
        titlePart1="Stay ahead with Aroda"
        titleHighlight=""
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

export default Blog