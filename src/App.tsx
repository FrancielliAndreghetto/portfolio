import CardSkills from "./cardSkills";
import NavBar from "./navBar";
import React, { useEffect, useState } from "react";

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollProgress = Math.min(scrollPosition / 300, 1); // Controla o progresso do scroll

  // Gradiente do background com a transição suave
  const gradientStyle = {
    background: `linear-gradient(to bottom, rgba(23, 3, 26, 1), rgba(72, 9, 83, ${scrollProgress}), rgba(112, 14, 129, ${scrollProgress}))`,
    minHeight: "100vh", // Garante que a página tenha altura total
    transition: "background 0.3s ease", // Suaviza a transição de cores
  };

  return (
    <div style={gradientStyle}>
      <NavBar />
      <section className="flex items-center justify-center p-8">
        <div>
          <div className="flex justify-center items-center w-full">
            <div className=" w-4/12 flex flex-col gap-3">
              <h1 className="text-white font-bold text-4xl">
                Olá, meu nome é Francielli Andreghetto e sou uma Desenvolvedora
                Full Stack.
              </h1>
              <p className="text-gray-200">
                Sou uma desenvolvedora full stack apaixonada por criar soluções
                tecnológicas que unem eficiência e uma ótima experiência para o
                usuário. Trabalho no desenvolvimento de sistemas web, desde a
                concepção até a implementação, garantindo interfaces intuitivas
                e funcionais.
                <p className="text-gray-200 mt-3">
                  Atualmente, atuo no setor de educação, desenvolvendo
                  plataformas que facilitam a gestão e o acesso à informação.
                  Além disso, realizo projetos freelancer, sempre buscando
                  aprimorar minhas habilidades e explorar novas possibilidades
                  no desenvolvimento de software.
                </p>
              </p>
            </div>
            <div className="relative w-[450px] h-[450px] flex justify-center items-center">
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
            </div>
          </div>
        </div>
      </section>
      <section>
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
      <section className="flex items-center justify-center p-8">
        <div>
          <div className="flex justify-center items-center w-full">
            <div className=" w-4/12 flex flex-col gap-3">
              <h1 className="text-white font-bold text-4xl">
                Olá, meu nome é Francielli Andreghetto e sou uma Desenvolvedora
                Full Stack.
              </h1>
              <p className="text-gray-200">
                Sou uma desenvolvedora full stack apaixonada por criar soluções
                tecnológicas que unem eficiência e uma ótima experiência para o
                usuário. Trabalho no desenvolvimento de sistemas web, desde a
                concepção até a implementação, garantindo interfaces intuitivas
                e funcionais.
                <p className="text-gray-200 mt-3">
                  Atualmente, atuo no setor de educação, desenvolvendo
                  plataformas que facilitam a gestão e o acesso à informação.
                  Além disso, realizo projetos freelancer, sempre buscando
                  aprimorar minhas habilidades e explorar novas possibilidades
                  no desenvolvimento de software.
                </p>
              </p>
            </div>
            <div className="relative w-[450px] h-[450px] flex justify-center items-center">
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
            </div>
          </div>
        </div>
      </section>{" "}
      <section className="flex items-center justify-center p-8">
        <div>
          <div className="flex justify-center items-center w-full">
            <div className=" w-4/12 flex flex-col gap-3">
              <h1 className="text-white font-bold text-4xl">
                Olá, meu nome é Francielli Andreghetto e sou uma Desenvolvedora
                Full Stack.
              </h1>
              <p className="text-gray-200">
                Sou uma desenvolvedora full stack apaixonada por criar soluções
                tecnológicas que unem eficiência e uma ótima experiência para o
                usuário. Trabalho no desenvolvimento de sistemas web, desde a
                concepção até a implementação, garantindo interfaces intuitivas
                e funcionais.
                <p className="text-gray-200 mt-3">
                  Atualmente, atuo no setor de educação, desenvolvendo
                  plataformas que facilitam a gestão e o acesso à informação.
                  Além disso, realizo projetos freelancer, sempre buscando
                  aprimorar minhas habilidades e explorar novas possibilidades
                  no desenvolvimento de software.
                </p>
              </p>
            </div>
            <div className="relative w-[450px] h-[450px] flex justify-center items-center">
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
            </div>
          </div>
        </div>
      </section>{" "}
      <section className="flex items-center justify-center p-8">
        <div>
          <div className="flex justify-center items-center w-full">
            <div className=" w-4/12 flex flex-col gap-3">
              <h1 className="text-white font-bold text-4xl">
                Olá, meu nome é Francielli Andreghetto e sou uma Desenvolvedora
                Full Stack.
              </h1>
              <p className="text-gray-200">
                Sou uma desenvolvedora full stack apaixonada por criar soluções
                tecnológicas que unem eficiência e uma ótima experiência para o
                usuário. Trabalho no desenvolvimento de sistemas web, desde a
                concepção até a implementação, garantindo interfaces intuitivas
                e funcionais.
                <p className="text-gray-200 mt-3">
                  Atualmente, atuo no setor de educação, desenvolvendo
                  plataformas que facilitam a gestão e o acesso à informação.
                  Além disso, realizo projetos freelancer, sempre buscando
                  aprimorar minhas habilidades e explorar novas possibilidades
                  no desenvolvimento de software.
                </p>
              </p>
            </div>
            <div className="relative w-[450px] h-[450px] flex justify-center items-center">
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
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center p-8">
        <div>
          <div className="flex justify-center items-center w-full">
            <div className=" w-4/12 flex flex-col gap-3">
              <h1 className="text-white font-bold text-4xl">
                Olá, meu nome é Francielli Andreghetto e sou uma Desenvolvedora
                Full Stack.
              </h1>
              <p className="text-gray-200">
                Sou uma desenvolvedora full stack apaixonada por criar soluções
                tecnológicas que unem eficiência e uma ótima experiência para o
                usuário. Trabalho no desenvolvimento de sistemas web, desde a
                concepção até a implementação, garantindo interfaces intuitivas
                e funcionais.
                <p className="text-gray-200 mt-3">
                  Atualmente, atuo no setor de educação, desenvolvendo
                  plataformas que facilitam a gestão e o acesso à informação.
                  Além disso, realizo projetos freelancer, sempre buscando
                  aprimorar minhas habilidades e explorar novas possibilidades
                  no desenvolvimento de software.
                </p>
              </p>
            </div>
            <div className="relative w-[450px] h-[450px] flex justify-center items-center">
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
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center p-8">
        <div>
          <div className="flex justify-center items-center w-full">
            <div className=" w-4/12 flex flex-col gap-3">
              <h1 className="text-white font-bold text-4xl">
                Olá, meu nome é Francielli Andreghetto e sou uma Desenvolvedora
                Full Stack.
              </h1>
              <p className="text-gray-200">
                Sou uma desenvolvedora full stack apaixonada por criar soluções
                tecnológicas que unem eficiência e uma ótima experiência para o
                usuário. Trabalho no desenvolvimento de sistemas web, desde a
                concepção até a implementação, garantindo interfaces intuitivas
                e funcionais.
                <p className="text-gray-200 mt-3">
                  Atualmente, atuo no setor de educação, desenvolvendo
                  plataformas que facilitam a gestão e o acesso à informação.
                  Além disso, realizo projetos freelancer, sempre buscando
                  aprimorar minhas habilidades e explorar novas possibilidades
                  no desenvolvimento de software.
                </p>
              </p>
            </div>
            <div className="relative w-[450px] h-[450px] flex justify-center items-center">
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
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center p-8">
        <div>
          <div className="flex justify-center items-center w-full">
            <div className=" w-4/12 flex flex-col gap-3">
              <h1 className="text-white font-bold text-4xl">
                Olá, meu nome é Francielli Andreghetto e sou uma Desenvolvedora
                Full Stack.
              </h1>
              <p className="text-gray-200">
                Sou uma desenvolvedora full stack apaixonada por criar soluções
                tecnológicas que unem eficiência e uma ótima experiência para o
                usuário. Trabalho no desenvolvimento de sistemas web, desde a
                concepção até a implementação, garantindo interfaces intuitivas
                e funcionais.
                <p className="text-gray-200 mt-3">
                  Atualmente, atuo no setor de educação, desenvolvendo
                  plataformas que facilitam a gestão e o acesso à informação.
                  Além disso, realizo projetos freelancer, sempre buscando
                  aprimorar minhas habilidades e explorar novas possibilidades
                  no desenvolvimento de software.
                </p>
              </p>
            </div>
            <div className="relative w-[450px] h-[450px] flex justify-center items-center">
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
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center p-8">
        <div>
          <div className="flex justify-center items-center w-full">
            <div className=" w-4/12 flex flex-col gap-3">
              <h1 className="text-white font-bold text-4xl">
                Olá, meu nome é Francielli Andreghetto e sou uma Desenvolvedora
                Full Stack.
              </h1>
              <p className="text-gray-200">
                Sou uma desenvolvedora full stack apaixonada por criar soluções
                tecnológicas que unem eficiência e uma ótima experiência para o
                usuário. Trabalho no desenvolvimento de sistemas web, desde a
                concepção até a implementação, garantindo interfaces intuitivas
                e funcionais.
                <p className="text-gray-200 mt-3">
                  Atualmente, atuo no setor de educação, desenvolvendo
                  plataformas que facilitam a gestão e o acesso à informação.
                  Além disso, realizo projetos freelancer, sempre buscando
                  aprimorar minhas habilidades e explorar novas possibilidades
                  no desenvolvimento de software.
                </p>
              </p>
            </div>
            <div className="relative w-[450px] h-[450px] flex justify-center items-center">
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
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center p-8">
        <div>
          <div className="flex justify-center items-center w-full">
            <div className=" w-4/12 flex flex-col gap-3">
              <h1 className="text-white font-bold text-4xl">
                Olá, meu nome é Francielli Andreghetto e sou uma Desenvolvedora
                Full Stack.
              </h1>
              <p className="text-gray-200">
                Sou uma desenvolvedora full stack apaixonada por criar soluções
                tecnológicas que unem eficiência e uma ótima experiência para o
                usuário. Trabalho no desenvolvimento de sistemas web, desde a
                concepção até a implementação, garantindo interfaces intuitivas
                e funcionais.
                <p className="text-gray-200 mt-3">
                  Atualmente, atuo no setor de educação, desenvolvendo
                  plataformas que facilitam a gestão e o acesso à informação.
                  Além disso, realizo projetos freelancer, sempre buscando
                  aprimorar minhas habilidades e explorar novas possibilidades
                  no desenvolvimento de software.
                </p>
              </p>
            </div>
            <div className="relative w-[450px] h-[450px] flex justify-center items-center">
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
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center p-8">
        <div>
          <div className="flex justify-center items-center w-full">
            <div className=" w-4/12 flex flex-col gap-3">
              <h1 className="text-white font-bold text-4xl">
                Olá, meu nome é Francielli Andreghetto e sou uma Desenvolvedora
                Full Stack.
              </h1>
              <p className="text-gray-200">
                Sou uma desenvolvedora full stack apaixonada por criar soluções
                tecnológicas que unem eficiência e uma ótima experiência para o
                usuário. Trabalho no desenvolvimento de sistemas web, desde a
                concepção até a implementação, garantindo interfaces intuitivas
                e funcionais.
                <p className="text-gray-200 mt-3">
                  Atualmente, atuo no setor de educação, desenvolvendo
                  plataformas que facilitam a gestão e o acesso à informação.
                  Além disso, realizo projetos freelancer, sempre buscando
                  aprimorar minhas habilidades e explorar novas possibilidades
                  no desenvolvimento de software.
                </p>
              </p>
            </div>
            <div className="relative w-[450px] h-[450px] flex justify-center items-center">
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
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center p-8">
        <div>
          <div className="flex justify-center items-center w-full">
            <div className=" w-4/12 flex flex-col gap-3">
              <h1 className="text-white font-bold text-4xl">
                Olá, meu nome é Francielli Andreghetto e sou uma Desenvolvedora
                Full Stack.
              </h1>
              <p className="text-gray-200">
                Sou uma desenvolvedora full stack apaixonada por criar soluções
                tecnológicas que unem eficiência e uma ótima experiência para o
                usuário. Trabalho no desenvolvimento de sistemas web, desde a
                concepção até a implementação, garantindo interfaces intuitivas
                e funcionais.
                <p className="text-gray-200 mt-3">
                  Atualmente, atuo no setor de educação, desenvolvendo
                  plataformas que facilitam a gestão e o acesso à informação.
                  Além disso, realizo projetos freelancer, sempre buscando
                  aprimorar minhas habilidades e explorar novas possibilidades
                  no desenvolvimento de software.
                </p>
              </p>
            </div>
            <div className="relative w-[450px] h-[450px] flex justify-center items-center">
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
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center p-8">
        <div>
          <div className="flex justify-center items-center w-full">
            <div className=" w-4/12 flex flex-col gap-3">
              <h1 className="text-white font-bold text-4xl">
                Olá, meu nome é Francielli Andreghetto e sou uma Desenvolvedora
                Full Stack.
              </h1>
              <p className="text-gray-200">
                Sou uma desenvolvedora full stack apaixonada por criar soluções
                tecnológicas que unem eficiência e uma ótima experiência para o
                usuário. Trabalho no desenvolvimento de sistemas web, desde a
                concepção até a implementação, garantindo interfaces intuitivas
                e funcionais.
                <p className="text-gray-200 mt-3">
                  Atualmente, atuo no setor de educação, desenvolvendo
                  plataformas que facilitam a gestão e o acesso à informação.
                  Além disso, realizo projetos freelancer, sempre buscando
                  aprimorar minhas habilidades e explorar novas possibilidades
                  no desenvolvimento de software.
                </p>
              </p>
            </div>
            <div className="relative w-[450px] h-[450px] flex justify-center items-center">
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
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center p-8">
        <div>
          <div className="flex justify-center items-center w-full">
            <div className=" w-4/12 flex flex-col gap-3">
              <h1 className="text-white font-bold text-4xl">
                Olá, meu nome é Francielli Andreghetto e sou uma Desenvolvedora
                Full Stack.
              </h1>
              <p className="text-gray-200">
                Sou uma desenvolvedora full stack apaixonada por criar soluções
                tecnológicas que unem eficiência e uma ótima experiência para o
                usuário. Trabalho no desenvolvimento de sistemas web, desde a
                concepção até a implementação, garantindo interfaces intuitivas
                e funcionais.
                <p className="text-gray-200 mt-3">
                  Atualmente, atuo no setor de educação, desenvolvendo
                  plataformas que facilitam a gestão e o acesso à informação.
                  Além disso, realizo projetos freelancer, sempre buscando
                  aprimorar minhas habilidades e explorar novas possibilidades
                  no desenvolvimento de software.
                </p>
              </p>
            </div>
            <div className="relative w-[450px] h-[450px] flex justify-center items-center">
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
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center p-8">
        <div>
          <div className="flex justify-center items-center w-full">
            <div className=" w-4/12 flex flex-col gap-3">
              <h1 className="text-white font-bold text-4xl">
                Olá, meu nome é Francielli Andreghetto e sou uma Desenvolvedora
                Full Stack.
              </h1>
              <p className="text-gray-200">
                Sou uma desenvolvedora full stack apaixonada por criar soluções
                tecnológicas que unem eficiência e uma ótima experiência para o
                usuário. Trabalho no desenvolvimento de sistemas web, desde a
                concepção até a implementação, garantindo interfaces intuitivas
                e funcionais.
                <p className="text-gray-200 mt-3">
                  Atualmente, atuo no setor de educação, desenvolvendo
                  plataformas que facilitam a gestão e o acesso à informação.
                  Além disso, realizo projetos freelancer, sempre buscando
                  aprimorar minhas habilidades e explorar novas possibilidades
                  no desenvolvimento de software.
                </p>
              </p>
            </div>
            <div className="relative w-[450px] h-[450px] flex justify-center items-center">
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
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center p-8">
        <div>
          <div className="flex justify-center items-center w-full">
            <div className=" w-4/12 flex flex-col gap-3">
              <h1 className="text-white font-bold text-4xl">
                Olá, meu nome é Francielli Andreghetto e sou uma Desenvolvedora
                Full Stack.
              </h1>
              <p className="text-gray-200">
                Sou uma desenvolvedora full stack apaixonada por criar soluções
                tecnológicas que unem eficiência e uma ótima experiência para o
                usuário. Trabalho no desenvolvimento de sistemas web, desde a
                concepção até a implementação, garantindo interfaces intuitivas
                e funcionais.
                <p className="text-gray-200 mt-3">
                  Atualmente, atuo no setor de educação, desenvolvendo
                  plataformas que facilitam a gestão e o acesso à informação.
                  Além disso, realizo projetos freelancer, sempre buscando
                  aprimorar minhas habilidades e explorar novas possibilidades
                  no desenvolvimento de software.
                </p>
              </p>
            </div>
            <div className="relative w-[450px] h-[450px] flex justify-center items-center">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
