import React, { useState, useEffect } from "react";

interface ProjectCardProps {
  images: string[];  // Agora espera um array de imagens
  title: string;
  description: string;
  githubLink: string;
  demoLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  images,
  title,
  description,
  githubLink,
  demoLink,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Troca a imagem a cada 3 segundos

      return () => clearInterval(interval); // Limpa o intervalo quando o componente for desmontado
    }
  }, [images.length]);

  return (
    <div className="bg-gradient-to-b from-[#480953] to-[#2d1332] rounded-2xl shadow-xl p-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
      <img
        src={images[currentImageIndex]}  // Agora usa o índice para controlar a imagem
        alt={title}
        className="rounded-lg mb-4 w-full h-40 object-cover"
      />
      <h3 className="text-white text-lg font-semibold">{title}</h3>
      <p className="text-zinc-400 text-sm mb-3">{description}</p>
      <div className="flex justify-between items-center">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-indigo-400 hover:underline"
        >
          Ver código
        </a>
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm bg-indigo-500 text-white px-3 py-1 rounded-lg hover:bg-indigo-400"
        >
          Ver demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
