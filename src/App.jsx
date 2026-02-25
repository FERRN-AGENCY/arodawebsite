import Home from "./pages/Home";
import Merchants from "./pages/Merchants";
import Business from "./pages/Business";
import FAQ from "./pages/FAQ";
import Community from "./pages/Community";  
import Blog from "./pages/Blog";

function App() {
  const path = window.location.pathname;

  if (path === "/merchants") return <Merchants />;
  if (path === "/business") return <Business />;
  if (path === "/faq") return <FAQ />;
  if (path === "/community") return <Community />;
  if (path === "/blog") return <Blog />;
  return <Home />;
}

export default App;
