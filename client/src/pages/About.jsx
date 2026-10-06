import cvPdf from "@/assets/files/cv_pdf/Abrar_Khan_Full_Stack_Developer.pdf";
import profileImg from "@/assets/profile/about-photo.png";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { motion } from "framer-motion";
import { Briefcase, Code2, Globe, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const achievements = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "5+ Years",
    description: "Continuous full-stack engineering experience",
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "50k+ Users",
    description: "Production applications serving daily users",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "12+ Deployments",
    description: "Production MERN applications delivered",
  },
];

const interests = [
  "Web Development",
  "UI/UX Design",
  "Cloud Computing",
  "DevOps",
  "Open Source",
  "Artificial Intelligence",
  "System Architecture",
];

const quickFacts = [
  "Based in Pune, India",
  "Senior Full Stack Developer and Technical Lead",
  "5+ years building MERN and SaaS products",
];

const About = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-4xl mx-auto pb-20">
      <ScrollAnimation>
        <motion.h2 className="page-title mb-8">
          About Me
        </motion.h2>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-8">
        <ScrollAnimation>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-700/40 to-slate-950 p-2 shadow-2xl shadow-black/40">
            <img
              src={profileImg}
              alt="Professional portrait of Abrar Khan"
              width={800}
              height={800}
              className="w-full aspect-square object-cover object-center rounded-2xl"
            />
          </div>
        </ScrollAnimation>

        <ScrollAnimation className="space-y-6">
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Hi! I&apos;m Abrar Khan, a Senior Full Stack Developer and
              Technical Lead with 5+ years of experience building scalable web
              products.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I lead architecture for enterprise MERN and multi-tenant SaaS
              platforms, from reusable React interfaces to secure Node.js APIs,
              optimized MongoDB data models and cloud deployments.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My recent work includes AI-assisted applications, Redis-backed
              performance optimization, AWS infrastructure, Docker and CI/CD. I
              also share practical MERN knowledge as a guest lecturer and
              external examiner.
            </p>
          </div>

          <div className="pt-4">
            <h3 className="section-title mb-4">
              Quick Facts
            </h3>
            <ul className="list-none space-y-3">
              {quickFacts.map((fact) => (
                <motion.li
                  key={fact}
                  className="flex items-center space-x-2 text-gray-300"
                >
                  <span className="w-2 h-2 bg-white rounded-full" />
                  <span>{fact}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="flex justify-start space-x-4">
            <a
              href={cvPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Download Resume
            </a>
            <Link
              to="/skills"
              className="px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors"
            >
              My Skills
            </Link>
          </div>
        </ScrollAnimation>
      </div>

      <ScrollAnimation>
        <div className="mt-16">
          <h3 className="section-title mb-8">
            Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement) => (
              <div
                key={achievement.title}
                className="bg-white/5 p-6 rounded-xl backdrop-blur-sm"
              >
                <div className="text-white mb-4">{achievement.icon}</div>
                <h4 className="text-xl font-semibold mb-2">
                  {achievement.title}
                </h4>
                <p className="text-gray-400">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="mt-16">
          <h3 className="section-title mb-8">
            Areas of Interest
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {interests.map((interest) => (
              <div
                key={interest}
                className="bg-white/5 p-4 rounded-xl backdrop-blur-sm flex items-center gap-3"
              >
                <Globe className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">{interest}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default About;
