import React from "react";
import Carousel from "../ui/Carousel";
import Image from "next/image";

const ServiceSection = () => {
	const content = [
		{ src: "/assets/services/pexels-cottonbro-.jpg", alt: "..." },
		{ src: "/assets/services/pexels-maksim-romashkin.jpg", alt: "..." },
		{ src: "/assets/services/pexels-pixabay.jpg", alt: "..." },
	];
	return (
		<section id="services" className="w-full h-fit z-10 relative overflow-hidden px-6 sm:px-12 py-20 scroll-mt-28">
			<Image src="/assets/backgrounds/pexels-ron-lach.jpg" fill alt="" placeholder="empty" style={{ objectFit: "cover", zIndex: "-10" }} />
			<div className="absolute inset-0 bg-black bg-opacity-80 z-[-5]"></div>
			<div className="absolute inset-0 bg-gradient-to-b from-black to-transparent z-[-5]"></div>
			<div id="services-container" className="flex lg:flex-row flex-col-reverse gap-12 justify-center items-center scroll-mt-56 h-fit">
				<div className="lg:w-[50%] w-full h-fit p-4 ">
					<Carousel content={content}></Carousel>
				</div>

				<div className="lg:w-[20%] sm:w-[70%] w-full h-fit flex flex-col lg:gap-12 md:gap-4 gap-2" data-aos="fade-up-left">
					<h1 className="text-white text-4xl font-bold sm:text-center lg:text-left">We Tell, You Inspire</h1>
					<p className="text-white/75 text-sm text-justify sm:text-center lg:text-justify">
						At Bezier, we offer a wide range of services designed to bring your stories to life. Whether it’s film production, post-production, or
						storytelling through commercials and documentaries.
					</p>
				</div>
			</div>
		</section>
	);
};

export default ServiceSection;
