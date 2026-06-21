import { FaJava, FaDocker, FaGithub, FaReact } from "react-icons/fa";
import {
  SiSpringboot,
  SiApachekafka,
  SiRedis,
  SiKubernetes,
  SiMysql,
  SiPython,
  SiJavascript,
} from "react-icons/si";

import "../styles/About.css";

function About() {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-left">
          <h2>
            About <span className="accent">Me</span>
          </h2>
          <p>
            I'm Aditya, a final-year B.Tech CSE student at RAIT, Mumbai with an
            8.88 CGPA. I build scalable backend systems that solve real
            problems.
          </p>
          <p>
            My core focus is distributed systems event-driven architecture,
            microservices, and high-throughput data pipelines using Java, Spring
            Boot, Kafka, and Redis.
          </p>
          <p>
            I'm actively targeting SDE-1 roles at product-based companies where
            I can work on systems that scale to millions of users.
          </p>

          <div className="about-links">
            <a href="#contact" className="btn">
              Get In Touch
            </a>
          </div>
        </div>
        <div className="about-right">
          <h2>
            Tech <span className="accent">Stack</span>
          </h2>
          <div className="icons-grid">
            <div className="icon-item">
              <FaJava />
              <span>Java</span>
            </div>
            <div className="icon-item">
              <SiSpringboot />
              <span>Spring Boot</span>
            </div>
            <div className="icon-item">
              <SiApachekafka />
              <span>Kafka</span>
            </div>
            <div className="icon-item">
              <SiRedis />
              <span>Redis</span>
            </div>
            <div className="icon-item">
              <FaDocker />
              <span>Docker</span>
            </div>
            <div className="icon-item">
              <SiMysql />
              <span>MySQL</span>
            </div>
            <div className="icon-item">
              <SiPython />
              <span>Python</span>
            </div>
            <div className="icon-item">
              <FaGithub />
              <span>GitHub</span>
            </div>
            <div className="icon-item">
              <FaReact />
              <span>React</span>
            </div>
            <div className="icon-item">
              <SiJavascript />
              <span>JavaScript</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
