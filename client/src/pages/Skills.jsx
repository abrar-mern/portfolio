import {
  Code2,
  Layout,
  Server,
  Database,
  Cloud,
  Terminal,
  Wrench,
  Users,
  Brain,
  MessageSquare,
  GitBranch,
} from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import {
  JavaScriptLogo,
  ReactLogo,
  TypeScriptLogo,
  NodeLogo,
  MongoDBLogo,
  VSCodeLogo,
  GitLogo,
  TailwindLogo,
  NextjsLogo,
  VercelLogo,
  PythonLogo,
  ReduxLogo,
  ExpressLogo,
  BcryptLogo,
  JWTLogo,
  AWSLogo,
  RenderLogo,
  PostmanLogo,
  BashLogo,
  WindowsLogo,
  UbuntuLogo,
  LinuxLogo,
} from "@/components/TechLogos";

const skills = [
  {
    category: "Programming Languages",
    icon: <Code2 className="w-6 h-6" />,
    items: [
      { name: "JavaScript", icon: <JavaScriptLogo /> },
      { name: "TypeScript", icon: <TypeScriptLogo /> },
      { name: "Python", icon: <PythonLogo /> },
      { name: "Bash", icon: <BashLogo /> },
    ],
  },
  {
    category: "Front-End Development",
    icon: <Layout className="w-6 h-6" />,
    items: [
      { name: "React.js", icon: <ReactLogo /> },
      { name: "Next.js", icon: <NextjsLogo /> },
      { name: "Tailwind", icon: <TailwindLogo /> },
      { name: "Redux", icon: <ReduxLogo /> },
    ],
  },
  {
    category: "Back-End Development",
    icon: <Server className="w-6 h-6" />,
    items: [
      { name: "Node.js", icon: <NodeLogo /> },
      { name: "Express", icon: <ExpressLogo /> },
      { name: "GraphQL", icon: <Code2 className="w-4 h-4" /> },
      { name: "WebSockets", icon: <Server className="w-4 h-4" /> },
      { name: "JWT", icon: <JWTLogo /> },
      { name: "OAuth 2.0", icon: <BcryptLogo /> },
    ],
  },
  {
    category: "Databases & Cloud",
    icon: <Database className="w-6 h-6" />,
    items: [
      { name: "MongoDB", icon: <MongoDBLogo /> },
      { name: "MySQL", icon: <Database className="w-4 h-4" /> },
      { name: "Redis", icon: <Database className="w-4 h-4" /> },
      { name: "AWS", icon: <AWSLogo /> },
    ],
  },
  {
    category: "Version Control & DevOps",
    icon: <GitBranch className="w-6 h-6" />,
    items: [
      { name: "Git", icon: <GitLogo /> },
      { name: "GitHub", icon: <GitLogo /> },
      { name: "GitHub Actions", icon: <GitBranch className="w-4 h-4" /> },
      { name: "Docker", icon: <Cloud className="w-4 h-4" /> },
      { name: "Nginx", icon: <Server className="w-4 h-4" /> },
      { name: "CI/CD", icon: <Terminal className="w-4 h-4" /> },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: <Wrench className="w-6 h-6" />,
    items: [
      { name: "VS Code", icon: <VSCodeLogo /> },
      { name: "Compass", icon: <MongoDBLogo /> },
      { name: "Postman", icon: <PostmanLogo /> },
      { name: "Vercel", icon: <VercelLogo /> },
      { name: "Render", icon: <RenderLogo /> },
    ],
  },
  {
    category: "Operating Systems",
    icon: <Terminal className="w-6 h-6" />,
    items: [
      { name: "Windows", icon: <WindowsLogo /> },
      { name: "Ubuntu", icon: <UbuntuLogo /> },
      { name: "Linux", icon: <LinuxLogo /> },
    ],
  },
  {
    category: "Soft Skills",
    icon: <Brain className="w-6 h-6" />,
    items: [
      { name: "Teamwork", icon: <Users className="w-4 h-4" /> },
      { name: "Communication", icon: <MessageSquare className="w-4 h-4" /> },
      { name: "Debugging", icon: <Wrench className="w-4 h-4" /> },
      { name: "Mentoring", icon: <Users className="w-4 h-4" /> },
    ],
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <h2 className="page-title mb-4">
          Technical Skills
        </h2>
      </ScrollAnimation>

      <ScrollAnimation>
        <p className="text-slate-600 mb-12 max-w-2xl">
          A comprehensive overview of my technical expertise and tools I work
          with
        </p>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skillGroup) => (
          <ScrollAnimation key={skillGroup.category}>
            <div className="h-full rounded-xl border border-slate-200 bg-white p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
                  {skillGroup.icon}
                </div>
                <h3 className="text-lg font-semibold">{skillGroup.category}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {skillGroup.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 transition-colors hover:border-blue-200 hover:bg-blue-50 group"
                  >
                    <div className="text-slate-500 group-hover:text-blue-600 transition-colors">
                      {skill.icon}
                    </div>
                    <span className="text-slate-600 group-hover:text-blue-700 transition-colors text-sm">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Skills;
