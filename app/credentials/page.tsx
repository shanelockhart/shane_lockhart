import type { Metadata } from 'next'
import { ArrowLeft, ArrowUpRight, Download, Mail } from 'lucide-react'
import './credentials.css'

export const metadata: Metadata = {
  title: 'Credentials & Training | Shane Lockhart',
  description: '29 selected original training records documenting law enforcement, investigations, tactical operations, corrections, EMT/fire, electrical and digital coursework. Historical records, not active-license verification.',
}

const pdf = '/Shane-Lockhart-Credential-Highlights.pdf'

const preview = [
  { title: 'APOSTC Peace Officer Certification', area: 'Law enforcement', position: '0% 0%', page: 4 },
  { title: 'Crime Scene Technology / Evidence Collection', area: 'Investigations', position: '50% 0%', page: 11 },
  { title: 'FBI Basic Sniper / Observer Course', area: 'Tactical training', position: '100% 0%', page: 18 },
  { title: 'National Institute of Corrections: Jail Administration', area: 'Corrections', position: '0% 50%', page: 24 },
  { title: 'Emergency Medical Technician - Basic', area: 'Emergency services', position: '50% 50%', page: 23 },
  { title: 'Wayne J. Griffin Electrical Apprenticeship, Level 2', area: 'Electrical', position: '100% 50%', page: 28 },
  { title: 'Design Aesthetics for Web Design', area: 'Digital coursework', position: '0% 100%', page: 29 },
  { title: 'Homicide: The Investigative Challenge', area: 'Investigations', position: '50% 100%', page: 13 },
  { title: 'NCIC Terminal Access / Certification Training', area: 'Law enforcement', position: '100% 100%', page: 7 },
]

const categories = [
  {
    number: '01', id: 'peace-officer', name: 'Peace Officer & Field Training',
    records: [
      'APOSTC Peace Officer Certification',
      '480-Hour APOSTC Academy Diploma',
      'Criminal Interdiction for Patrol Officers',
      'NCIC Terminal Access / Certification Training',
      'Operational Skills for Law Enforcement',
    ],
  },
  {
    number: '02', id: 'investigations', name: 'Criminal Investigations & Interviewing',
    records: [
      'Interview and Interrogation I / II',
      'Reid Technique: Interviewing and Interrogation',
      'Crime Scene Technology / Evidence Collection',
      'Detective and New Criminal Investigator',
      'Homicide: The Investigative Challenge',
      'Kinesic Interview and Interrogation: Levels I & II',
      'Alabama Fire College: Fire Investigator',
    ],
  },
  {
    number: '03', id: 'tactical', name: 'Tactical Operations & FBI Training',
    records: [
      'Officer Safety and High-Risk Event Planning, Level I',
      'Special Weapons and Tactics (SWAT)',
      'FBI Basic Sniper / Observer Course (2005)',
      'Advanced Sniper Course, 40 Hours',
      'FBI Basic Sniper / Observer Course (2007)',
    ],
  },
  {
    number: '04', id: 'fire-ems', name: 'Fire & EMS',
    records: [
      'Clanton Fire Department Volunteer Firefighter',
      'Alabama Fire College Fire Investigator',
      'Emergency Medical Technician - Basic, Alabama Fire College',
    ],
  },
  {
    number: '05', id: 'corrections', name: 'Corrections Leadership',
    records: [
      'National Institute of Corrections: Jail Administration',
      'Alabama Corrections Academy: Jail Management',
      'National Institute of Corrections: Field Training Officer Program Development',
    ],
  },
  {
    number: '06', id: 'electrical', name: 'Electrical Apprenticeship',
    records: [
      'Wayne J. Griffin Electrical Apprenticeship - Level 1',
      'Wayne J. Griffin Electrical Apprenticeship - Level 2',
    ],
  },
  {
    number: '07', id: 'digital', name: 'Digital & Creative Coursework',
    records: [
      'Design Aesthetics for Web Design',
      'Design the Web: Getting CSS from Photoshop',
      'Foundations of Layout and Composition',
      'Photoshop CC One-on-One: Fundamentals',
    ],
  },
]

export default function CredentialsPage() {
  return (
    <main className="credentials-page">
      <header className="credentials-header">
        <div className="credentials-nav">
          <a href="/" className="credentials-brand"><span>SL</span> SHANE LOCKHART</a>
          <a href="/" className="credentials-back"><ArrowLeft aria-hidden="true" /> Back to portfolio</a>
        </div>
      </header>

      <section className="credentials-hero">
        <p className="credentials-overline">[ PROFESSIONAL TRAINING RECORDS ]</p>
        <h1>Credentials <span>&</span><br/>training.</h1>
        <p className="credentials-lede">The documentation behind my field experience. Original completion certificates spanning investigations, tactical operations, corrections, emergency services, electrical work, and digital design.</p>
        <div className="credentials-actions">
          <a className="btn btn-primary" href={pdf} download="Shane-Lockhart-Credential-Highlights.pdf"><Download aria-hidden="true" /> Download certificate portfolio</a>
          <a className="btn btn-ghost" href="#certificate-gallery">View selected scans <ArrowUpRight aria-hidden="true" /></a>
        </div>
        <div className="credentials-facts">
          <div><strong>29</strong><span>Original records in PDF</span></div>
          <div><strong>7</strong><span>Training areas</span></div>
          <div><strong>32</strong><span>PDF pages</span></div>
        </div>
      </section>

      <section className="credentials-gallery section-shell" id="certificate-gallery">
        <div className="section-heading"><p className="section-label">[ ORIGINAL CERTIFICATE SCANS ]</p><p className="section-note">Nine examples from the<br/>downloadable portfolio.</p></div>
        <div className="credentials-gallery-grid">
          {preview.map((record) => (
            <a key={record.title} href={pdf + '#page=' + record.page} target="_blank" rel="noopener noreferrer" className="credentials-preview-card" aria-label={'Open PDF at ' + record.title}>
              <div className="credentials-preview-photo" role="img" aria-label={'Original scanned certificate for ' + record.title} style={{backgroundPosition: record.position}} />
              <div className="credentials-preview-caption"><span>{record.area}</span><h3>{record.title}</h3><ArrowUpRight aria-hidden="true" /></div>
            </a>
          ))}
        </div>
      </section>

      <section className="credentials-register section-shell" id="training-index">
        <div className="section-heading"><p className="section-label">[ DOCUMENTED TRAINING ]</p><p className="section-note">The full selection included<br/>in the public portfolio.</p></div>
        <div className="credentials-categories">
          {categories.map((category) => (
            <article key={category.id} id={category.id} className="credentials-category">
              <div className="credentials-category-title"><span>{category.number}</span><h2>{category.name}</h2><small>{category.records.length} records</small></div>
              <ul>{category.records.map((record) => <li key={record}>{record}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="credentials-disclosure section-shell">
        <p className="section-label">[ RECORDS & VERIFICATION ]</p>
        <div className="credentials-disclosure-grid">
          <div><h2>Source records.<br/><em>Not just a résumé.</em></h2><p>These are scans of historical course-completion records. They do not establish current licensure, peace-officer authority, EMT status, or other active credentials. Some certificate identifiers have been concealed in the public copy.</p></div>
          <div className="credentials-download-panel">
            <h3>Get the certificate portfolio</h3>
            <p>32-page PDF with 29 selected original scans, organized by training area. The complete archive is kept private and can be discussed for credential verification.</p>
            <a className="btn btn-primary" href={pdf} download="Shane-Lockhart-Credential-Highlights.pdf"><Download aria-hidden="true" /> Download PDF</a>
            <a href="mailto:shane@shanelockhart.pro?subject=Credential%20verification%20request" className="credentials-contact"><Mail aria-hidden="true" /> Request additional records</a>
          </div>
        </div>
      </section>
      <footer className="credentials-footer"><span>SHANE LOCKHART · INVESTIGATOR / BUILDER</span><a href="/">Back to shanelockhart.pro <ArrowUpRight aria-hidden="true" /></a></footer>
    </main>
  )
}
