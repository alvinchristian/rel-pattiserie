import React from "react";

const Box = ({ icon, name, onClick, curCategory }) => {
	return (
		<button
			onClick={onClick}
			className={`flex items-center px-2 py-1 w-36 md:w-auto space-x-1 md:space-x-4 border-2 rounded-3xl hover:bg-pink-200 hover:border-pink-100 ${
				curCategory === name
					? "bg-pink-200 border-pink-200"
					: "bg-white border-gray-100"
			}`}
		>
			<div className="bg-slate-100 p-2 rounded-3xl">
				<img
					src={icon}
					alt={name}
					className={"hidden sm:flex sm:w-3 md:w-4 lg:w-5"}
				/>
			</div>
			<h5 className="text-xs md:text-sm lg:text-base">{name}</h5>
		</button>
	);
};

export default Box;
