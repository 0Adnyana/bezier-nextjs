"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const movies: {
	title: string;
	year: number;
	videoSrc: string;
	thumbnail: string;
	description: string;
	alt?: string;
}[] = [
	{
		title: "Her Shadow’s Hold",
		year: 2024,
		videoSrc: "/assets/works/portfolio1.mp4",
		thumbnail: "/assets/works/portfolio1.png",
		description:
			"When a struggling artist is abducted by a mysterious and unhinged woman, he finds himself trapped in a nightmare where reality and obsession blur. As he uncovers her twisted motives, survival becomes a game of wits, and escaping her clutches could mean facing an even darker truth.",
		alt: "Image of Her Shadow’s Hold",
	},
	{
		title: "Black Echo",
		year: 2024,
		videoSrc: "/assets/works/portfolio2.mp4",
		thumbnail: "/assets/works/portfolio2.png",
		description:
			"A special ops SWAT team is sent deep into enemy territory to extract a key informant holding secrets that could prevent global catastrophe. As alliances fracture and loyalties are tested, the team must confront not only their foes but also their own moral dilemmas in the fog of war.",
		alt: "Image of Black Echo",
	},
	{
		title: "Echoes in Silence",
		year: 2023,
		videoSrc: "/assets/works/portfolio3.mp4",
		thumbnail: "/assets/works/portfolio3.png",
		description:
			"This gripping documentary unravels the chilling story of a serial killer who terrorized a small town. Through interviews with reporters, detectives, and the grieving families, Echoes in Silence pieces together the devastating impact of the crimes and the relentless pursuit of justice.",
		alt: "Image of Echoes in Silence",
	},
	{
		title: "Heavy Lies the Crown",
		year: 2023,
		videoSrc: "/assets/works/portfolio4.mp4",
		thumbnail: "/assets/works/portfolio4.png",
		description:
			"From the gritty streets to the bright lights of the championship ring, Heavy Lies the Crown follows a determined young boxer who fights to overcome poverty, personal loss, and self-doubt. With grit and resilience, he rises against all odds to become a symbol of hope and perseverance.",
		alt: "Image of Heavy Lies the Crown",
	},
	{
		title: "Neon Fragments",
		year: 2022,
		videoSrc: "/assets/works/portfolio5.mp4",
		thumbnail: "/assets/works/portfolio5.png",
		description:
			"Under the neon haze of a bustling Asian metropolis, lives intertwine in a story of longing, heartbreak, and fleeting connections. With its lush green hues and poetic atmosphere, Neon Fragments captures the beauty of solitude and the bittersweet moments that define human connection.",
		alt: "Image of Neon Fragments",
	},
];

const PortfolioSection = () => {
	const [currentMovie, setCurrentMovie] = useState(0);
	const [blur, setBlur] = useState("backdrop-blur-2xl");

	const timeoutRef = useRef<any | null>(null);
	const intervalRef = useRef<any | null>(null);

	useEffect(() => {
		const changeBackground = () => {
			setCurrentMovie((prevMovie) => (prevMovie + 1) % movies.length);
		};

		intervalRef.current = setInterval(changeBackground, 10000);

		return () => clearInterval(intervalRef.current);
	}, []);

	useEffect(() => {
		clearTimeout(timeoutRef.current);

		setBlur("backdrop-blur-2xl");
		timeoutRef.current = setTimeout(() => {
			setBlur("backdrop-blur-none");
		}, 500);

		return () => clearTimeout(timeoutRef.current);
	}, [currentMovie]);

	const handleMouseEnter = (index: number) => {
		clearInterval(intervalRef.current);
		setCurrentMovie(index);
	};

	const handleMouseLeave = () => {
		intervalRef.current = setInterval(() => {
			setCurrentMovie((prevMovie) => (prevMovie + 1) % movies.length);
		}, 10000);
	};

	return (
		<section id="works" className="w-full h-screen relative">
			{movies.map((movie, index) => {
				return (
					<video
						key={index}
						autoPlay
						loop
						muted
						playsInline
						className={cn(`w-0 h-0 object-cover absolute opacity-0`)}
						src={`${movies[currentMovie].videoSrc}`}
					></video>
				);
			})}


			{movies.map((movie, index) => {
				return (
					<Image
						key={index}
						src={`${movie.thumbnail}`}
						fill
						alt={`${movie.alt}`}
						className={cn(`w-full h-full object-cover z-[-12]`, currentMovie !== index ? "hidden" : "relative")}
						priority={true}
					/>
				);
			})}

			<video
				autoPlay
				loop
				muted
				playsInline
				className={cn(`w-full h-full object-cover z-[-10] absolute`)}
				src={`${movies[currentMovie].videoSrc}`}
			></video>

			<div className={cn(`absolute inset-0 z-[-5] transition ease-out duration-500`, blur)}></div>
			<div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-[-5]"></div>
			<div className="w-full h-full flex flex-row sm:flex-col lg:flex-row items-end sm:items-start lg:items-end justify-between sm:justify-end px-6 sm:px-12 py-16 pt-32 gap-4">
				<div id="movie-picker" className="flex flex-col w-fit">
					{movies.map((movie, index) => {
						return (
							<div
								id="movie-1"
								className={cn(`w-fit h-fit flex flex-row gap-2 text-white hover:cursor-pointer`, currentMovie === index && "text-opacity-60 ")}
								key={index}
								onMouseEnter={() => handleMouseEnter(index)}
								onMouseLeave={handleMouseLeave}
							>
								<p className="font-inter text-2xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-semibold tracking-tight text-nowrap">{movie.title}</p>
								<p className="font-inter text-xl font-normal">{movie.year}</p>
							</div>
						);
					})}
				</div>
				<div className="flex flex-row w-fit sm:w-full h-fit items-end gap-2">
					<p id="movie-description" className="text-white/75 text-sm text-justify sm:text-center h-fit w-full hidden sm:flex">
						{movies[currentMovie].description}
					</p>
					<svg className="h-12 w-12 sm:h-24 sm:w-24" width="143" height="258" viewBox="0 0 143 258" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M69.1056 245.5L69.1056 0.459732H75.1056L75.1056 245.425L138.408 181.006L142.687 185.212L72.1211 257.022L0.539307 185.227L4.78826 180.991L69.1056 245.5Z"
							fill="white"
						/>
					</svg>
				</div>
			</div>
		</section>
	);
};

export default PortfolioSection;
