import './App.css'

import mjeshtriConstruction from './assets/mjeshtri-construction.jpg'
import easyPosTerminal from './assets/easypos-terminal.jpg'
import logisticApp from './assets/logistic-app.jpg'
import parkingCity from './assets/parking-city.jpg'
import eventSphere from './assets/event-sphere.jpg'
import smis from './assets/smis.jpg'
import cavaPremium from './assets/cava-premium.jpg'
import igs from './assets/igs.jpg'

const Icon = ({ name, size = 18 }) => {
  const paths = {
    github: (
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.1-1.46-1.1-1.46-.9-.61.07-.6.07-.6 1 .07 1.52 1.03 1.52 1.03.89 1.53 2.33 1.09 2.9.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.5 9.5 0 0 1 12 6.8a9.5 9.5 0 0 1 2.5.34c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.69-4.57 4.94.36.31.68.9.68 1.81v2.69c0 .26.18.57.69.48A10 10 0 0 0 12 2Z" />
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    linkedin: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V8h4v2" />
        <rect x="2" y="8" width="4" height="13" />
        <path d="M4 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    cap: (
      <>
        <path d="m2 10 10-5 10 5-10 5-10-5Z" />
        <path d="M6 12.2V16c3 2 9 2 12 0v-3.8" />
        <path d="M22 10v6" />
      </>
    ),
    phone: (
      <path d="M22 16.9v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.79.65 2.64a2 2 0 0 1-.45 2.11L8.04 9.74a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.31 1.74.53 2.64.65A2 2 0 0 1 22 16.9Z" />
    ),
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

const roles = [
  [
    'Present',
    'Engineering',
    'Flutter Developer',
    'BiniSoft LLC',
    'Building mobile applications with AI-driven features to improve functionality, performance, and overall user experience.',
  ],
  [
    'Sep 2025 – Jun 2026',
    'Engineering',
    'Freelance Flutter Developer',
    'Independent',
    'Developed mobile applications using Flutter, integrating AI-powered features to enhance functionality and user experience.',
  ],
  [
    'Freelance',
    'Engineering',
    'Freelance .NET Developer',
    'Independent',
    'Developed web applications and backend services using .NET, building scalable solutions with clean architecture and RESTful APIs.',
  ],
  [
    'May 2024 – Aug 2024',
    'Engineering',
    '.NET Developer Intern',
    'StarLabs',
    'Developed EventSphere, a .NET-based project focused on building and managing event-related features as part of a collaborative team.',
  ],
  [
    '2022 – Present',
    'Special Operations',
    'Detective',
    'Kosovo Police',
    'Criminal investigations, evidence collection, conducting interviews, and assisting in solving cases. Analytical thinking, systematic problem solving, and attention to detail under pressure shape a unique approach to software diagnostics.',
  ],
]

const projects = [
  [
    'Mjeshtri',
    'Practical real-world service application connecting users with local professionals and tradespeople.',
    ['Mobile App', 'Flutter'],
    'mesh',
  ],
  [
    'EasyPOS',
    'Point-of-sale and business management application for streamlined retail operations.',
    ['Business', 'POS', '.NET'],
    'bars',
  ],
  [
    'Logistic App',
    'Flutter mobile application with QR code scanning for logistics tracking and management.',
    ['Flutter', 'QR', 'Mobile'],
    'route',
  ],
  [
    'Parking City',
    'Smart parking management application with real-time availability and reservations.',
    ['Flutter', 'Firebase'],
    'park',
  ],
  [
    'EventSphere',
    'Full-stack event management web application for creating, managing, and attending events.',
    ['.NET', 'Vue.js'],
    'orb',
  ],
  [
    'SMIS',
    'Student Management Information System for educational institution management.',
    ['.NET', 'React', 'SQL Server'],
    'grid',
  ],
]

const extraProjects = [
  [
    'CAVA Premium',
    'Premium e-commerce application with a refined product catalog, cart, and checkout experience.',
    ['JavaScript', 'Firebase', 'E-commerce'],
    'cava',
  ],
  [
    'IGS — Intelligence Graph System',
    'Interactive relationship graph platform for investigative analysis and intelligence workflows.',
    ['React', 'React Flow', 'Graphs'],
    'igs',
  ],
]

/* =========================================================
   TRAININGS
   ========================================================= */

const trainings = [
  {
    year: '2019',
    provider: 'BONEVET Kaçanik',
    title: 'Python Programming',
    description:
      'Python Programming training completed at BONEVET Kaçanik, focused on programming fundamentals and practical Python development skills.',
    logo: 'https://www.python.org/static/community/logos/python-logo-generic.svg',
    url: 'https://bonevet.org/',
    logoLabel: 'PYTHON',
  },
  {
    year: 'August 2021 – February 2022',
    provider: 'CITECH Academy',
    title: 'Cisco Networking — CCNA',
    description:
      'Cisco Networking — CCNA training completed at CITECH Academy, covering networking fundamentals and practical Cisco networking skills.',
    logo: 'https://cdn.simpleicons.org/cisco/049fd9',
    url: 'https://citechacademy.com/cisco-ccna-ccnp/',
    logoLabel: 'CISCO',
  },
  
  {
    year: 'December 2023 – February 2024',
    provider: 'Zeta Corporation',
    title: 'Java Advanced Course',
    description:
      'Advanced Java course completed through Zeta Corporation, with a practical focus on Java programming and application development.',
    logo: 'https://zetacorp.co/favicon.ico',
    url: 'https://zetacorp.co/learn-lead',
    logoLabel: 'ZETA',
  },
]

const projectImages = {
  Mjeshtri: mjeshtriConstruction,
  EasyPOS: easyPosTerminal,
  'Logistic App': logisticApp,
  'Parking City': parkingCity,
  EventSphere: eventSphere,
  SMIS: smis,
  'CAVA Premium': cavaPremium,
  'IGS — Intelligence Graph System': igs,
}

const laptopImages = {
  Mjeshtri: mjeshtriConstruction,
  EasyPOS: easyPosTerminal,
  'Logistic App': logisticApp,
  'Parking City': parkingCity,
  EventSphere: eventSphere,
  SMIS: smis,
  'CAVA Premium': cavaPremium,
  'IGS — Intelligence Graph System': igs,
}

function SectionTitle({ number, label, title }) {
  return (
    <div className="section-title">
      <span>
        {number} // {label}
      </span>
      <h2>{title}</h2>
    </div>
  )
}

function App() {
  return (
    <>
      <style>
        {`
          .training-card {
            transition: transform .25s ease, border-color .25s ease, box-shadow .25s ease;
          }

          .training-card:hover {
            transform: translateY(-4px);
            border-color: rgba(59,130,246,.5) !important;
            box-shadow: 0 18px 40px rgba(0,0,0,.25), 0 0 30px rgba(37,99,235,.08);
          }

          @media (max-width: 900px) {
            .training-grid {
              grid-template-columns: 1fr 1fr !important;
            }
          }

          @media (max-width: 620px) {
            .training-grid {
              grid-template-columns: 1fr !important;
            }
          }

          .project-art {
            background: #080a12 !important;
          }

          .project-art > span {
            display: none !important;
          }

          .project-art:before,
          .project-art:after,
          .graph-art:before,
          .graph-line,
          .graph-art .node {
            display: none !important;
          }

          .graph-art > img {
            opacity: 1 !important;
          }

          .project-grid .project:nth-child(5) .project-art img {
            width: 61% !important;
            height: 66% !important;
            transform: translateX(-34px);
          }

          .project-grid .project:nth-child(5) .project-art:before {
            display: block !important;
            content: '';
            position: absolute;
            z-index: 4;
            right: 13%;
            bottom: 8%;
            width: 55px;
            height: 113px;
            border: 4px solid #d8dce7;
            border-radius: 13px;
            background:
              radial-gradient(circle at 25% 47%, #f9a8d4 0 6px, transparent 7px),
              radial-gradient(circle at 72% 63%, #fef08a 0 5px, transparent 6px),
              linear-gradient(
                150deg,
                #130829 0 29%,
                #5c2567 30% 56%,
                #ef5f88 57% 100%
              );
            box-shadow: 0 12px 22px #000;
          }

          .project-grid .project:nth-child(5) .project-art:after {
            display: block !important;
            content: '';
            position: absolute;
            z-index: 5;
            right: calc(13% + 15px);
            bottom: calc(8% + 94px);
            width: 32px;
            height: 7px;
            border-radius: 8px;
            background: #05050a;
            opacity: 1;
            transform: none;
          }

          .project-grid .project:nth-child(7) .project-art img,
          .project-grid .project:nth-child(8) .project-art img {
            width: 78% !important;
            height: 73% !important;
            transform: none !important;
            border: 4px solid #252a3c !important;
            border-radius: 5px !important;
            box-shadow: 0 12px 18px #000 !important;
          }

          .project-grid .project:nth-child(7) .project-art:before,
          .project-grid .project:nth-child(7) .project-art:after,
          .project-grid .project:nth-child(8) .project-art:before,
          .project-grid .project:nth-child(8) .project-art:after {
            display: none !important;
          }
        `}
      </style>

      <nav className="nav">
        <a href="#top" className="brand">
          <b>BB</b>
          <span>BESNIK BEGUNCA</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#tech-stack">Tech Stack</a>
          <a href="#training">Training</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main id="top">
        <section className="hero section">
          <div className="glow" />

          <div className="eyebrow">— SOFTWARE DEVELOPER</div>

          <h1>
            BESNIK
            <br />
            <em>BEGUNCA</em>
          </h1>

          <p className="hero-copy">
            Building modern, scalable and user-focused software solutions with
            a strong focus on clean architecture, problem solving and
            continuous learning.
          </p>

          <div className="actions">
            <a className="button primary" href="#projects">
              View Projects <span>→</span>
            </a>

            <a className="button ghost" href="#contact">
              Contact Me
            </a>
          </div>

          <div className="socials">
            <a
              href="https://github.com/BesnikBegunca"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="github" />
              github.com/BesnikBegunca
            </a>

            <a href="mailto:besnikbegunca@gmail.com">
              <Icon name="mail" />
              besnikbegunca@gmail.com
            </a>

            <a
              className="desktop-social"
              href="https://www.linkedin.com/in/besnik-begunca-3654a0296"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="linkedin" />
              LinkedIn
            </a>
          </div>
        </section>

        <section id="about" className="section">
          <SectionTitle number="01" label="Brief" title="About Me" />

          <div className="about-card">
            <div className="about-copy">
              <p className="lead">
                A disciplined and detail-oriented software developer with a
                strong passion for building efficient and scalable applications.
              </p>

              <p>
                Consistent focus on writing clean and maintainable code,
                dedicated to continuous learning and improving technical skills
                in modern technologies. A reliable team player committed to
                delivering high-quality solutions on time.
              </p>
            </div>

            <div className="metadata">
              <div className="meta">
                <Icon name="pin" />
                <small>Current Location</small>
                <strong>Kaçanik, Kosovo</strong>
              </div>

              <div className="meta violet">
                <Icon name="cap" />
                <small>Academic Profile</small>
                <strong>BSc Computer Science</strong>
                <p>UBT (2020–2023)</p>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <SectionTitle
            number="02"
            label="Journey"
            title="Professional Experience"
          />

          <div className="timeline">
            {[...roles]
              .sort(
                (a, b) =>
                  Number(b[0].includes('Present')) -
                  Number(a[0].includes('Present'))
              )
              .map(
                ([
                  period,
                  category,
                  role,
                  company,
                  description,
                ]) => (
                  <article
                    className="role"
                    style={
                      period.includes('Present')
                        ? {
                            borderColor: '#3b82f6',
                            boxShadow:
                              'inset 0 0 0 1px rgba(37,99,235,.2), 0 0 28px rgba(37,99,235,.12)',
                          }
                        : undefined
                    }
                    key={role}
                  >
                    <div className="role-period">
                      <b
                        style={
                          period.includes('Present')
                            ? {
                                borderColor: '#3b82f6',
                                color: '#e4f0ff',
                                background: 'rgba(37,99,235,.13)',
                              }
                            : undefined
                        }
                      >
                        {period.includes('Present') && (
                          <em
                            style={{
                              fontStyle: 'normal',
                              color: '#64a1ff',
                            }}
                          >
                            ● ACTIVE&nbsp;
                          </em>
                        )}
                        {period}
                      </b>

                      <span>{category}</span>
                    </div>

                    <i />

                    <div>
                      <h3>{role}</h3>
                      <h4>{company}</h4>
                      <p>{description}</p>
                    </div>
                  </article>
                )
              )}
          </div>
        </section>

        <section id="tech-stack" className="section">
          <SectionTitle number="03" label="Arsenal" title="Technology Stack" />

          <div className="tech-list">
            {[
              [
                'Frameworks & Mobile',
                ['.NET', 'React', 'Flutter', 'Vue.js'],
              ],
              ['Languages', ['JavaScript', 'HTML/CSS']],
              [
                'Backend & Data',
                [
                  'MSSQL',
                  'Firebase',
                  'REST APIs',
                  'SQL Server',
                  'Prisma',
                  'Node.js',
                ],
              ],
              ['Tools', ['Git', 'GitHub']],
            ].map(([category, values]) => (
              <div className="tech-group" key={category}>
                <span>{category}</span>

                <div>
                  {values.map((x) => (
                    <b key={x}>{x}</b>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="training" className="section">
          <SectionTitle
            number="04"
            label="Education"
            title="Training & Certifications"
          />

          <div
            className="training-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
              gap: 18,
            }}
          >
            {trainings.map((training) => (
              <article
                className="training-card"
                key={`${training.provider}-${training.title}`}
                style={{
                  position: 'relative',
                  minHeight: 300,
                  padding: 26,
                  border: '1px solid rgba(255,255,255,.09)',
                  background:
                    'linear-gradient(145deg, rgba(13,16,28,.96), rgba(7,9,17,.94))',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    pointerEvents: 'none',
                    background:
                      'linear-gradient(120deg, transparent 0%, rgba(59,130,246,.07) 50%, transparent 100%)',
                  }}
                />

                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: 16,
                      marginBottom: 24,
                    }}
                  >
                    <div
                      style={{
                        width: 72,
                        height: 72,
                        display: 'grid',
                        placeItems: 'center',
                        border: '1px solid rgba(255,255,255,.12)',
                        background: '#fff',
                        borderRadius: 12,
                        padding: 10,
                      }}
                    >
                      <img
                        src={training.logo}
                        alt={`${training.provider} logo`}
                        style={{
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                        }}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                          e.currentTarget.parentElement.innerHTML = `<strong style="color:#111;font-size:12px">${training.logoLabel}</strong>`
                        }}
                      />
                    </div>

                    <span
                      style={{
                        padding: '7px 10px',
                        border: '1px solid rgba(59,130,246,.35)',
                        color: '#72a8ff',
                        background: 'rgba(37,99,235,.09)',
                        font: '600 10px "Geist Mono", monospace',
                        letterSpacing: '.12em',
                      }}
                    >
                      {training.year}
                    </span>
                  </div>

                  <small
                    style={{
                      display: 'block',
                      color: '#6f87a6',
                      textTransform: 'uppercase',
                      letterSpacing: '.12em',
                      font: '600 9px "Geist Mono", monospace',
                      marginBottom: 10,
                    }}
                  >
                    {training.provider}
                  </small>

                  <h3
                    style={{
                      margin: 0,
                      color: '#eef4ff',
                      fontSize: 24,
                      lineHeight: 1.1,
                    }}
                  >
                    {training.title}
                  </h3>

                  <p
                    style={{
                      margin: '16px 0 0',
                      color: '#8994a7',
                      lineHeight: 1.65,
                      fontSize: 13,
                    }}
                  >
                    {training.description}
                  </p>
                </div>

                <a
                  href={training.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    marginTop: 24,
                    color: '#64a1ff',
                    textDecoration: 'none',
                    font: '600 10px "Geist Mono", monospace',
                    letterSpacing: '.1em',
                  }}
                >
                  VERIFY PROVIDER ↗
                </a>
              </article>
            ))}
          </div>

          <div
            style={{
              marginTop: 18,
              padding: '14px 18px',
              borderLeft: '2px solid #3b82f6',
              background: 'rgba(37,99,235,.06)',
              color: '#7f8da1',
              fontSize: 11,
              lineHeight: 1.6,
            }}
          >
            Professional training completed across 2019–2024:
            Python Programming at BONEVET Kaçanik, Cisco Networking — CCNA
            at CITECH Academy, and Java Advanced Course at Zeta Corporation.
          </div>
        </section>

        <section id="projects" className="section">
          <SectionTitle number="05" label="Creations" title="Featured Work" />

          <article className="featured">
            <div className="graph-art">
              <img
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.76,
                  filter: 'saturate(.9) contrast(1.18)',
                }}
                src={igs}
                alt="Advanced intelligence graph and analytics visualization"
              />

              <div className="graph-line l1" />
              <div className="graph-line l2" />
              <div className="graph-line l3" />

              {[1, 2, 3, 4, 5, 6].map((n) => (
                <i className={`node n${n}`} key={n} />
              ))}

              <span>
                INTELLIGENCE
                <br />
                GRAPH SYSTEM
              </span>
            </div>

            <div className="featured-copy">
              <small>
                <i /> Featured Project
              </small>

              <h3>
                IGS — Intelligence
                <br />
                Graph System
              </h3>

              <p>
                Interactive intelligence and relationship graph platform for
                investigative analysis. Built with React, React Flow, and
                modern graph visualization techniques.
              </p>

              <div className="tags">
                {[
                  'React',
                  'React Flow',
                  'Graph Visualization',
                  'Investigation Tools',
                ].map((x) => (
                  <b key={x}>{x}</b>
                ))}
              </div>

              <a href="#contact">Explore Technical Case Study →</a>
            </div>
          </article>

          <div className="project-grid">
            {[...projects, ...extraProjects].map(
              ([name, description, tags, art]) => (
                <article className="project" key={name}>
                  <div
                    className={`project-art ${
                      art.startsWith('http') ? 'has-photo' : art
                    }`}
                    style={{ background: '#080a12' }}
                  >
                    {name === 'Parking City' ? (
                      <div
                        style={{
                          width: 105,
                          height: 158,
                          padding: 5,
                          borderRadius: 22,
                          background:
                            'linear-gradient(145deg,#e2e8f0,#4b5563)',
                          boxShadow: '0 15px 28px #000',
                          zIndex: 2,
                        }}
                      >
                        <div
                          style={{
                            position: 'relative',
                            width: '100%',
                            height: '100%',
                            overflow: 'hidden',
                            borderRadius: 18,
                            background:
                              'linear-gradient(145deg,#06162a,#0e3d67)',
                          }}
                        >
                          <i
                            style={{
                              position: 'absolute',
                              zIndex: 2,
                              top: 7,
                              left: '50%',
                              transform: 'translateX(-50%)',
                              width: 37,
                              height: 10,
                              borderRadius: 9,
                              background: '#020617',
                            }}
                          />

                          <b
                            style={{
                              position: 'absolute',
                              top: 25,
                              left: 11,
                              color: '#fff',
                              font: '700 9px Geist',
                            }}
                          >
                            PARKING CITY
                          </b>

                          <strong
                            style={{
                              position: 'absolute',
                              zIndex: 2,
                              top: 45,
                              left: 29,
                              width: 36,
                              height: 36,
                              display: 'grid',
                              placeItems: 'center',
                              borderRadius: 11,
                              background: '#1683ff',
                              border: '2px solid #91d4ff',
                              color: '#fff',
                              font: '800 27px Outfit',
                              boxShadow: '0 0 18px #1683ff',
                            }}
                          >
                            P
                          </strong>

                          <div
                            style={{
                              position: 'absolute',
                              left: 11,
                              right: 11,
                              bottom: 20,
                              height: 47,
                              borderRadius: 7,
                              backgroundImage:
                                'linear-gradient(90deg,rgba(103,232,249,.48) 1px,transparent 1px),linear-gradient(rgba(103,232,249,.48) 1px,transparent 1px)',
                              backgroundSize: '13px 13px',
                              border:
                                '1px solid rgba(103,232,249,.5)',
                            }}
                          >
                            <i
                              style={{
                                position: 'absolute',
                                width: 8,
                                height: 8,
                                borderRadius: '50%',
                                background: '#f472b6',
                                top: 15,
                                left: 23,
                                boxShadow: '0 0 9px #f472b6',
                              }}
                            />
                          </div>

                          <span
                            style={{
                              position: 'absolute',
                              bottom: 6,
                              left: 12,
                              font: '600 7px Geist Mono',
                              color: '#a5f3fc',
                            }}
                          >
                            12 SPOTS AVAILABLE
                          </span>
                        </div>
                      </div>
                    ) : (
                      <>
                        {(projectImages[name] || art.startsWith('http')) && (
                          <>
                            <img
                              style={{
                                width: '78%',
                                height: '73%',
                                objectFit: 'cover',
                                border: '4px solid #252a3c',
                                borderRadius: 5,
                                boxShadow: '0 12px 18px #000',
                                zIndex: 1,
                              }}
                              src={
                                laptopImages[name] ||
                                projectImages[name] ||
                                art
                              }
                              alt={`${name} project preview`}
                              loading="lazy"
                            />

                            <i
                              style={{
                                position: 'absolute',
                                zIndex: 1,
                                bottom: '9%',
                                width: '88%',
                                height: 8,
                                borderRadius: '0 0 10px 10px',
                                background:
                                  'linear-gradient(90deg,#151a29,#77809a,#151a29)',
                                boxShadow: '0 5px 9px #000',
                              }}
                            />
                          </>
                        )}
                      </>
                    )}

                    <span
                      style={{
                        position: 'absolute',
                        zIndex: 3,
                        left: 14,
                        bottom: 13,
                        color: '#fff',
                        fontSize: 18,
                        textShadow: '0 2px 13px #000',
                      }}
                    >
                      {name.slice(0, 2).toUpperCase()}
                    </span>
                  </div>

                  <h3>{name}</h3>

                  <p>{description}</p>

                  <div className="tags">
                    {tags.map((x) => (
                      <b key={x}>{x}</b>
                    ))}
                  </div>
                </article>
              )
            )}
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="terminal">Let's initiate a terminal</div>

          <h2>GET IN TOUCH</h2>

          <div className="contact-grid">
            {[
              [
                'mail',
                'E-mail Protocol',
                'besnikbegunca@gmail.com',
                'mailto:besnikbegunca@gmail.com',
              ],
              [
                'github',
                'GitHub Database',
                'github.com/BesnikBegunca',
                'https://github.com/BesnikBegunca',
              ],
              [
                'phone',
                'Direct Secure Call',
                '+383 49 156 335',
                'tel:+38349156335',
              ],
              [
                'linkedin',
                'LinkedIn',
                'linkedin.com/in/besnik-begunca',
                'https://www.linkedin.com/in/besnik-begunca-3654a0296',
              ],
            ].map(([icon, label, value, href]) => (
              <a
                className="contact-card"
                href={href}
                key={label}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
              >
                <i>
                  <Icon name={icon} />
                </i>

                <small>{label}</small>

                <strong>{value}</strong>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <span>
          © 2024 Besnik Begunca. All rights reserved. Built with technical
          precision.
        </span>

        <b>PORTFOLIO EDITION // V2.0</b>
      </footer>
    </>
  )
}

export default App