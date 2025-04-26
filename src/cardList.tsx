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

  const openModal = () => {
    setIsOpen(true);
    setCurrentImageIndex(0); // Quando abrir o modal, começa da primeira imagem
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Card */}
      <div
        onClick={openModal}
        className="relative w-full sm:max-w-md md:max-w-lg mx-auto rounded-2xl overflow-hidden border-b-4 border-[#480953] transform transition-transform duration-500 hover:scale-105 group cursor-pointer h-80"
      >
        <div className="relative h-full w-full">
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
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20 p-2 min-h-40">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-center line-clamp-2">
              {title}
            </h3>
            <div className="flex flex-wrap justify-center gap-2 text-purple-400">
              {icons &&
                icons.map((icon, index) => (
                  <img
                    key={index}
                    src={icon}
                    alt={`Icon ${index}`}
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  />
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
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
                <Dialog.Panel className="w-full max-w-5xl transform overflow-hidden rounded-2xl bg-[#2d1332] p-6 text-left align-middle shadow-xl transition-all relative">
                  <button
                    onClick={closeModal}
                    className="absolute top-3 right-3 text-zinc-400 hover:text-white text-xl"
                  >
                    ✕
                  </button>

                  <div className="flex flex-col gap-6 p-5">
                    {/* Galeria à direita */}
                    <div className=" flex flex-col items-center">
                      <img
                        src={images[currentImageIndex]}
                        alt="Main"
                        className="w-full h-96 object-cover rounded-lg mb-4"
                      />

                      <div className="flex gap-2 overflow-x-auto max-w-full">
                        {images.map((img, index) => (
                          <img
                            key={index}
                            src={img}
                            alt={`Thumb ${index}`}
                            className={`h-16 w-24 object-cover rounded cursor-pointer transition border-2 ${
                              index === currentImageIndex
                                ? "border-[#8f15a8]"
                                : "border-transparent"
                            }`}
                            onClick={() => setCurrentImageIndex(index)}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Texto e links */}
                    <div className=" text-white flex flex-col justify-between">
                      <div>
                        <Dialog.Title className="text-2xl font-bold mb-2">{title}</Dialog.Title>
                        <p className="text-zinc-300 text-sm">{description}</p>
                      </div>

                      <div className="mt-6 flex gap-3">
                        <a
                          href={githubLink}
                          target="_blank"
                          className="px-4 py-2 bg-[#8f15a8] text-white rounded hover:bg-[#9A2CB0] text-sm"
                          rel="noopener noreferrer"
                        >
                          GitHub
                        </a>
                        <a
                          href={demoLink}
                          target="_blank"
                          className="px-4 py-2 bg-white text-gray-700 rounded hover:bg-gray-300 text-sm"
                          rel="noopener noreferrer"
                        >
                          Demo
                        </a>
                      </div>
                    </div>
                  </div>
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
