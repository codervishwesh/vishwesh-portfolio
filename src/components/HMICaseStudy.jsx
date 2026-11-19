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
      </section>
    </main>
  );
}
