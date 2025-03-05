import { motion } from "framer-motion";

const projects = [
  {
    id: "1",
    title: "Sistema de Gestão Escolar",
    img: "/assets/Gradient.png",
    description: "Plataforma completa para escolas gerenciarem alunos, professores e turmas.",
  },
  {
    id: "2",
    title: "E-commerce de Roupas",
    img: "/assets/Gradient.png",
    description: "Loja virtual moderna com integração de pagamentos e catálogo dinâmico.",
  },
  {
    id: "2",
    title: "E-commerce de Roupas",
    img: "/assets/Gradient.png",
    description: "Loja virtual moderna com integração de pagamentos e catálogo dinâmico.",
  },
  {
    id: "3",
    title: "E-commerce de Roupas",
    img: "/assets/Gradient.png",
    description: "Loja virtual moderna com integração de pagamentos e catálogo dinâmico.",
  },
  {
    id: "4",
    title: "E-commerce de Roupas",
    img: "/assets/Gradient.png",
    description: "Loja virtual moderna com integração de pagamentos e catálogo dinâmico.",
  },
];

type CardListProps = {
  setSelectedProject: (project: { id: string; title: string; img: string; description: string } | null) => void;
};

const CardList: React.FC<CardListProps> = ({ setSelectedProject }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          className="bg-gradient-to-b from-[#480953] to-[#2d1332] text-white p-4 rounded-lg shadow-lg cursor-pointer overflow-hidden relative"
          onClick={() => setSelectedProject(project)}
        >
          <img src={project.img} alt={project.title} className="w-full h-48 object-cover rounded-md" />
          <h3 className="mt-4 text-lg font-bold">{project.title}</h3>
        </motion.div>
      ))}
    </div>
  );
};

export default CardList;
