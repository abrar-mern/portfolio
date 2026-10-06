import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_SITE_URL || "http://localhost:5173";

const PAGE_META = {
  "/": {
    title: "Abrar Khan - Senior Full Stack Developer | MERN Stack",
    description:
      "Abrar Khan is a Senior Full Stack Developer and Technical Lead building scalable MERN, SaaS and AI-powered applications.",
  },
  "/about": {
    title: "About - Abrar Khan | Full Stack Developer",
    description:
      "Learn about Abrar Khan, a Senior Full Stack Developer with 5+ years of experience across MERN, SaaS, AWS and AI-powered products.",
  },
  "/projects": {
    title: "Projects - Abrar Khan | Full Stack Developer Portfolio",
    description:
      "Explore full-stack web projects built by Abrar Khan using React.js, Node.js, Express and MongoDB.",
  },
  "/skills": {
    title: "Skills - Abrar Khan | React, Node.js, MERN Stack",
    description:
      "Technical skills of Abrar Khan, including React.js, Node.js, Express, MongoDB and full-stack web development.",
  },
  "/experience": {
    title: "Experience - Abrar Khan | Full Stack Developer",
    description:
      "Professional experience and development background of Abrar Khan.",
  },
  "/education": {
    title: "Education - Abrar Khan | Full Stack Developer",
    description:
      "Educational background and technical learning path of Abrar Khan.",
  },
  "/certificates": {
    title: "Certificates - Abrar Khan | Developer Certifications",
    description:
      "Professional certifications and achievements of Abrar Khan in web development and related technologies.",
  },
  "/contact": {
    title: "Contact - Abrar Khan | Hire a Full Stack Developer",
    description:
      "Get in touch with Abrar Khan for freelance projects, job opportunities or collaborations.",
  },
};

const FALLBACK_META = {
  title: "Abrar Khan - Full Stack Developer",
  description:
    "Portfolio of Abrar Khan, Full Stack Developer specializing in MERN stack.",
};

export const useSEO = () => {
  const location = useLocation();

  useEffect(() => {
    const meta = PAGE_META[location.pathname] ?? FALLBACK_META;
    const url = `${BASE_URL}${location.pathname}`;

    document.title = meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", meta.description);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", meta.title);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", meta.description);
    document
      .querySelector('meta[property="og:url"]')
      ?.setAttribute("content", url);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", url);
  }, [location.pathname]);
};
