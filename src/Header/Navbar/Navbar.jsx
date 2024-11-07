import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import NavUl from "./NavUl";

export default function Navbar({ changeMode, showVisibleMenu }) {
	return (
		<nav className="flex justify-end py-5">
			<button
				className="md:hidden"
				onClick={() => {
					showVisibleMenu();
				}}
			>
				<IoEllipsisHorizontalSharp className="text-2xl" />
			</button>
			<div className="max-md:hidden">
				<NavUl changeMode={changeMode} />
			</div>
		</nav>
	);
}
