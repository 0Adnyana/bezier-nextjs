import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const ServiceSection = () => {
	return (
		<section
			id="services"
			className="w-full h-fit z-10 bg-[url('/assets/backgrounds/pexels-ron-lach.jpg')] bg-cover bg-center relative overflow-hidden px-6 sm:px-12 py-20 scroll-mt-28"
		>
			<div className="before:content-[''] before:absolute before:inset-0 before:block before:bg-black before:bg-opacity-80 before:z-[-5]"></div>
			<div className="before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-b before:from-black before:to-transparent before:z-[-5]"></div>
			<div id="services-container" className="flex lg:flex-row flex-col-reverse gap-12 justify-center items-center scroll-mt-56 h-fit">
				<div className="lg:w-[50%] w-full h-fit p-4 ">
					<Carousel
						className="dark relative w-full h-fit justify-center"
						data-aos="fade-up"
						data-aos-delay="200"
						opts={{
							align: "start",
							loop: true,
						}}
						plugins={[Autoplay()]}
					>
						<CarouselContent className="w-full h-48 sm:h-96">
							<CarouselItem className="basis-full">
								<img src="/assets/services/pexels-cottonbro-.jpg" className="w-full h-full object-cover" alt="..." />
							</CarouselItem>
							<CarouselItem className="basis-full">
								<img src="/assets/services/pexels-maksim-romashkin.jpg" className="w-full h-full object-cover" alt="..." />
							</CarouselItem>
							<CarouselItem className="basis-full">
								<img src="/assets/services/pexels-pixabay.jpg" className="w-full h-full object-cover" alt="..." />
							</CarouselItem>
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
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
