import mernCertificate from "@/assets/files/certificates_pdf/mern-certificate.jpg";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "GitHub Copilot Certification",
    issuer: "Microsoft / Simplilearn",
    date: "2025",
    description:
      "Professional certification covering AI-assisted development workflows and GitHub Copilot practices.",
    skills: ["GitHub Copilot", "AI-Driven SDLC", "Prompt Engineering"],
  },
  {
    id: 2,
    title: "Web Development Bootcamp (MERN)",
    issuer: "Code Help / Love Babbar",
    date: "2026",
    link: mernCertificate,
    description:
      "Six-month comprehensive web development bootcamp, completed in 2025 and issued in April 2026.",
    skills: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    id: 3,
    title: "AWS S3",
    issuer: "Coursera",
    date: "Certificate",
    link: "https://www.coursera.org/account/accomplishments/verify/WUMH0TZLE8GY",
    description:
      "Cloud storage certification covering Amazon S3 fundamentals and practical AWS workflows.",
    skills: ["AWS", "Amazon S3", "Cloud Infrastructure"],
  },
  {
    id: 4,
    title: "Git Certification",
    issuer: "Great Learning",
    date: "Certificate",
    link: "https://www.mygreatlearning.com/certificate/MSKXTGOP",
    description: "Version control and collaborative development with Git.",
    skills: ["Git", "Version Control", "Collaboration"],
  },
];

const Certificates = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <motion.div
          className="flex items-center gap-3 mb-12"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Award className="w-8 h-8 text-blue-600" />
          <h2 className="page-title">Certificates</h2>
        </motion.div>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-6">
        {certificates.map((cert) => (
          <ScrollAnimation key={cert.id}>
            <div className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="mb-2 text-xl font-semibold text-slate-900">{cert.title}</h3>
              <div className="flex flex-grow flex-col space-y-2 text-slate-500">
                <div className="flex items-center justify-between">
                  <span className="text-lg text-slate-700">{cert.issuer}</span>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span>{cert.date}</span>
                  </div>
                </div>
                <p className="line-clamp-2 text-slate-600">{cert.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-sm text-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                {cert.link && (
                  <div className="mt-auto pt-4">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-medium text-blue-600 transition-colors hover:text-blue-800"
                    >
                      View Certificate
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
