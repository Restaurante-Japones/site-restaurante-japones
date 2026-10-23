import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Cardapio from "./pages/Cardapio"; 
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className=" flex flex-col min-h-screen justify-between bg-zinc-900 ">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/" element={<Cardapio/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App