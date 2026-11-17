import React, { useEffect, useState } from "react";
import { Routes, Route, Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, Menu, X, ChevronDown, ChevronLeft, ChevronRight,
  Phone, Mail, MapPin, ShieldCheck, Users, BookOpen, GraduationCap, Search,
  Scale, Handshake, Check, Send, Linkedin, CalendarDays, Quote, Sparkles
} from "lucide-react";

const services = [
  {name:"Compliance",path:"/services/compliance/",icon:ShieldCheck,summary:"Employment guidance, compliance audits and practical HR support."},
  {name:"Handbooks",path:"/services/handbooks/",icon:BookOpen,summary:"Customized employee handbooks and ongoing policy updates."},
  {name:"Training",path:"/services/training/",icon:GraduationCap,summary:"Training that strengthens managers, teams and workplace culture."},
  {name:"Recruiting",path:"/services/recruiting/",icon:Users,summary:"Find and hire the people who move your business forward."},
  {name:"Investigations",path:"/services/investigations/",icon:Search,summary:"Thorough, neutral and discreet workplace investigations."},
  {name:"Retainer Program",path:"/services/retainer-program/",icon:Handshake,summary:"Ongoing access to experienced, senior-certified HR professionals."}
];

const servicePages = {
  "/services/compliance/": {
    title:"Compliance", eyebrow:"Human Resource Compliance Services", tagline:"Risk mitigation simplified",
    intro:"Our HR compliance services help organizations avoid fines and penalties, lower litigation risk, and promote a healthy workplace culture. We provide the resources and guidance needed to ensure organizations are compliant with applicable local, state and federal laws and regulations.",
    sections:[
      ["Labor & Employment Law Guidance","Staying on top of seemingly ever-changing federal, state and local employment laws presents a challenge for almost all employers. Businesses without a strong, dedicated HR team can overlook new regulations, interpretations, guidance and other workplace requirements. Visions helps guide companies through regulatory requirements to mitigate risk. We are seasoned HR professionals, not attorneys, and will advise when legal counsel should be involved."],
      ["Employee Relations","Maintaining healthy employee relations and harmonious relationships between employees and employers is a prerequisite for organizational success. Visions provides guidance in identifying and resolving workplace issues, measuring employee satisfaction and morale, and supporting performance management."],
      ["HR Checkups & Compliance Audits","Our HR Compliance Audit service helps businesses mitigate risk and ensure regulatory compliance. We review HR policies, procedures and practices to identify potential compliance issues and help protect your organization."]
    ]
  },
  "/services/handbooks/": {
    title:"Handbooks", eyebrow:"Employee Handbook Services", tagline:"Convey policies confidently",
    intro:"Let us help create your Employee Handbook, customized to the specific needs of your business. We offer a comprehensive service that includes policies on workplace behavior, employee benefits and employment laws. Our experts create a handbook aligned with your organization and current requirements.",
    sections:[
      ["Why invest in a professionally crafted employee handbook?","An effective employee handbook is more than a document; it is a strategic asset. It gives employees a clear understanding of workplace expectations and helps managers apply policies consistently."],
      ["Customized for your workplace","We work with you to understand your unique needs, industry and company values. Your handbook is tailored to reflect your organization's culture and the policies that matter to your team."],
      ["Ongoing updates","As your business and employment requirements change, Visions can help review and update your handbook so that your policies remain useful, clear and current."]
    ]
  },
  "/services/training/": {
    title:"Training", eyebrow:"Employee Development", tagline:"Tools for their toolboxes",
    intro:"Our training and employee development services help organizations maximize staff skills and performance while developing a culture that facilitates employee retention. We provide tailored programs, coaching and mentoring to help employees develop professionally.",
    sections:[
      ["Most Popular Training Topics","Visions offers training in HR compliance, DEI, leadership and soft skills. Programs can be tailored by topic, duration, price and delivery—live in person, virtually or through online courses."],
      ["Sexual Harassment Prevention","Harassment Prevention Training with an experienced live trainer, participant materials, employee file acknowledgment forms and a company master sign-in sheet."],
      ["Diversity & Inclusion","Practical topics include implicit biases, employee segmentation, adaptable workplace designs, the value of diversity and strategic planning."],
      ["Performance Management","Experienced trainers work with your team to build the tools and habits that improve performance and help employees achieve their potential."],
      ["Supervisor HR Responsibilities","Equip supervisors to recognize first-level HR warning flags and understand their responsibilities before avoidable issues become liabilities."],
      ["Leadership, Safety & Health, Workplace Communication and Custom Training","Programs can be tailored to your business and may include leadership development, OSHA-related education, risk assessments and communication skills."]
    ]
  },
  "/services/recruiting/": {
    title:"Recruiting", eyebrow:"Professional Recruiting Services", tagline:"Find talent more efficiently",
    intro:"Our professional recruiting services help you find the right candidates for your open positions. We write and post job requisitions compliantly, provide sourcing, conduct screenings, complete reference checks, negotiate job offers and guarantee* that you will be satisfied with the results.",
    sections:[
      ["Professional Recruiting Services","Our experienced recruiters help you move from a job opening to a well-informed hiring decision. We support the process with sourcing, screening, reference checks and offer negotiations."],
      ["HR Checkups & Compliance Audits","Many organizations discover Form I-9 violations, missing mandatory postings or required sick-time policies during an audit. Our HR Compliance Audit service helps identify gaps and reduce risk."],
      ["A process built around your needs","Recruiting support can be tailored to the position, the organization and the requirements of your hiring process."]
    ],
    footnote:"*Terms and conditions apply."
  },
  "/services/investigations/": {
    title:"Investigations", eyebrow:"Workplace Investigations", tagline:"Unbiased fact-finding at its best",
    intro:"Our workplace investigations are conducted by experienced investigators with advanced training. We provide thorough and impartial investigations into allegations of misconduct, discrimination and harassment, helping organizations make informed decisions.",
    sections:[
      ["Discretion","We understand that discretion is necessary in a workplace investigation to prevent unnecessary harm or damage to individuals or the organization."],
      ["Partnership","Our investigators work closely with clients' lawyers and, in certain scenarios, work product may be protected under established attorney-client privilege."],
      ["Impartiality","Our professionals are not employment lawyers. We do not represent employers or employees. Impartiality is the cornerstone of every investigation."],
      ["Skill & Adaptability","Our professionals are trained and experienced in HR matters. We tailor a procedurally sound investigation to the issues and circumstances."],
      ["Credibility & Fairness","We deliver clear findings and analyses, demonstrating respect and sensitivity to complainants, respondents and all involved."],
      ["Experience","Our investigators have conducted hundreds of workplace investigations involving harassment, discrimination, bullying, conflicts of interest, dishonesty, abuse of power and reprisal."]
    ]
  },
  "/services/retainer-program/": {
    title:"Retainer Program", eyebrow:"Featured Service", tagline:"Experienced HR guidance, right when you need it",
    intro:"Our Retainer Program is the capstone of our service offerings. It provides access to senior-certified human resource professionals, unlimited answers to HR questions, handbook support, compliance guidance, templates and much more—all for an affordable and predictable price.",
    sections:[
      ["01 · Unlimited Q&A","Unlimited questions and answers by phone and/or email related to employee relations, wage and hour, labor and employment compliance and other HR topics."],
      ["02 · HR Compliance Check-Up","A compliance audit focusing on employee documents and files, performance management, regulatory requirements, workplace safety, payroll and other HR practices."],
      ["03 · Employee Handbook & Updates","An employee handbook with policies covering attendance and time off, acceptable conduct, drug and alcohol use and other company-specific policies, with ongoing updates."],
      ["04 · Harassment Prevention Training","Annual training with policy updates, an experienced live trainer, participant materials, employee acknowledgment forms and a company master sign-in sheet."],
      ["05 · HR Forms & Templates","Employee forms and templates including job descriptions, offer letters, new-hire paperwork, performance counseling records and improvement plans."],
      ["06 · Employee Classification Analysis","Analysis under FLSA overtime exemption guidelines and various agency independent-contractor tests."],
      ["07 · Compliance Communications","Timely email updates on proposed and new labor and employment laws, compliance deadlines and HR best practices."],
      ["08 · Job Postings & Appreciation Discounts","Complimentary pass-through postings for hourly and entry-level positions, plus discounted hourly or project work on non-retainer services."]
    ]
  }
};

const offices = [
  "68 N Plank Rd., 2nd FL, Newburgh, NY 12550",
  "2180 Waterview Dr Unit 1014, North Myrtle Beach, SC 29582"
];

function Brand({light=false}) {
  return <Link className={"brand " + (light ? "brand-light" : "")} to="/" aria-label="Visions Human Resource Services home">
    <svg className="brand-mark" viewBox="0 0 72 64" role="img" aria-label="Visions mark">
      <path d="M12 54V11h43v18M12 11h43v12M12 54h26M55 29v25" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="square"/>
      <path d="M29 18c7-9 15-8 20-4-6 0-9 3-11 8 7-4 14-2 16 3-7-2-12 0-16 6-1-5-5-9-9-13Z" fill="#25232a"/>
      <path d="M42 9c5-6 11-6 14-3-4 0-6 2-7 5 5-2 9-1 11 3-5-1-8 1-11 5-1-4-3-7-7-10Z" fill="#25232a"/>
      <path d="M15 31c5-6 10-6 14-3-4 0-6 2-7 5 5-2 9-1 10 3-4-1-8 1-10 4-1-4-3-7-7-9Z" fill="#25232a"/>
    </svg>
    <span className="brand-words"><strong>VISIONS</strong><small>HUMAN RESOURCE SERVICES, LLC</small></span>
  </Link>;
}

function Eyebrow({children}) { return <div className="eyebrow"><span/>{children}</div>; }
function ButtonLink({to,children,outline=false}) {
  return <Link className={"button " + (outline ? "button-outline" : "")} to={to}>{children}<ArrowRight size={17}/></Link>;
}
function SectionTitle({eyebrow,title,body,center=false}) {
  return <div className={"section-title " + (center ? "align-center" : "")}>{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}<h2>{title}</h2>{body && <p>{body}</p>}</div>;
}

function Header() {
  const [mobile,setMobile]=useState(false);
  const [drop,setDrop]=useState(false);
  const location=useLocation();
  useEffect(()=>{setMobile(false);setDrop(false);},[location.pathname]);
  useEffect(()=>{
    const close=e=>{if(!e.target.closest(".nav-services"))setDrop(false);};
    document.addEventListener("click",close);
    return ()=>document.removeEventListener("click",close);
  },[]);
  return <>
    <div className="top-strip"><div className="container top-strip-inner"><span>Trusted HR support focused on people, compliance, and practical business solutions.</span><div className="top-contact"><a href="tel:+18434270837"><Phone size={13}/> +1 843 427 0837</a><a href="mailto:info@visionshr.com"><Mail size={13}/> info@visionshr.com</a></div></div></div>
    <header className="site-header"><div className="container header-inner">
      <Brand/>
      <button className="mobile-toggle" onClick={()=>setMobile(!mobile)} aria-label={mobile?"Close navigation":"Open navigation"}>{mobile?<X/>:<Menu/>}</button>
      <nav className={"main-nav "+(mobile?"nav-open":"")} aria-label="Main navigation">
        <NavLink to="/" end>Home</NavLink><NavLink to="/about/">About Us</NavLink>
        <div className="nav-services"><button className={"nav-trigger "+(drop?"active":"")} onClick={()=>setDrop(!drop)} aria-expanded={drop}>Services <ChevronDown size={15}/></button>
          <AnimatePresence>{drop && <motion.div className="services-dropdown" initial={{opacity:0,y:9}} animate={{opacity:1,y:0}} exit={{opacity:0,y:7}} transition={{duration:.18}}>{services.map(s=><Link to={s.path} key={s.path}><s.icon size={17}/><span>{s.name}</span><ArrowUpRight size={14}/></Link>)}</motion.div>}</AnimatePresence>
        </div>
        <NavLink to="/pricing/">Pricing</NavLink><NavLink to="/blog-list/">News</NavLink><Link className="nav-cta" to="/contact-us/">Let's Talk <ArrowUpRight size={15}/></Link>
      </nav>
    </div></header>
  </>;
}

function Footer() {
  return <footer className="site-footer"><div className="container footer-main">
    <div className="footer-brand"><Brand light/><p>Trusted HR support focused on people, compliance, and practical business solutions.</p><a className="social-link" href="https://www.linkedin.com/company/visions-human-resource-services-llp/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17}/></a></div>
    <div><h4>Explore</h4><Link to="/about/">About us</Link><Link to="/services/retainer-program/">Retainer Program</Link><Link to="/pricing/">Pricing</Link><Link to="/blog-list/">News & Updates</Link><Link to="/contact-us/">Contact</Link></div>
    <div><h4>Services</h4>{services.map(s=><Link key={s.path} to={s.path}>{s.name}</Link>)}</div>
    <div><h4>Offices</h4>{offices.map(a=><p className="footer-address" key={a}><MapPin size={15}/>{a}</p>)}<a href="mailto:info@visionshr.com"><Mail size={15}/> info@visionshr.com</a><a href="tel:+18434270837"><Phone size={15}/> +1 843 427 0837</a></div>
  </div><div className="footer-bottom"><div className="container"><span>© {new Date().getFullYear()} Visions Human Resource Services. All rights reserved.</span><span>Human resources guidance for better workplaces.</span></div></div></footer>;
}

function PageEffects() {
  const location=useLocation();
  useEffect(()=>{
    window.scrollTo({top:0,behavior:"instant"});
    const nodes=document.querySelectorAll("[data-reveal]");
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target);}
    }),{threshold:.12});
    nodes.forEach(n=>observer.observe(n));
    return ()=>observer.disconnect();
  },[location.pathname]);
  return null;
}
function Transition({children}) {
  const location=useLocation();
  return <AnimatePresence mode="wait"><motion.main className="page-main" key={location.pathname} initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} transition={{duration:.28,ease:[.22,.61,.36,1]}}>{children}</motion.main></AnimatePresence>;
}
function ContactCTA() {
  return <section className="contact-cta"><div className="container cta-inner"><div><Eyebrow>LET'S CONNECT</Eyebrow><h2>Have questions?<br/><em>We're here to help.</em></h2><p>Get in touch and let's talk about what your business needs.</p></div><ButtonLink to="/contact-us/">Contact us</ButtonLink></div></section>;
}
function PageHero({eyebrow,title,tagline}) {
  return <section className="page-hero"><div className="container page-hero-inner"><div><Eyebrow>{eyebrow||"VISIONS HUMAN RESOURCE SERVICES"}</Eyebrow><h1>{title}</h1>{tagline&&<p>{tagline}</p>}</div><div className="page-hero-art"><div className="page-hero-ring ring-a"/><div className="page-hero-ring ring-b"/><span>V</span><div className="hero-art-label">PEOPLE FIRST<br/>HR SUPPORT</div></div></div></section>;
}

function Home() {
  const [testimonial,setTestimonial]=useState(0);
  const quotes=[
    {text:"What truly sets Vision's Human Resources apart is their proactive approach and deep understanding of our organization's needs.",name:"Heather Bell",role:"President & CEO · OCCC"},
    {text:"Perhaps most impactful has been their dedication to the long-term growth of our internal team.",name:"Kim Ruperd",role:"Saint Basil Academy"}
  ];
  return <>
    <section className="home-hero"><div className="hero-orb orb-one"/><div className="hero-orb orb-two"/><div className="container hero-grid">
      <div className="hero-copy"><Eyebrow>HUMAN RESOURCE SUPPORT</Eyebrow><h1>Expert HR advice.<br/><em>Support</em> your workforce.</h1><p>Practical HR guidance for compliance, employee relations, hiring, and workplace management.</p><div className="hero-actions"><ButtonLink to="/services/retainer-program/">Explore our services</ButtonLink><ButtonLink to="/contact-us/" outline>Talk to an HR expert</ButtonLink></div><div className="hero-proof"><div className="proof-avatars"><i>V</i><i>HR</i><i>+</i></div><span>Experienced, senior-certified HR consultants</span></div></div>
      <div className="hero-art"><div className="hero-blob"/><div className="hero-image-card"><div className="hero-card-top"><span className="dot-live"/> PEOPLE-FIRST HR</div><div className="hero-illustration"><div className="ill-window"><span/><span/><span/></div><div className="person person-a"><b/><i/><em/></div><div className="person person-b"><b/><i/><em/></div><div className="person person-c"><b/><i/><em/></div><div className="ill-table"/><div className="ill-plant"><i/><i/><i/><b/></div><div className="ill-paper"><span/><span/><span/></div></div><div className="hero-card-bottom">People. Policies. Progress.<Sparkles size={17}/></div></div><div className="floating-note note-one"><ShieldCheck size={19}/><span><b>Compliance</b><small>Confidence at work</small></span></div><div className="floating-note note-two"><Users size={19}/><span><b>People first</b><small>Stronger workplaces</small></span></div></div>
    </div><div className="hero-bottom container"><span>BUILT AROUND YOUR PEOPLE</span><span className="hero-bottom-line"/><span>EST. 2019</span></div></section>

    <section className="intro-section section-pad container"><div className="intro-aside" data-reveal><Eyebrow>ABOUT OUR FIRM</Eyebrow><span className="big-serif">HR that<br/><em>works</em> for you.</span><div className="aside-rule"/></div><div className="intro-copy" data-reveal><h2>Visions Human Resource Services</h2><p className="lead">We are a consulting firm created in response to an overwhelming need for business owners to obtain the human resource expertise needed to run their businesses.</p><p>Since 2019, Visions has offered a full spectrum of HR consulting services, encompassing the entire employee life cycle. Based on individual client needs, our services and solutions are designed to deliver day-to-day HR help, compliance direction, and long-term strategy through improved HR management guidance.</p><ButtonLink to="/about/" outline>About us</ButtonLink></div></section>

    <section className="services-section section-pad"><div className="container"><SectionTitle eyebrow="WHAT WE DO" title="The services we provide" body="Practical guidance and personalized HR services that help your business and your people thrive."/><div className="service-grid">{services.map((s,i)=><Link to={s.path} className="service-card" data-reveal key={s.path}><span className="service-icon"><s.icon size={24}/></span><span className="service-index">0{i+1}</span><h3>{s.name}</h3><p>{s.summary}</p><span className="card-arrow"><ArrowUpRight size={19}/></span></Link>)}</div></div></section>

    <section className="firm-section section-pad container"><div className="firm-visual" data-reveal><div className="firm-visual-frame"><div className="firm-visual-stamp">THE FIRM<br/>VISIONS HR</div><div className="firm-visual-copy"><span>40+</span><small>Years of combined<br/>HR experience</small></div></div></div><div className="firm-copy" data-reveal><Eyebrow>THE FIRM</Eyebrow><h2>Personalized HR consulting. <em>Real-world experience.</em></h2><p>Visions is comprised of experienced, senior-certified human resource consultants, dedicated to providing professional and knowledgeable services to our clients.</p><p>Our team has over 40 years of extensive experience in the HR field. We strive to stay ahead of the latest trends and developments so our clients benefit from thoughtful, tailored advice.</p><ButtonLink to="/about/">Meet Visions</ButtonLink></div></section>

    <section className="retainer-band"><div className="container retainer-inner"><div><Eyebrow>FEATURED SERVICE</Eyebrow><h2>One trusted partner.<br/><em>Ongoing peace of mind.</em></h2><p>Our Retainer Program provides an abundance of HR resources at a reasonable, predictable price point.</p></div><div className="retainer-side"><div className="retainer-number">01—06</div><p>Unlimited Q&A, compliance check-ups, handbook updates, training, forms and classification analysis.</p><ButtonLink to="/services/retainer-program/" outline>Explore the retainer program</ButtonLink></div></div></section>

    <section className="clients-section section-pad container"><SectionTitle eyebrow="OUR CLIENTS" title="Built on trusted partnerships" body="We are proud to support organizations and business communities with thoughtful HR guidance." center/><div className="client-logos" data-reveal><div className="client-logo serif-logo">Saint Basil<br/><small>ACADEMY</small></div><div className="client-logo intel-logo">intel<span>®</span></div><div className="client-logo edc-logo">EDC</div><div className="client-logo chamber-logo">ORANGE COUNTY<br/><small>CHAMBER OF COMMERCE</small></div></div></section>

    <section className="testimonial-section section-pad"><div className="container testimonial-layout"><div><Eyebrow>TESTIMONIALS</Eyebrow><h2>What they<br/><em>say.</em></h2><p>Relationships built on trust, responsiveness and long-term partnership.</p><div className="carousel-controls"><button onClick={()=>setTestimonial((testimonial+quotes.length-1)%quotes.length)} aria-label="Previous testimonial"><ChevronLeft/></button><button onClick={()=>setTestimonial((testimonial+1)%quotes.length)} aria-label="Next testimonial"><ChevronRight/></button></div></div><motion.div className="testimonial-card" key={testimonial} initial={{opacity:0,x:18}} animate={{opacity:1,x:0}} transition={{duration:.25}}><Quote className="quote-icon"/><p>“{quotes[testimonial].text}”</p><div className="testimonial-person"><div className="testimonial-avatar">{quotes[testimonial].name.split(" ").map(x=>x[0]).join("")}</div><div><strong>{quotes[testimonial].name}</strong><small>{quotes[testimonial].role}</small></div></div></motion.div></div></section>

    <section className="news-section section-pad container"><div className="news-heading"><SectionTitle eyebrow="WHAT'S NEW" title="News & updates" body="Thoughtful guidance to help you stay informed."/><ButtonLink to="/blog-list/" outline>All articles</ButtonLink></div><div className="news-grid">
      <article className="news-card" data-reveal><div className="news-image news-image-one"><span>HR INSIGHTS</span><CalendarDays size={36}/></div><div className="news-meta">NEWS <span/> MAY 5, 2026</div><h3>2026 Form I-9 Changes for Employers</h3><p>Why this is the year to audit or re-audit your Form I-9 and E-Verify records.</p><Link to="/2026-form-i-9-changes-for-employers/">Read more <ArrowRight size={16}/></Link></article>
      <article className="news-card" data-reveal><div className="news-image news-image-two"><span>WORKPLACE LAW</span><Scale size={36}/></div><div className="news-meta">NEWS <span/> MAY 5, 2026</div><h3>Top 5 Pregnancy Accommodation Pitfalls Retailers Need to Avoid in 2026</h3><p>Five workplace accommodation pitfalls retail employers should understand.</p><Link to="/top-5-pregnancy-accommodation-pitfalls-retailers-need-to-avoid-in-2026/">Read more <ArrowRight size={16}/></Link></article>
    </div></section>
    <ContactCTA/>
  </>;
}

function ServicePage({data}) {
  return <><PageHero eyebrow={data.eyebrow} title={data.title} tagline={data.tagline}/><section className="content-section section-pad container"><div className="service-intro" data-reveal><Eyebrow>VISIONS HR SERVICES</Eyebrow><h2>{data.intro}</h2><ButtonLink to="/contact-us/">Let's discuss your needs</ButtonLink></div><div className="service-detail-list">{data.sections.map((s,i)=><div className="detail-row" data-reveal key={s[0]}><div className="detail-number">0{i+1}</div><div><h3>{s[0]}</h3><p>{s[1]}</p></div></div>)}</div>{data.footnote&&<p className="footnote">{data.footnote}</p>}</section><ContactCTA/></>;
}

function About() {
  const values=[["Attentiveness","We actively listen to understand needs, anticipate challenges and respond thoughtfully."],["Experience","Our team brings extensive HR experience across industries and organizational needs."],["Respect","We recognize every client's unique culture, perspective and goals."],["Partnership","We view our relationships as long-term investments in better workplaces."]];
  return <><PageHero eyebrow="ABOUT VISIONS" title="About Visions" tagline="Experienced HR professionals. Personalized guidance. Better workplaces."/><section className="section-pad container about-intro"><div className="about-quote" data-reveal><span className="quote-large">“</span><h2>Our vision is to be recognized as an impactful, innovative, and efficient HR consulting partner for small businesses.</h2><span className="quote-credit">OUR VISION & MISSION</span></div><div className="about-copy" data-reveal><Eyebrow>OUR STORY</Eyebrow><h2>People are at the heart of every business.</h2><p>Founded in 2019, Visions is comprised of experienced, senior-certified human resource consultants, dedicated to providing professional and knowledgeable services to our clients.</p><p>Our consultants help small business owners find the employees they need and navigate compliance challenges effectively. We combine attentive service, practical experience and a clear understanding of each client's needs.</p><ButtonLink to="/janet-giannetta/" outline>Meet our founder</ButtonLink></div></section><section className="stats-strip"><div className="container stats-grid"><div><strong>2019</strong><span>Founded</span></div><div><strong>40+</strong><span>Years of combined HR experience</span></div><div><strong>6</strong><span>Core service areas</span></div><div><strong>2</strong><span>Office locations</span></div></div></section><section className="section-pad container commitment-section"><SectionTitle eyebrow="OUR COMMITMENT" title="Attentive, experienced and committed to your success." body="We build lasting relationships by listening carefully and responding to the needs of employees, customers and partners."/><div className="commitment-grid">{values.map((v,i)=><div className="commitment-card" data-reveal key={v[0]}><span>0{i+1}</span><h3>{v[0]}</h3><p>{v[1]}</p></div>)}</div></section><section className="founder-band"><div className="container founder-band-inner"><div className="founder-portrait"><div className="portrait-initials">JG</div><span>FOUNDER & PRESIDENT</span></div><div><Eyebrow>FOUNDER</Eyebrow><h2>Janet Giannetta,<br/><em>SPHR, SHRM-SCP</em></h2><p>Janet is a seasoned human resources professional with extensive experience across industries, and a passion for helping organizations navigate complex people matters.</p><ButtonLink to="/janet-giannetta/" outline>Read Janet's story</ButtonLink></div></div></section><ContactCTA/></>;
}

function Founder() {
  const affiliations=["NYS SHRM Council: Director of Government Affairs","SHRM Advocacy Captain, NY 18th Congressional District","Society of Human Resource Management, Poughkeepsie Chapter; Past President and Legislative Director","Orange County Chamber of Commerce, Board Member & Government Affairs Committee Member; HR Committee Chair","Abilities First, Board Member, Compliance Committee","United Way of Dutchess-Orange, Grants Reviewer, Community Impact Council Member","NYS Business Council, HR member","Council of Industry of Southeast NY, HR Network"];
  const certs=["Senior Professional in Human Resources (SPHR), HRCI","Senior Certified Professional (SHRM-SCP), SHRM","Certificate, Employing Abilities@Work (SHRM)","Advanced Certificate in Workplace Investigations (SHRM)"];
  return <><PageHero eyebrow="OUR FOUNDER" title="Janet Giannetta" tagline="Nurturing success with expert guidance."/><section className="section-pad container founder-profile"><div className="founder-profile-card" data-reveal><div className="portrait-large">JG</div><div><span className="founder-role">FOUNDER & PRESIDENT</span><h2>Janet Giannetta</h2><p>SPHR, SHRM-SCP</p></div></div><div className="founder-bio" data-reveal><Eyebrow>LEADERSHIP</Eyebrow><h2>Seasoned HR leadership. Practical business perspective.</h2><p>Janet Giannetta is a seasoned human resources professional with extensive experience in various industries. She most recently served as the Chief Human Resources Officer at RBT CPAs, where she oversaw all HR activities within the firm. Janet has mastered the delicate balance between employee advocacy and meeting business needs, regularly counseling management and employees on complex issues.</p><p>Her expertise spans recruitment, organizational development, strategic management, talent acquisition, employee relations and more.</p></div></section><section className="section-pad founder-background"><div className="container founder-columns"><div><Eyebrow>PROFESSIONAL AFFILIATIONS</Eyebrow><h2>Connected to the HR community.</h2></div><ul>{affiliations.map(x=><li key={x}><Check size={17}/>{x}</li>)}</ul></div></section><section className="section-pad container founder-columns education"><div><Eyebrow>EDUCATION & CERTIFICATIONS</Eyebrow><h2>A foundation of continued learning.</h2></div><div><h3>Education</h3><p>S.U.N.Y at Geneseo, BA in Psychology and Organizational & Occupational Behavior.</p><p>Marist College, Poughkeepsie, NY; S.U.N.Y College at New Paltz. Post-graduate studies in Business & Education.</p><h3>Certifications</h3><ul>{certs.map(x=><li key={x}><Check size={17}/>{x}</li>)}</ul></div></section><ContactCTA/></>;
}

function Pricing() {
  const packs=[{name:"Silver Pack",price:"$30.00"},{name:"Gold Pack",price:"$40.00",featured:true},{name:"Platinum Pack",price:"$50.00"}];
  return <><PageHero eyebrow="PRICING" title="Pricing" tagline="Explore our service packages."/><section className="section-pad container pricing-grid">{packs.map(p=><div className={"price-card "+(p.featured?"price-featured":"")} data-reveal key={p.name}><span className="price-plan">{p.name}</span><div className="price-amount">{p.price}<small> / Per month</small></div><ul><li><Check size={16}/>Adipiscing elit sed do.</li><li><Check size={16}/>Eusmod tempor incididunt ut.</li><li><Check size={16}/>Labore et dolore magna.</li></ul><Link className="button" to="/contact-us/">Get Now <ArrowRight size={17}/></Link></div>)}</section><ContactCTA/></>;
}

function Contact() {
  const [form,setForm]=useState({first:"",last:"",email:"",phone:"",subject:"",message:"",consent:false});
  const [error,setError]=useState("");
  const [sent,setSent]=useState(false);
  const update=e=>setForm(v=>({...v,[e.target.name]:e.target.type==="checkbox"?e.target.checked:e.target.value}));
  function submit(e) {
    e.preventDefault();
    if(!form.consent){setError("Please agree to the data collection notice before sending.");return;}
    const body="Name: "+form.first+" "+form.last+"\nEmail: "+form.email+"\nPhone: "+form.phone+"\nSubject: "+form.subject+"\n\n"+form.message;
    window.location.href="mailto:info@visionshr.com?subject="+encodeURIComponent(form.subject||"Website inquiry")+"&body="+encodeURIComponent(body);
    setError("");setSent(true);
  }
  return <><PageHero eyebrow="CONTACT US" title="We are here to help your business succeed!" tagline="Have a question or want to schedule a consultation? Let's talk."/><section className="section-pad container contact-layout"><div className="contact-info" data-reveal><Eyebrow>GET IN TOUCH</Eyebrow><h2>Let's start a conversation.</h2><p>If you have questions about our services or would like to schedule a consultation, our team is available to help with your HR needs.</p><div className="contact-info-list"><div><MapPin/><span><b>Newburgh Office</b>{offices[0]}</span></div><div><MapPin/><span><b>North Myrtle Beach Office</b>{offices[1]}</span></div><a href="tel:+18434270837"><Phone/><span><b>Call us</b>+1 843 427 0837</span></a><a href="mailto:info@visionshr.com"><Mail/><span><b>Email</b>info@visionshr.com</span></a></div></div><form className="contact-form" onSubmit={submit} data-reveal><h3>Send us a message</h3><div className="form-row"><label>First Name<input required name="first" value={form.first} onChange={update} autoComplete="given-name"/></label><label>Last Name<input required name="last" value={form.last} onChange={update} autoComplete="family-name"/></label></div><div className="form-row"><label>Email Address<input required type="email" name="email" value={form.email} onChange={update} autoComplete="email"/></label><label>Phone<input name="phone" value={form.phone} onChange={update} autoComplete="tel"/></label></div><label>Subject<input name="subject" value={form.subject} onChange={update}/></label><label>How can we help?<textarea required rows="5" name="message" value={form.message} onChange={update}/></label><label className="consent-label"><input type="checkbox" name="consent" checked={form.consent} onChange={update}/><span>I agree that my data is collected and stored for the purpose of responding to this inquiry.</span></label>{error&&<p className="form-error">{error}</p>}{sent&&<p className="form-success">Your email app should open with your message prepared. Please send it to complete your inquiry.</p>}<button className="button" type="submit">Send message <Send size={16}/></button><small className="form-note">Submitting opens your default email application; this port does not yet have a connected form-delivery service.</small></form></section><div className="map-placeholder"><div><MapPin/><h3>Two offices. One dedicated team.</h3><p>Serving organizations from New York to South Carolina.</p></div></div></>;
}

const articles={
  "/2026-form-i-9-changes-for-employers/":{
    title:"2026 Form I-9 Changes for Employers",date:"May 5, 2026",
    intro:"2026 is the year to audit or re-audit your Form I-9 and E-Verify records. I have been auditing I-9s for 10+ years and find mistakes in every organization. We audit and proactively correct mistakes and build a process for future employment verifications.",
    sections:[
      ["Fines","The financial implications are significant. Civil penalties for I-9 paperwork violations can vary by the percentage of errors identified and applicable enforcement guidance. Consult current government guidance or qualified counsel for the latest amounts."],
      ["Updates from USCIS","Employers or an authorized representative must examine acceptable documents that establish an employee's identity and employment eligibility; document the applicable document details; record the first date of employment; and certify the examination with the required signature and company information."],
      ["What is the purpose of Supplement B?","Supplement B, Reverification and Rehire, is used when an employee's temporary work authorization expires and needs to be updated, when an employee is rehired within three years of the original I-9 completion, or when an employee changes their name."],
      ["A practical next step","Review your process, confirm that employee records are complete, and make sure the people responsible for verification understand their responsibilities."]
    ]
  },
  "/top-5-pregnancy-accommodation-pitfalls-retailers-need-to-avoid-in-2026/":{
    title:"Top 5 Pregnancy Accommodation Pitfalls Retailers Need to Avoid in 2026",date:"May 5, 2026",
    intro:"Retail employers face a unique set of challenges when it comes to complying with the Pregnant Workers Fairness Act (PWFA). The decentralized nature of store operations and reliance on frontline managers can create exposure when managers are not equipped to recognize and triage accommodation requests.",
    sections:[
      ["1. Applying attendance policies without considering accommodations","A rigid attendance policy should not replace an individualized review of a known limitation and a request for reasonable accommodation."],
      ["2. Requesting unnecessary documentation","Managers should understand when documentation is appropriate and avoid requesting information that is not needed to evaluate an accommodation."],
      ["3. Denying accommodations without an individualized review","The law requires covered employers to provide reasonable accommodations for a qualified employee's known limitations related to pregnancy, childbirth or related medical conditions, unless doing so would cause undue hardship."],
      ["4. Leaving frontline managers unprepared","Retail managers are often the first people to hear about a need. Give them a clear process for recognizing requests and escalating them to HR."],
      ["5. Failing to coordinate and document the process","A consistent, confidential process helps the organization respond promptly and maintain appropriate records."]
    ]
  }
};

function BlogList() {
  return <><PageHero eyebrow="NEWS & UPDATES" title="Insights for better workplaces" tagline="HR guidance, practical ideas and updates for employers."/><section className="section-pad container blog-list"><div className="news-grid"><article className="news-card" data-reveal><div className="news-image news-image-one"><span>HR INSIGHTS</span><CalendarDays size={36}/></div><div className="news-meta">NEWS <span/> MAY 5, 2026</div><h3>2026 Form I-9 Changes for Employers</h3><p>Make 2026 the year to audit or re-audit your Form I-9 and E-Verify records.</p><Link to="/2026-form-i-9-changes-for-employers/">Read more <ArrowRight size={16}/></Link></article><article className="news-card" data-reveal><div className="news-image news-image-two"><span>WORKPLACE LAW</span><Scale size={36}/></div><div className="news-meta">NEWS <span/> MAY 5, 2026</div><h3>Top 5 Pregnancy Accommodation Pitfalls Retailers Need to Avoid in 2026</h3><p>Five pitfalls retailers need to avoid when responding to pregnancy accommodation requests.</p><Link to="/top-5-pregnancy-accommodation-pitfalls-retailers-need-to-avoid-in-2026/">Read more <ArrowRight size={16}/></Link></article></div></section><ContactCTA/></>;
}

function Article({data}) {
  return <><PageHero eyebrow="NEWS · HR INSIGHTS" title={data.title} tagline={data.date}/><article className="article-container section-pad"><div className="article-meta"><CalendarDays size={16}/>{data.date}<span/> By Janet Giannetta</div><p className="article-lead">{data.intro}</p>{data.sections.map(s=><section key={s[0]}><h2>{s[0]}</h2><p>{s[1]}</p></section>)}<div className="article-disclaimer">Visions Human Resource Services, LLC does not provide accounting, tax or legal advice. Consult a qualified attorney or licensed professional regarding specific legal or tax questions.</div><ButtonLink to="/blog-list/" outline>Back to news</ButtonLink></article><ContactCTA/></>;
}

function NotFound() {
  return <div className="not-found section-pad container"><Eyebrow>404 · PAGE NOT FOUND</Eyebrow><h1>Let's get you back<br/><em>on the right path.</em></h1><p>The page you are looking for may have moved or no longer exists.</p><ButtonLink to="/">Return home</ButtonLink></div>;
}

export default function App() {
  const location=useLocation();
  useEffect(()=>{
    const service=servicePages[location.pathname];
    const article=articles[location.pathname];
    const titles={"/":"Visions Human Resource Services","/about/":"About Visions","/contact-us/":"Contact Us","/pricing/":"Pricing","/blog-list/":"News & Updates","/janet-giannetta/":"Janet Giannetta"};
    document.title=(service?service.title:article?article.title:titles[location.pathname]||"Visions Human Resource Services")+" | Visions Human Resource Services";
  },[location.pathname]);
  return <><PageEffects/><Header/><Transition><Routes location={location}><Route path="/" element={<Home/>}/><Route path="/about/" element={<About/>}/><Route path="/janet-giannetta/" element={<Founder/>}/><Route path="/contact-us/" element={<Contact/>}/><Route path="/pricing/" element={<Pricing/>}/><Route path="/blog-list/" element={<BlogList/>}/>{Object.entries(servicePages).map(([path,data])=><Route key={path} path={path} element={<ServicePage data={data}/>}/>)}{Object.entries(articles).map(([path,data])=><Route key={path} path={path} element={<Article data={data}/>}/>)}<Route path="*" element={<NotFound/>}/></Routes></Transition><Footer/><button className="back-top" aria-label="Back to top" onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}><ArrowRight size={18}/></button></>;
}