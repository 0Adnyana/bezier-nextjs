import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from "@/components/ui/sidebar";

const items = [
	{
		title: "About",
		url: "#about",
	},
	{
		title: "Works",
		url: "#works",
	},
	{
		title: "Services",
		url: "#services",
	},
	{
		title: "Team",
		url: "#team",
	},
	{
		title: "Awards",
		url: "#awards",
	},
	{
		title: "Contact Us",
		url: "#contact",
	},
];

export function AppSidebar() {
	const { toggleSidebar } = useSidebar();
	return (
		<Sidebar>
			<SidebarContent className="bg-black">
				<SidebarGroup>
					<SidebarGroupLabel></SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild className="text-2xl" onClick={toggleSidebar}>
										<a href={item.url}>
											<span>{item.title}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
