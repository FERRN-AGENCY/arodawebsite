import React from 'react'
import { Hero,Ecosystem, Explore }  from "../components" ;
import { Footer, Faq } from "../constants" ;

const Home = () => {
  return (
    <div>
      <Hero />
      <Ecosystem />
      <Explore />
      <Faq />
      <Footer />
    </div>
  )
}

export default Home