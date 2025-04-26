interface CardSkillsProps {
  imgUrl: string;
  titleLanguage: string;
}

export default function CardSkills({ imgUrl, titleLanguage }: CardSkillsProps) {
  return (
    <div
      className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 
                 flex flex-col items-center justify-center rounded-lg 
                 bg-gradient-to-b from-[#480953] to-[#2d1332]
                 text-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-110"
    >
      <img src={imgUrl} alt={titleLanguage} className="w-10 h-10 sm:w-12 sm:h-12" />
      <h1 className="text-base sm:text-lg font-semibold mt-2 text-center">{titleLanguage}</h1>
    </div>
  );
}
