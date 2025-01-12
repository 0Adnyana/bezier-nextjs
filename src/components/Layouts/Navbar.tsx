import { useEffect, useState } from "react";
import Logo from "../ui/Logo";
import Hamburger from "hamburger-react";
import { useSidebar } from "../ui/sidebar";

const Navbar = () => {
	const { toggleSidebar, openMobile } = useSidebar();
	const [isHamburgerOpen, setHamburgerOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 100);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		setHamburgerOpen(openMobile);
	}, [openMobile]);

	useEffect(() => {
		const navbar = document.getElementById("navbar");
		if (scrolled) {
			navbar?.classList.add("bg-black");
		} else {
			navbar?.classList.remove("bg-black");
		}
	}, [scrolled]);

	return (
		<nav
			id="navbar"
			className="fixed w-full h-28 z-20 top-0 start-0 items-center flex sm:px-12 transition ease-in-out duration-300 flex-row justify-between px-6"
		>
			<Logo />
			<div className="lg:hidden w-fit flex flex-row justify-between items-center">
				<Hamburger size={24} color="#fff" onToggle={toggleSidebar} toggled={isHamburgerOpen} toggle={setHamburgerOpen} />
			</div>
			<div id="nav-links" className="hidden lg:flex flex-row gap-4 sm:gap-12 mix-blend-difference">
				<a href="#about" className="font-light text-lg sm:text-xl">
					About
				</a>
				<a href="#works" className="font-light text-lg sm:text-xl">
					Works
				</a>
				<a href="#services" className="font-light text-lg sm:text-xl">
					Services
				</a>
				<a href="#team" className="font-light text-lg sm:text-xl">
					Team
				</a>
				<a href="#awards" className="font-light text-lg sm:text-xl">
					Awards
				</a>
				<a href="#contact" className="font-light text-lg sm:text-xl">
					Contact Us
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
