import React, { useEffect, useRef } from 'react';
import paper from 'paper';
import "../assets/login.scss";

const Login = () => {
  const canvasRef = useRef(null);
  const shapeGroupRef = useRef(null);
  
  useEffect(() => {
    // Initialize Paper.js
    paper.setup(canvasRef.current);
    
    // Initialize variables here
    let canvasWidth, canvasHeight, canvasMiddleX, canvasMiddleY;
    let positionArray = [];
    // Create the group after Paper.js is initialized
    shapeGroupRef.current = new paper.Group();
    
    // Initialize shapes and setup event handlers
    initializeShapes();
    paper.view.onFrame = paperOnFrame;
    paper.view.onResize = paperOnResize;
    
    // jQuery animations converted to React
    const handleGoRight = () => {
      document.getElementById('slideBox').style.marginLeft = '0';
      document.querySelector('.topLayer').style.marginLeft = '100%';
    };

    const handleGoLeft = () => {
      const marginLeft = window.innerWidth > 769 ? '50%' : '20%';
      document.getElementById('slideBox').style.marginLeft = marginLeft;
      document.querySelector('.topLayer').style.marginLeft = '0';
    };

    // Add event listeners
    document.getElementById('goRight').addEventListener('click', handleGoRight);
    document.getElementById('goLeft').addEventListener('click', handleGoLeft);

    // Cleanup function
    return () => {
      document.getElementById('goRight').removeEventListener('click', handleGoRight);
      document.getElementById('goLeft').removeEventListener('click', handleGoLeft);
    };
  }, []); // Empty dependency array means this runs once on mount

  // ... existing Paper.js variables and functions ...
  let canvasWidth, canvasHeight, canvasMiddleX, canvasMiddleY;
  let positionArray = [];

  // Paper.js functions (kept the same, just moved inside component)
  const getCanvasBounds = () => {
    // Get current canvas size
    canvasWidth = paper.view.size.width;
    canvasHeight = paper.view.size.height;
    canvasMiddleX = canvasWidth / 2;
    canvasMiddleY = canvasHeight / 2;
    // Set path position
    var position1 = {
      x: (canvasMiddleX / 2) + 100,
      y: 100, 
    };

    var position2 = {
      x: 200,
      y: canvasMiddleY, 
    };

    var position3 = {
      x: (canvasMiddleX - 50) + (canvasMiddleX / 2),
      y: 150, 
    };

    var position4 = {
      x: 0,
      y: canvasMiddleY + 100, 
    };

    var position5 = {
      x: canvasWidth - 130,
      y: canvasHeight - 75, 
    };

    var position6 = {
      x: canvasMiddleX + 80,
      y: canvasHeight - 50, 
    };
    
    var position7 = {
      x: canvasWidth + 60,
      y: canvasMiddleY - 50, 
    };
    
    var position8 = {
      x: canvasMiddleX + 100,
      y: canvasMiddleY + 100, 
    };

    positionArray = [position3, position2, position5, position4, position1, position6, position7, position8];
  };

  const initializeShapes = () => {
    // Get Canvas Bounds
    getCanvasBounds();

    const shapePathData = [
      'M231,352l445-156L600,0L452,54L331,3L0,48L231,352', 
      'M0,0l64,219L29,343l535,30L478,37l-133,4L0,0z', 
      'M0,65l16,138l96,107l270-2L470,0L337,4L0,65z',
      'M333,0L0,94l64,219L29,437l570-151l-196-42L333,0',
      'M331.9,3.6l-331,45l231,304l445-156l-76-196l-148,54L331.9,3.6z',
      'M389,352l92-113l195-43l0,0l0,0L445,48l-80,1L122.7,0L0,275.2L162,297L389,352',
      'M 50 100 L 300 150 L 550 50 L 750 300 L 500 250 L 300 450 L 50 100',
      'M 700 350 L 500 350 L 700 500 L 400 400 L 200 450 L 250 350 L 100 300 L 150 50 L 350 100 L 250 150 L 450 150 L 400 50 L 550 150 L 350 250 L 650 150 L 650 50 L 700 150 L 600 250 L 750 250 L 650 300 L 700 350 '
    ];

    for (var i = 0; i <= shapePathData.length; i++) {
      // Create shape
      var headerShape = new paper.Path({
        strokeColor: 'rgba(255, 255, 255, 0.5)',
        strokeWidth: 2,
        parent: shapeGroupRef.current,
      });
      // Set path data
      headerShape.pathData = shapePathData[i];
      headerShape.scale(2);
      // Set path position
      headerShape.position = positionArray[i];
    }
  };

  const paperOnFrame = (event) => {
    if (event.count % 4 === 0) {
      // Slows down frame rate
      for (var i = 0; i < shapeGroupRef.current.children.length; i++) {
        if (i % 2 === 0) {
          shapeGroupRef.current.children[i].rotate(-0.1);
        } else {
          shapeGroupRef.current.children[i].rotate(0.1);
        }
      }
    }
  };

  const paperOnResize = () => {
    getCanvasBounds();

    for (var i = 0; i < shapeGroupRef.current.children.length; i++) {
      shapeGroupRef.current.children[i].position = positionArray[i];
    }

    if (canvasWidth < 700) {
      shapeGroupRef.current.children[3].opacity = 0;
      shapeGroupRef.current.children[2].opacity = 0;
      shapeGroupRef.current.children[5].opacity = 0;
    } else {
      shapeGroupRef.current.children[3].opacity = 1;
      shapeGroupRef.current.children[2].opacity = 1;
      shapeGroupRef.current.children[5].opacity = 1;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div id="back">
        <canvas ref={canvasRef} id="canvas" className="canvas-back"></canvas>
        <div className="backRight"></div>
        <div className="backLeft"></div>
      </div>

      <div id="slideBox">
        <div className="topLayer">
          <div className="left">
            <div className="content">
              <h2>Sign Up</h2>
              <form id="form-signup" onSubmit={handleSubmit}>
                <div className="form-element form-stack">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input id="email" type="email" name="email" />
                </div>
                <div className="form-element form-stack">
                  <label htmlFor="username-signup" className="form-label">Username</label>
                  <input id="username-signup" type="text" name="username" />
                </div>
                <div className="form-element form-stack">
                  <label htmlFor="password-signup" className="form-label">Password</label>
                  <input id="password-signup" type="password" name="password" />
                </div>
                <div className="form-element form-checkbox">
                  <input id="confirm-terms" type="checkbox" name="confirm" value="yes" className="checkbox" />
                  <label htmlFor="confirm-terms">I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></label>
                </div>
                <div className="form-element form-submit">
                  <button id="signUp" className="signup" type="submit" name="signup">Sign up</button>
                  <button id="goLeft" className="signup off">Log In</button>
                </div>
              </form>
            </div>
          </div>
          <div className="right">
            <div className="content">
              <h2>Login</h2>
              <form id="form-login" onSubmit={handleSubmit}>
                <div className="form-element form-stack">
                  <label htmlFor="username-login" className="form-label">Username</label>
                  <input id="username-login" type="text" name="username" />
                </div>
                <div className="form-element form-stack">
                  <label htmlFor="password-login" className="form-label">Password</label>
                  <input id="password-login" type="password" name="password" />
                </div>
                <div className="form-element form-submit">
                  <button id="logIn" className="login" type="submit" name="login">Log In</button>
                  <button id="goRight" className="login off" name="signup">Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;