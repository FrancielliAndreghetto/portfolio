import CardSkills from "./cardSkills";
import NavBar from "./navBar";
import React, { useEffect, useState } from "react";
import ParticleBackground from "./particlesBackground";
import { motion } from "motion/react";
import CardList from "./cardList";
import Modal from "./modal";

const App = () => {

  const text = "Olá, meu nome é Francielli Andreghetto";
  const numSteps = text.length; // Número de caracteres do texto
  const [selectedProject, setSelectedProject] = useState<{
    id: string;
    title: string;
    img: string;
    description: string;
  } | null>(null);

  return (
    <div>
      <ParticleBackground />
      <div className="relative z-10"> 

      <section className="flex items-center justify-center h-screen p-8">
        <div>
          <div className="flex justify-center items-center w-full">
            <div className=" flex flex-col gap-3">
              <h1 className="text-white font-bold text-4xl typing-effect" style={{ animation: `typing 4s steps(${numSteps}) 1s 1 normal both, blink 0.75s step-end infinite`}}>
                {text}
              </h1>
              <p className="text-white font-semibold text-center">Desenvolvedora Full Stack</p>
            
            </div>
            {/* <div className="relative w-[450px] h-[450px] flex justify-center items-center">
              <img
                width="450"
                src="../public/assets/Gradient.png"
                alt="Gradient"
                className="absolute w-[480px] h-auto object-contain"
              />
              <img
                width="450"
                src="../public/assets/Coding-cuate.svg"
                alt="My Icon"
                className="absolute mt-2 w-[400px] h-auto object-contain"
              />
            </div> */}
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center h-screen p-8">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-white font-bold text-3xl">My skills</h1>
          <div className="grid grid-cols-6 items-center justify-center gap-4 mt-5">
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
      <section className="h-screen p-8">
        <div>
          <h1 className="text-white text-center font-bold text-3xl">Meus projetos</h1>
          <div className="p-10">
            <CardList setSelectedProject={setSelectedProject} />
            <Modal selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
          </div>
        </div>
      </section>
      {/* <section>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-white font-bold text-3xl">My skills</h1>
          <div className="grid grid-cols-6 items-center justify-center gap-4 mt-5">
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
      </section> */}
      </div>
    </div>
  );
};

export default App;
