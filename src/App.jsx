import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Copy, ExternalLink, FileText, Globe, Mail, Moon, Sun, X } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiGeeksforgeeks, SiLeetcode } from 'react-icons/si'

const Github = FaGithub

const profileLinks = {
  github: 'https://github.com/Utkarshraj977',
  linkedin: 'https://www.linkedin.com/in/utkarsh-raj-28a7ab272',
  leetcode: 'https://leetcode.com/u/utkarsh_raj_977/',
  gfg: 'https://www.geeksforgeeks.org/user/utkarsh_raj_977/',
  resume: '/assets/resume.pdf',
}

const experiences = [
  { company: 'Freelancer', role: 'Full-Stack Developer', date: 'Aug 2026 – Present', mark: 'F', tone: 'from-blue-500 to-purple-700' },
]

const skills = ['TypeScript', 'Python', 'Node.js', 'MongoDB', 'Postgres', 'Redis', 'Git', 'AWS', 'GCP', 'MERN', 'Docker']

const projects = [
  { id: 'rovito', title: 'ROVITO', type: 'Transportation & Tours Platform', image: '/assets/rovito.png', tags: ['MERN Stack', 'Google Maps', 'Moneris Payment Gateway', 'Postgres'], description: 'A full-stack private tours platform for booking chauffeur services and discovering Victoria, BC tours.', details: 'ROVITO is a modern booking experience for private tours. The platform brings together a polished React interface, Node.js and Express APIs, Postgres data management and a responsive customer journey.', live: 'https://rovito.ca/', source: null },
  { id: 'collabx', title: 'collabX', type: 'Full-Stack Collaboration Platform', image: '/assets/collabX.png', tags: ['React', 'Node.js', 'Socket.IO', 'Redis', 'MongoDB', 'WebRTC'], description: 'A full-stack real-time collaboration platform for team communication, task management, GitHub activity and video meetings inside structured workspaces and channels.', details: 'Implemented real-time messaging and event synchronization using Socket.IO with Redis as a message broker and scaling layer. Built a peer-to-peer WebRTC meeting system using simple-peer, centralized state with Redux, and role-based access control for admin, manager and member users.', live: 'https://collabx.site/', source: 'https://github.com/Utkarshraj977/collabX' },
  { id: 'gramin-seva', title: 'Gramin-Vikas-Portal', type: 'Rural Development Web Platform', image: '/assets/Gramin-vikas-portal.png', tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'], description: 'A full-stack web platform that connects citizens with essential government services and helps rural communities access welfare schemes digitally.', details: 'The portal allows users to access welfare schemes, submit service requests and track application status in real time. It focuses on transparency, accessibility and digital inclusion through a clean and user-friendly interface.', live: 'https://gramin-seva-portal-frontend.onrender.com/', source: 'https://github.com/Utkarshraj977/Gramin-seva-portal' },
  { id: 'chat-app', title: 'Real-Time Chat Application', type: 'Full-Stack Real-Time Messaging', image: '/assets/real.jpeg', tags: ['React', 'Socket.IO'], description: 'A real-time messaging application for fast, reliable communication and a focused chat experience.', details: 'Built with a React foundation and Socket.IO for instant message delivery, presence updates and responsive real-time communication between users.', live: 'https://chat-app-client-6nce.onrender.com/', source: 'https://github.com/Utkarshraj977/Chat-App' },
]

const socialLinks = [
  { label: 'GitHub', href: profileLinks.github, icon: FaGithub },
  { label: 'LinkedIn', href: profileLinks.linkedin, icon: FaLinkedin },
  { label: 'LeetCode', href: profileLinks.leetcode, icon: SiLeetcode },
  { label: 'GeeksforGeeks', href: profileLinks.gfg, icon: SiGeeksforgeeks },
]

function SectionHeading({ eyebrow, title, children }) {
  return <div className="mb-10 text-center"><span className="chip inline-flex rounded-md bg-white px-3 py-1 text-xs font-semibold text-black">{eyebrow}</span><h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">{title}</h2>{children}</div>
}

function ActionLink({ href, children, icon: Icon, secondary = false }) {
  return <a href={href} target="_blank" rel="noreferrer" className={`inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-105 ${secondary ? 'border border-zinc-700 text-zinc-300 hover:border-white hover:bg-white/10 hover:text-white' : 'bg-white text-black hover:bg-fuchsia-200 hover:shadow-[0_0_20px_rgba(217,70,239,.25)]'}`}>{Icon && <Icon size={14} />}{children}</a>
}

export default function App() {
  const [dark, setDark] = useState(true)
  const [selected, setSelected] = useState(null)
  const [copied, setCopied] = useState(false)
  const [sent, setSent] = useState(false)
  const [filter, setFilter] = useState('All')
  const filters = ['All', 'MERN Stack', 'React', 'Node.js', 'MongoDB']
  const shownProjects = useMemo(() => filter === 'All' ? projects : projects.filter(project => project.tags.includes(filter)), [filter])
  const copyEmail = async () => { await navigator.clipboard?.writeText('work@utkarsh.website'); setCopied(true); setTimeout(() => setCopied(false), 1600) }

  return <main className={dark ? '' : 'light'}>
    <div className="mx-auto min-h-screen max-w-[900px] px-5 pb-32 pt-25 sm:px-10">
      <header className="mb-10">
        <motion.div initial={{ opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="mb-8">
          <div className="image-scroll relative mx-auto mb-7 w-full max-w-[820px] overflow-x-auto rounded-xl  bg-zinc-950/90 shadow-[0_0_55px_rgba(145,0,255,.08)]">
            <a href="https://github.com/Utkarshraj977" target="_blank" rel="noopener noreferrer"><img src="/assets/img3.jpg" alt="GitHub contribution activity" className="leetcode-image block h-auto max-w-none object-contain" /></a>            <span className="image-tone-overlay" aria-hidden="true" />
          </div>
          <h1 className="hero-title text-5xl font-bold tracking-[-.06em] text-white sm:text-6xl">Utkarsh Raj</h1>
          <p className="mt-2 text-xl font-semibold text-zinc-300 sm:text-2xl">Full Stack Engineer</p>
          <button onClick={copyEmail} className="muted mt-3 flex items-center gap-2 text-sm transition-colors duration-300 hover:text-white">work@utkarsh.website <Copy size={13} />{copied && <span className="text-xs text-fuchsia-400">Copied</span>}</button>
        </motion.div>
      </header>

      <section id="about" className="mb-16"><h3 className="mb-1 text-xl font-bold">About</h3><motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .55 }} className="mt-2 text-lg font-medium leading-7 text-zinc-200">I’m a <strong className="font-bold text-white">Full Stack Web Developer</strong> who can build complete projects from start to finish.</motion.p></section>
      <section id="experience" className="mb-16"><h3 className="mb-7 text-xl font-bold">Work Experience</h3><div className="space-y-5">{experiences.map(experience => <motion.div key={experience.company} initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .45 }} className="flex items-center gap-4"><div className={`grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br ${experience.tone} text-sm font-bold ring-1 ring-white/10`}>{experience.mark}</div><div className="min-w-0 flex-1"><div className="flex items-center gap-1 font-semibold">{experience.company}<ArrowUpRight size={13} /></div><p className="text-sm muted">{experience.role}</p></div><time className="muted text-right text-sm">{experience.date}</time></motion.div>)}</div></section>
            <section className="mb-24"><h3 className="mb-4 text-xl font-bold">Skills</h3><div className="flex flex-wrap gap-2">{skills.map(skill => <motion.span key={skill} whileHover={{ y: -3, scale: 1.05 }} transition={{ type: 'spring', stiffness: 400, damping: 18 }} className="chip cursor-default rounded-md bg-white px-3 py-1 text-xs font-semibold text-black">{skill}</motion.span>)}</div></section>

      <section id="projects" className="mb-28"><SectionHeading eyebrow="My Projects" title="Check out my latest work"><p className="muted mx-auto mt-3 max-w-xl text-sm">Selected full-stack projects from my portfolio, with live demos and source code where available.</p></SectionHeading><div className="mb-8 flex flex-wrap justify-center gap-2">{filters.map(item => <motion.button key={item} onClick={() => setFilter(item)} whileHover={{ scale: 1.06 }} whileTap={{ scale: .96 }} className={`rounded-md border px-3 py-1.5 text-xs transition-colors ${filter === item ? 'border-white bg-white text-black' : 'border-zinc-700 text-zinc-400 hover:border-white hover:text-white'}`}>{item}</motion.button>)}</div><div className="grid gap-5 sm:grid-cols-2">{shownProjects.map(project => <motion.article key={project.id} layout initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ y: -7, scale: 1.015 }} transition={{ type: 'spring', stiffness: 300, damping: 22 }} className="panel overflow-hidden rounded-2xl"><button onClick={() => setSelected(project)} className="group block w-full text-left"><div className="relative h-44 overflow-hidden bg-zinc-950"><img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" /><span className="absolute bottom-4 left-5 rounded bg-black/75 px-2 py-1 text-[10px] text-white">{project.type}</span></div><div className="p-5"><div className="flex items-start justify-between gap-4"><h3 className="font-bold">{project.title}</h3><ArrowUpRight size={16} className="shrink-0 text-fuchsia-400" /></div><p className="muted mt-2 line-clamp-3 text-sm leading-6">{project.description}</p><div className="mt-4 flex flex-wrap gap-1.5">{project.tags.map(tag => <span key={tag} className="rounded bg-white/10 px-2 py-1 text-[10px] text-zinc-300">{tag}</span>)}</div></div></button><div className="flex gap-2 border-t border-white/10 px-5 pb-5 pt-4"><ActionLink href={project.live} icon={Globe}>Live Demo</ActionLink>{project.source && <ActionLink href={project.source} icon={Github} secondary>Source Code</ActionLink>}</div></motion.article>)}</div></section>
      <section id="contact" className="mx-auto max-w-2xl text-center"><SectionHeading eyebrow="Contact" title="Get in Touch"><p className="muted mt-4 text-base leading-7">Looking for a freelancer or interested in hiring me? Have a project, question, or just want to say hello? Reach me on <a href="https://x.com/utkarshrajvx" target="_blank" rel="noopener noreferrer" className="font-semibold text-fuchsia-400 hover:underline">X</a> or email me at <a href="mailto:work@utkarsh.website" className="font-semibold text-fuchsia-400 hover:underline">work@utkarsh.website</a>. I’d love to hear about your project.</p></SectionHeading><motion.a href="mailto:work@utkarsh.website" whileHover={{ scale: 1.08 }} whileTap={{ scale: .96 }} className="pulse mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition-colors duration-300 hover:bg-fuchsia-200"><Mail size={16} />Email me</motion.a></section>    </div>

    <nav className="dock fixed bottom-6 left-1/2 z-30 flex -translate-x-1/2 items-center gap-1 rounded-2xl border border-zinc-800 bg-zinc-900/85 p-2 shadow-2xl backdrop-blur-xl">{socialLinks.map(({ label, href, icon: Icon }) => <motion.a key={label} data-label={label} aria-label={label} href={href} target="_blank" rel="noreferrer" className="dock-button rounded-xl p-3 text-zinc-300" whileHover={{ scale: 1.3, y: -4 }} transition={{ type: 'spring', stiffness: 420, damping: 16 }}><Icon size={17} /></motion.a>)}<motion.a data-label="Resume" aria-label="Resume" href={profileLinks.resume} target="_blank" rel="noreferrer" className="dock-button rounded-xl p-3 text-zinc-300" whileHover={{ scale: 1.3, y: -4 }} transition={{ type: 'spring', stiffness: 420, damping: 16 }}><FileText size={17} /></motion.a><motion.button data-label="Theme" aria-label="Toggle theme" onClick={() => setDark(value => !value)} className="dock-button rounded-xl p-3 text-zinc-300" whileHover={{ scale: 1.3, y: -4 }} transition={{ type: 'spring', stiffness: 420, damping: 16 }}>{dark ? <Moon size={17} /> : <Sun size={17} />}</motion.button></nav>

    {selected && <div className="fixed inset-0 z-50 grid place-items-center bg-black/75 p-5 backdrop-blur-sm" onClick={() => setSelected(null)}><motion.div initial={{ opacity: 0, scale: .94, y: 12 }} animate={{ opacity: 1, scale: 1, y: 0 }} className="panel max-w-lg rounded-2xl p-6 shadow-2xl" onClick={event => event.stopPropagation()}><div className="mb-5 flex items-start justify-between gap-5"><div><span className="text-xs font-semibold text-fuchsia-400">{selected.type}</span><h2 className="mt-1 text-2xl font-bold">{selected.title}</h2></div><button onClick={() => setSelected(null)} className="rounded-lg p-2 text-zinc-400 transition hover:bg-white/10 hover:text-white"><X size={18} /></button></div><img src={selected.image} alt="" className="mb-5 h-44 w-full rounded-xl object-cover" /><p className="muted leading-7">{selected.details}</p><div className="mt-6 flex flex-wrap gap-2">{selected.tags.map(tag => <span key={tag} className="rounded-md bg-white/10 px-3 py-1.5 text-xs">{tag}</span>)}</div><div className="mt-7 flex gap-2"><ActionLink href={selected.live} icon={ExternalLink}>Live Demo</ActionLink>{selected.source && <ActionLink href={selected.source} icon={Github} secondary>Source Code</ActionLink>}</div></motion.div></div>}
  </main>
}



