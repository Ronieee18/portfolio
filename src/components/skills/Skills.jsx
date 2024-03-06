import React,{useRef,useEffect, useState} from 'react'
import './skills.css'

function Skills() {
    const frontendSpansRef = useRef([]);
    const backendSpansRef = useRef([]);
    const toolsSpansRef = useRef([]);
    const softSkillsSpansRef = useRef([]);

    const [activeSkill,setactiveSkill]=useState('frontend');
    const [isSmallScreen,setIsSmallScreen]=useState(false);

    

    useEffect(() => {
        const progress = (spansRef) => {
            spansRef.current.forEach(span => {
                const width = parseInt(span.dataset.progress);
                let currentWidth = 0;
                const id = setInterval(() => {
                    if (currentWidth >= width) {
                        clearInterval(id);
                    } else {
                        currentWidth++;
                        span.style.width = currentWidth + '%';
                        span.textContent = currentWidth + '%';
                    }
                }, 10);
            });
        };

        switch (activeSkill) {
            case 'frontend':
                progress(frontendSpansRef);
                break;
            case 'backend':
                progress(backendSpansRef);
                break;
            case 'tools':
                progress(toolsSpansRef);
                break;
            case 'softskills':
                progress(softSkillsSpansRef);
                break;
            default:
                break;
        }
    }, [activeSkill]);

    useEffect(()=>{
      const handleResize=()=>{
        setIsSmallScreen(window.innerWidth<880);
      }
      handleResize();
      window.addEventListener('resize',handleResize);

      return ()=>{
        window.removeEventListener('resize',handleResize);
      }

    },[])

  const toggleSkill = (skill) => {
    setactiveSkill(skill);
    // console.log(frontend)
};
  return (
    <>
    <div id='skill-section' className=' my-10  w-full '>
        <h1 className='text-center text-3xl font-semibold mb-2 tracking-wide'>Skills</h1>
        <hr className='mb-8 bg-black h-[0.5px]' />
        <div className='flex flex-wrap justify-center ml-20 max-[840px]:ml-0 gap-x-20 gap-y-12 '>
            {!isSmallScreen && <div className='text-xl'>
                <div className='flex gap-10 mb-2 '>
                    <button
                    onClick={()=>{
                        toggleSkill('frontend')
                    }}
                    className={`${activeSkill==='frontend'?'bg-yellow-500 underline':''} p-3 border-2 border-gray-500 rounded-md w-28 h-20 `}>Frontend</button>
                    <button
                    onClick={()=>{
                        toggleSkill('backend')
                    }}
                    className={`${activeSkill==='backend'?'bg-yellow-500 underline':''} p-3 border-2 border-gray-500 rounded-md w-28 h-20`}>Backend</button>
                </div>
                <div className='flex gap-10'>
                    <button 
                    onClick={()=>{
                        toggleSkill('tools')
                    }}
                    className={`${activeSkill==='tools'?'bg-yellow-500 underline':''} p-3 border-2 border-gray-500 rounded-md w-28 h-20`}>Tools</button>
                    <button
                    onClick={()=>{
                        toggleSkill('softskills')
                    }}
                    className={` ${activeSkill==='softskills'?'bg-yellow-500 underline':''} p-3 border-2 border-gray-500 rounded-md w-28 h-20`}>Soft Skills</button>
                </div>
            </div>}
            <div className={`${activeSkill!=='frontend' ? 'hidden' : ''} skill-box frontend border-2 p-5 border-black rounded-md`}>
                <h1 className='text-left'>Frontend</h1>
                <hr  className='h-1 bg-gray-600 my-2'/>

                <p className='my-3'>HTML5-  
                    <div class="inline-block animated-progress progress-blue">
                        <span data-progress="90" ref={el => (frontendSpansRef.current[0] = el)}></span>
                    </div></p>


                    <p className='my-3'>CSS-  
                    <div class="inline-block animated-progress progress-blue">
                        <span data-progress="85" ref={el => (frontendSpansRef.current[1] = el)}></span>
                    </div></p>

                    <p className='my-3'>Javascript-      
                    <div class="inline-block animated-progress progress-blue">
                        <span data-progress="75" ref={el => (frontendSpansRef.current[2] = el)}></span>
                    </div></p>

                    <p className='my-3'>Tailwind CSS-  
                    <div class="inline-block animated-progress progress-blue">
                        <span data-progress="80" ref={el => (frontendSpansRef.current[3] = el)}></span>
                    </div></p>
            </div>

            <div className={`${activeSkill!=='backend' ? 'hidden' : ''} skill-box backend border-2 p-5 border-black rounded-md`}>
                <h1 className='text-left'>Backend</h1>
                <hr  className='h-1 bg-gray-600 my-2'/>

                <p className='my-3'>MongoDB-  
                    <div class="inline-block animated-progress progress-blue">
                        <span data-progress="75" ref={el => (backendSpansRef.current[0] = el)}></span>
                    </div></p>


                    <p className='my-3'>NodeJS-  
                    <div class="inline-block animated-progress progress-blue">
                        <span data-progress="80" ref={el => (backendSpansRef.current[1] = el)}></span>
                    </div></p>

                    <p className='my-3'>ExpressJS-      
                    <div class="inline-block animated-progress progress-blue">
                        <span data-progress="80" ref={el => (backendSpansRef.current[2] = el)}></span>
                    </div></p>

                    
            </div>


            <div className={`${activeSkill!=='tools' ? 'hidden' : ''} skill-box Tools border-2 p-5 border-black rounded-md`}>
                <h1 className='text-left'>Tools</h1>
                <hr  className='h-1 bg-gray-600 my-2'/>

                <p className='my-3'>Github-
                    <div class="inline-block animated-progress progress-blue">
                        <span data-progress="80" ref={el => (toolsSpansRef.current[0] = el)}></span>
                    </div></p>


                    <p className='my-3'>Visual Studio Code-
                    <div class="inline-block animated-progress progress-blue">
                        <span data-progress="90" ref={el => (toolsSpansRef.current[1] = el)}></span>
                    </div></p>

                    <p className='my-3'>Responsive Design-      
                    <div class="inline-block animated-progress progress-blue">
                        <span data-progress="70" ref={el => (toolsSpansRef.current[2] = el)}></span>
                    </div></p>

                    
            </div>


            <div className={`${activeSkill!=='softskills' ? 'hidden' : ''} skill-box Softskills border-2 p-5 border-black rounded-md`}>
                <h1 className='text-left'>Softskills</h1>
                <hr  className='h-1 bg-gray-600 my-2'/>

                <p className='my-3'>Communication Skills- 
                    <div class="inline-block animated-progress progress-blue">
                        <span data-progress="70" ref={el => (softSkillsSpansRef.current[0] = el)}></span>
                    </div></p>


                    <p className='my-3'>Teamwork-  
                    <div class="inline-block animated-progress progress-blue">
                        <span data-progress="80" ref={el => (softSkillsSpansRef.current[1] = el)}></span>
                    </div></p>

                    <p className='my-3'>Problem Solving- 
                    <div class="inline-block animated-progress progress-blue">
                        <span data-progress="75" ref={el => (softSkillsSpansRef.current[2] = el)}></span>
                    </div></p>

                   
            </div>
            {isSmallScreen && <div className='text-xl'>
                <div className='flex gap-10 mb-2 '>
                    <button
                    onClick={()=>{
                        toggleSkill('frontend')
                    }}
                    className={`${activeSkill==='frontend'?'bg-yellow-500 underline':''} p-3 border-2 border-gray-500 rounded-md w-28 h-20 `}>Frontend</button>
                    <button
                    onClick={()=>{
                        toggleSkill('backend')
                    }}
                    className={`${activeSkill==='backend'?'bg-yellow-500 underline':''} p-3 border-2 border-gray-500 rounded-md w-28 h-20`}>Backend</button>
                </div>
                <div className='flex gap-10'>
                    <button 
                    onClick={()=>{
                        toggleSkill('tools')
                    }}
                    className={`${activeSkill==='tools'?'bg-yellow-500 underline':''} p-3 border-2 border-gray-500 rounded-md w-28 h-20`}>Tools</button>
                    <button
                    onClick={()=>{
                        toggleSkill('softskills')
                    }}
                    className={` ${activeSkill==='softskills'?'bg-yellow-500 underline':''} p-3 border-2 border-gray-500 rounded-md w-28 h-20`}>Soft Skills</button>
                </div>
            </div>}
        </div>
    
    </div>
    </>
  )
}

export default Skills