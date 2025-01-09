import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import { useEffect, useRef } from "react";

const Testimonials = () => {
  const slider = useRef();
  let currentTranslateX = 0;
  const autoScrollId = useRef(null);

  const slideForwardEffect = () => {
    const isSmallScreen = window.innerWidth < 882;
    if (isSmallScreen) {
      currentTranslateX =
        currentTranslateX < -50
          ? (currentTranslateX = 0)
          : (currentTranslateX -= 25);
    } else {
      currentTranslateX =
        currentTranslateX < -25
          ? (currentTranslateX = 0)
          : (currentTranslateX -= 25);
    }
    slider.current.style.transform = `translateX(${currentTranslateX}%)`;
  };

  const slideForward = () => {
    stopAutoScroll();
    slideForwardEffect();
  };

  const slideBackward = () => {
    stopAutoScroll();
    const isSmallScreen = window.innerWidth < 882;
    if (isSmallScreen) {
      currentTranslateX =
        currentTranslateX === 0
          ? (currentTranslateX = -75)
          : (currentTranslateX += 25);
    } else {
      currentTranslateX =
        currentTranslateX === 0
          ? (currentTranslateX = -50)
          : (currentTranslateX += 25);
    }
    slider.current.style.transform = `translateX(${currentTranslateX}%)`;
  };

  const stopAutoScroll = () => {
    // Clear the interval to stop auto-scroll
    if (autoScrollId.current) {
      clearInterval(autoScrollId.current);
      autoScrollId.current = null;
    }
  };

  useEffect(() => {
    autoScrollId.current = setInterval(slideForwardEffect, 2000);
    return () => stopAutoScroll();
  }, []);

  return (
    <div className="testimonials">
      <img
        src={back_icon}
        alt="back-btn"
        className="back-btn"
        onClick={slideBackward}
      />
      <img
        src={next_icon}
        alt="next-btn"
        className="next-btn"
        onClick={slideForward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="user-1" />
                <div>
                  <h3>Jacqueline Williams</h3>
                  <span>Educity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Educity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="user-2" />
                <div>
                  <h3>Peter Sams</h3>
                  <span>Educity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Educity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="user-3" />
                <div>
                  <h3>Ethel Wilde</h3>
                  <span>Educity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Educity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="user-4" />
                <div>
                  <h3>Tim Higgins</h3>
                  <span>Educity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Educity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
