/* eslint-disable react/prop-types */
import adminTree from "@/assets/projects_showcase/admintree.jpeg";
import ecommerceDesktop from "@/assets/projects_showcase/ecommerce-desktop.jpeg";
import ecommerceMobile from "@/assets/projects_showcase/ecommerce-mobile.jpeg";
import evolveDesktop from "@/assets/projects_showcase/evolve-desktop.jpeg";
import evolveMobile from "@/assets/projects_showcase/evolve-mobile.jpeg";
import evolvePune from "@/assets/projects_showcase/evolve-pune.jpeg";
import fintechLaptop from "@/assets/projects_showcase/fintech-laptop.jpeg";
import hygieneFoods from "@/assets/projects_showcase/hygiene-foods.jpeg";
import madhumakshika from "@/assets/projects_showcase/madhumakshika.jpeg";
import razorpay from "@/assets/projects_showcase/razorpay.jpeg";
import skinocare from "@/assets/projects_showcase/skinocare.jpeg";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { CONTACT_INFO } from "@/config/contact";
import { fetcher } from "@/utils/helpers";
import {
  ArrowUpRight,
  Briefcase,
  Code2,
  Github,
  LayoutGrid,
  Loader2,
} from "lucide-react";
import { useRef, useState } from "react";
import useSWR from "swr";

const GITHUB_REPOS_API = `https://api.github.com/users/${CONTACT_INFO.githubUsername}/repos?per_page=100&sort=updated`;
const excludedRepos = new Set([
  "amol-balwadkar",
  "ganesh-kalyankar",
  "test",
  "scaleway",
  "abrar-khan-WD",
  "DYPatil-SYBSC-Guest-Lecturer",
  "abrar-mern",
  "bootstrap-landing-pages",
]);

const clientProjects = [
  {
    title: "AdminTree",
    eyebrow: "SaaS business platform",
    description:
      "A responsive operations dashboard designed to make workforce data, projects and performance signals easy to scan.",
    image: adminTree,
    tags: ["SaaS", "Dashboard", "Responsive UI"],
  },
  {
    title: "Evolve Pune",
    eyebrow: "Educational platform",
    description:
      "A content-rich learning experience spanning web and mobile, with courses, events and community journeys.",
    image: evolvePune,
    tags: ["WordPress", "Mobile Integration", "Education"],
  },
  {
    title: "Hygiene Halal Foods",
    eyebrow: "Food commerce",
    description:
      "A product-led storefront that helps customers move quickly from category discovery to a mobile-friendly cart.",
    image: hygieneFoods,
    tags: ["WooCommerce", "Product UX", "E-commerce"],
  },
  {
    title: "Madhumakshika",
    eyebrow: "D2C e-commerce",
    description:
      "A warm, product-focused shopping experience for a natural honey brand, optimized across desktop and mobile.",
    image: madhumakshika,
    tags: ["WooCommerce", "Catalog", "Payments"],
  },
  {
    title: "Razorpay Clone",
    eyebrow: "Fintech interface",
    description:
      "A responsive recreation of a modern payment platform, focused on strong hierarchy and technical polish.",
    image: razorpay,
    tags: ["Fintech", "Frontend", "Responsive UI"],
  },
  {
    title: "Skinocare",
    eyebrow: "Beauty & wellness clinic",
    description:
      "A calm clinic experience combining service discovery with consultation forms and appointment booking.",
    image: skinocare,
    tags: ["Booking", "Forms", "Responsive UI"],
  },
];

const productStudies = [
  {
    title: "Mobile Commerce",
    eyebrow: "Product UI study",
    description:
      "A focused mobile cart concept balancing clear product information, quantity controls and a direct checkout path.",
    image: ecommerceMobile,
    tags: ["Mobile UX", "E-commerce", "UI Design"],
  },
  {
    title: "Premium Storefront",
    eyebrow: "Responsive commerce",
    description:
      "A desktop shopping concept with a refined visual system and a consistent experience across screen sizes.",
    image: ecommerceDesktop,
    tags: ["Web Design", "Responsive", "Commerce"],
  },
  {
    title: "Fintech Landing Experience",
    eyebrow: "Interface exploration",
    description:
      "A polished payment-product landing page built around confidence, clarity and strong conversion cues.",
    image: fintechLaptop,
    tags: ["Landing Page", "Fintech", "Frontend"],
  },
  {
    title: "Evolve Pune — Mobile",
    eyebrow: "Responsive case study",
    description:
      "A mobile-first view of the education platform, preserving content depth without losing a clear path forward.",
    image: evolveMobile,
    tags: ["Mobile", "Education", "Content UX"],
  },
  {
    title: "Evolve Pune — Desktop",
    eyebrow: "Responsive case study",
    description:
      "The desktop counterpart pairs promotional content with an approachable, editorial reading experience.",
    image: evolveDesktop,
    tags: ["Desktop", "Web Design", "WordPress"],
  },
];

const fallbackRepos = [
  {
    name: "ScribePath",
    html_url: "https://github.com/abrar-mern/ScribePath",
    language: "JavaScript",
    description:
      "An AI workflow platform that turns meeting conversations into actionable project paths.",
  },
  {
    name: "MERN-LMS-Platform",
    html_url: "https://github.com/abrar-mern/MERN-LMS-Platform",
    language: "JavaScript",
    description:
      "A full-stack learning management platform for course and learner workflows.",
  },
  {
    name: "React-Series",
    html_url: "https://github.com/abrar-mern/React-Series",
    language: "JavaScript",
    description:
      "A collection of React projects, patterns and frontend experiments.",
  },
];

const formatRepoName = (name) => name.replaceAll("-", " ").replaceAll("_", " ");

const ProjectCard = ({ project }) => (
  <article className="project-card group">
    <div className="project-visual">
      <img
        src={project.image}
        alt={`${project.title} project preview`}
        loading="lazy"
        className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"
      />
    </div>
    <div className="project-card-body">
      <p className="project-eyebrow">{project.eyebrow}</p>
      <h3>{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  </article>
);

const RepositoryCard = ({ repo }) => {
  const tags = [
    ...new Set([repo.language, ...(repo.topics || [])].filter(Boolean)),
  ].slice(0, 4);
  return (
    <article className="repo-card group">
      <div className="repo-icon">
        <Code2 className="h-5 w-5" />
      </div>
      <p className="project-eyebrow">Open-source repository</p>
      <h3>{formatRepoName(repo.name)}</h3>
      <p className="project-description">
        {repo.description ||
          "Explore the source, implementation details and latest updates in this public repository."}
      </p>
      <div className="project-tags">
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="mt-auto flex items-center gap-5 border-t border-slate-200 pt-4">
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          <Github className="h-4 w-4" /> Source{" "}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
        {repo.homepage && (
          <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
            Live demo <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </article>
  );
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState("Client work");
  const tabRefs = useRef([]);
  const { data, error, isLoading } = useSWR(GITHUB_REPOS_API, fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 300000,
    errorRetryCount: 2,
  });
  const repositories = (data?.length ? data : fallbackRepos)
    .filter(
      (repo) => !repo.fork && !repo.archived && !excludedRepos.has(repo.name),
    )
    .slice(0, 12);
  const groups = [
    {
      title: "Client work",
      icon: Briefcase,
      description:
        "Production work shaped around real businesses, customers and outcomes.",
      items: clientProjects,
      type: "visual",
    },
    {
      title: "Product UI",
      icon: LayoutGrid,
      description:
        "Focused interface explorations across commerce, education and fintech.",
      items: productStudies,
      type: "visual",
    },
    {
      title: "GitHub",
      icon: Github,
      description:
        "Open-source builds, technical experiments and learning resources.",
      items: repositories,
      type: "repo",
    },
  ];
  const activeGroup = groups.find((group) => group.title === activeTab);

  const handleTabKeyDown = (event, index) => {
    let nextIndex;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % groups.length;
    if (event.key === "ArrowLeft")
      nextIndex = (index - 1 + groups.length) % groups.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = groups.length - 1;
    if (nextIndex === undefined) return;
    event.preventDefault();
    setActiveTab(groups[nextIndex].title);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <div className="min-h-screen px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <ScrollAnimation>
          <header className="projects-header">
            <div>
              <span className="section-kicker">Portfolio</span>
              <h1>Work that turns complex ideas into clear products.</h1>
            </div>
            <div className="projects-intro">
              <p>
                A closer look at client platforms, product interfaces and the
                code behind them—from first interaction to production delivery.
              </p>
              <a
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" /> GitHub profile{" "}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </header>
        </ScrollAnimation>

        <div
          className="project-tabs"
          role="tablist"
          aria-label="Project categories"
        >
          {groups.map((group, index) => {
            const Icon = group.icon;
            const isActive = activeTab === group.title;
            return (
              <button
                key={group.title}
                ref={(element) => {
                  tabRefs.current[index] = element;
                }}
                id={`projects-tab-${index}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`projects-panel-${index}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveTab(group.title)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
                className={isActive ? "active" : ""}
              >
                <Icon className="h-4 w-4" />
                {group.title}
                <span>{group.items.length}</span>
              </button>
            );
          })}
        </div>

        <section
          id={`projects-panel-${groups.findIndex((group) => group.title === activeTab)}`}
          role="tabpanel"
          aria-labelledby={`projects-tab-${groups.findIndex((group) => group.title === activeTab)}`}
        >
          <div className="project-section-label">
            <p>{activeGroup.description}</p>
            <span>{activeGroup.items.length} selected projects</span>
          </div>
          {activeTab === "GitHub" && isLoading && !data && (
            <div
              className="mb-6 flex items-center gap-3 text-slate-500"
              role="status"
            >
              <Loader2 className="h-5 w-5 animate-spin" /> Loading the latest
              repositories...
            </div>
          )}
          {activeTab === "GitHub" && error && (
            <p className="mb-6 text-sm text-amber-700">
              GitHub is temporarily unavailable, so featured repositories are
              shown.
            </p>
          )}
          <div
            className={
              activeGroup.type === "repo" ? "repo-grid" : "project-grid"
            }
          >
            {activeGroup.items.map((item) => (
              <ScrollAnimation key={item.title || item.id || item.name}>
                {activeGroup.type === "repo" ? (
                  <RepositoryCard repo={item} />
                ) : (
                  <ProjectCard project={item} />
                )}
              </ScrollAnimation>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
