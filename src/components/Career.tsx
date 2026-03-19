import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* ✅ Current Role */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack Developer</h4>
                <h5>Securium Solutions Pvt Ltd</h5>
              </div>
              <h3>Oct 2024 – Present</h3>
            </div>
            <p>
              Built and maintained full-stack web applications using React.js,
              Vue.js, Django, and PHP. Designed and implemented secure JWT-based
              REST APIs with role-based authentication. Collaborated with
              cybersecurity teams to identify and fix vulnerabilities following
              OWASP practices. Managed cloud deployments using DigitalOcean,
              Docker, and GitHub Actions CI/CD. Developed internal dashboards
              and automation tools to improve efficiency and reduce manual work,
              while also mentoring junior developers and conducting code reviews.
            </p>
          </div>

          {/* ✅ Previous Role */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Front-End Developer</h4>
                <h5>Digital Rubix</h5>
              </div>
              <h3>Aug 2022 – Sep 2024</h3>
            </div>
            <p>
              Delivered 200+ responsive and SEO-optimized landing pages using
              HTML, CSS, and JavaScript. Converted Figma and PSD designs into
              pixel-perfect, high-performance UI components. Improved website
              performance using lazy loading and code splitting techniques.
              Integrated third-party services like Stripe, HubSpot, and Google
              Analytics, while collaborating closely with backend teams and
              participating in agile development cycles.
            </p>
          </div>

          {/* ✅ Current Focus */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Continuous Growth</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently focused on building scalable and high-performance web
              applications, improving backend architecture, and exploring modern
              cloud and DevOps technologies. Continuously learning and applying
              best practices to deliver efficient and reliable software
              solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;