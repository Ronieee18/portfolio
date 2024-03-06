import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
// import { Outlet } from 'react-router-dom'
import Home from './components/home/Home'
import { useRef } from 'react'
import About from './components/home/About'
import MyProjects from './components/projects/MyProjects'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'


function App() {
  const [count, setCount] = useState(0)
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  

  return (
    <>
    
     <Header scrollToAbout={scrollToAbout} />
     <Home/>
     <About ref={aboutRef} />
     <MyProjects />
    <Skills/>
    <Contact/>
    
     
    </>
  )
}

export default App
