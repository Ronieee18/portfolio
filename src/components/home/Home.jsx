import React,{useRef,useState,useEffect} from 'react'
import profile from './pfp.png'
import TypingEffect from '../utils/Type'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-solid-svg-icons'
import './home.css'
import About from './About'

function Home() {
    const [isSmallScreen,setIsSmallScreen]=useState(false);
    useEffect(()=>{
      const handleResize=()=>{
        setIsSmallScreen(window.innerWidth<750);
      }
      handleResize();
      window.addEventListener('resize',handleResize);

      return ()=>{
        window.removeEventListener('resize',handleResize);
      }

    },[])
  
  return (
    <>
    <div className={`flex max-[680px]:flex-col gap-x-32 max-[780px]:gap-x-24 justify-center items-center h-[100vh] mb-0 `}  id='home'>
    {isSmallScreen && <div className={`image`}>
              <img className='rounded-lg max' src={profile} alt="" height={250} width={250} />
            </div>}
        
           <div className=''>
            <h1 className='text-[30px] text-left dark:text-white'>Hello, there</h1>
            <h1 className='text-[50px] max-[640px]:text-[35px] text-left'>I am <TypingEffect text='Ronit Parwani' className='text-[50px] max-[640px]:text-[40px] font-serif text-[#fb8500]' typingSpeed={150}/></h1>
            <h1 className='text-[30px] text-[#ee6c4d] text-left max-[640px]:text-center max-[640px]:text-[24px]'>a Full Stack Web-Developer</h1>
            <div className=' mt-5 flex flex-row gap-x-5'>
              <a href="https://www.instagram.com/ronitparwani.18?igsh=NHhmbXVzcWdyMjg=" className='hover:translate-y-[-6px]' target='_blank'>
                <img src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png"  height={30} width={30} alt="" />
              </a>
              <a href="https://github.com/Ronieee18" target='_blank' className='hover:translate-y-[-6px]'>
                <img src="https://cdn-icons-png.flaticon.com/128/25/25657.png" height={30} width={30} alt="" />
              </a>

              <a className='hover:translate-y-[-6px]' href="https://www.linkedin.com/in/ronit-parwani-a892b42b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'>
                <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" height={30} width={30} alt="" />
              </a>
              <a className='hover:translate-y-[-6px]' href=" https://x.com/ronitparwani18?t=PCKoppuw7631qWnnkvVVxA&s=08" target='_blank'>

              <img src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png" height={30} className='hover:translate-y-[-6px]' width={30} alt="" />
                </a>
            </div>
            </div>
            


            {!isSmallScreen && <div className={`image`}>
              <img className='rounded-lg' src={profile} alt="" height={250} width={250} />
            </div>}

        
    </div>
    
    </>
  )
}

export default Home