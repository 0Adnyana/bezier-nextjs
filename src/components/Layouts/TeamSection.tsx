import React from "react";

const TeamSection = () => {
	return (
		<section
			id="team"
			className="w-full h-fit z-10 bg-[url('/assets/backgrounds/pexels-cottonbro-team.jpg')] bg-cover bg-center relative overflow-hidden px-6 sm:px-12 py-20 scroll-mt-28"
		>
			<div className="before:content-[''] before:absolute before:inset-0 before:block before:bg-black before:bg-opacity-50 before:z-[-5]"></div>
			<div className="before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-t before:from-black before:to-transparent before:to-10% before:z-[-5]"></div>
			<div className="flex lg:flex-row flex-col gap-12 justify-center items-center scroll-mt-56">
				<div className="lg:w-[20%] sm:w-[70%] w-full h-fit flex flex-col lg:gap-12 gap-4" data-aos="fade-up-right" data-aos-delay="0">
					<h1 className="text-white text-4xl font-bold sm:text-center lg:text-left">Meet the Dreammakers</h1>
					<p className="text-white/75 text-sm text-justify sm:text-center lg:text-justify">
						Our team is a collective of passionate filmmakers, writers, and creative minds dedicated to storytelling. At Bezier, collaboration and
						innovation drive everything we do.
					</p>
				</div>
				<div id="team-container" className="flex lg:flex-row gap-8 flex-wrap justify-center items-center">
					<div
						className="lg:h-80 lg:w-60 h-96 w-72 z-10 bg-[url('/assets/team/albert-dera.jpg')] bg-cover bg-center relative overflow-hidden"
						data-aos="fade-up"
						data-aos-delay="200"
					>
						<div className="before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-t before:from-black before:to-transparent before:to-30% before:z-[-5]"></div>
						<div className="flex flex-col w-full h-full justify-end p-4">
							<h2 className="text-base font-bold">Albert Sera</h2>
							<p className="text-sm">Creative Director</p>
						</div>
					</div>
					<div
						className="lg:h-80 lg:w-60 h-96 w-72 z-10 bg-[url('/assets/team/nartan-buyukyildiz.jpg')] bg-cover bg-center relative overflow-hidden"
						data-aos="fade-up"
						data-aos-delay="300"
					>
						<div className="before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-t before:from-black before:to-transparent before:to-30% before:z-[-5]"></div>
						<div className="flex flex-col w-full h-full justify-end p-4">
							<h2 className="text-base font-bold">Nartan Buyukyildiz</h2>
							<p className="text-sm">Cinematographer</p>
						</div>
					</div>
					<div
						className="lg:h-80 lg:w-60 h-96 w-72 z-10 bg-[url('/assets/team/vince-fleming.jpg')] bg-cover bg-center relative overflow-hidden"
						data-aos="fade-up"
						data-aos-delay="400"
					>
						<div className="before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-t before:from-black before:to-transparent before:to-30% before:z-[-5]"></div>
						<div className="flex flex-col w-full h-full justify-end p-4">
							<h2 className="text-base font-bold">Vince Fleming</h2>
							<p className="text-sm">Producer</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TeamSection;
