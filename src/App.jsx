import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronRight,
  Copy,
  ExternalLink,
  FileText,
  Home,
  Mail,
  Moon,
  Sun,
  X,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";

const EMAIL = "work@utkarsh.website";
const pemail= "utkarshbrb6@gmail.com"
const profile = {
  github: "https://github.com/Utkarshraj977",
  linkedin: "https://www.linkedin.com/in/utkarsh-raj-28a7ab272",
  x: "https://x.com/utkarshrajvx",
  leetcode: "https://leetcode.com/u/utkarsh_raj_977/",
  gfg: "https://www.geeksforgeeks.org/user/utkarsh_raj_977/",
  resume: "/assets/resume.pdf",
};

const experiences = [
  {
    company: "Freelancer",
    role: "Full-Stack Developer",
    date: "Aug 2026 – Present",
    mark: "F",
    tone: "from-blue-500 to-purple-700",
  },
];

const skills = [
  "TypeScript",
  "Python",
  "Node.js",
  "MongoDB",
  "Postgres",
  "Redis",
  "Git",
  "AWS",
  "GCP",
  "MERN",
  "Docker",
];

const projects = [
  {
    title: "ROVITO",
    date: "",
    description:
      "A full-stack private tours platform for booking chauffeur services and discovering Victoria, BC tours.",
    tags: ["MERN Stack", "Google Maps", "Moneris Payment Gateway", "Postgres"],
    image: "/assets/proj1.mp4",
    live: "https://rovito.ca/",
    source: null,
    type: "Transportation & Tours Platform",
    details:
      "ROVITO is a modern booking experience for private tours. The platform brings together a polished React interface, Node.js and Express APIs, Postgres data management and a responsive customer journey.",
  },
  {
    title: "collabX",
    date: "",
    description:
      "A full-stack real-time collaboration platform for team communication, task management, GitHub activity and video meetings inside structured workspaces and channels.",
    tags: ["React", "Node.js", "Socket.IO", "Redis", "MongoDB", "WebRTC"],
    image: "/assets/proj2.mp4",
    live: "https://collabx.site/",
    source: "https://github.com/Utkarshraj977/collabX",
    type: "Full-Stack Collaboration Platform",
    details:
      "Implemented real-time messaging and event synchronization using Socket.IO with Redis as a message broker and scaling layer. Built a peer-to-peer WebRTC meeting system using simple-peer, centralized state with Redux, and role-based access control for admin, manager and member users.",
  },
  {
    title: "Gramin-Vikas-Portal",
    date: "",
    description:
      "A full-stack web platform that connects citizens with essential government services and helps rural communities access welfare schemes digitally.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    image: "/assets/proj3.mp4",
    live: "https://gramin-seva-portal-frontend.onrender.com/",
    source: "https://github.com/Utkarshraj977/Gramin-seva-portal",
    type: "Rural Development Web Platform",
    details:
      "The portal allows users to access welfare schemes, submit service requests and track application status in real time. It focuses on transparency, accessibility and digital inclusion through a clean and user-friendly interface.",
  },
  // {
  //   title: "Real-Time Chat Application",
  //   date: "",
  //   description:
  //     "A real-time messaging application for fast, reliable communication and a focused chat experience.",
  //   tags: ["React", "Socket.IO"],
  //   image: "/assets/proj4.mp4",
  //   live: "https://chat-app-client-6nce.onrender.com/",
  //   source: "https://github.com/Utkarshraj977/Chat-App",
  //   type: "Full-Stack Real-Time Messaging",
  //   details:
  //     "Built with a React foundation and Socket.IO for instant message delivery, presence updates and responsive real-time communication between users.",
  // },
];

const dockItems = [
  { label: "Home", href: "#top", icon: Home },
  {
    label: "GitHub",
    href: profile.github,
    icon: FaGithub,
    external: true,
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: FaLinkedin,
    external: true,
  },
  {
    label: "LeetCode",
    href: profile.leetcode,
    icon: SiLeetcode,
    external: true,
  },
  {
    label: "GFG",
    href: profile.gfg,
    icon: SiGeeksforgeeks,
    external: true,
  },
  {
    label: "Resume",
    href: profile.resume,
    icon: FileText,
    external: true,
  },
];

function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-[6px] bg-[#f4f4f4] px-3 py-[5px] text-[12px] font-semibold leading-none text-[#151515] transition-transform duration-200 hover:-translate-y-0.5">
      {children}
    </span>
  );
}

function ProjectAction({ href, type }) {
  const isSource = type === "Source";

  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex h-[32px] items-center gap-[6px] rounded-[6px] border border-[#303030] bg-[#f5f5f5] px-[10px] text-[12px] font-semibold text-[#171717] transition-all duration-200 hover:-translate-y-[1px] hover:bg-white hover:shadow-[0_5px_16px_rgba(255,255,255,.08)]"
    >
      {isSource ? <FaGithub size={14} /> : <ExternalLink size={13} />}
      {type}
    </a>
  );
}

function ExperienceRow({ item, dark }) {
  return (
    <div className="flex items-center gap-3 sm:gap-4">
      <div
        className={`grid h-[44px] w-[44px] shrink-0 place-items-center rounded-full bg-gradient-to-br ${item.tone} text-sm font-bold text-white ring-1 ring-white/10 sm:h-[48px] sm:w-[48px]`}
      >
        {item.mark}
      </div>

      <div className="min-w-0 flex-1">
        <div
          className={`flex items-center gap-1 text-[15px] font-semibold leading-tight sm:text-[17px] ${
            dark ? "text-[#f2f2f2]" : "text-[#171717]"
          }`}
        >
          {item.company}
          <ArrowUpRight
            size={14}
            className={dark ? "text-[#858585]" : "text-[#999]"}
          />
        </div>

        <p
          className={`mt-[3px] text-[13px] sm:text-[15px] ${
            dark ? "text-[#dedede]" : "text-[#666]"
          }`}
        >
          {item.role}
        </p>
      </div>

      <time
        className={`hidden text-right text-[13px] sm:block sm:text-[14px] ${
          dark ? "text-[#858585]" : "text-[#777]"
        }`}
      >
        {item.date}
      </time>
    </div>
  );
}

function Dock({ dark, setDark }) {
  const [hovered, setHovered] = useState(null);

  const items = [
    ...dockItems,
    {
      label: dark ? "Light" : "Dark",
      icon: dark ? Moon : Sun,
      button: true,
    },
  ];

  return (
    <motion.nav
      aria-label="Portfolio navigation"
      className="fixed bottom-3 left-1/2 z-[120] -translate-x-1/2 sm:bottom-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35, duration: 0.5 }}
    >
      <motion.div
        className={`flex h-[58px] items-center rounded-[30px] border px-[6px] shadow-[0_18px_50px_rgba(0,0,0,.22)] backdrop-blur-xl ${
          dark
            ? "border-[#252525] bg-[#101010]/98"
            : "border-[#d8d8d8] bg-white/95"
        }`}
      >
        {items.map((item, index) => {
          const Icon = item.icon;
          const isHovered = hovered === index;
          const itemWidth = isHovered ? 68 : 44;

          return (
            <motion.div
              key={item.label}
              layout
              animate={{ width: itemWidth }}
              transition={{
                type: "spring",
                stiffness: 430,
                damping: 28,
                mass: 0.55,
              }}
              className="relative flex h-[46px] shrink-0 items-center justify-center"
            >
              {index > 0 && (
                <motion.span
                  className={`absolute left-0 top-1/2 w-px -translate-x-1/2 -translate-y-1/2 ${
                    dark ? "bg-[#303030]" : "bg-[#d5d5d5]"
                  }`}
                  animate={{
                    height: isHovered ? 34 : 30,
                    opacity: isHovered ? 0.9 : 0.65,
                  }}
                />
              )}

              {item.button ? (
                <motion.button
                  type="button"
                  aria-label="Toggle theme"
                  onClick={() => setDark((value) => !value)}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                  className={`group relative grid h-[44px] w-[44px] place-items-center rounded-full ${
                    dark ? "text-[#e2e2e2]" : "text-[#555]"
                  }`}
                  animate={{
                    scale: isHovered ? 1.12 : 1,
                    y: isHovered ? -1 : 0,
                  }}
                >
                  <motion.span
                    className={`absolute inset-0 rounded-full ${
                      dark ? "bg-[#252525]" : "bg-[#eeeeee]"
                    }`}
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      scale: isHovered ? 1 : 0.72,
                    }}
                  />
                  <Icon size={19} className="relative z-10" />
                  <span
                    className={`pointer-events-none absolute bottom-[calc(100%+9px)] left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-[6px] px-2 py-[5px] text-[11px] font-semibold opacity-0 shadow-[0_6px_20px_rgba(0,0,0,.2)] transition-opacity duration-150 group-hover:opacity-100 ${
                      dark
                        ? "bg-[#d8d8d8] text-[#151515]"
                        : "bg-[#222] text-white"
                    }`}
                  >
                    {item.label}
                  </span>
                </motion.button>
              ) : (
                <motion.a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                  className={`group relative grid h-[44px] w-[44px] place-items-center rounded-full ${
                    dark ? "text-[#e2e2e2]" : "text-[#555]"
                  }`}
                  aria-label={item.label}
                  animate={{
                    scale: isHovered ? 1.12 : 1,
                    y: isHovered ? -1 : 0,
                  }}
                >
                  <motion.span
                    className={`absolute inset-0 rounded-full ${
                      dark ? "bg-[#252525]" : "bg-[#eeeeee]"
                    }`}
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      scale: isHovered ? 1 : 0.72,
                    }}
                  />
                  <Icon size={19} className="relative z-10" />
                  <span
                    className={`pointer-events-none absolute bottom-[calc(100%+9px)] left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-[6px] px-2 py-[5px] text-[11px] font-semibold opacity-0 shadow-[0_6px_20px_rgba(0,0,0,.2)] transition-opacity duration-150 group-hover:opacity-100 ${
                      dark
                        ? "bg-[#d8d8d8] text-[#151515]"
                        : "bg-[#222] text-white"
                    }`}
                  >
                    {item.label}
                  </span>
                </motion.a>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </motion.nav>
  );
}

function ProjectPreview({ src, title, className = "" }) {
  return (
    <video
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={`${title} project preview`}
      className={`h-full w-full object-cover transition-transform duration-500 hover:scale-[1.025] ${className}`}
    />
  );
}

function App() {
  const [dark, setDark] = useState(true);
  const [copied, setCopied] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <main
      id="top"
      className={`min-h-screen transition-colors duration-300 ${
        dark ? "bg-[#050505] text-[#f4f4f4]" : "bg-white text-[#171717]"
      }`}
    >
      <div className="mx-auto w-full max-w-[640px] px-4 pb-32 pt-10 sm:px-0 sm:pt-22">
        {/* Utkarsh's original contribution/activity asset */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="portfolio-scroll mb-5 w-full overflow-x-auto overflow-y-hidden rounded-[9px] sm:mb-5"
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="block w-max"
          >
            <img
              src="/assets/img3.jpg"
              alt="GitHub contribution activity"
              className="block h-[120px] w-auto min-w-[640px] object-contain"
            />
          </a>
        </motion.div>

        {/* Hero */}
        <header className="mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`text-[36px] font-bold leading-[1.04] tracking-[-0.035em] sm:text-[52px] ${
              dark ? "text-white" : "text-[#171717]"
            }`}
          >
            Hi, I'm Utkarsh Raj.
          </motion.h1>

          <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1">
            <p
              className={`text-[13px] font-medium sm:text-[15px] ${
                dark ? "text-[#8e8e8e]" : "text-[#777]"
              }`}
            >
              Full Stack Engineer
            </p>

            <span className={dark ? "text-[#3b3b3b]" : "text-[#bdbdbd]"}>
              •
            </span>

            <button
              type="button"
              onClick={copyEmail}
              className={`inline-flex items-center gap-1.5 text-[12px] transition-colors sm:text-[14px] ${
                dark
                  ? "text-[#8e8e8e] hover:text-white"
                  : "text-[#777] hover:text-black"
              }`}
            >
              {EMAIL}
              <Copy size={13} />
              {copied && (
                <span
                  className={`text-[11px] ${
                    dark ? "text-white" : "text-[#222]"
                  }`}
                >
                  Copied
                </span>
              )}
            </button>
          </div>
        </header>

        {/* About */}
        <section className="mb-10">
          <h2 className="mb-1 text-[20px] font-bold tracking-[-0.025em] sm:text-[22px]">
            About
          </h2>

          <p
            className={`text-[14px] leading-6 sm:text-[16px] sm:leading-7 ${
              dark ? "text-[#a3a3a3]" : "text-[#666]"
            }`}
          >
            I’m a{" "}
            <span
              className={`font-semibold ${
                dark ? "text-[#f0f0f0]" : "text-[#222]"
              }`}
            >
              Full Stack Web Developer
            </span>{" "}
            who can build complete projects from start to finish.
          </p>
        </section>

        {/* Work Experience */}
        <section className="mb-11">
          <h2 className="mb-6 text-[20px] font-bold tracking-[-0.025em] sm:text-[22px]">
            Work Experience
          </h2>

          <div className="space-y-4">
            {experiences.map((item) => (
              <ExperienceRow
                key={`${item.company}-${item.role}`}
                item={item}
                dark={dark}
              />
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-20">
          <h2 className="mb-5 text-[20px] font-bold tracking-[-0.025em] sm:text-[22px]">
            Skills
          </h2>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Chip key={skill}>{skill}</Chip>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-28">
          <div className="mb-9 text-center">
            <span className="inline-flex rounded-[7px] bg-[#f4f4f4] px-3 py-[6px] text-[12px] font-medium text-[#171717]">
              My Projects
            </span>

            <h2 className="mt-4 text-[31px] font-bold leading-[1.08] tracking-[-0.045em] sm:text-[40px]">
              Check out my latest work
            </h2>

            <p
              className={`mx-auto mt-3 max-w-[700px] text-[14px] leading-6 sm:text-[15px] sm:leading-7 ${
                dark ? "text-[#969696]" : "text-[#707070]"
              }`}
            >
              Selected full-stack projects from my portfolio, with live demos
              and source code where available.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className={`flex min-h-[410px] flex-col overflow-hidden rounded-[10px] border transition-colors duration-300 ${
                  dark
                    ? "border-[#252525] bg-[#050505] hover:border-[#343434]"
                    : "border-[#e1e1e1] bg-white hover:border-[#cfcfcf]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className={`group relative h-[155px] shrink-0 overflow-hidden border-b text-left ${
                    dark
                      ? "border-[#202020] bg-[#111]"
                      : "border-[#e5e5e5] bg-[#f5f5f5]"
                  }`}
                  aria-label={`View ${project.title} details`}
                >
                  <ProjectPreview src={project.image} title={project.title} />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />

                  <span className="absolute bottom-3 left-3 rounded-[5px] bg-black/70 px-2 py-1 text-[10px] font-medium text-white">
                    {project.type}
                  </span>
                </button>

                <div className="flex flex-1 flex-col p-[10px]">
                  <div className="flex items-start justify-between gap-2">
                    <h3
                      className={`text-[17px] font-bold tracking-[-0.02em] sm:text-[18px] ${
                        dark ? "text-white" : "text-[#171717]"
                      }`}
                    >
                      {project.title}
                    </h3>

                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      aria-label={`Open ${project.title}`}
                      className={`rounded-full p-1 transition ${
                        dark
                          ? "text-[#858585] hover:bg-[#1b1b1b] hover:text-white"
                          : "text-[#999] hover:bg-[#f0f0f0] hover:text-black"
                      }`}
                    >
                      <ArrowUpRight size={15} />
                    </button>
                  </div>

                  <p
                    className={`mt-2 text-[12px] leading-[1.5] sm:text-[13px] ${
                      dark ? "text-[#9a9a9a]" : "text-[#707070]"
                    }`}
                  >
                    {project.description}
                  </p>

                  <div className="mt-auto pt-5">
                    <div className="flex flex-wrap gap-[6px]">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`rounded-[6px] px-[8px] py-[5px] text-[10px] font-semibold leading-none sm:text-[11px] ${
                            dark
                              ? "bg-[#222] text-[#e5e5e5]"
                              : "bg-[#eeeeee] text-[#333]"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-3 flex flex-wrap gap-[6px]">
                      <ProjectAction href={project.source} type="Source" />
                      <ProjectAction href={project.live} type="Demo" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="mx-auto max-w-[720px] pb-10 text-center">
          <span className="inline-flex rounded-[7px] bg-[#f4f4f4] px-3 py-[6px] text-[12px] font-medium text-[#171717]">
            Contact
          </span>

          <h2 className="mt-4 text-[31px] font-bold leading-[1.08] tracking-[-0.045em] sm:text-[40px]">
            Get in Touch
          </h2>

          <p
            className={`mx-auto mt-4 max-w-[700px] text-[14px] leading-6 sm:text-[15px] sm:leading-7 ${
              dark ? "text-[#9a9a9a]" : "text-[#707070]"
            }`}
          >
            Looking for a freelancer or interested in hiring me? Have a
            project, question, or just want to say hello? Reach me on{" "}
            <a
              href={profile.x}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-fuchsia-400 hover:underline"
            >
              X
            </a>{" "}
            or email me at{" "}
            <a
              href={`mailto:${EMAIL}`}
              className="font-semibold text-fuchsia-400 hover:underline"
            >
              {EMAIL}
            </a>
            . I’d love to hear about your project.
          </p>

          <motion.button
            type="button"
            onClick={() => setContactOpen(true)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="mt-6 inline-flex items-center gap-2 rounded-[7px] bg-[#f4f4f4] px-5 py-3 text-[14px] font-semibold text-[#171717] transition-colors hover:bg-white"
          >
            <Mail size={15} />
            Contact me
          </motion.button>
        </section>

        {/* Contact Modal */}
        {contactOpen && (
          <motion.div
            className={`fixed inset-0 z-[100] flex items-center justify-center px-5 backdrop-blur-[6px] ${
              dark ? "bg-black/80" : "bg-black/25"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onMouseDown={() => setContactOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Contact form"
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 380,
                damping: 28,
                mass: 0.65,
              }}
              onMouseDown={(event) => event.stopPropagation()}
              className={`relative w-full max-w-[540px] rounded-[10px] border p-5 shadow-[0_30px_100px_rgba(0,0,0,.25)] sm:p-6 ${
                dark
                  ? "border-[#2b2b2b] bg-[#101010]"
                  : "border-[#dedede] bg-white"
              }`}
            >
              <button
                type="button"
                onClick={() => setContactOpen(false)}
                aria-label="Close contact form"
                className={`group absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-[7px] transition-all duration-200 ${
                  dark
                    ? "text-[#777] hover:bg-[#202020] hover:text-white"
                    : "text-[#999] hover:bg-[#f0f0f0] hover:text-[#222]"
                }`}
              >
                <X size={18} />
              </button>

              <div
                className={`border-b pb-4 pr-10 ${
                  dark ? "border-[#242424]" : "border-[#e7e7e7]"
                }`}
              >
                <h3
                  className={`text-[23px] font-bold tracking-[-0.035em] sm:text-[25px] ${
                    dark ? "text-[#f5f5f5]" : "text-[#171717]"
                  }`}
                >
                  Get in Touch
                </h3>

                <p
                  className={`mt-1 text-[12px] leading-6 sm:text-[13px] ${
                    dark ? "text-[#858585]" : "text-[#777]"
                  }`}
                >
                  Have a project or question? Send me a message.
                </p>
              </div>

              <form
                action="https://formspree.io/f/mzezqwnl"
                method="POST"
                className="mt-5 space-y-3"
              >
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className={`h-[44px] w-full rounded-[7px] border px-3 text-[13px] outline-none sm:h-[46px] sm:text-[14px] ${
                      dark
                        ? "border-[#292929] bg-[#171717] text-white placeholder:text-[#686868] focus:border-[#555]"
                        : "border-[#dedede] bg-[#fafafa] text-[#171717] placeholder:text-[#999] focus:border-[#999]"
                    }`}
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className={`h-[44px] w-full rounded-[7px] border px-3 text-[13px] outline-none sm:h-[46px] sm:text-[14px] ${
                      dark
                        ? "border-[#292929] bg-[#171717] text-white placeholder:text-[#686868] focus:border-[#555]"
                        : "border-[#dedede] bg-[#fafafa] text-[#171717] placeholder:text-[#999] focus:border-[#999]"
                    }`}
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className={`h-[44px] w-full rounded-[7px] border px-3 text-[13px] outline-none sm:h-[46px] sm:text-[14px] ${
                    dark
                      ? "border-[#292929] bg-[#171717] text-white placeholder:text-[#686868] focus:border-[#555]"
                      : "border-[#dedede] bg-[#fafafa] text-[#171717] placeholder:text-[#999] focus:border-[#999]"
                  }`}
                />

                <textarea
                  name="message"
                  placeholder="How can I help you?"
                  rows="5"
                  required
                  className={`w-full resize-none rounded-[7px] border px-3 py-3 text-[13px] leading-6 outline-none sm:text-[14px] ${
                    dark
                      ? "border-[#292929] bg-[#171717] text-white placeholder:text-[#686868] focus:border-[#555]"
                      : "border-[#dedede] bg-[#fafafa] text-[#171717] placeholder:text-[#999] focus:border-[#999]"
                  }`}
                />

                <motion.button
                  type="submit"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex h-[45px] w-full items-center justify-center gap-2 rounded-[7px] bg-[#f1f1f1] text-[14px] font-semibold text-[#151515] transition-all hover:bg-white"
                >
                  Send Message
                  <ArrowUpRight size={15} />
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}

        {/* Project Details Modal */}
        {selectedProject && (
          <motion.div
            className={`fixed inset-0 z-[90] flex items-center justify-center px-5 backdrop-blur-[6px] ${
              dark ? "bg-black/80" : "bg-black/25"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onMouseDown={() => setSelectedProject(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedProject.title} details`}
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 380,
                damping: 28,
              }}
              onMouseDown={(event) => event.stopPropagation()}
              className={`relative w-full max-w-[620px] overflow-hidden rounded-[10px] border shadow-[0_30px_100px_rgba(0,0,0,.3)] ${
                dark
                  ? "border-[#2b2b2b] bg-[#101010]"
                  : "border-[#dedede] bg-white"
              }`}
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className={`absolute right-3 top-3 z-10 grid h-8 w-8 place-items-center rounded-full backdrop-blur-md ${
                  dark
                    ? "bg-black/60 text-white hover:bg-black/80"
                    : "bg-white/80 text-black hover:bg-white"
                }`}
              >
                <X size={17} />
              </button>

              <div className="h-[210px] overflow-hidden">
                <ProjectPreview
                  src={selectedProject.image}
                  title={selectedProject.title}
                />
              </div>

              <div className="p-5 sm:p-6">
                <span className="text-[12px] font-semibold text-fuchsia-400">
                  {selectedProject.type}
                </span>

                <h2
                  className={`mt-1 text-[25px] font-bold tracking-[-0.035em] ${
                    dark ? "text-white" : "text-[#171717]"
                  }`}
                >
                  {selectedProject.title}
                </h2>

                <p
                  className={`mt-3 text-[14px] leading-6 sm:text-[15px] ${
                    dark ? "text-[#9a9a9a]" : "text-[#666]"
                  }`}
                >
                  {selectedProject.details}
                </p>

                <div className="mt-5 flex flex-wrap gap-[6px]">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-[6px] px-[8px] py-[5px] text-[10px] font-semibold sm:text-[11px] ${
                        dark
                          ? "bg-[#222] text-[#e5e5e5]"
                          : "bg-[#eeeeee] text-[#333]"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <ProjectAction
                    href={selectedProject.source}
                    type="Source"
                  />
                  <ProjectAction href={selectedProject.live} type="Demo" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>

      <Dock dark={dark} setDark={setDark} />
    </main>
  );
}

export default App;
