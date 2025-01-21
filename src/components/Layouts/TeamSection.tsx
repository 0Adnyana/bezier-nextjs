import Image from "next/image";
import React from "react";
import TeamCard from "../ui/TeamCard";

const TeamSection = () => {
	const team = [
		{
			imageSrc: "/assets/team/albert-dera.jpg",
			name: "Albert Sera",
			position: "Creative Director",
		},
		{
			imageSrc: "/assets/team/nartan-buyukyildiz.jpg",
			name: "Nartan Buyukyildiz",
			position: "Cinematographer",
		},
		{
			imageSrc: "/assets/team/vince-fleming.jpg",
			name: "Vince Fleming",
			position: "Producer",
		},
	];
	return (
		<section id="team" className="w-full h-fit z-10 relative overflow-hidden px-6 sm:px-12 py-20 scroll-mt-28">
			<Image src="/assets/backgrounds/pexels-cottonbro-team.jpg" fill alt="" placeholder="empty" style={{ objectFit: "cover", zIndex: "-10" }} />
			<div className="absolute inset-0 bg-black bg-opacity-50 z-[-5]"></div>
			<div className="absolute inset-0 bg-gradient-to-t from-black to-transparent to-10% z-[-5]"></div>
			<div className="flex flex-col lg:flex-row gap-12 justify-center items-center scroll-mt-56 ">
				<div className="lg:w-[20%] sm:w-[70%] w-full h-fit flex flex-col lg:gap-12 gap-4" data-aos="fade-up-right" data-aos-delay="0">
					<h1 className="text-white text-4xl font-bold sm:text-center lg:text-left">Meet the Dreammakers</h1>
					<p className="text-white/75 text-sm text-justify sm:text-center lg:text-justify">
						Our team is a collective of passionate filmmakers, writers, and creative minds dedicated to storytelling. At Bezier, collaboration and
						innovation drive everything we do.
					</p>
				</div>
				<div id="team-container" className="hidden md:flex lg:flex-row gap-8 flex-wrap justify-center items-center w-fit">
					{team.map((member, index) => {
						return (
							<TeamCard imageSrc={member.imageSrc} name={member.name} position={member.position} key={index} aosDelay={`${index * 200 + 100}`} />
						);
					})}
				</div>

				{/* when on mobile */}
				<div className="md:hidden w-full h-fit flex justify-center items-center">
					<div
						data-hs-carousel='{
    "loadingClasses": "opacity-0",
    "isDraggable": true,
    "isAutoPlay": true,
    "dotsItemClasses": "hs-carousel-active:bg-white hs-carousel-active:border-white size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-white dark:hs-carousel-active:border-white"
  }'
						className="relative w-fit h-fit"
						data-aos="fade-up"
						data-aos-delay="200"
					>
						<div className="hs-carousel relative overflow-hidden h-96 w-72 bg-white rounded-lg">
							<div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
								{team.map((person, index) => {
									return (
										<div className="hs-carousel-slide" key={index}>
											<TeamCard imageSrc={person.imageSrc} name={person.name} position={person.position} key={index} aosDelay="0" />
										</div>
									);
								})}
							</div>
						</div>

						<button
							type="button"
							className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
						>
							<span className="text-2xl" aria-hidden="true">
								<svg
									className="shrink-0 size-5"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="m15 18-6-6 6-6"></path>
								</svg>
							</span>
							<span className="sr-only">Previous</span>
						</button>
						<button
							type="button"
							className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
						>
							<span className="sr-only">Next</span>
							<span className="text-2xl" aria-hidden="true">
								<svg
									className="shrink-0 size-5"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="m9 18 6-6-6-6"></path>
								</svg>
							</span>
						</button>

						<div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2"></div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TeamSection;
