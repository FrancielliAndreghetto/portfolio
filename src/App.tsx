import CardSkills from "./cardSkills";
import { useEffect, useState } from "react";
import ParticleBackground from "./particlesBackground";
import ProjectCard from "./cardList";
import projectsData from "./projetos.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import AOS from "aos";
import "aos/dist/aos.css";

type Project = {
  title: string;
  description: string;
  images: string[];
  githubLink: string;
  demoLink: string;
  icons: string[];
};

const App = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProjects(projectsData);
    setLoading(false);
    AOS.init({ duration: 1500, once: true });
  }, []);

  const text = "Olá, meu nome é Francielli Andreghetto";
  const numSteps = text.length;
  const [selectedProject, setSelectedProject] = useState<{
    id: string;
    title: string;
    img: string;
    description: string;
    icons: string;
  } | null>(null);

  return (
    <div>
      <ParticleBackground />
      <div className="relative z-10">

        <section className="flex items-center justify-center min-h-screen p-4 sm:p-8" data-aos="fade-down">
          <div className="w-full flex flex-col items-center justify-center">
            <div className="flex justify-center items-center w-full">
              <div className="flex flex-col gap-3 items-center justify-center align-center">
                <h1
                  className="text-white text-center font-bold sm:text-xl md:text-2xl lg:text-3xl typing-effect"
                  style={{
                    animation: `typing 4s steps(${numSteps}) 1s 1 normal both, blink 0.75s step-end infinite`,
                  }}
                >
                  {text}
                </h1>
                <p className="text-white font-semibold text-center flex items-center gap-2">
                  Desenvolvedora Full Stack
                </p>

                <div className="flex gap-4 ">
                  <a
                    href="https://www.linkedin.com/in/francielli-a-9326b61b2/"
                    target="_blank"
                    rel="noopener noreferrer"
                      className="transition-transform duration-300 ease-in-out hover:scale-110"
                  >
                    <FontAwesomeIcon icon={faLinkedin} style={{ color: "#8f15a8", width: "32px", height: "32px" }} />
                  </a>
                  <a
                    href="https://github.com/FrancielliAndreghetto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-300 ease-in-out hover:scale-110"
                  >
                    <FontAwesomeIcon icon={faGithub} style={{ color: "#8f15a8", width: "32px", height: "32px" }} />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="flex items-center justify-center h-screen px-4 py-8" data-aos="fade-down">
          <div className="max-w-3xl text-center">
            <h1 className="text-white font-bold text-3xl sm:text-4xl mb-8">Sobre mim</h1>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              Sou Francielli Andreghetto, desenvolvedora full-stack com uma paixão especial pelo front-end. Estou no 6º semestre
              de Ciência da Computação e atualmente atuo em uma empresa de educação, onde transformo ideias em soluções digitais que
              realmente fazem a diferença no dia a dia das pessoas.
              <br /><br />
              Gosto de criar interfaces que unam estética, funcionalidade e acessibilidade. Me inspiro em boas experiências de uso
              e estou sempre em busca de aprender algo novo — seja uma tecnologia, uma abordagem de design ou uma forma mais eficiente
              de resolver problemas.
              <br /><br />
              Fora do código, sou curiosa, determinada e movida pelo desafio de entregar valor com propósito.
            </p>
          </div>
        </section>

        <section className="py-20 px-4 text-zinc-100" data-aos="fade-down">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center">Experiências</h2>
            <div className="border-l-2 border-purple-600 pl-6 space-y-12">
              <div className="relative">
                <span className="absolute -left-3 top-1 w-5 h-5 bg-purple-600 rounded-full"></span>
                <h3 className="text-lg sm:text-xl font-semibold ml-5">Desenvolvedora Full-Stack – Diário Escola</h3>
                <span className="text-sm text-zinc-400">Nov/2023 - Atual</span>
                <p className="mt-2 text-zinc-300 text-sm sm:text-base">
                Faço parte da equipe responsável por implementar novas funcionalidades utilizando SAPUI5, contribuindo para soluções eficientes e escaláveis. Paralelamente, atuo no time focado na evolução das interfaces, participando de um projeto estratégico que visa reformular o layout do aplicativo dos pais. Nesse projeto, aplico princípios de UX/UI, elaboro protótipos no Figma e atualizo o código das páginas para tornar a experiência mais moderna, intuitiva e acessível.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex items-center justify-center min-h-screen p-4 sm:p-8" data-aos="fade-down">
          <div className="flex flex-col items-center justify-center w-full">
            <h1 className="text-white font-bold text-2xl sm:text-3xl text-center">Minhas habilidades</h1>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 mt-5 w-full max-w-6xl">
              <CardSkills
                imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                titleLanguage="HTML"
              />
              <CardSkills
                imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                titleLanguage="CSS"
              />
              <CardSkills
                imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                titleLanguage="JavaScript"
              />
              <CardSkills
                imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                titleLanguage="React"
              />
              <CardSkills
                imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
                titleLanguage="BootStrap"
              />
              <CardSkills
                imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                titleLanguage="TailwindCSS"
              />
              <CardSkills
                imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
                titleLanguage="MySQL"
              />
              <CardSkills
                imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                titleLanguage="TypeScript"
              />
              <CardSkills
                imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
                titleLanguage="NodeJS"
              />
              <CardSkills
                imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                titleLanguage="Python"
              />
              <CardSkills
                imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
                titleLanguage="PHP"
              />
              <CardSkills
                imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
                titleLanguage="Laravel"
              />
            </div>
          </div>
        </section>

        <section className="h-screen p-8" data-aos="fade-down">
          <div>
            <h1 className="text-white text-center font-bold text-2xl sm:text-3xl">Meus projetos</h1>
            <div className="grid gap-6 mt-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  images={project.images}
                  title={project.title}
                  description={project.description}
                  githubLink={project.githubLink}
                  demoLink={project.demoLink}
                  icons={project.icons}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 text-zinc-100 mt-10" data-aos="fade-down">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center">Contato</h2>
            <div className="grid grid-cols-1 gap-5 items-center justify-center sm:grid-cols-1 md:grid-cols-3 mt-5">
              <div className="flex flex-col items-center justify-center gap-3">
                <FontAwesomeIcon icon={faLocationDot} style={{ color: "#8f15a8", width: "32px", height: "32px" }}/>
                <h1 className="text-xl font-bold text-[#711d81]">Localização</h1>
                <p className="text-lg">Canoas - RS</p>   
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <FontAwesomeIcon icon={faEnvelope} style={{ color: "#8f15a8", width: "32px", height: "32px" }}/>
                <h1 className="text-xl font-bold text-[#711d81]">Envie um e-mail</h1>
                <a className="text-lg" href="mailto:francielli.contato@gmail.com">francielli.contato@gmail.com</a>   
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <FontAwesomeIcon icon={faPhone} style={{ color: "#8f15a8", width: "32px", height: "32px" }}/>
                <h1 className="text-xl font-bold text-[#711d81]">Chamada ou Whatsapp</h1>
                <a className="text-lg" href="tel:+5551983186148"> (51) 98318-6148 </a>   
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default App;
