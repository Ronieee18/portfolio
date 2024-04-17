import React,{useRef,useEffect,useState} from 'react'
import allinone from './allinone.png'
import blog from './blog.png'
import mytube from './mytube.png'
import '../home/About.css'
export default function MyProjects() {
    
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);
  
    useEffect(() => {
      const handleScroll = () => {
        if (cardRef.current) {
          const top = cardRef.current.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          setIsVisible(top < windowHeight);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Check visibility on initial render
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  return (
   <>
    <div id='projects-section' className='m-4 mb-5'>
        <h1  className='text-3xl font-semibold'>Projects</h1>
        <p className='text-lg italic mt-3'>"Projects are the fuel that ignites the engine of progress."</p>
        <div className='flex flex-wrap gap-x-28 justify-center'>
        {/* <div className={`shadow-2xl shadow-gray-800 relative card1 max-[660px]:mb-48 mt-10 ${isVisible ? 'active' : ''} `} ref={cardRef}>
                <img src={blog} alt="" height={250} width={250} />
                <div className='absolute rounded-xl  w-[250px] top-28 bg-white '>
                    <h1 className='font-serif text-lg p-2 tracking-wider	'>A Blog app</h1>
                    <hr className='h-[3px] bg-gray-400' />
                    <p className='text text-center'>A blogging app whose frontend is created with HTML,CSS,JavaScript,React and backend services are used from Appwrite</p>
                    <div className='flex gap-x-5 mt-3 justify-center'>
                        <a href="https://merry-moonbeam-2d858c.netlify.app" target='_blank'>
                    <button className="flex hover:underline  items-center bg-yellow-500 hover:bg-yellow-700 text-black py-1 px-3 rounded">
                        <img src="https://cdn-icons-png.flaticon.com/128/8944/8944297.png" class="mr-2 h-4 w-4" alt=""/>
                            Try Live </button></a>   
                            <a href="https://github.com/Ronieee18/blog-app" target='_blank'>                  
                    <button class="flex hover:underline  items-center border border-yellow-500 py-1 px-3 ">
                        <img src="https://cdn-icons-png.flaticon.com/128/25/25657.png" class="mr-2 h-5 w-5" alt=""/>
                        <span>See Code</span>
                    </button></a>
                    </div>

                   

                </div>
        </div> */}


        <div className={`shadow-2xl shadow-gray-800  relative card2 mt-10 ${isVisible ? 'active' : ''}` }>
                <img src={allinone} alt="" height={250} width={250} />
                <div className='absolute rounded-xl  w-[250px] top-28 bg-white '>
                    <h1 className='font-serif text-lg p-2 tracking-wider	'>Basic Utilities App</h1>
                    <hr className='h-[3px] bg-gray-400' />
                    <p className='text text-center'>
                    Harnessing the power of HTML, CSS, JavaScript, React, Redux, and Appwrite backend services, this application offers essential utilities such as password generation, currency conversion etc. 
                    </p>
                    <div className='flex gap-x-5 mt-3 justify-center'>
                        <a href="https://all-in-onee.netlify.app" target='_blank'>
                    <button className="flex hover:underline  items-center bg-yellow-500 hover:bg-yellow-700 text-black py-1 px-3 rounded">
                        <img src="https://cdn-icons-png.flaticon.com/128/8944/8944297.png" class="mr-2 h-4 w-4" alt=""/>
                            Try Live </button></a>  
                            <a href="https://github.com/Ronieee18/fullstack" target='_blank'>                  
                    <button class="flex hover:underline  items-center border border-yellow-500 py-1 px-3 ">
                        <img src="https://cdn-icons-png.flaticon.com/128/25/25657.png" class="mr-2 h-5 w-5" alt=""/>
                        <span>See Code</span>
                    </button></a>
                    </div>

                </div>
        </div>
    </div>
        <div className={`  flex flex-wrap gap-x-10  justify-center relative  card3 mt-[280px] ${isVisible ? 'active' : ''}`}>
                <img src={mytube} alt="" height={200} width={400} className='border border-gray-500 max-[690px]:w-[300px]'/>
                <div className=' rounded-xl  w-[250px] top-28 bg-white '>
                    <h1 className='font-serif text-lg p-2 tracking-wider	'>MYTUBE</h1>
                    <hr className='h-[3px] bg-gray-400' />
                    <p className='text text-center'>
                    A full-stack MERN application similar to YouTube, equipped with strong security features including JWTs and bcrypt.js for safeguarding user data.                    </p>
                    <div className='flex gap-x-5 mt-3 justify-center'>
                         <a href="https://github.com/Ronieee18/fullstack02-backend" target='_blank'>                  
                    <button class="flex hover:underline  items-center border border-yellow-500 py-1 px-3 ">
                        <img src="https://cdn-icons-png.flaticon.com/128/25/25657.png" class="mr-2 h-5 w-5" alt=""/>
                        <span>See Code</span>
                    </button></a>
                    </div>

                </div>
        </div>


        {/* edutech */}
        <div className={`  flex flex-wrap gap-x-10  justify-center relative  card3 mt-[100px] ${isVisible ? 'active' : ''}`}>
                <img src='edutech.png' alt="" height={200} width={400} className='border border-gray-500 max-[690px]:w-[300px]'/>
                <div className=' rounded-xl  w-[250px] top-28 bg-white '>
                    <h1 className='font-serif text-lg p-2 tracking-wide'>Edutech</h1>
                    <hr className='h-[3px] bg-gray-400' />
                    <p className='text text-center'>

                    "This project, built on the MERN stack, provides a user to a explore & learn wide range of courses across various categories. Additionally, it empowers users to become instructors, fostering a collaborative and diverse learning community."                     </p>
                    <div className='flex gap-x-5 mt-3 justify-center'>
                    <a href="https://edutechlearning.netlify.app/" target='_blank'>
                    <button className="flex hover:underline  items-center bg-yellow-500 hover:bg-yellow-700 text-black py-1 px-3 rounded">
                        <img src="https://cdn-icons-png.flaticon.com/128/8944/8944297.png" class="mr-2 h-4 w-4" alt=""/>
                            Try Live </button></a>  
                            <a href="https://github.com/Ronieee18?tab=repositories" target='_blank'>                  
                    <button className="flex hover:underline  items-center border border-yellow-500 py-1 px-3 ">
                        <img src="https://cdn-icons-png.flaticon.com/128/25/25657.png" class="mr-2 h-5 w-5" alt=""/>
                        <span>See Code</span>
                    </button></a>
                    </div>

                </div>
        </div>


        <div className={`  flex flex-wrap gap-x-10  justify-center relative  card3 mt-[100px] ${isVisible ? 'active' : ''}`}>
                <img src='chatbot.png' alt="" height={200} width={400} className='border border-gray-500 max-[690px]:w-[300px]'/>
                <div className=' rounded-xl  w-[250px] top-28 bg-white '>
                    <h1 className='font-serif text-lg p-2 tracking-wider	'>MERN Chatbot</h1>
                    <hr className='h-[3px] bg-gray-400' />
                    <p className='text text-center'>

                    "Experience an intuitive chatbot in our MERN application, powered by OpenAI's API and developed with guidance from YouTube tutorials."                     </p>
                    <div className='flex gap-x-5 mt-3 justify-center'>
                    <a href="https://mychatbott.netlify.app/" target='_blank'>
                    <button className="flex hover:underline  items-center bg-yellow-500 hover:bg-yellow-700 text-black py-1 px-3 rounded">
                        <img src="https://cdn-icons-png.flaticon.com/128/8944/8944297.png" class="mr-2 h-4 w-4" alt=""/>
                            Try Live </button></a>  
                            <a href="https://github.com/Ronieee18?tab=repositories" target='_blank'>                  
                    <button className="flex hover:underline  items-center border border-yellow-500 py-1 px-3 ">
                        <img src="https://cdn-icons-png.flaticon.com/128/25/25657.png" class="mr-2 h-5 w-5" alt=""/>
                        <span>See Code</span>
                    </button></a>
                    </div>

                </div>
        </div>
      </div>
   </>
  )
}
