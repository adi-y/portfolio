import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import "../styles/Home.css";

function Home() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section id="home">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "#0f0f0f" } },
          particles: {
            number: { value: 80 },
            color: { value: "#ff6b6b" },
            links: {
              enable: true,
              color: "#ff6b6b",
              opacity: 0.2,
            },
            move: { enable: true, speed: 1 },
            opacity: { value: 0.3 },
            size: { value: 2 },
          },
        }}
      />
      <div className="hero-content">
        <h1>
          Hello, I'm <span className="accent">Aditya</span>
        </h1>
        <p>Backend Engineer | Java & Spring Boot | Distributed Systems</p>
        <a href="#about" className="btn">
          View my work ↓
        </a>
      </div>
    </section>
  );
}

export default Home;
