import { useEffect, useState } from "react";

import { CiMenuFries } from "react-icons/ci";
import { FiX } from 'react-icons/fi'

import { motion } from 'motion/react'


const Header = () => {

	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [lastScrollY, setLastScrollY] = useState<number>(0)
	const [isVisible, setIsVisible] = useState(true)

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			if (currentScrollY === 0) {
				// Sempre mostra o menu ao chegar no topo
				setIsVisible(true);
			} else if (currentScrollY > lastScrollY) {
				// Rolando para baixo, esconde o menu
				setIsVisible(false);
			} else {
				// Rolando para cima, mostra o menu
				setIsVisible(true);
			}

			setLastScrollY(currentScrollY);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [lastScrollY]);


	const handleHideMenu = () => {
		const currentScrollY = window.scrollY;

		setIsOpen(false)
		setLastScrollY(currentScrollY)
	}


	return (
		<header className="bg-[#070707] flex justify-center h-16 w-full mb-10 border-b-green-900 border-b-2 border-opacity-30 fixed z-50 hover:opacity-100"
			style={{ transform: isVisible ? "translateY(0)" : "translateY(-100%)", transition: "transform 0.3s ease-in-out" }}
		>
			<motion.div className="flex max-w-7xl w-full justify-between items-center px-4"
				initial={{ scale: 1, marginBottom: 50 }}
				animate={{ scale: 1, marginBottom: 0 }}
				transition={{ duration: 0.5 }}
			>
				<div>
					<a className="text-white font-bold text-xl"
						href="#home"
					>
						<span className="text-green-500">{"< "}</span>
						TailisonDev
						<span className="text-green-500">{" />"}</span>
					</a>
				</div>

				<button
					className="md:hidden text-white transition-all fadeInEffect"
					onClick={() => setIsOpen(!isOpen)}
				>
					{isOpen ? <FiX size={32} /> : <CiMenuFries size={32} />}
				</button>

				<nav
					className={`absolute top-16 left-0 w-full bg-[#070707] flex-col items-center gap-y-6 py-4 transition-all md:static md:flex-row md:gap-x-6 md:w-auto md:py-0 md:flex max-sm:h-[100vh] max-md:h-[100vh] max-md:text-4xl max-md:justify-center duration-1000
						${isOpen ? "flex menuDownEffect" : "hidden"}`}
				>
					<a className={`transition-all text-white border-b-2 border-transparent text-md hover:cursor-pointer hover:border-green-700 hover:text-green-100`}
						href="#home"
						onClick={() => handleHideMenu()}
					>Início</a>

					<a className={`transition-all text-white border-b-2 border-transparent text-md hover:cursor-pointer hover:border-green-700 hover:text-green-100 `}
						href="#projects"
						onClick={() => handleHideMenu()}
					>Projetos<span className="hidden max-md:block text-center text-sm text-zinc-600">{"<"}que eu faço{">"}</span></a>

					<a className={`transition-all text-white border-b-2 text-center border-transparent text-md hover:cursor-pointer hover:border-green-700 hover:text-green-100 `}
						href="#skills"
						onClick={() => handleHideMenu()}
					>Habilidades<span className="hidden max-md:block text-sm text-zinc-600">{"<"}que desenvolvo{">"}</span></a>

					<a className={`transition-all text-white border-b-2 text-center border-transparent text-md hover:cursor-pointer hover:border-green-700 hover:text-green-100`}
						onClick={() => handleHideMenu()}
					>Contato<span className="hidden max-md:block text-sm  text-zinc-600">{"<"}para desenvolvermos juntos{">"}</span></a>

				</nav>
			</motion.div>
		</header >
	);
};

export default Header;