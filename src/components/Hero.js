import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Humanizing your insurance.</h1>
          <p>
            Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.
          </p>
          <a href="#" className="btn">View plans</a>
        </div>
        <div className="hero-image">
          <img src="/images/image-intro-desktop.jpg" alt="Introductory Image" />
          <img src="/images/bg-pattern-intro-left-desktop.svg" alt="Background Pattern" className="bg-pattern" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
