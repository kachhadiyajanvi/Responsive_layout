import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Blog from "./Blog"
import Service from "./Service"
import Team from "./Team"
import Page404 from './Page404';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/home" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/blog" element={ <Blog/> } />
        <Route path="/service" element={ <Service/> } />
        <Route path="/team" element={ <Team/> } />
        <Route path="/page404" element={ <Page404/> } />

      </Routes>
    </div>
  )
}


export default App;
