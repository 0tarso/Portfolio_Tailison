import { JSX, memo } from 'react'
import { BiLogoTypescript } from 'react-icons/bi'
import { FaJsSquare, FaNodeJs, FaReact } from 'react-icons/fa'
import { IoLogoCss3 } from 'react-icons/io5'
import { RiFirebaseFill, RiTailwindCssFill, RiVercelLine } from 'react-icons/ri'
import { SiExpress, SiRender, SiZod } from 'react-icons/si'
import { TbBrandFramerMotion } from 'react-icons/tb'

type Techs =
  | "React"
  | "TypeScript"
  | "Firebase"
  | "Tailwind"
  | "Node"
  | "Express"
  | "Vercel"
  | "Render"
  | "CSS"
  | "JavaScript"
  | "FramerMotion"
  | "Zod"

const techIcons: Record<Techs, JSX.Element> = {
  React: <FaReact size={18} color='#57dbf6' />,
  TypeScript: <BiLogoTypescript size={22} color='#3178c6' />,
  Firebase: <RiFirebaseFill size={22} color='orange' />,
  Tailwind: <RiTailwindCssFill size={22} color='#00bcff' />,
  Node: <FaNodeJs size={20} color='green' />,
  Express: <SiExpress size={18} color='black' />,
  Vercel: <RiVercelLine size={20} color='black' />,
  Render: <SiRender size={14} color='gray' />,
  CSS: <IoLogoCss3 size={18} color='blue' />,
  JavaScript: <FaJsSquare size={18} color='#f0c02b' />,
  FramerMotion: <TbBrandFramerMotion size={18} color='#bc1af7' />,
  Zod: <SiZod size={18} color='#10047a' />,
}


interface TechBadgeProps {
  tech: Techs
}

const TechBadge = memo(({ tech }: TechBadgeProps) => {
  return (
    <div className="flex bg-white drop-shadow-sm border-r-2 border-b-2 border-b-zinc-100 hover:border-r-green-400 hover:border-b-green-400 border-r-zinc-200 w-fit px-2 py-1 rounded-tr-xl rounded-bl-xl rounded-tl-sm cursor-default items-center">
      {techIcons[tech]}
      <span className="ml-1 font-medium text-zinc-900 max-sm:text-sm">{tech}</span>
    </div>
  );
});

export default TechBadge

