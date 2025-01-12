"use client";

import Navbar from "@/components/Layouts/Navbar";
import Footer from "@/components/Layouts/Footer";
import PortfolioSection from "@/components/Layouts/PortfolioSection";
import AboutSection from "@/components/Layouts/AboutSection";
import ServiceSection from "@/components/Layouts/ServiceSection";
import TeamSection from "@/components/Layouts/TeamSection";
import AwardsSection from "@/components/Layouts/AwardsSection";
import ContactSection from "@/components/Layouts/ContactSection";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AppSidebar } from "@/components/Layouts/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Home() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<>
			<SidebarProvider>
				<Navbar />
				<AppSidebar />
				<main className="">
					<PortfolioSection />
					<AboutSection />
					<ServiceSection />
					<TeamSection />
					<AwardsSection />
					<ContactSection />
				</main>
			</SidebarProvider>
			<Footer />
		</>
	);
}
