import React, { useEffect, useState } from "react";
import { getCakesByCategory } from "../service";
import Card from "./Card";

const List = ({ curCategory }) => {
	const [cakes, setCakes] = useState([]);
	const [search, setSearch] = useState("");
	console.log(curCategory);

	const handleChange = (e) => {
		setSearch(e.target.value);
	};

	useEffect(() => {
		getCakesByCategory("Cake").then((res) => {
			setCakes(res);
		});
	}, []);

	return (
		<div className="container mx-auto flex flex-col">
			<input
				type="text"
				placeholder="Search.."
				value={search}
				onChange={handleChange}
				className={"px-5 py-2 rounded-3xl mb-6 text-sm"}
			/>
			<div className="flex flex-wrap justify-center items-center">
				{cakes
					.filter((cake) => cake.name.toLowerCase().includes(search))
					.map((cake) => (
						<Card
							key={cake.id}
							photo={cake.photo}
							name={cake.name}
							price={cake.price}
						/>
					))}
			</div>
		</div>
	);
};

export default List;
