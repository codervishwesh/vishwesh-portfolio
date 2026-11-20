import ProjectCaseStudy from "./components/ProjectCaseStudy";
import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  ArrowDown,
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  Menu,
  X,
  Download,
  Code2,
  PenTool,
} from "lucide-react";
import HMICaseStudy from "./components/HMICaseStudy";
import "./style.css";
const projects = [
  {
    id: "01",
    name: "Smart HMI Infotainment Ecosystem",
    type: "Automotive UI/UX Â· HMI Design",
    year: "2026",
    description:
      "A retro-modern digital cockpit experience for custom electric vehicle conversions, balancing expressive aesthetics with driver readability.",
    tags: ["Figma", "Unity", "1920 Ã— 720"],
    art: "hmi",
  },
  {
    id: "02",
    name: "Sport Analytics Pro",
    type: "Product Design Â· Full-Stack Development",
    year: "2025",
    description:
      "An interactive sports analytics platform that turns complex player and team performance data into clear, actionable insights.",
    tags: ["Next.js", "TypeScript", "FastAPI", "Snowflake"],
    art: "sports",
  },
  {
    id: "03",
    name: "Credit Card Navigation",
    type: "Web Application Â· Frontend Development",
    year: "2025",
    description:
      "A streamlined credit card comparison experience designed to help users explore options and make informed choices.",
    tags: ["React.js", "Spring Boot", "JSON"],
    art: "cards",
  },
  {
    id: "04",
    name: "Enterprise SMS Platform",
    type: "Backend Engineering Â· API Development",
    year: "2023",
    description:
      "A scalable enterprise messaging solution built to simplify automated communication workflows.",
    tags: ["JavaScript", "TypeScript"],
    art: "sms",
  },
];
function Art({ type }) {
  if (type === "hmi")
    return (
      <div className="art hmi-art">
        <div className="dashboard">
          <div className="dash-top">
            V / MOTION <span>DRIVE MODE Â· ECO</span>
          </div>
          <div className="dash-main">
            <div className="gauge">
              <span>RANGE</span>
              <strong>248</strong>
              <small>km remaining</small>
            </div>
            <div className="road">
              <div className="road-line" />
              <div className="car">â—†</div>
            </div>
            <div className="gauge">
              <span>SPEED</span>
              <strong>64</strong>
              <small>km / h</small>
            </div>
          </div>
          <div className="dash-bottom">
            â—‰ &nbsp; 82% BATTERY <span>21Â°C &nbsp; Â· &nbsp; 10:42 AM</span>
          </div>
        </div>
      </div>
    );
  if (type === "sports")
    return (
      <div className="art sports-art">
        <div className="sports-window">
          <div className="mock-side">
            S<span>âŒ‚</span>
            <span>â–¥</span>
            <span>â—«</span>
          </div>
          <div className="sports-content">
            <div className="mock-eyebrow">
              PERFORMANCE OVERVIEW <span>2025 SEASON â†—</span>
            </div>
            <h3>Team analytics</h3>
            <div className="stats">
              <div>
                <small>Win rate</small>
                <b>78.4%</b>
                <em>â†— 12.8%</em>
              </div>
              <div>
                <small>Avg. points</small>
                <b>86.2</b>
                <em>â†— 5.3%</em>
              </div>
              <div>
                <small>Matches</small>
                <b>32</b>
                <em>ALL GAMES</em>
              </div>
            </div>
            <div className="bars">
              {[32, 49, 41, 68, 55, 78, 63, 88, 72, 95, 79, 100].map((n, i) => (
                <span key={i} style={{ height: n + "%" }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  if (type === "cards")
    return (
      <div className="art cards-art">
        <div className="credit-card cc-back">
          <span>VISA</span>
          <strong>â€¢â€¢â€¢â€¢ 4821</strong>
        </div>
        <div className="credit-card cc-front">
          <div>
            n<span>â—</span>va.
          </div>
          <strong>â€¢â€¢â€¢â€¢ &nbsp; â€¢â€¢â€¢â€¢ &nbsp; 2048</strong>
          <small>PREMIUM REWARDS</small>
        </div>
        <div className="card-caption">
          Find your perfect fit <ArrowUpRight size={18} />
        </div>
      </div>
    );
  return (
    <div className="art sms-art">
      <div className="sms-window">
        <div className="sms-heading">
          <span className="sms-dot">âœ³</span> Messages <span>â€¢â€¢â€¢</span>
        </div>
        <div className="bubble b1">Your verification code is ready.</div>
        <div className="bubble b2">Thanks! Message received âœ“âœ“</div>
        <div className="bubble b3">
          Campaign delivered successfully. <span>â†—</span>
        </div>
        <div className="sms-compose">
          Write a message... <span>âž¤</span>
        </div>
      </div>
      <div className="floating-stat">
        â†— <strong>98.7%</strong>
        <small>Delivery rate</small>
      </div>
    </div>
  );
}
function App() {
  const [open, setOpen] = React.useState(false);
  const [activePage, setActivePage] = React.useState("home");

  const openCaseStudy = () => {
    setActivePage("hmi");
    window.scrollTo(0, 0);
  };

  const goHome = () => {
    setActivePage("home");
    window.scrollTo(0, 0);
  };

  if (
    activePage === "sports" ||
    activePage === "cards" ||
    activePage === "sms"
  ) {
    return <ProjectCaseStudy project={activePage} onBack={goHome} />;
  }
  if (activePage === "hmi") {
    return <HMICaseStudy onBack={goHome} />;
  }
  return (
    <>
      <header className="nav wrap">
        <a href="#home" className="logo" aria-label="Home">
          vp<span>.</span>
        </a>
        <nav className={open ? "links active" : "links"}>
          <a onClick={() => setOpen(false)} href="#work">
            Work
          </a>
          <a onClick={() => setOpen(false)} href="#about">
            About
          </a>
          <a onClick={() => setOpen(false)} href="#experience">
            Experience
          </a>
          <a onClick={() => setOpen(false)} href="#contact">
            Contact
          </a>
        </nav>
        <a className="nav-cta" href="mailto:vishweshpatel0311@gmail.com">
          Let's talk <ArrowUpRight size={16} />
        </a>
        <button
          className="menu"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </header>
      <main id="home">
        <section className="hero wrap">
          <div className="hero-top">
            <span className="eyebrow">
              <span className="green-dot" /> AVAILABLE FOR OPPORTUNITIES
            </span>
            <span className="location">BASED IN WINDSOR, CANADA â†—</span>
          </div>
          <h1>
            Designing with
            <br />
            <span>purpose.</span> Building
            <br />
            with precision<span className="period">.</span>
          </h1>
          <div className="hero-bottom">
            <p>
              I'm <strong>Vishwesh Patel</strong>, a UI/UX Designer and Software
              Engineer specializing in intuitive digital experiences, automotive
              HMI systems, and modern web applications. I combine thoughtful
              design with technical precision to create products that are both
              beautiful and functional.
            </p>
            <a href="#work" className="circle-link" aria-label="Explore work">
              <ArrowDown size={28} />
            </a>
          </div>
          <div className="hero-rule" />
        </section>
        <section className="work wrap" id="work">
          <div className="section-heading">
            <div>
              <span className="eyebrow">01 / SELECTED WORK</span>
              <h2>
                Featured projects<span className="period">.</span>
              </h2>
            </div>
            <p>
              A selection of experiences where design thinking meets technical
              execution.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((p) => (
              <article
                className="project"
                key={p.id}
                role="button"
                tabIndex={0}
                aria-label={`View ${p.name} case study`}
                onClick={() => {
                  const pages = {
                    "01": "hmi",
                    "02": "sports",
                    "03": "cards",
                    "04": "sms",
                  };

                  setActivePage(pages[p.id]);
                  window.scrollTo(0, 0);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();

                    const pages = {
                      "01": "hmi",
                      "02": "sports",
                      "03": "cards",
                      "04": "sms",
                    };

                    setActivePage(pages[p.id]);
                    window.scrollTo(0, 0);
                  }
                }}
              >
                <Art type={p.art} />
                <div className="project-meta">
                  <span>{p.type}</span>
                  <span>{p.year}</span>
                </div>
                <div className="project-title">
                  <h3>{p.name}</h3>
                  <ArrowUpRight size={24} />
                </div>
                <p>{p.description}</p>
                <div className="tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <p className="work-note">
            Project visuals are conceptual placeholders. Replace with
            screenshots of your actual work before publishing.
          </p>
        </section>
        <section className="about-band" id="about">
          <div className="wrap about-layout">
            <div>
              <span className="eyebrow">02 / ABOUT ME</span>
              <h2>
                Creative mind.
                <br />
                <span>Technical heart.</span>
              </h2>
            </div>
            <div className="about-copy">
              <p>
                I'm a designer and developer who enjoys turning complex problems
                into intuitive, human-centered experiences.
              </p>
              <p>
                My work spans automotive human-machine interfaces, high-fidelity
                prototyping, responsive web applications, and backend systems. I
                bring together visual clarity and engineering practicality to
                build products that look good and work beautifully.
              </p>
              <div className="capabilities">
                <div>
                  <PenTool size={22} />
                  <strong>Design</strong>
                  <span>UI/UX Â· Figma Â· HMI Â· Prototyping Â· Unity</span>
                </div>
                <div>
                  <Code2 size={22} />
                  <strong>Development</strong>
                  <span>
                    React Â· Next.js Â· TypeScript Â· Node.js Â· Python
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="experience wrap" id="experience">
          <div className="section-heading">
            <div>
              <span className="eyebrow">03 / MY JOURNEY</span>
              <h2>
                Experience & education<span className="period">.</span>
              </h2>
            </div>
          </div>
          <div className="timeline">
            <div className="timeline-row">
              <span>JAN â€” APR 2026</span>
              <div>
                <h3>UI Designer</h3>
                <p>Ottawa Infotainment Â· Remote</p>
                <small>
                  Designed high-fidelity automotive digital clusters and
                  infotainment interfaces in Figma, and developed interactive
                  Unity prototypes.
                </small>
              </div>
              <span className="timeline-type">EXPERIENCE</span>
            </div>
            <div className="timeline-row">
              <span>JAN â€” APR 2023</span>
              <div>
                <h3>Node.js Intern</h3>
                <p>Atyantik Technologies Â· Vadodara, India</p>
                <small>
                  Contributed to backend development, API integration, and
                  performance improvements alongside senior engineers.
                </small>
              </div>
              <span className="timeline-type">EXPERIENCE</span>
            </div>
            <div className="timeline-row">
              <span>2025 â€” 2026</span>
              <div>
                <h3>Master of Applied Computing</h3>
                <p>University of Windsor Â· Canada</p>
              </div>
              <span className="timeline-type">EDUCATION</span>
            </div>
            <div className="timeline-row">
              <span>2019 â€” 2023</span>
              <div>
                <h3>Bachelor in Computer Engineering</h3>
                <p>Gujarat Technological University Â· India</p>
              </div>
              <span className="timeline-type">EDUCATION</span>
            </div>
          </div>
        </section>
        <section className="contact" id="contact">
          <div className="wrap">
            <span className="eyebrow">04 / GET IN TOUCH</span>
            <h2>
              Have something
              <br />
              in mind<span>?</span>
            </h2>
            <div className="contact-bottom">
              <p>
                I'm always open to meaningful collaborations, design challenges,
                and new opportunities.
              </p>
              <a
                href="mailto:vishweshpatel0311@gmail.com"
                className="contact-button"
              >
                Let's create something <ArrowUpRight size={20} />
              </a>
            </div>
            <div className="footer">
              <span>Â© {new Date().getFullYear()} Vishwesh Patel</span>
              <div>
                <a href="mailto:vishweshpatel0311@gmail.com">
                  <Mail size={17} /> Email
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={17} /> LinkedIn
                </a>
                <a href="https://github.com/" target="_blank" rel="noreferrer">
                  <Github size={17} /> GitHub
                </a>
                {/* <a href="/resume.pdf" download>
                  <Download size={17} /> Resume
                </a> */}
              </div>
              <a href="#home">Back to top â†‘</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
createRoot(document.getElementById("root")).render(<App />);
