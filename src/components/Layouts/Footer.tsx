import Logo from "../ui/Logo";

const Footer = () => {
	return (
		<footer className="bg-black text-gray-400 py-10 px-6 sm:px-12">
			<div className="justify-center">
				<div className="flex flex-col sm:flex-row justify-between items-center gap-3">
					{/* <!-- Logo and Slogan --> */}
					<div className="flex flex-col gap-2">
						<Logo />
						<p className="text-sm">Crafting Frames, Capturing Stories.</p>
					</div>

					{/* <!-- Navigation Links --> */}
					<nav className="flex flex-wrap justify-center sm:justify-normal gap-2 sm:gap-6">
						<a href="#works" className="hover:text-white">
							Works
						</a>
						<a href="#about" className="hover:text-white">
							About
						</a>
						<a href="#awards" className="hover:text-white">
							Awards
						</a>
						<a href="#services" className="hover:text-white">
							Services
						</a>
						<a href="#team" className="hover:text-white">
							Team
						</a>
						<a href="#contact" className="hover:text-white">
							Contact
						</a>
					</nav>
				</div>
				<div className="border-t border-gray-700 mt-6 pt-6 flex flex-col sm:flex-row justify-between items-center">
					{/* <!-- Social Media Links --> */}
					<div className="flex space-x-4">
						<a href="#" aria-label="Facebook" className="hover:text-white">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M9 8H7v4h2v12h5V12h3.642L18 8h-4V6.339C14 5.5 14.403 5 15.598 5H18V0h-3.28C11.677 0 9 2.468 9 6.281V8z" />
							</svg>
						</a>
						<a href="#" aria-label="Twitter" className="hover:text-white">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M24 4.557c-.883.392-1.832.656-2.828.775a4.958 4.958 0 0 0 2.165-2.723 9.866 9.866 0 0 1-3.127 1.196 4.927 4.927 0 0 0-8.388 4.49A13.978 13.978 0 0 1 1.64 3.15a4.908 4.908 0 0 0 1.523 6.574 4.9 4.9 0 0 1-2.229-.616v.061a4.927 4.927 0 0 0 3.946 4.829 4.902 4.902 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.417 9.868 9.868 0 0 1-6.102 2.102c-.397 0-.788-.023-1.175-.068A13.942 13.942 0 0 0 7.548 21c9.14 0 14.307-7.721 14.307-14.417 0-.22-.005-.439-.014-.657A10.243 10.243 0 0 0 24 4.557z" />
							</svg>
						</a>
						<a href="#" aria-label="Instagram" className="hover:text-white">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 0C8.736 0 8.332.014 7.052.072c-1.27.059-2.2.262-2.987.552a5.996 5.996 0 0 0-2.173 1.429A5.993 5.993 0 0 0 .624 4.66C.335 5.447.133 6.377.072 7.648.014 8.928 0 9.332 0 12s.014 3.072.072 4.352c.059 1.27.263 2.2.552 2.987a5.996 5.996 0 0 0 1.429 2.173 5.993 5.993 0 0 0 2.173 1.429c.787.289 1.717.493 2.987.552C8.332 23.986 8.736 24 12 24s3.072-.014 4.352-.072c1.27-.059 2.2-.263 2.987-.552a5.996 5.996 0 0 0 2.173-1.429 5.993 5.993 0 0 0 1.429-2.173c.289-.787.493-1.717.552-2.987C23.986 15.072 24 14.668 24 12s-.014-3.072-.072-4.352c-.059-1.27-.263-2.2-.552-2.987a5.996 5.996 0 0 0-1.429-2.173A5.993 5.993 0 0 0 19.34.624C18.553.335 17.623.133 16.353.072 15.072.014 14.668 0 12 0zm0 5.838A6.162 6.162 0 1 1 5.838 12 6.167 6.167 0 0 1 12 5.838zm0 10.178a4.016 4.016 0 1 0-4.016-4.016A4.016 4.016 0 0 0 12 16.016zm6.406-10.833a1.44 1.44 0 1 1 1.44-1.44 1.441 1.441 0 0 1-1.44 1.44z" />
							</svg>
						</a>
					</div>
					{/* <!-- Copyright --> */}
					<p className="text-sm mt-4 sm:mt-0">&copy; 2024 Bezier. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
