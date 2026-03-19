import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <div className="landing-section" id="landingDiv">
      <div className="landing-container">
        
        <div className="landing-intro">
          <h2 className="fade-in">Hello! I'm</h2>
          <h1 className="slide-up">
            Piyush 
            <br />
            <span>Srivastava</span>
          </h1>
        </div>

        <div className="landing-info">
          <h3 className="fade-in-delay">A Creative</h3>

          <h2 className="landing-info-h2">
            <div className="landing-h2-1">Full Stack</div>
            <div className="landing-h2-2">Developer</div>
          </h2>

          <h2>
            <div className="landing-h2-info">Developer</div>
            <div className="landing-h2-info-1">Engineer</div>
          </h2>

          {/* 🔥 Resume + Hire Me Buttons */}
        {/* ✅ BUTTONS */}
          <div className="landing-buttons">
            <a
              href="/image/piyush.pdf"
              download="Piyush_Resume.pdf"
              className="btn-primary"
            >
              ⬇ Download Resume
            </a>

            <a href="#contact" className="btn-secondary">
              Hire Me
            </a>
          </div>
        </div>

      </div>

      {children}
    </div>
  );
};

export default Landing;