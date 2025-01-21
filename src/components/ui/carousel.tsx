import React from "react";

type CarouselProps = {
	content: CarouselItem[];
};

type CarouselItem = {
	src: string;
	alt: string;
};

const Carousel = (props: CarouselProps) => {
	return (
		<div
			data-hs-carousel='{
    "loadingClasses": "opacity-0",
    "isDraggable": true,
    "isAutoPlay": true,
    "dotsItemClasses": "hs-carousel-active:bg-white hs-carousel-active:border-white size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-white dark:hs-carousel-active:border-white"
  }'
			className="relative w-full h-48 sm:h-96"
			data-aos="fade-up"
			data-aos-delay="200"
		>
			<div className="hs-carousel relative overflow-hidden w-full h-48 sm:h-96 bg-white rounded-lg">
				<div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
					{props.content.map((item, index) => {
						return (
							<div className="hs-carousel-slide" key={index}>
								<img src={item.src} className="w-full h-full object-cover" alt={item.alt} />
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
	);
};

export default Carousel;
