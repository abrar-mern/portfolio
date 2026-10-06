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
          <Award className="w-8 h-8" />
          <h2 className="text-4xl font-bold gradient-text">Certificates</h2>
        </motion.div>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-6">
        {certificates.map((cert) => (
          <ScrollAnimation key={cert.id}>
            <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all group border border-white/5 h-full flex flex-col">
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <div className="text-gray-400 space-y-2 flex flex-col flex-grow">
                <div className="flex items-center justify-between">
                  <span className="text-lg">{cert.issuer}</span>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                </div>
                <p className="text-gray-300 line-clamp-2">{cert.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-sm bg-white/10 rounded-full"
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
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 group-hover:translate-x-2 transition-transform"
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
