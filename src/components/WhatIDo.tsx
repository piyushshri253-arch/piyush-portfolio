import { useRef } from "react";
import "./styles/WhatIDo.css";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);

  const handleClick = (index: number) => {
    const current = containerRef.current[index];

    if (!current) return;

    const isActive = current.classList.contains("what-content-active");

    // reset all
    containerRef.current.forEach((el) => {
      if (el) {
        el.classList.remove("what-content-active", "what-sibling");
      }
    });

    // toggle only if not already active
    if (!isActive) {
      current.classList.add("what-content-active");

      containerRef.current.forEach((el, i) => {
        if (el && i !== index) {
          el.classList.add("what-sibling");
        }
      });
    }
  };

  return (
    <div className="whatIDO">
      {/* TITLE */}
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>

      {/* CONTENT */}
      <div className="what-box">
        <div className="what-box-in">

          {/* FRONTEND */}
          <div
            className="what-content"
            ref={(el) => (containerRef.current[0] = el)}
            onClick={() => handleClick(0)}
          >
            <div className="what-content-in">
              <h3>FRONTEND</h3>
              <h4>What I Do</h4>
              <p>
                I build responsive, fast, and interactive user interfaces using
                modern frontend technologies. My focus is on performance,
                scalability, and clean UI/UX to deliver seamless user
                experiences.
              </p>

              <h5>Tech Stack</h5>
              <div className="what-content-flex">
                <div className="what-tags">React</div>
                <div className="what-tags">Next.js</div>
                <div className="what-tags">Vue</div>
                <div className="what-tags">JavaScript</div>
                <div className="what-tags">TypeScript</div>
                <div className="what-tags">HTML</div>
                <div className="what-tags">CSS</div>
                <div className="what-tags">GSAP</div>
              </div>
            </div>
          </div>

          {/* BACKEND */}
          <div
            className="what-content"
            ref={(el) => (containerRef.current[1] = el)}
            onClick={() => handleClick(1)}
          >
            <div className="what-content-in">
              <h3>BACKEND</h3>
              <h4>What I Do</h4>
              <p>
                I develop secure and scalable backend systems, design REST APIs,
                and manage databases. I focus on efficient server-side logic and
                seamless integration with frontend applications.
              </p>

              <h5>Tech Stack</h5>
              <div className="what-content-flex">
                <div className="what-tags">Django</div>
                <div className="what-tags">REST API</div>
                <div className="what-tags">PostgreSQL</div>
                <div className="what-tags">Node.js</div>
                <div className="what-tags">Express.js</div>
                <div className="what-tags">Docker</div>
                <div className="what-tags">GitHub</div>
                <div className="what-tags">DigitalOcean</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhatIDo;