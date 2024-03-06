import React,{useRef, useState} from 'react'
import './header.css'
import profile from './profile.png'
import {Link, useNavigate} from 'react-router-dom'
import About from '../home/About';



function Header({ scrollToAbout }) {
  const [showMenu,setShowMenu]=useState(false);
  const handleMenu=()=>{
    setShowMenu(!showMenu);
  }
    // const navigate=useNavigate();
    const scrollToProjects = () => {
        // Scroll to the Projects section
        const projectsSection = document.getElementById('projects-section');
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
      };
      const scrollToSkills = () => {
        // Scroll to the Skills section
        const skillSection = document.getElementById('skill-section');  
        if (skillSection) {
          skillSection.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const scrollToTop = () => {
        // Scroll to the Skills section
        const home = document.getElementById('home');  
        if (home) {
          home.scrollIntoView({ behavior: 'smooth' });
        }
      };
      
      const scrollToContact=()=>{
        const contact=document.getElementById('contact');
        if(contact){
          contact.scrollIntoView({behavior:"smooth"})
        }
      }
    
    
  return (
    <>
    <div className='header-container pt-1'>
    <div className='flex justify-between pb-1 pt-2 border-b border-gray-500'>
        <div className="flex justify-center gap-3 ml-3  logo font-bold text-lg">
            <img src={profile} alt="" height={40} width={40} />
           <p className='text-center mt-1'> Ronit Parwani</p>
        </div>
        <div className=''>
            <nav className='navbar' >
              <div className='' style={{ backgroundColor: 'white' }}>
              {showMenu&& 
              <ul className='menu-list absolute flex flex-col gap-10 text-gray-600 min-[620px]:hidden font-semibold text-xl right-10 top-16 z-10  w-40 h-[100vh]'>
                  <li onClick={scrollToTop}>Home</li>
                
                  <li>
                  <button className="about-link " onClick={scrollToAbout}>About</button>
                  </li>
                  <li onClick={scrollToProjects}>
                  Projects
                  </li>
                  <li onClick={scrollToSkills}>Skills</li>
                  <li onClick={scrollToContact}>Contact</li>
              </ul>
              }</div>
                <ul className='flex gap-7 text-gray-600 font-semibold text-lg max-[620px]:hidden'>
                    <li onClick={scrollToTop}>Home</li>
                   
                    <li>
                    <button className="about-link " onClick={scrollToAbout}>About</button>
                    </li>
                    <li onClick={scrollToProjects}>
                    Projects
                    </li>
                    <li onClick={scrollToSkills}>Skills</li>
                    <li onClick={scrollToContact}>Contact</li>
                </ul>
                <img 
                src="https://cdn-icons-png.flaticon.com/128/11410/11410811.png" 
                className='hamburger hidden max-[620px]:block'
                onClick={handleMenu}
                 alt=""
                 width={40}
                 height={40}

                 />
            </nav>
        </div>
    </div>
    </div>
    </>
  )
}

export default Header