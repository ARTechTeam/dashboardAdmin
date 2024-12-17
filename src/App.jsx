import { useEffect, useState } from "react";
import Header from "./Header/Header";
import NavUl from "./Header/Navbar/NavUl";
import Body from "./Body/Body";

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
				<div className="z-20 max-w-310 mx-auto relative ">
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
			<Body />
		</div>
	);
}

export default App;
