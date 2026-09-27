import React from 'react';
import Home from "./pages/Home";
import Merchants from "./pages/Merchants";
import Business from "./pages/Business";
import FAQ from "./pages/FAQ";
import Community from "./pages/Community";  
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App() {
  const path = window.location.pathname;

  if (path === "/merchants") return <Merchants />;
  if (path === "/business") return <Business />;
  if (path === "/faq") return <FAQ />;
  if (path === "/community") return <Community />;
  if (path === "/blog") return <Blog />;
  if (path === "/contact") return <Contact />;
  return <Home />;
}

export default App;
