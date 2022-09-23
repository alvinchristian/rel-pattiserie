import React from "react";

const Card = ({ photo, name, price }) => {
	const rupiah = (number) => {
		return new Intl.NumberFormat("id-ID", {
			style: "currency",
			currency: "IDR",
		}).format(number);
	};

	return (
		<div className="bg-white rounded-xl px-6 sm:px-4 py-4 m-2 w-full sm:w-32 md:w-36 lg:w-40 flex sm:flex-col justify-start sm:justify-center items-center space-x-4 sm:space-x-0 space-y-1">
			<img src={photo.url} alt={name} className={"w-14 sm:w-20 mb-2"} />
			<div className="flex flex-col justify-center items-start sm:items-center">
				<h3 className="text-xs md:text-sm font-medium">{name}</h3>
				<h4 className="text-xs font-bold">{rupiah(price)}</h4>
			</div>
		</div>
	);
};

export default Card;
