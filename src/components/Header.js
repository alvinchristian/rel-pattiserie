import React from "react";
import Logo from "../assets/Logo.png";
import { AiOutlineWhatsApp } from "react-icons/ai";

const Header = () => {
	return (
		<div className="container mx-auto bg-pink-300 py-8 px-4 flex justify-center items-center space-x-4 rounded-t-md rounded-b-3xl">
			<img className="w-24 sm:w-32 md:w-40 lg:w-56" src={Logo} alt="Rel-Pattiserie" />
			<div className="space-y-2 md:space-y-4 lg:space-y-6 flex flex-col justify-center items-center">
				<h1 className="font-title text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
					Rel Pattiserie
				</h1>
				<a
					href="https://wa.me/082345859955"
					target="_blank"
					rel="noreferrer"
					className="bg-white px-3 md:px-4 lg:px-5 py-1 md:py-2 lg:py-3 rounded-lg flex justify-center items-center space-x-2"
				>
					<AiOutlineWhatsApp size={20} />
					<h5 className="text-xs md:text-sm lg:text-base font-medium">
						Order Now
					</h5>
				</a>
			</div>
		</div>
	);
};

export default Header;
