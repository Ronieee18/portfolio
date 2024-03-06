import React, { useRef, useState, useEffect, forwardRef } from 'react';
import './About.css'; // Import your CSS file with styles for the About section

const About = forwardRef((props, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div
      className={`m-auto mb-10 border-4 shadow-2xl shadow-gray-500 rounded-lg justify-center w-3/4 p-5 about-card ${isVisible ? 'active' : ''}`}
      ref={ref}
    >
      <h2 className='text-3xl underline mb-5 font-mono'>About Me</h2>
      <p className='text-lg'>Hello there! 👋 I'm Ronit Parwani, a dedicated MERN (MongoDB, Express.js, React, Node.js) developer with a keen interest in crafting robust and scalable web applications. My coding journey has been enriched with experience in languages like C, C++, Python, and Java.</p>
      {showMore && (
        <p className='text-lg text-left mt-5 ml-5'>
          👨‍💻 My Tech Stack: <br />
          MERN Stack (MongoDB, Express.js, React, Node.js) <br />
          C, C++, Python, Java
        </p>
      )}
      <button className="mt-3 bg-yellow-500 hover:bg-yellow-700 text-black py-2 px-4 rounded" onClick={toggleShowMore}>
        {showMore ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
});

export default About;
