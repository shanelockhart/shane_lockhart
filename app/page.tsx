import { ArrowDownRight, ArrowUpRight, ExternalLink, Fingerprint, ScanSearch, ShieldCheck } from 'lucide-react'

const projects = [
  {
    number: '01',
    title: 'Operators Logic',
    eyebrow: 'Investigative research tools',
    description: 'Tools for search-query building, case organization, and research reporting.',
    contribution: 'Project concept, investigative workflow design, and development with AI assistance.',
    approach: 'Turning the habits of practical investigation into focused tools that make research easier to structure and communicate.',
    className: 'feature-project',
    icon: ScanSearch,
    detail: 'DORK SELECTOR  /  RESEARCH PRO',
  },
  {
    number: '02',
    title: 'Lockhart Property Documentation',
    eyebrow: 'Business + application',
    description: 'A documentation workflow built around photographs, video, serial numbers, inventory records, and organized exports.',
    contribution: 'Business concept, documentation standards, and workflow design with AI-assisted development.',
    approach: 'Preserve original media and distinguish observations from owner-reported information.',
    className: 'property-project',
    icon: Fingerprint,
    detail: 'ORIGINAL MEDIA  /  ORGANIZED EXPORTS',
    link: 'https://secure-asset-scribe.lovable.app',
  },
  {
    number: '03',
    title: 'Cybersecurity Builder Lab',
    eyebrow: 'Learning portfolio',
    description: 'Hands-on learning projects involving phishing analysis, PowerShell, and browser artifacts.',
    contribution: 'Completing exercises, examining results, and documenting my learning.',
    approach: 'A practical record of building, testing, and learning through direct examination.',
    className: 'security-project',
    icon: ShieldCheck,
    detail: 'PHISHING  /  POWERSHELL  /  ARTIFACTS',
  },
]

function ProjectCard({ project, featured = false }: { project: (typeof projects)[number]; featured?: boolean }) {
  const Icon = project.icon
  return (
    <article className={`project-card ${project.className} ${featured ? 'is-featured' : ''}`}>
      <div className="project-visual" aria-hidden="true">
        <div className="visual-grid" />
        <div className="visual-mark"><Icon /></div>
        <span className="visual-label">{project.detail}</span>
        <span className="visual-index">{project.number}</span>
      </div>
      <div className="project-copy">
        <div className="project-meta"><span>{project.eyebrow}</span><span className="dot" /></div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <details>
          <summary>Behind the Project <ArrowDownRight aria-hidden="true" /></summary>
          <div className="behind-copy">
            <p><strong>Contribution</strong>{project.contribution}</p>
            <p><strong>Approach</strong>{project.approach}</p>
          </div>
        </details>
        {project.link && <a className="text-link" href={project.link} target="_blank" rel="noreferrer">View project <ExternalLink aria-hidden="true" /></a>}
      </div>
    </article>
  )
}

export default function Page() {
  return (
    <main>
      <nav className="site-nav" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Shane Lockhart home"><span>SL</span><span>SHANE LOCKHART</span></a>
        <div className="nav-links"><a href="#work">Work</a><a href="#experience">Experience</a><a href="#about">About</a></div>
        <a className="nav-index" href="#work">[ 01 — 03 ]</a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-kicker"><span className="status-dot" />AVAILABLE FOR THE NEXT CHALLENGE</div>
        <div className="hero-content">
          <p className="identity">Investigator. Builder. Cybersecurity Student.</p>
          <h1>An investigator&apos;s<br /><em>mindset.</em> A builder&apos;s<br />approach.</h1>
          <div className="hero-bottom">
            <p className="intro">I&apos;m a former criminal investigator studying cybersecurity at Southern New Hampshire University. I use AI to help turn practical problems and creative ideas into tools, workflows, and experiences.</p>
            <a className="circle-link" href="#work" aria-label="Explore my work"><ArrowDownRight aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section className="work-section section-shell" id="work">
        <div className="section-heading"><p className="section-label">[ SELECTED WORK ]</p><p className="section-note">A collection of practical investigations<br />and creative experiments.</p></div>
        <div className="projects"><ProjectCard project={projects[0]} featured /><div className="project-grid">{projects.slice(1).map((project) => <ProjectCard key={project.title} project={project} />)}</div></div>
      </section>

      <section className="experience-section section-shell" id="experience">
        <div className="section-heading"><p className="section-label">[ EXPERIENCE / 02 ]</p><p className="section-note">A career shaped by<br />observation, service, and practice.</p></div>
        <div className="experience-layout">
          <div className="experience-intro"><h2>Built from<br /><em>the field.</em></h2><p>My investigative tools and documentation workflows grow from hands-on experience with evidence, interviews, records, and teams.</p></div>
          <div className="experience-list">
            <article className="experience-item"><span className="experience-number">01</span><div><h3>Chilton County Sheriff&apos;s Department</h3><p>Served as Jail Administrator, Patrol Supervisor, and Criminal Investigation Supervisor / Lead Investigator. Experience includes criminal investigations, interviewing, evidence documentation, corrections administration, and team leadership. SWAT experience and team leadership in high-stress, emotionally charged situations requiring calm judgment, clear communication, and coordinated action.</p><p className="experience-highlight">Investigator of the Year · 2013</p></div></article>
            <article className="experience-item"><span className="experience-number">02</span><div><h3>Additional experience</h3><p>EMT-Basic with Clanton Fire Department. Electrical apprentice with Wayne J. Griffin Electrical, completing the third year of apprenticeship. Self-employed in home improvement and restoration.</p></div></article>
            <details className="training-details"><summary><span><span className="experience-number">03</span>Training</span><ArrowDownRight aria-hidden="true" /></summary><div><p>Sirchie crime-scene training, Alabama Fire College fire-investigation training, and PATC courses in arson evidence, electrical fire investigation, and criminal investigation.</p></div></details>
            <article className="experience-item"><span className="experience-number">04</span><div><h3>Current education</h3><p>Pursuing a B.S. in Cybersecurity at Southern New Hampshire University.</p></div></article>
            <div className="experience-support">
              <div className="approach-block"><p className="support-label">[ INVESTIGATIVE APPROACH ]</p><p>My investigative experience shapes how I build: ask clear questions, check assumptions, document what is known, and keep observations separate from conclusions. I bring that approach to research tools, property documentation, and my cybersecurity studies.</p></div>
              <div className="skills-block"><p className="support-label">[ CORE SKILLS ]</p><div className="skills-row"><span>Team leadership and coordination</span><span>Decision-making under pressure</span><span>Investigation management</span><span>Investigative interviewing and information assessment</span><span>Evidence documentation and records management</span><span>Operations administration</span><span>Technical problem-solving</span></div></div>
              <div className="study-block"><p className="support-label">[ CURRENT AREA OF STUDY ]</p><h3>Cybersecurity</h3><p>Pursuing a B.S. in Cybersecurity at Southern New Hampshire University.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section section-shell" id="about">
        <div className="section-heading"><p className="section-label">[ ABOUT / 02 ]</p><p className="section-note">The thread between<br />the different things I make.</p></div>
        <div className="about-layout"><h2>Curiosity is a<br /><em>working method.</em></h2><div className="about-copy"><p>I come from an investigative background, where careful observation and practical problem-solving matter. I&apos;m studying cybersecurity at Southern New Hampshire University while building tools and workflows that make ideas useful. I&apos;m especially interested in investigative research, digital evidence, and building tools that solve practical problems.</p><div className="about-rule" /><p className="small-note">I care about the details that hold a project together — and the reason it exists in the first place.</p></div></div>
      </section>

      <footer className="site-footer"><div><a className="wordmark" href="#top"><span>SL</span><span>SHANE LOCKHART</span></a><p>Investigator. Builder. Cybersecurity Student.</p></div><div className="footer-right"><span>PORTFOLIO / 2026</span><a href="#top">Back to top <ArrowUpRight aria-hidden="true" /></a></div></footer>
    </main>
  )
}

