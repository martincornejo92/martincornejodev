"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const NAV_LINKS = ["About", "Experience", "Projects", "Skills", "Contact"];

const EXPERIENCE = [
  {
    role: "Senior Mobile Developer",
    company: "ITR",
    period: "Apr 2023 — Present",
    location: "San Juan, Argentina",
    highlights: [
      "Developed & optimized mobile apps with 10,000+ users using React Native & Flutter",
      "Reduced load times by 30% (from 5s to 3.5s)",
      "Led a team of 3 developers, reducing bugs by 40%",
    ],
  },
  {
    role: "Senior Mobile Developer",
    company: "Groomit for Pets",
    period: "Dec 2021 — Feb 2023",
    location: "Remote, USA",
    highlights: [
      "Developed a pet care app with 20,000+ users",
      "Increased engagement by 25%",
      "Integrated secure payment systems, cutting failures by 15%",
    ],
  },
  {
    role: "Mobile Developer",
    company: "Folcode",
    period: "Jul 2021 — Dec 2021",
    location: "San Juan, Argentina",
    highlights: ["Delivered 5+ apps, improving client delivery times by 20%"],
  },
  {
    role: "Mobile Developer",
    company: "NEC Argentina",
    period: "Mar 2021 — Jul 2021",
    location: "San Juan, Argentina",
    highlights: ["Developed internal apps that improved operational efficiency by 15%"],
  },
  {
    role: "Freelance Mobile Developer",
    company: "Self-employed",
    period: "Oct 2019 — Jun 2020",
    location: "San Juan, Argentina",
    highlights: ["Delivered mobile solutions to 3 local businesses, increasing their online reach"],
  },
];

const PROJECTS = [
  {
    name: "Degustur",
    description: "Tourism app built with Flutter & Firebase. Achieved 5,000+ downloads and a 4.8⭐ rating on the app stores.",
    tags: ["Flutter", "Firebase", "Tourism"],
    url: "https://github.com/martincornejo92/degustur",
    metric: "5K+ downloads",
  },
  {
    name: "DeepLearningUnicen",
    description: "Deep learning models for educational purposes using TensorFlow and Keras.",
    tags: ["TensorFlow", "Keras", "Python"],
    url: "https://github.com/martincornejo92/DeepLearningUnicen",
    metric: "Educational ML",
  },
  {
    name: "Twitter Sentiment",
    description: "Sentiment analysis dataset with 5,500+ tweets to train ML models for improved accuracy.",
    tags: ["NLP", "ML", "Python"],
    url: "https://github.com/martincornejo92/twitter-sentiment-training",
    metric: "5,500+ tweets",
  },
  {
    name: "RN Login Example",
    description: "Mobile authentication demo using React Native with a secure login screen implementation.",
    tags: ["React Native", "Auth", "UI"],
    url: "https://github.com/martincornejo92/Example-Login-Screen-with-React-NativeDrixit",
    metric: "Open Source",
  },
];

const SKILLS = [
  { category: "Mobile", items: ["React Native", "Flutter", "Firebase"] },
  { category: "Cloud & DB", items: ["AWS", "Google Cloud", "MySQL", "Hadoop"] },
  { category: "DevOps", items: ["CI/CD", "Git", "Unit Testing", "Agile/Scrum"] },
  { category: "AI / ML", items: ["TensorFlow", "Keras", "NLP", "Deep Learning"] },
];

export default function Home() {
  const sectionsRef = useRef<NodeListOf<Element> | null>(null);

  useEffect(() => {
    sectionsRef.current = document.querySelectorAll(".section-hidden");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("section-visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    sectionsRef.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      {/* Ambient blobs */}
      <div
        style={{
          position: "fixed",
          top: "-20%",
          right: "-10%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,106,247,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "fixed",
          bottom: "-10%",
          left: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(62,207,207,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* NAV */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          background: "rgba(10,10,15,0.8)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "18px", letterSpacing: "-0.02em" }}>
          mc<span className="gradient-text">.</span>dev
        </span>
        <div style={{ display: "flex", gap: "32px" }}>
          {NAV_LINKS.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="nav-link">
              {l}
            </a>
          ))}
        </div>
        <a
          href="mailto:fmartin.cornejo@gmail.com"
          style={{
            background: "linear-gradient(135deg, #7c6af7, #3ecfcf)",
            color: "#fff",
            fontFamily: "Space Mono, monospace",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "8px 20px",
            borderRadius: "100px",
            textDecoration: "none",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "0.8")}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "1")}
        >
          Hire me
        </a>
      </nav>

      {/* HERO */}
      <section
        id="about"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "120px 40px 80px",
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 400px", gap: "80px", alignItems: "center", width: "100%" }}>
          <div>
            <div className="animate-fade-up" style={{ marginBottom: "20px" }}>
              <span className="tag" style={{ marginBottom: "16px", display: "inline-block" }}>
                📍 San Juan, Argentina
              </span>
            </div>
            <h1
              className="animate-fade-up delay-100"
              style={{
                fontFamily: "Syne, sans-serif",
                fontSize: "clamp(48px, 7vw, 88px)",
                fontWeight: 800,
                lineHeight: 1.0,
                letterSpacing: "-0.03em",
                marginBottom: "24px",
              }}
            >
              Martin
              <br />
              <span className="gradient-text">Cornejo</span>
            </h1>
            <p
              className="animate-fade-up delay-200"
              style={{
                fontSize: "14px",
                color: "var(--muted)",
                lineHeight: 1.8,
                maxWidth: "480px",
                marginBottom: "40px",
              }}
            >
              Senior Mobile Developer with 4+ years building scalable apps used by{" "}
              <span style={{ color: "var(--text)" }}>20,000+ users</span>. I specialize in{" "}
              <span style={{ color: "#a899ff" }}>React Native</span> &{" "}
              <span style={{ color: "#4dd9d9" }}>Flutter</span>, delivering high-performance experiences that solve real-world problems.
            </p>
            <div className="animate-fade-up delay-300" style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a
                href="#contact"
                style={{
                  background: "linear-gradient(135deg, #7c6af7, #3ecfcf)",
                  color: "#fff",
                  fontFamily: "Space Mono, monospace",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "14px 28px",
                  borderRadius: "100px",
                  textDecoration: "none",
                }}
              >
                Get in touch →
              </a>
              <a
                href="https://github.com/martincornejo92"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "transparent",
                  color: "var(--text)",
                  fontFamily: "Space Mono, monospace",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "14px 28px",
                  borderRadius: "100px",
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                GitHub ↗
              </a>
            </div>
            {/* Stats */}
            <div
              className="animate-fade-up delay-400"
              style={{ display: "flex", gap: "40px", marginTop: "56px", paddingTop: "40px", borderTop: "1px solid var(--border)" }}
            >
              {[
                { num: "4+", label: "Years exp." },
                { num: "20K+", label: "App users" },
                { num: "5+", label: "Apps shipped" },
                { num: "4.8⭐", label: "App rating" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    style={{
                      fontFamily: "Syne, sans-serif",
                      fontSize: "28px",
                      fontWeight: 800,
                      background: "linear-gradient(135deg, #7c6af7, #3ecfcf)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {s.num}
                  </div>
                  <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "4px", letterSpacing: "0.05em" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className="animate-fade-up delay-200 animate-float" style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                inset: "-2px",
                borderRadius: "24px",
                background: "linear-gradient(135deg, #7c6af7, #3ecfcf)",
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: "relative",
                zIndex: 1,
                borderRadius: "22px",
                overflow: "hidden",
                margin: "2px",
              }}
            >
              <Image
                src="/profile.jpeg"
                alt="Martin Cornejo"
                width={400}
                height={400}
                style={{ display: "block", width: "100%", height: "auto" }}
                priority
              />
            </div>
            {/* Floating badge */}
            <div
              style={{
                position: "absolute",
                bottom: "-20px",
                left: "-20px",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "12px 16px",
                zIndex: 2,
              }}
            >
              <div style={{ fontSize: "11px", color: "var(--muted)", marginBottom: "4px" }}>Currently at</div>
              <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "14px" }}>ITR • Full-time</div>
            </div>
            <div
              style={{
                position: "absolute",
                top: "-20px",
                right: "-20px",
                background: "linear-gradient(135deg, rgba(124,106,247,0.2), rgba(62,207,207,0.2))",
                border: "1px solid rgba(124,106,247,0.3)",
                borderRadius: "12px",
                padding: "12px 16px",
                zIndex: 2,
                backdropFilter: "blur(8px)",
              }}
            >
              <div style={{ fontSize: "20px", textAlign: "center" }}>📱</div>
              <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "12px", marginTop: "2px" }}>Mobile first</div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="section-hidden"
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 40px", position: "relative", zIndex: 1 }}
      >
        <div style={{ marginBottom: "56px" }}>
          <span className="tag-teal tag" style={{ marginBottom: "12px", display: "inline-block" }}>
            Work history
          </span>
          <h2 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(36px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-0.02em" }}>
            Experience
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {EXPERIENCE.map((job, i) => (
            <div
              key={i}
              className="glass-card"
              style={{ padding: "32px", display: "grid", gridTemplateColumns: "1fr auto", gap: "24px", alignItems: "start" }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                  <h3 style={{ fontFamily: "Syne, sans-serif", fontSize: "20px", fontWeight: 700 }}>{job.role}</h3>
                  {i === 0 && (
                    <span
                      style={{
                        background: "rgba(62,207,207,0.15)",
                        border: "1px solid rgba(62,207,207,0.3)",
                        color: "#4dd9d9",
                        fontSize: "10px",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        padding: "3px 10px",
                        borderRadius: "100px",
                        fontFamily: "Space Mono, monospace",
                      }}
                    >
                      CURRENT
                    </span>
                  )}
                </div>
                <p style={{ color: "#a899ff", fontSize: "14px", marginBottom: "16px", fontFamily: "Syne, sans-serif", fontWeight: 600 }}>
                  {job.company} · {job.location}
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {job.highlights.map((h, j) => (
                    <li key={j} style={{ fontSize: "13px", color: "var(--muted)", paddingLeft: "16px", position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: "#7c6af7" }}>▸</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <span style={{ fontSize: "12px", color: "var(--muted)", fontFamily: "Space Mono, monospace", whiteSpace: "nowrap" }}>
                  {job.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="section-hidden"
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 40px", position: "relative", zIndex: 1 }}
      >
        <div style={{ marginBottom: "56px" }}>
          <span className="tag" style={{ marginBottom: "12px", display: "inline-block" }}>
            Side projects
          </span>
          <h2 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(36px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-0.02em" }}>
            Projects
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          {PROJECTS.map((p, i) => (
            <a
              key={i}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card"
              style={{ padding: "28px", textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", gap: "16px", cursor: "pointer" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <h3 style={{ fontFamily: "Syne, sans-serif", fontSize: "18px", fontWeight: 700 }}>{p.name}</h3>
                <span style={{ color: "var(--muted)", fontSize: "18px" }}>↗</span>
              </div>
              <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.7, flex: 1 }}>{p.description}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
              <div
                style={{
                  marginTop: "auto",
                  paddingTop: "16px",
                  borderTop: "1px solid var(--border)",
                  fontSize: "12px",
                  color: "#4dd9d9",
                  fontWeight: 700,
                  fontFamily: "Space Mono, monospace",
                }}
              >
                {p.metric}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="section-hidden"
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 40px", position: "relative", zIndex: 1 }}
      >
        <div style={{ marginBottom: "56px" }}>
          <span className="tag-teal tag" style={{ marginBottom: "12px", display: "inline-block" }}>
            Tech stack
          </span>
          <h2 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(36px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-0.02em" }}>
            Skills
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
          {SKILLS.map((s, i) => (
            <div key={i} className="glass-card" style={{ padding: "28px" }}>
              <h4 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "20px" }}>
                {s.category}
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {s.items.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: i % 2 === 0 ? "#7c6af7" : "#3ecfcf",
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ fontSize: "14px", fontFamily: "Syne, sans-serif", fontWeight: 600 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="glass-card" style={{ marginTop: "20px", padding: "28px" }}>
          <h4 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "20px" }}>
            Languages
          </h4>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {[
              { lang: "Spanish", level: "Native", pct: 100, color: "#7c6af7" },
              { lang: "English", level: "B1 Intermediate", pct: 60, color: "#3ecfcf" },
            ].map((l) => (
              <div key={l.lang} style={{ flex: "1", minWidth: "160px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                  <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 600 }}>{l.lang}</span>
                  <span style={{ fontSize: "12px", color: "var(--muted)" }}>{l.level}</span>
                </div>
                <div style={{ height: "3px", background: "var(--border)", borderRadius: "2px" }}>
                  <div style={{ width: `${l.pct}%`, height: "100%", borderRadius: "2px", background: l.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="section-hidden"
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 40px 120px", position: "relative", zIndex: 1 }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, rgba(124,106,247,0.12), rgba(62,207,207,0.08))",
            border: "1px solid rgba(124,106,247,0.2)",
            borderRadius: "24px",
            padding: "80px 60px",
            textAlign: "center",
          }}
        >
          <span className="tag" style={{ marginBottom: "20px", display: "inline-block" }}>
            Let&apos;s work together
          </span>
          <h2
            style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              marginBottom: "20px",
              lineHeight: 1.1,
            }}
          >
            Got a project?
            <br />
            <span className="gradient-text">Let&apos;s talk.</span>
          </h2>
          <p style={{ fontSize: "14px", color: "var(--muted)", marginBottom: "40px", maxWidth: "400px", margin: "0 auto 40px", lineHeight: 1.7 }}>
            I&apos;m open to freelance opportunities, full-time roles, and interesting collaborations.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="mailto:fmartin.cornejo@gmail.com"
              style={{
                background: "linear-gradient(135deg, #7c6af7, #3ecfcf)",
                color: "#fff",
                fontFamily: "Space Mono, monospace",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "16px 32px",
                borderRadius: "100px",
                textDecoration: "none",
              }}
            >
              fmartin.cornejo@gmail.com
            </a>
            <a
              href="https://github.com/martincornejo92"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "transparent",
                color: "var(--text)",
                fontFamily: "Space Mono, monospace",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "16px 32px",
                borderRadius: "100px",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              GitHub ↗
            </a>
          </div>
          <p style={{ marginTop: "24px", fontSize: "12px", color: "var(--muted)" }}>📞 +54 264 452 8003</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: "1px solid var(--border)",
          padding: "24px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "16px" }}>
          mc<span className="gradient-text">.</span>dev
        </span>
        <span style={{ fontSize: "12px", color: "var(--muted)", fontFamily: "Space Mono, monospace" }}>
          © {new Date().getFullYear()} Martin Cornejo
        </span>
      </footer>
    </div>
  );
}
