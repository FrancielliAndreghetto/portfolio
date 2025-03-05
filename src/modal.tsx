import { motion } from "framer-motion";

type ModalProps = {
  selectedProject: { id: string; title: string; img: string; description: string } | null;
  setSelectedProject: (project: null) => void;
};

const Modal: React.FC<ModalProps> = ({ selectedProject, setSelectedProject }) => {
  if (!selectedProject) return null;

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={() => setSelectedProject(null)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-gradient-to-b from-[#480953] to-[#2d1332] p-6 rounded-lg shadow-lg w-96 max-w-full relative"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <button
          className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600"
          onClick={() => setSelectedProject(null)}
        >
          ✕
        </button>
        <img
          src={selectedProject.img}
          alt={selectedProject.title}
          className="w-full h-48 object-cover rounded-md"
        />
        <h2 className="mt-4 text-xl text-blue-400 font-bold">{selectedProject.title}</h2>
        <p className="mt-2 text-white">{selectedProject.description}</p>
        <button
          className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
          onClick={() => setSelectedProject(null)}
        >
          Fechar
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
