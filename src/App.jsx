import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Cardapio from "./pages/Cardapio"; 

const App = () => {
  return (
    <Router>
      <div className="">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/" element={<Cardapio/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App