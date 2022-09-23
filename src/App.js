import React, { useState, useEffect } from "react";
import { List, Footer, Header, Sidebar } from "./components";
import { getCategories } from "./service";

const App = () => {
	const [categories, setCategories] = useState([]);
	const [curCategory, setCurCategory] = useState("Cake");

	useEffect(() => {
		getCategories().then((res) => {
			setCategories(res);
		});
	}, []);

	return (
		<div className="container mx-auto min-h-screen bg-fuchsia-50">
			<Header />
			<div className="grid grid-cols-1 md:grid-cols-7 lg:grid-cols-9 gap-6 md:gap-10 py-6 md:py-10 lg:py-14 px-6 md:px-8">
				<div className="md:col-span-2 lg:col-span-2 col-span-1">
					<div className="md:sticky relative md:top-8">
						<Sidebar
							categories={categories}
							curCategory={curCategory}
							setCurCategory={setCurCategory}
						/>
					</div>
				</div>
				<div className="md:col-span-5 lg:col-span-7 col-span-1">
					<List curCategory={curCategory} />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default App;
