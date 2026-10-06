import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  MapPin,
  BookOpen,
  FileText,
} from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import collegeImg from "@/assets/education/scoe.webp";
import puneUniversityImg from "@/assets/education/pune-university.jpg";

const educationData = [
  {
    id: 1,
    school: "Sinhagad College of Engineering",
    location: "Pune, India",
    duration: "2019 - 2022",
    degree: "Master of Computer Applications (MCA)",
    image: collegeImg,
    coursework: [
      "Web Development",
      "Software Engineering",
      "Project Management",
      "Data & Systems Architecture",
    ],
    description:
      "Advanced computer science and application development studies focused on software engineering, scalable systems and practical product delivery.",
  },
  {
    id: 2,
    school: "Pune University",
    location: "Pune, India",
    duration: "2016 - 2019",
    degree: "Bachelor of Computer Applications (BCA)",
    image: puneUniversityImg,

    coursework: [
      "Programming Fundamentals",
      "Database Management",
      "Computer Networks",
      "Web Technologies",
    ],
    description:
      "Built a strong foundation in programming, databases, networking and application development before moving into professional full-stack engineering.",
  },
];

const Education = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <motion.div
          className="flex items-center gap-3 mb-12"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <GraduationCap className="w-8 h-8 text-blue-600" />
          <h2 className="page-title">Education</h2>
        </motion.div>
      </ScrollAnimation>

      <div className="space-y-12">
        {educationData.map((edu) => (
          <ScrollAnimation key={edu.id}>
            <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white">
              <div className="absolute right-0 top-0 z-10 flex items-center gap-2 rounded-bl-xl border-b border-l border-slate-200 bg-white px-4 py-2">
                <Calendar className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-slate-700">{edu.duration}</span>
              </div>

              <div className="grid md:grid-cols-[350px,1fr]">
                <div className="relative h-96 md:h-full">
                  <img
                    src={edu.image}
                    alt={`${edu.school} campus building`}
                    loading="lazy"
                    width={350}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 !text-white">{edu.school}</h3>
                      <div className="flex items-center gap-2 !text-white mb-1">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                  {edu.photoCredit && (
                    <div className="absolute left-3 top-14 text-[11px] text-white bg-black/70 rounded-md px-2 py-1">
                      Photo: <a href="https://commons.wikimedia.org/wiki/File:Savitribai_Phule_University_Main_Building.jpg" target="_blank" rel="noopener noreferrer" className="underline">Komal Sambhudas</a>
                      {" · "}
                      <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer" className="underline">CC BY-SA 4.0</a>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    <h4 className="text-lg font-semibold text-slate-900">{edu.degree}</h4>
                  </div>

                  <div className="flex items-start gap-2 text-slate-600 mb-6">
                    <FileText className="w-5 h-5 mt-1 flex-shrink-0" />
                    <p className="text-sm leading-relaxed">{edu.description}</p>
                  </div>

                  {edu.coursework && (
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course) => (
                          <span
                            key={course}
                            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {edu.subjects && (
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {edu.subjects.map((subject) => (
                          <span
                            key={subject}
                            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Education;
