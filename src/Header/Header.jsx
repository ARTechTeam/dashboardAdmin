import Dashboard from "./Dashboard/Dashboard";
import Navbar from "./Navbar/Navbar";
import SearchBar from "./SearchBar/SearchBar";

export default function Header({
	changeMode,
	showVisibleMenu,
}) {
	return (
		<header className=" flex fixed bg-white dark:bg-Primary-dark dark:text-white border-b border-gray-200 dark:border-gray-800 w-full pl-5 h-20 top-0 right-0">
			<Dashboard />
			<div className="h-20 flex justify-between items-center *:grow grow mr-72 max-md:mr-36">
				<SearchBar />
				<Navbar
					changeMode={changeMode}
					showVisibleMenu={showVisibleMenu}
				/>
			</div>
		</header>
	);
}
