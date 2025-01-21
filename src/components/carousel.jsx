import React, { useState } from 'react';
import '../assets/Home.css';
import '../assets/about.css';
import DoctorsSection from './doctor';
import ContactForm from './contactform';
import Footer from './footer';
import GetStarted from './getstart';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Active index for titles
  const [descIndex, setDescIndex] = useState(12); // Active index for descriptions
  const [orders, setOrders] = useState([0, 1, 2, 3, 4]);
  const [isLoading, setIsLoading] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [isAboutLoading, setIsAboutLoading] = useState(false);
  const [showGetStarted, setShowGetStarted] = useState(false);

  const courses = [
    "internal medicine i",
    "biomedical technology",
    "introduction to data analytics",
    "introduction to marketing",
    "landscape & wildlife photography",
  ];

  const descriptions = [
    "Explore the intricacies of diagnosing and treating adult diseases! From common ailments to complex medical conditions, gain a comprehensive understanding of internal medicine. Clinical rotations and case-based learning will sharpen your diagnostic skills. Become a compassionate healthcare provider and make a difference in the lives of patients!",
    "Discover cutting-edge advancements in medical devices, diagnostics, and therapies. From artificial organs to precision medicine, explore the intersection of biology and technology. Hands-on lab experiences and industry insights pave the way for a rewarding career in transforming healthcare. Be at the forefront of innovation and make a lasting impact on human well-being!",
    "Unlock the power of data and gain in-demand skills. Learn data collection, analysis, visualization, and interpretation. No prior experience required. Get hands-on with Python, R, and Excel. Make informed decisions based on data. Start your journey to becoming a data-driven professional!",
    "Gain insights into consumer behavior, market research, branding, and advertising strategies. Hands-on projects and case studies empower you to develop effective marketing campaigns. Unlock your creative potential and embark on a dynamic career in the ever-evolving marketing landscape!",
    "Capture breathtaking moments in nature and wildlife habitats. Learn composition, lighting, and advanced techniques from expert photographers. Unleash your creativity and craft stunning images that tell compelling stories. Ignite your passion for photography and explore the beauty of the natural world!",
  ];

  const images = [
    "https://cbx-prod.b-cdn.net/COLOURBOX61292910.jpg?width=800&height=800&quality=70",
    "https://static.vecteezy.com/system/resources/previews/024/072/503/large_2x/portrait-of-a-beautiful-young-nurse-healthcare-generative-ai-photo.jpg",
    "https://img.freepik.com/free-photo/cinematic-portrait-man-working-healthcare-system-having-care-job_23-2151237521.jpg",
    "https://images.unsplash.com/photo-1638202993928-7267aad84c31?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhbHRoJTIwY2FyZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://media.istockphoto.com/id/1371009338/photo/portrait-of-confident-a-young-dentist-working-in-his-consulting-room.jpg?s=612x612&w=0&k=20&c=I212vN7lPpAOwGKRoEY9kYWunJaMj9vH2g-8YBGc2MI=",
  ];

  const updateOrders = (direction) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        direction === 'next'
          ? (order + 1) % 5
          : (order - 1 + 5) % 5
      )
    );
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + courses.length) % courses.length);
    setDescIndex((prev) => (prev - 1 + descriptions.length) % descriptions.length);
    updateOrders('prev');
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % courses.length);
    setDescIndex((prev) => (prev + 1) % descriptions.length);
    updateOrders('next');
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      window.location.href = '/login';
    }, 500);
  };

  const handleAboutClick = () => {
    setIsAboutLoading(true);
    
    setTimeout(() => {
      setIsAboutLoading(false);
      setShowAbout(true);
    }, 500);
  };

  const handleGetStartedClick = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      setShowGetStarted(true);
    }, 500);
  };

  return (
    <div className="Carousel-Container">
      {!showAbout && !showGetStarted ? (
        // Main carousel content
        <>
          <div className="home-popular">
            <h3>Golden Health Care</h3>

            <div className="slider">
              <div className="slider-prev" onClick={handlePrev}></div>
              <ul>
                {images.map((src, index) => (
                  <li key={index} style={{ order: orders[index] }}>
                    <img
                      className={`item ${
                        orders[index] === 0
                          ? 'small1'
                          : orders[index] === 1
                          ? 'big1'
                          : orders[index] === 2
                          ? 'focus'
                          : orders[index] === 3
                          ? 'big2'
                          : 'small2'
                      }`}
                      src={src}
                      alt={`Course ${index}`}
                    />
                  </li>
                ))}
              </ul>
              <div className="slider-next" onClick={handleNext}></div>
            </div>

            <div className="description">
              {courses.map((course, index) => (
                <h3
                  key={index}
                  data-index={index}
                  className={activeIndex === index ? 'active' : ''}
                >
                  {course}
                </h3>
              ))}
            </div>

            <div className="further-description">
              {descriptions.map((desc, index) => (
                <h2
                  key={index}
                  data-index={index + 10}
                  className={descIndex === index + 10 ? 'active' : ''}
                >
                  {desc}
                </h2>
              ))}
            </div>
          </div>

          <div className="home-header">
            <h1>Welcome</h1>
            <h1>to our</h1>
            <h1>Health Care</h1>
          </div>

          
        </>
      ) : showAbout ? (
        // About page content
        <div className="about-page">
          <button 
            className="back-button"
            onClick={() => setShowAbout(false)}
          >
            Back to Home
          </button>
          <div className="about-content">
            <DoctorsSection />
            <ContactForm />
            <Footer />
          </div>
        </div>
      ) : (
        // Get Started content
        <GetStarted />
      )}

      {(isLoading || isAboutLoading) && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
        </div>
      )}
      <div>
            <button 
              type="button" 
              className="btn-login-container" 
              data-bs-toggle="popover" 
              data-bs-title="Popover title" 
              disabled={isLoading}
            >
              <a 
                className="btn-login" 
                href="/login" 
                onClick={handleLoginClick}
                style={{ pointerEvents: isLoading ? 'none' : 'auto' }}
              >
                Login/Register
              </a>
            </button>
          </div>

          <div>
            <button 
              type="button" 
              className="btn-about-container" 
              data-bs-toggle="popover" 
              data-bs-title="Popover title" 
              disabled={isLoading}
            >
              <a 
                className="btn-about" 
                onClick={handleAboutClick}
                style={{ pointerEvents: isLoading ? 'none' : 'auto', cursor: 'pointer' }}
              >
                About Us
              </a>
            </button>
          </div>
          <div>
            <button 
              type="button" 
              className="btn-getstarted-container" 
              data-bs-toggle="popover" 
              data-bs-title="Popover title" 
              disabled={isLoading}
            >
              <a 
                className="btn-getstarted" 
                href='/getstarted'
                style={{ pointerEvents: isLoading ? 'none' : 'auto', cursor: 'pointer' }}
              >
                Get Started 
              </a>
            </button>
          </div>
    </div>
    
  );
  
};

export default Carousel;


