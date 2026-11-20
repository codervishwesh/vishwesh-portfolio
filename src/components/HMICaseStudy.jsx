import React from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function HMICaseStudy({ onBack }) {
  return (
    <main className="case-study">
      <section className="case-hero wrap">
        <button className="case-back" onClick={onBack} type="button">
          <ArrowLeft size={18} />
          Back to portfolio
        </button>

        <div className="case-intro">
          <span className="eyebrow">01 / AUTOMOTIVE UI/UX DESIGN</span>

          <h1>
            Smart HMI
            <br />
            <span>Infotainment Ecosystem.</span>
          </h1>

          <p className="case-description">
            Designing intuitive, driver-focused digital experiences for modern
            electric vehicle conversions, combining retro-modern aesthetics with
            usability and technical precision.
          </p>
        </div>

        <div className="case-details">
          <div>
            <span>ROLE</span>
            <strong>UI/UX Designer</strong>
          </div>

          <div>
            <span>TOOLS</span>
            <strong>Figma · Unity</strong>
          </div>

          <div>
            <span>TIMELINE</span>
            <strong>January – April 2026</strong>
          </div>

          <div>
            <span>FOCUS</span>
            <strong>Automotive HMI · Digital Clusters</strong>
          </div>
        </div>
        {/* Automotive HMI Visual Showcase */}
        <div className="case-showcase">
          <div className="case-showcase-heading">
            <span className="eyebrow">DESIGN SHOWCASE / 01</span>

            <span className="case-showcase-label">
              INDEPENDENT CONCEPT VISUALIZATION
            </span>
          </div>

          <div className="case-showcase-image">
            <img
              src="/images/Retro%20Electric%20Van%20Dashboard%20UI.png"
              alt="Conceptual electric van dashboard featuring a digital
      speedometer, battery status, vehicle range and
      infotainment controls"
              loading="lazy"
            />
          </div>

          <div className="case-showcase-caption">
            <h3>Retro Electric Van Dashboard</h3>
            <p>
              An original illustrative HMI concept created for portfolio
              presentation. This visualization is not a reproduction of
              confidential client work.
            </p>
          </div>
        </div>
        <div className="case-overview">
          <span className="eyebrow">PROJECT OVERVIEW</span>

          <h2>Where classic vehicles meet modern technology.</h2>

          <p>
            This project explores high-fidelity automotive digital clusters and
            infotainment interfaces for vintage electric vehicle retrofits,
            including VW buses and commercial trucks. The design prioritizes
            driver readability, ergonomic layouts, and interactive visualization
            of vehicle information.
          </p>
        </div>
        {/* Design Challenge */}
        <section className="case-process">
          <div className="case-process-heading">
            <span className="eyebrow">02 / DESIGN THINKING</span>

            <h2>
              The challenge<span className="period">.</span>
            </h2>
          </div>

          <div className="case-process-content">
            <p className="case-lead">
              How can we bring modern digital experiences into classic vehicles
              without compromising readability, usability, or character?
            </p>

            <p>
              Designing automotive interfaces requires balancing visual
              aesthetics with practical interaction needs. Vehicle information
              must remain clear, organized, and easy to interpret across
              different driving conditions.
            </p>

            <div className="case-challenge-grid">
              <div>
                <span>01 / READABILITY</span>
                <h3>Information clarity</h3>
                <p>
                  Establish a clear visual hierarchy for essential driving
                  information, including speed, battery level, and vehicle
                  status.
                </p>
              </div>

              <div>
                <span>02 / ERGONOMICS</span>
                <h3>Driver-focused layout</h3>
                <p>
                  Organize information to support quick recognition and reduce
                  unnecessary visual complexity.
                </p>
              </div>

              <div>
                <span>03 / AESTHETICS</span>
                <h3>Retro meets modern</h3>
                <p>
                  Explore a visual language that respects classic vehicle
                  character while introducing contemporary digital UI.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Design Approach */}
<section className="case-approach">
  <div className="case-approach-header">
    <span className="eyebrow">
      03 / DESIGN APPROACH
    </span>

    <h2>
      Designed around
      <br />
      the driver<span className="period">.</span>
    </h2>

    <p>
      A thoughtful automotive interface starts with
      understanding what information matters most
      and how drivers interact with it.
    </p>
  </div>

  <div className="case-approach-grid">
    <div className="approach-item">
      <span className="approach-number">01</span>
      <h3>Information hierarchy</h3>
      <p>
        Prioritize essential driving information such
        as speed, battery status, and range, while
        keeping secondary controls visually organized.
      </p>
    </div>

    <div className="approach-item">
      <span className="approach-number">02</span>
      <h3>Human-centered interaction</h3>
      <p>
        Explore clear navigation, recognizable icons,
        and simplified interactions that support
        usability within an automotive environment.
      </p>
    </div>

    <div className="approach-item">
      <span className="approach-number">03</span>
      <h3>Visual consistency</h3>
      <p>
        Establish consistent typography, spacing,
        colors, and interface components to create
        a cohesive digital cockpit experience.
      </p>
    </div>

    <div className="approach-item">
      <span className="approach-number">04</span>
      <h3>Responsive interface thinking</h3>
      <p>
        Consider how layouts adapt to different
        dashboard dimensions and display configurations
        while maintaining clarity and balance.
      </p>
    </div>
  </div>
</section>
{/* Key Takeaways */}
<section className="case-conclusion">
  <div className="case-conclusion-header">
    <span className="eyebrow">
      04 / KEY TAKEAWAYS
    </span>

    <h2>
      Thoughtful design.
      <br />
      Better experiences<span className="period">.</span>
    </h2>
  </div>

  <div className="case-conclusion-content">
    <p className="case-conclusion-lead">
      Great automotive interfaces are not simply
      about visual appeal. They are about presenting
      the right information at the right moment.
    </p>

    <p>
      This case study highlights the importance of
      clear information hierarchy, consistent visual
      systems, and driver-focused interaction design
      when exploring modern digital cockpit experiences.
    </p>

    <div className="case-takeaways">
      <div>
        <span>01</span>
        <p>
          Prioritize clarity over unnecessary
          visual complexity.
        </p>
      </div>

      <div>
        <span>02</span>
        <p>
          Balance modern technology with the
          character of classic vehicles.
        </p>
      </div>

      <div>
        <span>03</span>
        <p>
          Design adaptable interface systems
          with consistent visual principles.
        </p>
      </div>
    </div>

    <button
      type="button"
      className="case-return-button"
      onClick={onBack}
    >
      Back to all projects
      <ArrowUpRight size={20} />
    </button>
  </div>
</section>
      </section>
    </main>
  );
}
