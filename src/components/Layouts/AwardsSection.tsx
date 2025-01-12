import React from "react";

const AwardsSection = () => {
	return (
		<section
			id="awards"
			className="w-full h-fit z-10 bg-black bg-cover bg-center relative overflow-hidden px-6 sm:px-12 py-20 justify-center items-center flex flex-col gap-12 scroll-mt-28"
		>
			<div className="lg:w-[50%] sm:w-[70%] w-full h-fit flex flex-col lg:gap-12 gap-4 justify-center" data-aos="fade-up">
				<h1 className="text-white text-4xl font-bold text-left sm:text-center">The Spotlight is Ours</h1>
				<p className="text-white/75 text-sm text-justify sm:text-center">
					Bezier has earned recognition for its dedication to cinematic excellence. From film festivals to industry accolades, our work has been
					celebrated for pushing creative boundaries and delivering impactful storytelling.
				</p>
			</div>
			<div className="flex flex-row flex-wrap lg:gap-32 sm:gap-16 gap-8 justify-center items-center">
				<img
					src="/assets/awards/Best Writing.png"
					alt="Best Writing Award"
					className="lg:h-44 w-fit sm:h-36 h-36"
					data-aos="fade-up-right"
					data-aos-delay="200"
				/>
				<img
					src="/assets/awards/Best Documentary.png"
					alt="Best Documentary Award"
					className="lg:h-56 w-fit sm:h-48 h-36"
					data-aos="fade-up"
					data-aos-delay="400"
				/>
				<img
					src="/assets/awards/Best Director.png"
					alt="Best Director Award"
					className="lg:h-44 w-fit sm:h-36 h-36"
					data-aos="fade-up-left"
					data-aos-delay="300"
				/>
			</div>
		</section>
	);
};

export default AwardsSection;
