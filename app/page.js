'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

// ── Data ──────────────────────────────────────────────────────────────────
const experience = [
  {
    role: 'Senior Mobile Developer',
    company: 'ITR',
    period: 'Apr 2023 — Present',
    location: 'San Juan, Argentina',
    bullets: [
      'Built & optimized apps with 10,000+ users using React Native & Flutter, cutting load times 30%.',
      'Led a team of 3 developers, delivering on schedule and reducing bugs by 40%.',
    ],
  },
  {
    role: 'Senior Mobile Developer',
    company: 'Groomit for Pets',
    period: 'Dec 2021 — Feb 2023',
    location: 'Remote, USA',
    bullets: [
      'Developed a pet care app with 20,000+ users, boosting engagement by 25%.',
      'Integrated secure payment systems, cutting transaction failures by 15%.',
    ],
  },
  {
    role: 'Mobile Developer',
    company: 'Folcode',
    period: 'Jul 2021 — Dec 2021',
    location: 'San Juan, Argentina',
    bullets: ['Delivered 5+ apps, improving client delivery times by 20%.'],
  },
  {
    role: 'Mobile Developer',
    company: 'NEC Argentina',
    period: 'Mar 2021 — Jul 2021',
    location: 'San Juan, Argentina',
    bullets: ['Developed internal apps that improved operational efficiency by 15%.'],
  },
  {
    role: 'Freelance Mobile Developer',
    company: 'Self-employed',
    period: 'Oct 2019 — Jun 2020',
    location: 'San Juan, Argentina',
    bullets: ['Delivered mobile solutions to 3 local businesses, growing their online reach.'],
  },
]

const projects = [
  {
    name: 'Degustur',
    role: 'Lead Developer',
    period: 'Jun 2023 — Present',
    tech: ['Flutter', 'Firebase'],
    description: 'Tourism app with 5,000+ downloads and a 4.8⭐ rating. Led development and implemented features that boosted retention.',
    url: 'https://github.com/martincornejo92/degustur',
  },
  {
    name: 'DeepLearningUnicen',
    role: 'Contributor',
    period: '2020',
    tech: ['TensorFlow', 'Keras'],
    description: 'Deep learning models for educational purposes, improving the learning experience for university students.',
    url: 'https://github.com/martincornejo92/DeepLearningUnicen',
  },
  {
    name: 'Twitter Sentiment Training',
    role: 'Creator',
    period: '2019',
    tech: ['Python', 'NLP'],
    description: 'Sentiment analysis dataset with 5,500+ tweets to train ML models, contributing to improved prediction accuracy.',
    url: 'https://github.com/martincornejo92/twitter-sentiment-training',
  },
]

const skills = {
  'Mobile': ['React Native', 'Flutter', 'iOS', 'Android'],
  'Backend & Cloud': ['Firebase', 'Google Cloud', 'AWS', 'MySQL', 'Hadoop'],
  'Dev Tools': ['Git', 'CI/CD', 'Unit Testing', 'Agile / Scrum'],
}

// ── Hooks ─────────────────────────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true) },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

// ── Components ────────────────────────────────────────────────────────────
function FadeIn({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

function SectionLabel({ children }) {
  return (
    <div className="font-mono" style={{ color: 'var(--accent)', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '1rem' }}>
      {'// '}{children}
    </div>
  )
}

function SectionTitle({ children }) {
  return (
    <h2 className="font-display" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1, color: 'var(--text)', marginBottom: '3rem' }}>
      {children}
    </h2>
  )
}

// ── Main Page ─────────────────────────────────────────────────────────────
export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <main style={{ minHeight: '100vh' }}>

      {/* ── Nav ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '1.25rem 2rem',
        background: scrolled ? 'rgba(8,8,8,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid #1a1a1a' : 'none',
        transition: 'all 0.3s ease',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a href="#home" className="font-mono" style={{ color: 'var(--accent)', fontSize: '0.85rem', textDecoration: 'none' }}>
          mc<span style={{ color: 'var(--muted)' }}>.dev</span>
        </a>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {navLinks.map(l => (
            <a key={l.href} href={l.href} style={{
              color: 'var(--muted)', fontSize: '0.8rem', textDecoration: 'none',
              fontFamily: 'DM Mono, monospace', letterSpacing: '0.05em',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.target.style.color = 'var(--text)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >
              {l.label}
            </a>
          ))}
        </div>
      </nav>

      {/* ── Hero ── */}
      <section id="home" style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        padding: '0 clamp(1.5rem, 6vw, 7rem)',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Background blobs */}
        <div style={{
          position: 'absolute', top: '15%', right: '5%',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,255,135,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '10%', left: '-5%',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,196,255,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr auto', gap: '4rem', alignItems: 'center' }}>

          {/* Text */}
          <div>
            <div className="font-mono" style={{ color: 'var(--accent)', fontSize: '0.75rem', letterSpacing: '0.2em', marginBottom: '1.5rem', opacity: 0, animation: 'fadeUp 0.6s ease 0.1s forwards' }}>
              // MOBILE DEVELOPER
            </div>

            <h1 className="font-display" style={{
              fontSize: 'clamp(4rem, 10vw, 8.5rem)', lineHeight: 0.95,
              opacity: 0, animation: 'fadeUp 0.7s ease 0.2s forwards',
            }}>
              MARTIN<br />
              <span style={{ WebkitTextStroke: '1px rgba(240,240,240,0.3)', color: 'transparent' }}>CORNEJO</span>
            </h1>

            <p style={{
              marginTop: '2rem', maxWidth: '520px',
              color: 'var(--muted)', lineHeight: 1.75, fontSize: '0.95rem',
              opacity: 0, animation: 'fadeUp 0.7s ease 0.35s forwards',
            }}>
              4+ years crafting high-performance mobile apps with{' '}
              <span style={{ color: 'var(--text)' }}>React Native</span> &{' '}
              <span style={{ color: 'var(--text)' }}>Flutter</span>. I ship products that users love — from 0 to 20K+ users.
            </p>

            <div style={{
              marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap',
              opacity: 0, animation: 'fadeUp 0.7s ease 0.5s forwards',
            }}>
              <a href="#contact" style={{
                padding: '0.8rem 2rem', background: 'var(--accent)', color: '#080808',
                fontFamily: 'DM Mono, monospace', fontSize: '0.8rem', fontWeight: 500,
                textDecoration: 'none', letterSpacing: '0.08em',
                transition: 'transform 0.2s, box-shadow 0.2s',
                display: 'inline-block',
              }}
                onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 8px 30px rgba(0,255,135,0.3)' }}
                onMouseLeave={e => { e.target.style.transform = 'none'; e.target.style.boxShadow = 'none' }}
              >
                GET IN TOUCH →
              </a>
              <a href="https://github.com/martincornejo92" target="_blank" rel="noopener noreferrer" style={{
                padding: '0.8rem 2rem', border: '1px solid var(--border)', color: 'var(--muted)',
                fontFamily: 'DM Mono, monospace', fontSize: '0.8rem',
                textDecoration: 'none', letterSpacing: '0.08em',
                transition: 'border-color 0.2s, color 0.2s',
                display: 'inline-block',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--text)'; e.currentTarget.style.color = 'var(--text)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)' }}
              >
                GITHUB ↗
              </a>
            </div>

            {/* Stats */}
            <div style={{
              marginTop: '4rem', display: 'flex', gap: '3rem',
              opacity: 0, animation: 'fadeUp 0.7s ease 0.65s forwards',
            }}>
              {[['4+', 'Years experience'], ['20K+', 'App users'], ['4.8★', 'App store rating']].map(([num, label]) => (
                <div key={label}>
                  <div className="font-display" style={{ fontSize: '2.2rem', color: 'var(--accent)', lineHeight: 1 }}>{num}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--muted)', marginTop: '0.3rem', fontFamily: 'DM Mono, monospace' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div style={{ opacity: 0, animation: 'fadeUp 0.8s ease 0.4s forwards' }}>
            <div style={{
              position: 'relative', width: '280px', height: '340px',
              flexShrink: 0,
            }}>
              <div style={{
                position: 'absolute', inset: 0,
                border: '1px solid rgba(0,255,135,0.2)',
                transform: 'translate(10px, 10px)',
              }} />
              <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: 'var(--surface)' }}>
                // Usa exactamente "/profile.jpg"
                <Image src="/profile.jpg" 
                alt="Profile" 
                width={120} 
                height={120} 
                className="rounded-full" />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(8,8,8,0.4) 0%, transparent 50%)',
                }} />
              </div>
              <div className="font-mono" style={{
                position: 'absolute', bottom: '-2rem', right: 0,
                fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.1em',
              }}>
                San Juan, AR 🇦🇷
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{
          position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
          opacity: 0, animation: 'fadeUp 1s ease 1s forwards',
        }}>
          <div style={{ width: '1px', height: '50px', background: 'linear-gradient(to bottom, transparent, var(--accent))', animation: 'pulse 2s infinite' }} />
        </div>
      </section>

      {/* ── Experience ── */}
      <section id="experience" style={{ padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 6vw, 7rem)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <FadeIn>
            <SectionLabel>work history</SectionLabel>
            <SectionTitle>EXPERIENCE</SectionTitle>
          </FadeIn>

          <div style={{ position: 'relative' }}>
            {/* Timeline line */}
            <div style={{
              position: 'absolute', left: 0, top: 0, bottom: 0,
              width: '1px', background: 'linear-gradient(to bottom, var(--accent), transparent)',
              display: 'none',
            }} />

            {experience.map((job, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div style={{
                  display: 'grid', gridTemplateColumns: '200px 1fr', gap: '2.5rem',
                  padding: '2rem 0', borderBottom: '1px solid var(--border)',
                  transition: 'background 0.2s',
                }}>
                  <div>
                    <div className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--accent)', letterSpacing: '0.05em', marginBottom: '0.3rem' }}>
                      {job.period}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{job.location}</div>
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.5rem' }}>
                      <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>{job.role}</h3>
                      <span style={{ fontSize: '0.8rem', color: 'var(--accent)', fontFamily: 'DM Mono, monospace' }}>@ {job.company}</span>
                    </div>
                    <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
                      {job.bullets.map((b, j) => (
                        <li key={j} style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '0.25rem', display: 'flex', gap: '0.5rem' }}>
                          <span style={{ color: 'var(--accent)', flexShrink: 0 }}>▸</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" style={{ padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 6vw, 7rem)', background: 'var(--surface)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <FadeIn>
            <SectionLabel>selected work</SectionLabel>
            <SectionTitle>PROJECTS</SectionTitle>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {projects.map((p, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <a href={p.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
                  <div style={{
                    padding: '2rem', background: 'var(--bg)',
                    border: '1px solid var(--border)',
                    height: '100%', cursor: 'pointer',
                    transition: 'border-color 0.3s, transform 0.3s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,255,135,0.4)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                      <span className="font-mono" style={{ fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.1em' }}>{p.period}</span>
                      <span style={{ color: 'var(--accent)', fontSize: '1rem' }}>↗</span>
                    </div>
                    <h3 className="font-display" style={{ fontSize: '1.8rem', marginBottom: '0.3rem', color: 'var(--text)' }}>{p.name}</h3>
                    <div className="font-mono" style={{ fontSize: '0.65rem', color: 'var(--accent)', marginBottom: '1rem', letterSpacing: '0.08em' }}>{p.role}</div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>{p.description}</p>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {p.tech.map(t => (
                        <span key={t} style={{
                          fontSize: '0.65rem', fontFamily: 'DM Mono, monospace',
                          padding: '0.25rem 0.6rem', border: '1px solid var(--border)',
                          color: 'var(--muted)', letterSpacing: '0.05em',
                        }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section id="skills" style={{ padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 6vw, 7rem)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <FadeIn>
            <SectionLabel>tech stack</SectionLabel>
            <SectionTitle>SKILLS</SectionTitle>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
            {Object.entries(skills).map(([cat, items], i) => (
              <FadeIn key={cat} delay={i * 0.1}>
                <div>
                  <div className="font-mono" style={{ fontSize: '0.65rem', color: 'var(--accent)', letterSpacing: '0.15em', marginBottom: '1.2rem', textTransform: 'uppercase' }}>
                    {cat}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {items.map(skill => (
                      <div key={skill} style={{
                        padding: '0.7rem 1rem',
                        border: '1px solid var(--border)',
                        fontSize: '0.88rem',
                        color: 'var(--text)',
                        display: 'flex', alignItems: 'center', gap: '0.7rem',
                        transition: 'border-color 0.2s, background 0.2s',
                        cursor: 'default',
                      }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,255,135,0.3)'; e.currentTarget.style.background = 'rgba(0,255,135,0.03)' }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'transparent' }}
                      >
                        <span style={{ color: 'var(--accent)', fontSize: '0.5rem' }}>●</span>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Languages */}
          <FadeIn delay={0.3}>
            <div style={{ marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid var(--border)' }}>
              <div className="font-mono" style={{ fontSize: '0.65rem', color: 'var(--accent)', letterSpacing: '0.15em', marginBottom: '1.2rem', textTransform: 'uppercase' }}>
                Languages
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {[['Spanish', 'Native'], ['English', 'B1 – Intermediate']].map(([lang, level]) => (
                  <div key={lang} style={{ padding: '0.7rem 1.2rem', border: '1px solid var(--border)', display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.88rem' }}>{lang}</span>
                    <span className="font-mono" style={{ fontSize: '0.65rem', color: 'var(--muted)' }}>{level}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" style={{
        padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 6vw, 7rem)',
        background: 'var(--surface)',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <FadeIn>
            <SectionLabel>let's connect</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-display" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: 1, marginBottom: '1.5rem' }}>
              GOT A PROJECT<br />
              <span style={{ WebkitTextStroke: '1px rgba(240,240,240,0.3)', color: 'transparent' }}>IN MIND?</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '3rem' }}>
              I'm open to new opportunities — freelance projects, full-time roles, or just a good conversation about mobile dev.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="mailto:fmartin.cornejo@gmail.com" style={{
                padding: '0.9rem 2.5rem', background: 'var(--accent)', color: '#080808',
                fontFamily: 'DM Mono, monospace', fontSize: '0.8rem', fontWeight: 500,
                textDecoration: 'none', letterSpacing: '0.08em',
                display: 'inline-block', transition: 'box-shadow 0.2s, transform 0.2s',
              }}
                onMouseEnter={e => { e.target.style.boxShadow = '0 8px 30px rgba(0,255,135,0.35)'; e.target.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.target.style.boxShadow = 'none'; e.target.style.transform = 'none' }}
              >
                SEND AN EMAIL ↗
              </a>
              <a href="https://github.com/martincornejo92" target="_blank" rel="noopener noreferrer" style={{
                padding: '0.9rem 2.5rem', border: '1px solid var(--border)', color: 'var(--muted)',
                fontFamily: 'DM Mono, monospace', fontSize: '0.8rem',
                textDecoration: 'none', letterSpacing: '0.08em',
                display: 'inline-block', transition: 'border-color 0.2s, color 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--text)'; e.currentTarget.style.color = 'var(--text)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)' }}
              >
                GITHUB ↗
              </a>
            </div>
            <div className="font-mono" style={{ marginTop: '2rem', fontSize: '0.75rem', color: 'var(--muted)' }}>
              +54 2644 528 003 · San Juan, Argentina
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{
        padding: '2rem clamp(1.5rem, 6vw, 7rem)',
        borderTop: '1px solid var(--border)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '1rem',
      }}>
        <span className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--muted)' }}>
          © {new Date().getFullYear()} Martin Cornejo
        </span>
        <span className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--muted)' }}>
          Designed & built with Next.js ⚡
        </span>
      </footer>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @media (max-width: 768px) {
          nav > div { display: none !important; }
        }
        @media (max-width: 900px) {
          section:first-of-type > div > div[style*="grid-template-columns: 1fr auto"] {
            grid-template-columns: 1fr !important;
          }
          section:first-of-type div[style*="width: 280px"] {
            display: none !important;
          }
          div[style*="grid-template-columns: 200px 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 0.5rem !important;
          }
        }
      `}</style>
    </main>
  )
}
