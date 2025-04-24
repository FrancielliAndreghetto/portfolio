import React, { useState, useEffect, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface ProjectCardProps {
  images: string[];
  title: string;
  description: string;
  githubLink: string;
  demoLink: string;
  icons?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  images,
  title,
  description,
  githubLink,
  demoLink,
  icons,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [images.length]);

  return (
    <>
      {/* Card */}
      <div
        onClick={() => setIsOpen(true)}
        className="relative w-full max-w-xl mx-auto rounded-2xl overflow-hidden border-b-4 border-[#480953] transform transition-transform duration-500 hover:scale-105 group cursor-pointer"
      >
        <div className="relative h-64 w-full">
          {/* Imagens com animação de transição */}
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
              alt={`Project image ${index + 1}`}
            />
          ))}

          {/* Overlay preto */}
          <div className="absolute inset-0 bg-black bg-opacity-70 z-10" />

          {/* Conteúdo fixo acima das imagens */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20">
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <div className="flex gap-4 text-purple-400 text-2xl">
              {icons &&
                icons.map((icon, index) => (
                  <img
                    key={index}
                    src={icon}
                    alt={`Icon ${index}`}
                    className="w-6 h-6"
                  />
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gradient-to-b from-[#480953] to-[#2d1332] p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-bold leading-6 text-white"
                  >
                    {title}
                  </Dialog.Title>
                  <div className="mt-2 text-zinc-300 text-sm">
                    {description}
                  </div>

                  <div className="mt-4 flex justify-end gap-4">
                    <a
                      href={githubLink}
                      target="_blank"
                      className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-500"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                    <a
                      href={demoLink}
                      target="_blank"
                      className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-400"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  </div>

                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-3 right-3 text-zinc-400 hover:text-white"
                  >
                    ✕
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ProjectCard;
