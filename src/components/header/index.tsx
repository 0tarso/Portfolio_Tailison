//React
import { useEffect, useState } from "react";

//Icons
import { CiMenuFries } from "react-icons/ci";
import { FiX } from 'react-icons/fi'
import brazilFlag from '/brazilFlag.png'
import usaFlag from '/euaFlag.png'

//FramerMotion
import { motion } from 'motion/react'


import { useTranslation } from "react-i18next";

const Header = () => {

	const { t: text, i18n } = useTranslation();

	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [lastScrollY, setLastScrollY] = useState<number>(0)
	const [isVisible, setIsVisible] = useState(true)

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			if (currentScrollY === 0) {
				setIsVisible(true);

			} else if (currentScrollY > lastScrollY) {
				setIsVisible(false);

			} else {
				setIsVisible(true);
			}

			setLastScrollY(currentScrollY);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [lastScrollY]);


	const handleLangugage = (lang: string) => {
		i18n.changeLanguage(lang)
	}


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
					>{text("header.start")}</a>

					<a className={`transition-all text-white border-b-2 border-transparent text-md hover:cursor-pointer hover:border-green-700 hover:text-green-100 `}
						href="#projects"
						onClick={() => handleHideMenu()}
					>{text("header.projects")}<span className="hidden max-md:block text-center text-sm text-zinc-600">{"<"}{text("header.mobileProjects")}{">"}</span></a>

					<a className={`transition-all text-white border-b-2 text-center border-transparent text-md hover:cursor-pointer hover:border-green-700 hover:text-green-100 `}
						href="#skills"
						onClick={() => handleHideMenu()}
					>{text("header.skills")}<span className="hidden max-md:block text-sm text-zinc-600">{"<"}{text("header.mobileSkills")}{">"}</span></a>

					<a className={`transition-all text-white border-b-2 text-center border-transparent text-md hover:cursor-pointer hover:border-green-700 hover:text-green-100 `}
						href="#about"
						onClick={() => handleHideMenu()}
					>{text("header.aboutMe")}<span className="hidden max-md:block text-sm text-zinc-600">{"<"}{text("header.mobileAboutMe")}{">"}</span></a>

					<a className={`transition-all text-white border-b-2 text-center border-transparent text-md hover:cursor-pointer hover:border-green-700 hover:text-green-100`}
						href="#callme"
						onClick={() => handleHideMenu()}
					>{text("header.callMe")}<span className="hidden max-md:block text-sm  text-zinc-600">{"<"}{text("header.mobileCallMe")}{">"}</span></a>


					<div className="flex gap-x-4">
						<button
							onClick={() => handleLangugage("pt")}
							className="text-white rounded-full text-sm hover:scale-[1.04] hover:shadow-lg hover:shadow-white/30 transition w-7 h-7 max-sm:w-12 max-sm:h-12 "
						>
							<img src={brazilFlag} />
						</button>
						<button
							onClick={() => handleLangugage("en")}
							className="text-white rounded-full text-sm hover:scale-[1.04] hover:shadow-lg hover:shadow-white/30 transition w-7 h-7 max-sm:w-12 max-sm:h-12 "
						>
							<img src={usaFlag} />
						</button>

					</div>
				</nav>
			</motion.div>
		</header >
	);
};

export default Header;