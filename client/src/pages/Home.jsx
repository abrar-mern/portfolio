import cvPdf from "@/assets/files/cv_pdf/Abrar_Khan_Full_Stack_Developer.pdf";
import profileImg from "@/assets/profile/profile-photo.jpg";
import { motion } from "framer-motion";
import { ArrowUpRight, FileDown, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-shell">
      <div className="home-grid">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-kicker">
            Senior Full Stack Developer · Technical Lead
          </span>

          <h1 className="home-title">
            I build digital products that help businesses <span>grow.</span>
          </h1>

          <p className="home-copy">
            From early ideas to reliable platforms, I create fast, practical
            products that are ready to scale.
          </p>

          <div className="home-actions">
            <Link to="/projects" className="primary">
              View My Work
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link to="/contact" className="secondary">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Let&apos;s Talk
            </Link>
            <a
              href={cvPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="tertiary"
            >
              <FileDown className="h-4 w-4" aria-hidden="true" />
              Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          className="portrait-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="portrait-card">
            <img
              src={profileImg}
              alt="Abrar Khan, senior full stack developer"
              width="900"
              height="1125"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
