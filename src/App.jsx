import { useEffect, useState } from "react";
import Header from "./Header/Header";
import NavUl from "./Header/Navbar/NavUl";

function App() {
	const [darkMode, setDarkMode] = useState(false);
	const [isVisibleMenu, setIsVisibleMenu] = useState(false);

	useEffect(() => {
		if (darkMode) {
			document.body.classList.add("dark");
		} else {
			document.body.classList.remove("dark");
		}
	}, [darkMode]);

	function changeMode() {
		setDarkMode((prevMode) => !prevMode);
	}

	function showVisibleMenu() {
		setIsVisibleMenu((prev) => !prev);
	}

	return (
		<div className={`font-secondary bg-gray-100 text-sm`}>
			<div className="bg-white">
				<div className="max-w-310 mx-auto relative ">
					<Header
						changeMode={changeMode}
						showVisibleMenu={showVisibleMenu}
					/>
					<div
						className={` absolute mx-2 -top-6 right-0 left-0 transition-all duration-700 ${
							isVisibleMenu
								? "translate-y-0 opacity-100"
								: "-translate-y-24 opacity-0"
						}`}
					>
						<div className=" bg-white dark:bg-Primary-dark border dark:border-dark-border border-light-border p-2 rounded-xl ">
							<NavUl changeMode={changeMode} />
						</div>
					</div>
				</div>
			</div>
			<div className="bg-slate-100 dark:bg-Secondary-dark max-md:w-full h-[300vh] mt-20 p-2 md:mr-72">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Explicabo voluptas animi quis libero soluta reiciendis repellat
				distinctio, quidem quos consequatur earum ea ipsum reprehenderit
				et ducimus excepturi? Voluptatum, magni! Iusto?
			</div>
		</div>
	);
}

export default App;
