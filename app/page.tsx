import { ArrowDownRight, ArrowUpRight, Download, ExternalLink, Fingerprint, Mail, ScanSearch, ShieldCheck } from 'lucide-react'

const EMAIL = 'aslockhart10@gmail.com'
const GITHUB = 'https://github.com/shanelockhart'
const RESUME = '/Shane-Lockhart-Resume.pdf'

function GithubMark() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" /></svg>
  )
}

type Project = {
  number: string
  title: string
  eyebrow: string
  status: string
  description: string
  note?: string
  tags?: string[]
  contribution: string
  approach: string
  className: string
  icon: typeof ScanSearch
  detail: string
  link?: string
}

const projects: Project[] = [
  {
    number: '01',
    title: 'Operators Logic',
    eyebrow: 'Investigative research tools',
    status: 'In development',
    description: 'Tools for search-query building, case organization, and research reporting.',
    note: "Early tools are already usable. I'm expanding it into a larger multi-page platform for investigative research.",
    tags: ['Search-query building', 'Case organization', 'Research reporting'],
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
    status: 'Business prototype',
    description: "Website and brand for a property documentation business I'm prototyping, built around photographs, video, serial numbers, and inventory records.",
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
    status: 'Early stages',
    description: "A hands-on learning portfolio I'm building alongside my studies, covering phishing analysis, PowerShell, and browser artifacts. Projects will be added as they're completed.",
    contribution: 'Completing exercises, examining results, and documenting my learning.',
    approach: 'A practical record of building, testing, and learning through direct examination.',
    className: 'security-project',
    icon: ShieldCheck,
    detail: 'PHISHING  /  POWERSHELL  /  ARTIFACTS',
  },
]

const proof = [
  { value: '15 yrs', label: 'Law enforcement career' },
  { value: '4', label: 'Investigators supervised' },
  { value: '$1M+', label: 'Annual budget managed' },
  { value: 'SWAT', label: 'High-stress team experience' },
]

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
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
        <span className="status-pill">{project.status}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {project.note && <p className="project-note">{project.note}</p>}
        {project.tags && <ul className="tag-list" aria-label={`${project.title} capabilities`}>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>}
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
      <header className="site-header">
        <nav className="site-nav" aria-label="Main navigation">
          <a className="wordmark" href="#top" aria-label="Shane Lockhart home"><span>SL</span><span>SHANE LOCKHART</span></a>
          <div className="nav-links"><a href="#work">Work</a><a href="#experience">Experience</a><a href="#about">About</a><a href="#contact">Contact</a></div>
          <a className="nav-cta" href={RESUME} download="Shane-Lockhart-Resume.pdf"><Download aria-hidden="true" />Resume</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-kicker"><span className="status-dot" />AVAILABLE NOW: DIGITAL FORENSICS, CYBERSECURITY, AND OSINT INVESTIGATIONS IN THE PRIVATE SECTOR</div>
        <div className="hero-content">
          <p className="identity">Investigator. Builder. Cybersecurity Student.</p>
          <h1>An investigator&apos;s<br /><em>mindset.</em> A builder&apos;s<br />approach.</h1>
          <div className="hero-bottom">
            <div>
              <p className="intro">Former criminal investigator studying cybersecurity at Southern New Hampshire University. I build investigative research tools and documentation workflows. Available now for internships and full-time roles, finishing my degree online alongside work.</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href={RESUME} download="Shane-Lockhart-Resume.pdf"><Download aria-hidden="true" />Download Resume</a>
                <a className="btn btn-ghost" href="#contact"><Mail aria-hidden="true" />Get in touch</a>
              </div>
            </div>
            <a className="circle-link" href="#work" aria-label="Explore my work"><ArrowDownRight aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Career highlights">
        {proof.map((item) => <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}
      </section>

      <section className="work-section section-shell" id="work">
        <div className="section-heading"><p className="section-label">[ SELECTED WORK ]</p><p className="section-note">A collection of practical investigations<br />and creative experiments.</p></div>
        <div className="projects"><ProjectCard project={projects[0]} featured /><div className="project-grid">{projects.slice(1).map((project) => <ProjectCard key={project.title} project={project} />)}</div></div>
      </section>

      <section className="experience-section section-shell" id="experience">
        <div className="section-heading"><p className="section-label">[ EXPERIENCE ]</p><p className="section-note">A career shaped by<br />observation, service, and practice.</p></div>
        <div className="experience-layout">
          <div className="experience-intro"><h2>Built from<br /><em>the field.</em></h2><p>My investigative tools and documentation workflows grow from hands-on experience with evidence, interviews, records, and teams.</p></div>
          <div className="experience-list">
            <article className="experience-item"><span className="experience-number">01</span><div><h3>Chilton County Sheriff&apos;s Department</h3><p className="experience-role">Lieutenant Investigator · Patrol Supervisor · Jail Administrator</p><p>Supervised four investigators on a caseload of serious crimes, fraud, and identity theft. Conducted interviews, assessed conflicting accounts, collected evidence, and prepared reports, warrants, and case files. Coordinated with local, state, and federal agencies and trained personnel in evidence collection. Managed correctional operations, staffing, and an annual budget exceeding $1 million. SWAT experience and team leadership in high-stress, emotionally charged situations requiring calm judgment, clear communication, and coordinated action.</p><p className="experience-highlight">Investigator of the Year · 2013</p></div></article>
            <article className="experience-item"><span className="experience-number">02</span><div><h3>Additional experience</h3><p>EMT-Basic with Clanton Fire Department. Apprentice electrician with Wayne J. Griffin Electric, Inc., completing three years of apprenticeship training and using test equipment to identify faults. Self-employed in home improvement and restoration.</p></div></article>
            <details className="training-details" open><summary><span><span className="experience-number">03</span>Training</span><ArrowDownRight aria-hidden="true" /></summary><div><p>Sirchie crime-scene training, Alabama Fire College fire-investigation training, and PATC courses in arson evidence, electrical fire investigation, and criminal investigation.</p></div></details>
            <article className="experience-item"><span className="experience-number">04</span><div><h3>Education</h3><p>B.S. in Cybersecurity, concentration in Generative AI, Southern New Hampshire University (online).</p></div></article>
          </div>
        </div>
        <div className="support-layout">
          <div className="approach-block"><p className="support-label">[ INVESTIGATIVE APPROACH ]</p><p>My investigative experience shapes how I build: ask clear questions, check assumptions, document what is known, and keep observations separate from conclusions. I bring that approach to research tools, property documentation, and my cybersecurity studies.</p></div>
          <div className="skills-block"><p className="support-label">[ CORE SKILLS ]</p><ul className="skills-row"><li>Team leadership and coordination</li><li>Decision-making under pressure</li><li>Investigation management</li><li>Investigative interviewing and information assessment</li><li>Evidence documentation and records management</li><li>Operations administration</li><li>Technical problem-solving</li></ul></div>
        </div>
      </section>

      <section className="about-section section-shell" id="about">
        <div className="section-heading"><p className="section-label">[ ABOUT ]</p><p className="section-note">The thread between<br />the different things I make.</p></div>
        <div className="about-layout"><h2>Curiosity is a<br /><em>working method.</em></h2><div className="about-copy"><p>I come from an investigative background, where careful observation and practical problem-solving matter. I&apos;m studying cybersecurity at Southern New Hampshire University while building tools and workflows that make ideas useful. I&apos;m especially interested in investigative research, digital evidence, and building tools that solve practical problems.</p><div className="about-rule" /><p className="small-note">I care about the details that hold a project together — and the reason it exists in the first place.</p></div></div>
      </section>

      <section className="contact-section section-shell" id="contact">
        <div className="section-heading"><p className="section-label">[ CONTACT ]</p><p className="section-note">Available now for internships and<br />full-time roles in the private sector.</p></div>
        <div className="contact-layout">
          <h2>Let&apos;s <em>talk.</em></h2>
          <div className="contact-copy">
            <p>I&apos;m ready to start now, whether that&apos;s an internship or a full-time role. I&apos;m completing my degree online, so there&apos;s no waiting on graduation. If you&apos;re hiring for digital forensics, cybersecurity, or OSINT investigation work, I&apos;d like to hear about it.</p>
            <ul className="contact-list">
              <li><a href={`mailto:${EMAIL}`}><Mail aria-hidden="true" /><span><small>Email</small>{EMAIL}</span></a></li>
              <li><a href={GITHUB} target="_blank" rel="noreferrer"><GithubMark /><span><small>GitHub</small>github.com/shanelockhart</span></a></li>
            </ul>
            <a className="btn btn-primary" href={RESUME} download="Shane-Lockhart-Resume.pdf"><Download aria-hidden="true" />Download Resume</a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div><a className="wordmark" href="#top"><span>SL</span><span>SHANE LOCKHART</span></a><p>Investigator. Builder. Cybersecurity Student.</p></div>
        <div className="footer-right"><a href={`mailto:${EMAIL}`}>{EMAIL}</a><a href={RESUME} download="Shane-Lockhart-Resume.pdf">Resume <Download aria-hidden="true" /></a><a href="#top">Back to top <ArrowUpRight aria-hidden="true" /></a></div>
      </footer>
    </main>
  )
}
