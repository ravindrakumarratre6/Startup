import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Startup from "./Components/Startup";
import Investor from "./Components/Investor";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Addlisting from "./Components/Addlisting";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/startup/" element={<Startup/>}/>
      <Route path="/investor" element={<Investor/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/login" element ={<Login/>}/>
      <Route path="/register" element={<Addlisting/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
