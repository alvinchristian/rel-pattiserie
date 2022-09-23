import React from "react";
import Box from "./Box";

const Sidebar = ({ categories, setCurCategory, curCategory }) => {
	return (
		<div className="container mx-auto flex flex-col">
			<h2 className="font-title text-xl md:text-2xl lg:text-4xl text-center mb-4 md:mb-8">
				Menu
			</h2>
			<div className="flex md:flex-col justify-center space-x-2 md:space-x-0 md:space-y-3 ">
				{categories.map((category) => (
					<Box
						key={category.id}
						icon={category.icon.url}
						name={category.name}
						onClick={() => setCurCategory(category.name)}
						curCategory={curCategory}
					/>
				))}
			</div>
		</div>
	);
};

export default Sidebar;
