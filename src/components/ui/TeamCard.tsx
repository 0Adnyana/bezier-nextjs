import Image from "next/image";

type TeamCardProps = {
	imageSrc: string;
	name: string;
	position: string;
	aosDelay: string;
};
const TeamCard = (props: TeamCardProps) => {
	return (
		<div className="lg:h-80 lg:w-60 h-96 w-72 z-10 relative overflow-hidden" data-aos="fade-up" data-aos-delay={props.aosDelay}>
			<Image src={`${props.imageSrc}`} fill alt="" placeholder="empty" style={{ objectFit: "cover", zIndex: "-10" }} />
			<div className="absolute inset-0 bg-gradient-to-t from-black to-transparent to-30% before:z-[-5]"></div>
			<div className="flex flex-col w-full h-full justify-end p-4 absolute">
				<h2 className="text-base font-bold">{props.name}</h2>
				<p className="text-sm">{props.position}</p>
			</div>
		</div>
	);
};

export default TeamCard;
