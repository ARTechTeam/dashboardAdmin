import { useState } from "react";
import DashboardHead from "./DashboardHead";
import DashboardBody from "./DashboardBody";

export default function Dashboard() {
	const [isVisible, setIsVisible] = useState(false);

	function changeVisible() {
		setIsVisible((prev) => !prev);
	}

	return (
		<div className="flex fixed flex-col max-h-svh overflow-hidden">
			<DashboardHead changeVisible={changeVisible} />

			<div className="max-md:hidden">
				<DashboardBody />
			</div>

			<div
				className={`transition-all duration-700 ease-in-out transform ${
					isVisible
						? "translate-x-0 opacity-100"
						: "translate-x-full opacity-0"
				}`}
			>
				<DashboardBody />
			</div>
		</div>
	);
}
