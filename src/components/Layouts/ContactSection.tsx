import React from "react";
import ContactForm from "../partials/ContactForm";

const ContactSection = () => {
	return (
		<section
			id="contact"
			className="w-full h-fit z-10 bg-[url('/assets/backgrounds/pexels-minhle.jpg')] bg-cover bg-center relative overflow-hidden px-6 sm:px-12 py-20 justify-center items-center flex flex-col scroll-mt-28"
		>
			<div className="before:content-[''] before:absolute before:inset-0 before:block before:bg-black before:bg-opacity-50 before:z-[-5]"></div>
			<div className="before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-b before:from-black before:to-transparent before:to-10% before:z-[-5]"></div>
			<div id="contact-container" className="flex flex-col lg:w-[50%] sm:w-fit justify-center items-center bg-black p-8 gap-2" data-aos="fade-up">
				<div className="flex flex-col gap-4 justify-start">
					<h1 className="text-white text-4xl font-bold">Ready to Roll?</h1>
					<p className="text-white/75 text-sm text-justify">
						Let’s turn your vision into a masterpiece. Whether you have a concept in mind or need help shaping your ideas, Bezier is here to
						collaborate and create. Get in touch today, and together, we’ll craft stories that leave a lasting impression.
					</p>
				</div>
				<div className="flex flex-col w-full gap-2">
					<ContactForm />
					<div className="w-fit">
						<p className="text-white/75 text-sm text-justify w-fit">
							For inquiries, collaborations, and more, contact us at:{" "}
							<a href="#contact" className="text-red-600">
								bezier@bezierproductions.com
							</a>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
