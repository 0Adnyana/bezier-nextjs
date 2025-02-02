"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
	name: z
		.string()
		.min(2, {
			message: "Name must be at least 2 characters.",
		})
		.max(50, {
			message: "Name cannot exceed 50 characters.",
		}),
	email: z.string().email(),
	phone: z
		.string()
		.min(10, {
			message: "Phone number must be at least 10 characters.",
		})
		.max(15, {
			message: "Phone number cannot exceed 15 characters.",
		}),
	message: z
		.string()
		.min(10, {
			message: "Message must be at least 10 characters.",
		})
		.max(500, {
			message: "Message cannot exceed 500 characters.",
		}),
});

const ContactForm = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			message: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-2 w-full">
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem className="space-y-1">
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input placeholder="Enter your name" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className="flex flex-col sm:flex-row gap-2 w-full">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem className="space-y-1 w-full">
								<FormLabel>Email Address</FormLabel>
								<FormControl>
									<Input placeholder="Enter your email address" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="phone"
						render={({ field }) => (
							<FormItem className="space-y-1 w-full">
								<FormLabel>Phone Number</FormLabel>
								<FormControl>
									<Input placeholder="Enter your phone number" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem className="space-y-1">
							<FormLabel>Message</FormLabel>
							<FormControl>
								<Textarea placeholder="Write your message!" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit" className="mt-2 size-lg bg-red-600 text-white hover:bg-red-700 hover:text-white/80">
					Send message
				</Button>
			</form>
		</Form>
	);
};

export default ContactForm;
