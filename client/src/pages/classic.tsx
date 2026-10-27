import { Link } from "wouter";
import { ArrowUpRight, Github, Linkedin, Mail, MessageCircle, PhoneCall } from "lucide-react";
import { assets } from "@/assets.config";
import { aboutPages } from "@/content/about";
import { educationPage, experience } from "@/content/experience";
import { extrasPages } from "@/content/extras";
import { projects } from "@/content/projects";

export default function ClassicPortfolio() {
  return (
    <main className="classic-page">
      <header className="classic-header">
        <Link href="/" className="classic-brand"><span>EL</span> Eric Lombo Mwakio</Link>
        <nav aria-label="Main navigation">
          <a href="#about">About</a><a href="#work">Work</a><a href="#experience">Experience</a><a href="#contact">Contact</a>
        </nav>
        <Link href="/legacy" className="classic-legacy-link">Original site <ArrowUpRight size={15} aria-hidden="true" /></Link>
      </header>

      <section className="classic-hero">
        <div className="classic-hero-copy">
          <p className="classic-eyebrow">Full-stack software engineer · Nairobi, Kenya</p>
          <h1>Ideas into<br /><em>working software.</em></h1>
          <p className="classic-lede">I’m Eric Lombo Mwakio. I build user-focused digital products across web, APIs, marketplaces, and business tools.</p>
          <div className="classic-actions"><a className="classic-primary" href="#work">Explore my work <ArrowUpRight size={16} /></a><a href="mailto:ericlombo1999@gmail.com">Get in touch</a></div>
        </div>
        <figure className="classic-portrait"><img src={assets.portrait.src} alt="Eric Lombo Mwakio" /><figcaption>Eric Lombo Mwakio <span>Software engineer</span></figcaption></figure>
      </section>

      <section className="classic-section" id="about">
        <div className="classic-section-heading"><p className="classic-eyebrow">01 · About</p><h2>{aboutPages[0].title}</h2></div>
        <div className="classic-section-body"><p className="classic-section-lede">{aboutPages[0].summary}</p>{aboutPages[0].paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<div className="classic-tag-row">{aboutPages[1].tags?.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
      </section>

      <section className="classic-section classic-work-section" id="work">
        <div className="classic-section-heading"><p className="classic-eyebrow">02 · Selected work</p><h2>Built with purpose.</h2><p>Products and experiences I’ve worked on.</p></div>
        <div className="classic-project-grid">
          {projects.map((project, index) => (
            <article className="classic-project-card" key={project.title}>
              <span className="classic-project-number">0{index + 1}</span>
              <p className="classic-eyebrow">{project.status ?? "Project"}</p>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <small>Role: {project.role}</small>
              {project.technologies.length > 0 && <div className="classic-tag-row">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>}
              {project.links?.map((link) => <a className="classic-project-link" href={link.href} key={link.href} target="_blank" rel="noreferrer">{link.label}<ArrowUpRight size={14} aria-hidden="true" /></a>)}
            </article>
          ))}
        </div>
      </section>

      <section className="classic-section" id="experience">
        <div className="classic-section-heading"><p className="classic-eyebrow">03 · Experience</p><h2>Where I’ve learned by building.</h2></div>
        <div className="classic-timeline">
          {experience.map((item) => <article className="classic-role" key={item.organization}><div><p className="classic-eyebrow">{item.dates} · {item.location}</p><h3>{item.role}</h3><p className="classic-role-org">{item.organization}</p></div><ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></article>)}
          <article className="classic-role classic-education"><div><p className="classic-eyebrow">Education</p><h3>{educationPage.title}</h3></div><ul>{educationPage.bullets?.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></article>
        </div>
      </section>

      <section className="classic-section classic-extra-section">
        <div className="classic-section-heading"><p className="classic-eyebrow">04 · Beyond the code</p><h2>{extrasPages[0].title}</h2></div>
        <div className="classic-section-body"><p className="classic-section-lede">{extrasPages[0].summary}</p><p>{extrasPages[1].summary}</p><ul className="classic-extra-list">{extrasPages[1].bullets?.map((item) => <li key={item}>{item}</li>)}</ul></div>
      </section>

      <section className="classic-contact" id="contact">
        <p className="classic-eyebrow">Let’s talk</p><h2>Have a good idea?<br /><em>Let’s make it real.</em></h2>
        <div className="classic-contact-actions">
          <a href="tel:+254715660909"><PhoneCall size={17} aria-hidden="true" /> Call</a>
          <a href="sms:+254715660909"><MessageCircle size={17} aria-hidden="true" /> Message</a>
          <a href="mailto:ericlombo1999@gmail.com"><Mail size={17} aria-hidden="true" /> Email</a>
          <a href="https://linkedin.com/in/ericlombo" target="_blank" rel="noreferrer"><Linkedin size={17} aria-hidden="true" /> LinkedIn</a>
          <a href="https://github.com/ericlombo" target="_blank" rel="noreferrer"><Github size={17} aria-hidden="true" /> GitHub</a>
          <a href="https://getakeja.co.ke" target="_blank" rel="noreferrer"><ArrowUpRight size={17} aria-hidden="true" /> Get A Keja</a>
        </div>
      </section>
      <footer className="classic-footer"><span>Eric Lombo Mwakio · Nairobi, Kenya</span><Link href="/">Return to the interview room <ArrowUpRight size={14} aria-hidden="true" /></Link></footer>
    </main>
  );
}
