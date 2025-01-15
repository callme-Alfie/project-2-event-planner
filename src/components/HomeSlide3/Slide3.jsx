import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import './Slide3.css';

const Slide3 = () => {
  // Animation for sliding in from the top for "Get Ready to Travel The World" and the div below it
  const slideFromTop = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 500},
    delay: 200,
  });

  // Animation for sliding in from the bottom for the description text
  const slideFromBottom = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 500 },
    delay: 200,
  });

  return (
    <div className="content1">
      {/* Animated span for "Get Ready to Travel The World" */}
      <animated.span style={slideFromTop} className="get-ready3">
        Life is short and <br /> The World is wide.
      </animated.span>

      {/* Animated div for travel-world-div1 */}
      <animated.div style={slideFromTop} className="travel-world-div3"></animated.div>

      {/* Animated span for description text */}
      <animated.span style={slideFromBottom} className="description1">
        A journey of a 1000 miles starts with a single step. Import the full<br />
        demo content with 1 click and create a head-turning website for <br />
        your travel agency.
      </animated.span>

      {/* Static image element */}
      <div className="image-div1">
        <img
          src="https://html.geekcodelab.com/holiday-planners/assets/images/banner-slide-2.jpg"
          alt="Italy Mountains"
          className="get-ready-img"
        />
      </div>
    </div>
  );
};

export default Slide3;
