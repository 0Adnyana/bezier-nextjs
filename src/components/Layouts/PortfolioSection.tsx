"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import BackgroundVideo from "next-video/background-video";
import portfolio1 from "/videos/portfolio1.mp4";
import portfolio2 from "/videos/portfolio2.mp4";
import portfolio3 from "/videos/portfolio3.mp4";
import portfolio4 from "/videos/portfolio4.mp4";
import portfolio5 from "/videos/portfolio5.mp4";

const movies: {
	title: string;
	year: number;
	video: any;
	description: string;
}[] = [
	{
		title: "Her Shadow’s Hold",
		year: 2024,
		video: portfolio1,
		description:
			"When a struggling artist is abducted by a mysterious and unhinged woman, he finds himself trapped in a nightmare where reality and obsession blur. As he uncovers her twisted motives, survival becomes a game of wits, and escaping her clutches could mean facing an even darker truth.",
	},
	{
		title: "Black Echo",
		year: 2024,
		video: portfolio2,
		description:
			"A special ops SWAT team is sent deep into enemy territory to extract a key informant holding secrets that could prevent global catastrophe. As alliances fracture and loyalties are tested, the team must confront not only their foes but also their own moral dilemmas in the fog of war.",
	},
	{
		title: "Echoes in Silence",
		year: 2023,
		video: portfolio3,
		description:
			"This gripping documentary unravels the chilling story of a serial killer who terrorized a small town. Through interviews with reporters, detectives, and the grieving families, Echoes in Silence pieces together the devastating impact of the crimes and the relentless pursuit of justice.",
	},
	{
		title: "Heavy Lies the Crown",
		year: 2023,
		video: portfolio4,
		description:
			"From the gritty streets to the bright lights of the championship ring, Heavy Lies the Crown follows a determined young boxer who fights to overcome poverty, personal loss, and self-doubt. With grit and resilience, he rises against all odds to become a symbol of hope and perseverance.",
	},
	{
		title: "Neon Fragments",
		year: 2022,
		video: portfolio5,
		description:
			"Under the neon haze of a bustling Asian metropolis, lives intertwine in a story of longing, heartbreak, and fleeting connections. With its lush green hues and poetic atmosphere, Neon Fragments captures the beauty of solitude and the bittersweet moments that define human connection.",
	},
];

const PortfolioSection = () => {
	useEffect(() => {
		const players = document.querySelectorAll(".next-video-bg-video");

		players.forEach((player) => {
			const shadowRoot = player.shadowRoot;
			if (shadowRoot) {
				const style = document.createElement("style");
				style.innerHTML = "video { object-fit: cover !important;";

				shadowRoot.appendChild(style);
			}
		});
	}, []);

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
			<BackgroundVideo
				src={movies[currentMovie].video}
				poster={movies[currentMovie].video.poster}
				className="w-full h-full z-[-10]"
				style={{ objectFit: "cover" }}
			></BackgroundVideo>
			<div className={cn(`absolute inset-0 z-[-5] transition ease-out duration-500 w-full h-full`, blur)}></div>
			<div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-[-5] w-full h-full"></div>
			<div className="w-full h-full absolute inset-0 z-0">
				<div className="w-full h-full flex flex-row sm:flex-col lg:flex-row items-end sm:items-start lg:items-end justify-between sm:justify-end px-6 sm:px-12 py-16 pt-32 gap-4">
					<div id="movie-picker" className="flex flex-col w-fit z-10">
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
			</div>
		</section>
	);
};

export default PortfolioSection;
