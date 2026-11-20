import React from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

const caseStudies = {
  sports: {
    number: '02',
    category: 'PRODUCT DESIGN / FULL-STACK DEVELOPMENT',
    title: 'Sport Analytics',
    accent: 'Pro.',
    description:
      'Exploring how complex sports performance data can become a clear, useful, and engaging digital experience.',
    role: 'Full-Stack Development',
    tools: 'Next.js · TypeScript · FastAPI · Snowflake',
    year: '2025',
    focus: 'Data Visualization · Analytics',
    overviewTitle: 'Turning performance data into meaningful insights.',
    overview:
      'Sport Analytics Pro is a sports analytics platform concept focused on organizing player and team performance information into accessible dashboards and interactive views.',
    challenge:
      'How can detailed sports statistics be presented without overwhelming users?',
    approach: [
      {
        title: 'Data organization',
        text: 'Structure performance information into clear, understandable categories.'
      },
      {
        title: 'Visual hierarchy',
        text: 'Emphasize important metrics while keeping supporting statistics accessible.'
      },
      {
        title: 'Interactive exploration',
        text: 'Consider filtering and comparison workflows for exploring performance trends.'
      },
      {
        title: 'Full-stack architecture',
        text: 'Connect a modern frontend with backend services and analytical data sources.'
      }
    ],
    takeaways: [
      'Make complex datasets easier to understand.',
      'Keep interfaces focused on useful insights.',
      'Align frontend interactions with backend data structures.'
    ],
    visual: 'sports'
  },

  cards: {
    number: '03',
    category: 'WEB APPLICATION / FRONTEND DEVELOPMENT',
    title: 'Credit Card',
    accent: 'Navigation.',
    description:
      'A streamlined comparison experience designed to help users understand credit card options.',
    role: 'Frontend Development',
    tools: 'React.js · Spring Boot · JSON',
    year: '2025',
    focus: 'Comparison UX · Web Applications',
    overviewTitle: 'Making financial product comparisons easier.',
    overview:
      'Credit Card Navigation explores a structured web experience for browsing credit card information, reviewing features, and comparing available options.',
    challenge:
      'How can users compare financial products without getting lost in dense information?',
    approach: [
      {
        title: 'Comparison clarity',
        text: 'Present relevant product attributes in consistent, readable layouts.'
      },
      {
        title: 'Simplified navigation',
        text: 'Organize browsing and comparison flows around understandable categories.'
      },
      {
        title: 'Reusable components',
        text: 'Build modular interface elements that support consistent presentation.'
      },
      {
        title: 'Data integration',
        text: 'Structure frontend views around data supplied through application services.'
      }
    ],
    takeaways: [
      'Reduce unnecessary complexity in comparison interfaces.',
      'Use consistent presentation for easier evaluation.',
      'Build reusable components for maintainable frontend development.'
    ],
    visual: 'cards'
  },

  sms: {
    number: '04',
    category: 'BACKEND ENGINEERING / API DEVELOPMENT',
    title: 'Enterprise SMS',
    accent: 'Platform.',
    description:
      'A messaging application focused on organizing and supporting automated communication workflows.',
    role: 'Backend Development',
    tools: 'JavaScript · TypeScript · Node.js',
    year: '2023',
    focus: 'API Development · Messaging Workflows',
    overviewTitle: 'Supporting communication through backend engineering.',
    overview:
      'Enterprise SMS Platform focuses on backend application development for messaging workflows, with attention to maintainable services, application logic, and integration patterns.',
    challenge:
      'How can a backend application support organized and dependable messaging workflows?',
    approach: [
      {
        title: 'API structure',
        text: 'Organize service endpoints and application responsibilities clearly.'
      },
      {
        title: 'Workflow design',
        text: 'Consider the stages involved in preparing and processing messages.'
      },
      {
        title: 'Maintainable code',
        text: 'Use structured modules and consistent development practices.'
      },
      {
        title: 'Integration thinking',
        text: 'Design backend components to communicate with related application services.'
      }
    ],
    takeaways: [
      'Keep service responsibilities clear.',
      'Build with maintainability in mind.',
      'Consider reliability when designing messaging workflows.'
    ],
    visual: 'sms'
  }
};

function ProjectVisual({ type }) {
  if (type === 'sports') {
    return (
      <div className="detail-visual detail-sports">
        <div className="detail-visual-top">
          <span>PERFORMANCE OVERVIEW</span>
          <span>SEASON ANALYTICS</span>
        </div>
        <div className="detail-metrics">
          <div><small>POINTS</small><strong>28.4</strong></div>
          <div><small>ASSISTS</small><strong>8.6</strong></div>
          <div><small>REBOUNDS</small><strong>7.2</strong></div>
        </div>
        <div className="detail-bars">
          {[38, 58, 44, 76, 61, 90, 68, 83, 72, 96, 79, 88].map(
            (height, index) => (
              <span key={index} style={{ height: `${height}%` }} />
            )
          )}
        </div>
        <span className="detail-visual-foot">
          Illustrative dashboard concept — sample data
        </span>
      </div>
    );
  }

  if (type === 'cards') {
    return (
      <div className="detail-visual detail-cards">
        <div className="detail-card-preview">
          <small>CARD COMPARISON</small>
          <div className="detail-credit-card">
            <span>◈</span>
            <strong>Everyday Rewards</strong>
            <small>•••• 4821</small>
          </div>
          <div className="detail-card-rows">
            <div><span>Annual fee</span><strong>$0</strong></div>
            <div><span>Rewards</span><strong>Points</strong></div>
            <div><span>Category</span><strong>Everyday</strong></div>
          </div>
          <small>Illustrative UI — fictional card details</small>
        </div>
      </div>
    );
  }

  return (
    <div className="detail-visual detail-sms">
      <div className="detail-message-panel">
        <div className="detail-visual-top">
          <span>MESSAGING WORKFLOW</span>
          <span>API CONCEPT</span>
        </div>
        <div className="detail-message-row">
          <span className="detail-status-dot" />
          <div><strong>Message request</strong><small>Received</small></div>
          <span>01</span>
        </div>
        <div className="detail-message-row">
          <span className="detail-status-dot" />
          <div><strong>Processing</strong><small>Validated</small></div>
          <span>02</span>
        </div>
        <div className="detail-message-row">
          <span className="detail-status-dot" />
          <div><strong>Provider handoff</strong><small>Queued</small></div>
          <span>03</span>
        </div>
        <small>Illustrative workflow — not production data</small>
      </div>
    </div>
  );
}

export default function ProjectCaseStudy({ project, onBack }) {
  const data = caseStudies[project];

  if (!data) return null;

  return (
    <main className="case-study portfolio-detail">
      <div className="wrap">
        <button
          className="case-back"
          type="button"
          onClick={onBack}
        >
          <ArrowLeft size={18} />
          Back to portfolio
        </button>

        <section className="detail-hero">
          <span className="eyebrow">
            {data.number} / {data.category}
          </span>

          <h1>
            {data.title}
            <br />
            <span>{data.accent}</span>
          </h1>

          <p>{data.description}</p>

          <div className="detail-facts">
            <div><span>ROLE</span><strong>{data.role}</strong></div>
            <div><span>TECHNOLOGIES</span><strong>{data.tools}</strong></div>
            <div><span>YEAR</span><strong>{data.year}</strong></div>
            <div><span>FOCUS</span><strong>{data.focus}</strong></div>
          </div>
        </section>

        <section className="detail-showcase">
          <div className="detail-section-label">
            <span className="eyebrow">01 / PROJECT VISUALIZATION</span>
            <span>INDEPENDENT ILLUSTRATION</span>
          </div>

          <ProjectVisual type={data.visual} />
        </section>

        <section className="detail-section">
          <div className="detail-section-title">
            <span className="eyebrow">02 / OVERVIEW</span>
            <h2>{data.overviewTitle}</h2>
          </div>
          <div className="detail-section-body">
            <p>{data.overview}</p>
          </div>
        </section>

        <section className="detail-section">
          <div className="detail-section-title">
            <span className="eyebrow">03 / DESIGN CHALLENGE</span>
            <h2>The challenge<span className="period">.</span></h2>
          </div>
          <div className="detail-section-body">
            <p className="detail-lead">{data.challenge}</p>
          </div>
        </section>

        <section className="detail-approach">
          <span className="eyebrow">04 / APPROACH</span>
          <h2>Thinking through<br />the details<span className="period">.</span></h2>

          <div className="detail-approach-grid">
            {data.approach.map((item, index) => (
              <article key={item.title}>
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="detail-section detail-conclusion">
          <div className="detail-section-title">
            <span className="eyebrow">05 / KEY TAKEAWAYS</span>
            <h2>What matters<span className="period">.</span></h2>
          </div>
          <div className="detail-section-body">
            {data.takeaways.map((item, index) => (
              <div className="detail-takeaway" key={item}>
                <span>0{index + 1}</span>
                <p>{item}</p>
              </div>
            ))}

            <button
              className="case-return-button"
              type="button"
              onClick={onBack}
            >
              Back to all projects
              <ArrowUpRight size={20} />
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
