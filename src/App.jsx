import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutUs from './pages/About.jsx'
import Blogs from './pages/Blogs.jsx'
import React from 'react';
import SingleBlog from "./components/SingleBlog.jsx"
import Contact from './pages/Contact.jsx'
import ScrollToTop from './Components/ScrollToTop'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
        <ScrollToTop/>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path='/blogs' element={<Blogs/>} />
            <Route path="/blogs/:id" element={<SingleBlog />} />
            <Route path='/contact' element={<Contact/>}/>
            </Routes>
          <Footer />
        </BrowserRouter>  

      </div>
    </>
  )
}

export default App
