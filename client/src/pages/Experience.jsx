import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import resumePdf from "@/assets/files/cv_pdf/Abrar_Khan_Full_Stack_Developer.pdf";
import gladowlLogo from "@/assets/experience/gladowl-logo.png";
import digitalRevolutionLogo from "@/assets/experience/digital-revolution-wordmark.png";
import visulonLogo from "@/assets/experience/visulon-logo.webp";
import transperfectLogo from "@/assets/experience/transperfect-wordmark.png";
import destekLogo from "@/assets/experience/destek-logo.png";

const experiences = [
  {
    id: 1,
    title: "Technical Lead - Senior Full Stack Engineer",
    company: "GladOwl Web Solutions Pvt. Ltd.",
    location: "Pune, India",
    period: "Jul 2023 - Present",
    logo: gladowlLogo,
    certificateUrl: resumePdf,
    actionLabel: "View Resume",
    description: [
      "Lead architecture for enterprise SaaS platforms and reduced backend response times from 800ms to 320ms with Redis caching and query profiling",
      "Manage 12+ production MERN applications serving more than 50,000 daily active users",
      "Automated GitHub Actions and AWS EC2 delivery pipelines, reducing deployment errors by 70%",
    ],
  },
  {
    id: 2,
    title: "Full Stack Developer (MERN)",
    company: "Digital Revolution",
    location: "Pune, India",
    period: "Nov 2022 - Jul 2023",
    logo: digitalRevolutionLogo,
    wideLogo: true,
    darkLogoSurface: true,
    certificateUrl: resumePdf,
    actionLabel: "View Resume",
    description: [
      "Built a modular React and Redux component library adopted across four major projects",
      "Delivered eight MERN applications for EdTech and e-commerce clients with peak-load reliability",
      "Implemented JWT, OAuth 2.0 and role-based access control for secure stakeholder workflows",
    ],
  },
  {
    id: 3,
    title: "Frontend Engineer (React)",
    company: "Visulon",
    location: "Pune, India",
    period: "Jul 2022 - Nov 2022",
    logo: visulonLogo,
    wideLogo: true,
    certificateUrl: resumePdf,
    actionLabel: "View Resume",
    description: [
      "Built responsive React, JavaScript and Tailwind CSS interfaces with strong cross-browser performance",
      "Converted high-fidelity Figma designs into reusable component architectures",
      "Optimized Redux Toolkit state and rendering flows for data-heavy application views",
    ],
  },
  {
    id: 4,
    title: "Software Engineer - Internationalization & Frontend",
    company: "TransPerfect Solutions",
    location: "Pune, India",
    period: "Feb 2022 - Jul 2022",
    logo: transperfectLogo,
    wideLogo: true,
    certificateUrl: resumePdf,
    actionLabel: "View Resume",
    description: [
      "Engineered internationalization architecture and localization workflows for multilingual platforms",
      "Integrated automated string extraction and translation management into CI/CD and Git workflows",
      "Resolved layout shifts, text truncation and UTF-8 encoding issues across localized builds",
    ],
  },
  {
    id: 5,
    title: "Executive Software Developer",
    company: "Destek Infosolutions Pvt. Ltd.",
    location: "Pune, India",
    period: "Apr 2021 - Feb 2022",
    logo: destekLogo,
    certificateUrl: resumePdf,
    actionLabel: "View Resume",
    description: [
      "Developed scalable REST APIs with Node.js, Express and MongoDB for concurrent workloads",
      "Refactored schemas, improved query indexing and removed application performance bottlenecks",
      "Shipped enterprise platform modules in cross-functional Agile and Scrum teams",
    ],
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen pt-16 sm:pt-20 px-4 max-w-5xl mx-auto pb-16 sm:pb-20">
      <ScrollAnimation>
        <h2 className="page-title mb-8 sm:mb-12 flex items-center gap-3">
          <Briefcase className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" />
          Professional Experience
        </h2>
      </ScrollAnimation>

      <div className="space-y-8 sm:space-y-12">
        {experiences.map((exp) => (
          <ScrollAnimation key={exp.id}>
            <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white sm:rounded-2xl">
              <div className="grid grid-cols-1 md:grid-cols-[1fr,300px]">
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <div className={`${exp.wideLogo ? "w-36 h-16" : "w-14 h-14"} p-2 ${exp.darkLogoSurface ? "bg-gray-950" : "bg-white"} rounded-xl flex-shrink-0 flex items-center justify-center`}>
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-slate-500 text-base sm:text-lg">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-slate-600 mb-4 sm:mb-6 text-sm sm:text-base">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                    <span>•</span>
                    <span>{exp.period}</span>
                  </div>

                  <ul className="space-y-3 sm:space-y-4">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-slate-600 text-sm sm:text-base"
                      >
                        <ArrowRight className="w-5 h-5 mt-0.5 text-blue-600 flex-shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.certificateUrl && (
                    <motion.a
                      href={exp.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="md:hidden mt-6 inline-flex items-center gap-2 px-6 py-2.5 !text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-sm font-medium"
                      whileHover={{ scale: 1.02 }}
                    >
                      {exp.actionLabel || "View Details"}
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  )}
                </div>

                <div className="relative hidden md:block min-h-72 bg-slate-50 border-l border-slate-200">
                  <div className="relative h-full flex items-center justify-center">
                    <div className="flex flex-col items-center gap-6">
                      <div className={`w-64 h-32 rounded-xl border border-slate-200 ${exp.darkLogoSurface ? "bg-gray-950" : "bg-white"} p-4 flex items-center justify-center`}>
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      {exp.certificateUrl && (
                        <motion.a
                          href={exp.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-8 py-3 !text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center gap-2 transition-colors"
                          whileHover={{ y: -5 }}
                        >
                          {exp.actionLabel || "View Details"}
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Experience;
