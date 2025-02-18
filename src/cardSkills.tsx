interface CardSkillsProps {
  imgUrl: string;
  titleLanguage: string;
}

export default function CardSkills({ imgUrl, titleLanguage }: CardSkillsProps) {
  return (
    <div
      className="w-44 h-44 flex flex-col items-center justify-center rounded-lg 
                    bg-gradient-to-b from-[#480953] to-[#2d1332]
                    text-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
    >
      <img src={imgUrl} alt={titleLanguage} className="w-12 h-12" />
      <h1 className="text-lg font-semibold mt-2">{titleLanguage}</h1>
    </div>
  );
}
