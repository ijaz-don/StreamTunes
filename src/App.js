import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home'
import Body from "./components/Body";
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Layout from './Pages/Layout'
import { Button } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
    <Header />

    
      {/* <nav>
        <Link to="/">Home</Link> | 
        <Link to="/Blog">Blog</Link> | 
        <Link to="/Contact">Contact</Link> | 
        <Link to="/Layout">Layout</Link>
        <Button variant="primary">click this</Button>
      </nav> */}
      {/* <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Blog" element={<Blog />}/>
          <Route path="/Contact" element={<Contact />}/>
          <Route path="/Layout" element={<Layout />}/>
        
      </Routes> */}
          <Body />

      <Footer />
    </BrowserRouter>
  );
}


              
