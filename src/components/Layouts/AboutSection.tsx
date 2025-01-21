import React from "react";
import { Button } from "../ui/button";

const AboutSection = () => {
	return (
		<section
			id="about"
			className="w-full h-fit bg-black bg-cover bg-center flex flex-col sm:flex-row justify-center items-start px-6 sm:px-12 py-20 gap-2 sm:gap-12 scroll-mt-28"
		>
			<div className="flex flex-col w-full sm:w-52 h-fit items-center justify-center" data-aos="fade-up">
				<h1 className="text-white text-4xl sm:text-5xl font-bold">FROM VISION TO REALITY</h1>
			</div>
			<div id="about-container" className="flex flex-col w-full sm:w-[50%] h-fit justify-between gap-4 scroll-mt-56" data-aos="fade-up">
				<p className="text-white/75 text-sm text-justify">
					At Bezier, we believe that every story deserves to be told with passion, precision, and creativity. Our mission is to transform ideas into
					visually captivating narratives that resonate with audiences. With a focus on artistry and innovation, we bring visions to life, one frame
					at a time.
				</p>
				<p className="text-white/75 text-sm text-justify">
					Our award-winning documentary Echoes in Silence earned Best Director, Best Documentary, and Best Writing for its powerful storytelling. From
					indie films to cinematic adventures, Bezier pushes creative boundaries to bring imagination to life.
				</p>

				<a href="#">
					<Button className="mt-2 size-lg bg-red-600 text-white hover:bg-red-700 hover:text-white/80 flex flex-row w-fit gap-2">
						MORE ABOUT US
						<svg className="h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
							<polygon
								fill="currentColor"
								points="359.873 121.377 337.246 144.004 433.243 240.001 16 240.001 16 240.002 16 272.001 16 272.002 433.24 272.002 337.246 367.996 359.873 390.623 494.498 256 359.873 121.377"
								className="ci-primary"
							/>
						</svg>
					</Button>
				</a>
			</div>
		</section>
	);
};

export default AboutSection;
