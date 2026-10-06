import { ScrollAnimation } from "@/components/ScrollAnimation";
import { CONTACT_INFO } from "@/config/contact";
import { fetcher } from "@/utils/helpers";
import { ExternalLink, Github, Loader2 } from "lucide-react";
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
const seriesRepos = new Set([
  "React-Series",
  "Node-Series",
  "HTML-Series",
  "JS-Codegyaani-Series",
  "mern-interview-prep",
]);

const featuredDetails = {
  ScribePath: {
    description:
      "An AI workflow platform that turns meeting conversations into actionable project paths using language models and graph logic.",
    tags: ["React", "Node.js", "AI", "Graph Algorithms"],
  },
  "MERN-LMS-Platform": {
    description:
      "A full-stack learning management platform built around the MERN stack for course and learner workflows.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
  },
  "mern-interview-prep": {
    description:
      "A practical MERN interview preparation resource with JavaScript examples and full-stack engineering material.",
    tags: ["MERN", "JavaScript", "Interview Prep"],
  },
  "Node-Series": {
    description:
      "Node.js learning projects including a deployed authentication application and backend implementation examples.",
    tags: ["Node.js", "Express", "Authentication", "JavaScript"],
  },
  "React-Series": {
    description:
      "A collection of React projects and patterns with a live deployment for hands-on frontend learning.",
    tags: ["React", "JavaScript", "Frontend"],
  },
};

const fallbackRepos = [
  {
    name: "ScribePath",
    html_url: "https://github.com/abrar-mern/ScribePath",
    homepage: "",
    language: "JavaScript",
    description: featuredDetails.ScribePath.description,
    fork: false,
    archived: false,
    pushed_at: "2026-05-12T08:06:32Z",
  },
  {
    name: "MERN-LMS-Platform",
    html_url: "https://github.com/abrar-mern/MERN-LMS-Platform",
    homepage: "",
    language: "JavaScript",
    description: featuredDetails["MERN-LMS-Platform"].description,
    fork: false,
    archived: false,
    pushed_at: "2026-05-05T18:55:04Z",
  },
  {
    name: "Node-Series",
    html_url: "https://github.com/abrar-mern/Node-Series",
    homepage: "https://authentication-virid-omega.vercel.app",
    language: "JavaScript",
    description: featuredDetails["Node-Series"].description,
    fork: false,
    archived: false,
    pushed_at: "2025-09-04T12:45:17Z",
  },
  {
    name: "React-Series",
    html_url: "https://github.com/abrar-mern/React-Series",
    homepage: "https://react-series-sooty.vercel.app",
    language: "JavaScript",
    description: featuredDetails["React-Series"].description,
    fork: false,
    archived: false,
    pushed_at: "2025-07-08T09:08:12Z",
  },
];

const getRepoTags = (repo) => {
  const customTags = featuredDetails[repo.name]?.tags || [];
  const tags = [repo.language, ...customTags, ...(repo.topics || [])].filter(
    Boolean,
  );
  return [...new Set(tags)].slice(0, 6);
};

const formatRepoName = (name) => name.replaceAll("-", " ").replaceAll("_", " ");

const Projects = () => {
  const [activeTab, setActiveTab] = useState("Projects");
  const tabRefs = useRef([]);
  const { data, error, isLoading } = useSWR(GITHUB_REPOS_API, fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 300000,
    errorRetryCount: 2,
  });

  const repositories = (data?.length ? data : fallbackRepos)
    .filter((repo) => !repo.fork && !repo.archived && !excludedRepos.has(repo.name))
    .sort((a, b) => {
      const aFeatured = featuredDetails[a.name] ? 1 : 0;
      const bFeatured = featuredDetails[b.name] ? 1 : 0;
      return (
        bFeatured - aFeatured ||
        new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
      );
    });
  const projectGroups = [
    {
      title: "Projects",
      description: "Applications, client work and experiments built for real use.",
      repositories: repositories.filter((repo) => !seriesRepos.has(repo.name)),
    },
    {
      title: "Learning Series",
      description: "Code collections and resources for learning full-stack development.",
      repositories: repositories.filter((repo) => seriesRepos.has(repo.name)),
    },
  ];
  const activeGroup = projectGroups.find((group) => group.title === activeTab);

  const handleTabKeyDown = (event, index) => {
    let nextIndex;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % projectGroups.length;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + projectGroups.length) % projectGroups.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = projectGroups.length - 1;
    if (nextIndex === undefined) return;
    event.preventDefault();
    setActiveTab(projectGroups[nextIndex].title);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <div className="min-h-screen pt-20 px-4 max-w-7xl mx-auto pb-20">
      <ScrollAnimation>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-4xl font-bold mb-3 gradient-text">
              GitHub Projects
            </h2>
            <p className="text-gray-400 max-w-2xl">
              Explore my applications and learning series. Choose a tab to
              switch between them.
            </p>
          </div>
          <a
            href={CONTACT_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
            View GitHub profile
          </a>
        </div>
      </ScrollAnimation>

      {isLoading && !data && (
        <div
          className="flex items-center gap-3 text-gray-400 mb-6"
          role="status"
        >
          <Loader2 className="w-5 h-5 animate-spin" />
          Loading the latest repositories...
        </div>
      )}

      {error && (
        <p className="text-sm text-amber-300/90 mb-6">
          GitHub is temporarily unavailable, so cached featured repositories are
          shown.
        </p>
      )}

      <div role="tablist" aria-label="Project categories" className="flex flex-wrap gap-2 mb-8 border-b border-white/10 pb-3">
        {projectGroups.map((group, index) => (
          <button
            key={group.title}
            ref={(element) => { tabRefs.current[index] = element; }}
            id={`projects-tab-${index}`}
            type="button"
            role="tab"
            aria-selected={activeTab === group.title}
            aria-controls={`projects-panel-${index}`}
            tabIndex={activeTab === group.title ? 0 : -1}
            onClick={() => setActiveTab(group.title)}
            onKeyDown={(event) => handleTabKeyDown(event, index)}
            className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeTab === group.title ? "bg-white text-black" : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"}`}
          >
            {group.title}
            <span className="ml-2 opacity-60">{group.repositories.length}</span>
          </button>
        ))}
      </div>

      <section
        id={`projects-panel-${projectGroups.findIndex((group) => group.title === activeTab)}`}
        role="tabpanel"
        aria-labelledby={`projects-tab-${projectGroups.findIndex((group) => group.title === activeTab)}`}
        className="mb-16"
      >
          <p className="text-gray-400 mb-6">{activeGroup.description}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeGroup.repositories.map((repo) => {
          const details = featuredDetails[repo.name];
          const tags = getRepoTags(repo);

          return (
            <ScrollAnimation key={repo.id || repo.name}>
              <article className="group bg-gray-900/70 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm h-full flex flex-col hover:border-white/20 hover:bg-gray-900/90 transition-all">
                <div className="relative h-44 overflow-hidden bg-gradient-to-br from-gray-800 via-gray-950 to-black">
                  <div className="absolute inset-0 gradient-grid opacity-70" />
                  <div className="relative h-full p-6 flex flex-col justify-between">
                    <Github className="w-8 h-8 text-gray-300" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">
                        {details ? "Featured repository" : "Public repository"}
                      </p>
                      <h3 className="text-2xl font-semibold capitalize leading-tight">
                        {formatRepoName(repo.name)}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-gray-400 mb-5 flex-grow leading-relaxed">
                    {details?.description ||
                      repo.description ||
                      "Explore the source code, implementation details and latest updates in this public repository."}
                  </p>

                  {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-5">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs bg-white/10 text-gray-300 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-5 border-t border-white/10 pt-4">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Source
                    </a>
                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </ScrollAnimation>
          );
        })}
          </div>
      </section>
    </div>
  );
};

export default Projects;
