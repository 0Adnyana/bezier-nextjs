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
			<div className="flex lg:flex-row flex-col gap-12 justify-center items-center scroll-mt-56">
				<div className="lg:w-[20%] sm:w-[70%] w-full h-fit flex flex-col lg:gap-12 gap-4" data-aos="fade-up-right" data-aos-delay="0">
					<h1 className="text-white text-4xl font-bold sm:text-center lg:text-left">Meet the Dreammakers</h1>
					<p className="text-white/75 text-sm text-justify sm:text-center lg:text-justify">
						Our team is a collective of passionate filmmakers, writers, and creative minds dedicated to storytelling. At Bezier, collaboration and
						innovation drive everything we do.
					</p>
				</div>
				<div id="team-container" className="flex lg:flex-row gap-8 flex-wrap justify-center items-center">
					{team.map((member, index) => {
						return <TeamCard imageSrc={member.imageSrc} name={member.name} position={member.position} key={index} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default TeamSection;
