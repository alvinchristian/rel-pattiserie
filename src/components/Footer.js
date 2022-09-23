import React from "react";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";

const Footer = () => {
	const socials = [
		{
			id: 1,
			href: "https://www.facebook.com/profile.php?id=100016624481350",
			name: "Facebook",
			icon: <AiFillFacebook size={18} />,
			hover: "hover:bg-blue-300",
		},
		{
			id: 2,
			href: "https://www.instagram.com/relpattiserie/",
			name: "Instagram",
			icon: <AiFillInstagram size={18} />,
			hover: "hover:bg-pink-300",
		},
	];
	return (
		<div className="bg-pink-300 rounded-xl flex justify-between px-10 items-center sticky top-[100vh] py-4">
			<div>
				<h1 className="font-semibold text-white">By Aurelia Mouryn</h1>
				<h3 className="text-xs text-white">
					Jl. Thamrin No.32, Kab.Donggala, Sulawesi Tengah
				</h3>
			</div>
			<div className="flex space-x-2">
				{socials.map((social) => (
					<a
						key={social.id}
						href={social.href}
						target="_blank"
						rel="noreferrer"
						className={`bg-white py-3 px-4 space-x-1 rounded-xl flex justify-center items-center ${social.hover} border-2 hover:border-white`}
					>
						{social.icon}
						<h5 className="text-xs">{social.name}</h5>
					</a>
				))}
			</div>
		</div>
	);
};

export default Footer;
