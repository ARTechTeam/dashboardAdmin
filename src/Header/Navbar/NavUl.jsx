import Btn from "../../Components/Btn";
import { useState } from "react";
import {
	IoChatboxOutline,
	IoLogOutOutline,
	IoMoonOutline,
	IoNotificationsOutline,
	IoStarOutline,
	IoSunnyOutline,
} from "react-icons/io5";

export default function NavUl({ changeMode }) {
	const [isNight, setIsNight] = useState(false);

	function changeNight() {
		setIsNight((prevState) => !prevState);
	}

	const my_navbar = [
		{ title: "", icon: <IoStarOutline className="text-xl" />, id: 2 },
		{
			title: "",
			icon: <IoNotificationsOutline className="text-xl" />,
			id: 3,
		},
		{
			title: "",
			icon: isNight ? (
				<IoSunnyOutline className="text-xl" />
			) : (
				<IoMoonOutline className="text-xl" />
			),
			id: 4,
			onClick: () => {
				changeMode();
				changeNight();
			},
		},
		{ title: "", icon: <IoChatboxOutline className="text-xl " />, id: 5 },
		{
			title: "log out",
			icon: (
				<p className="rotate-180">
					<IoLogOutOutline className="text-2xl" />
				</p>
			),
			id: 6,
		},
	];
	return (
		<ul className="flex justify-end gap-4 items-center">
			{my_navbar.map((item) => (
				<li key={item.id}>
					<Btn onClickHandler={item.onClick} title={item.title}>
						<div className="dark:text-white">{item.icon}</div>
						{item.title && (
							<div className="line-clamp-1 truncate dark:font-primary-bold">
								{item.title}
							</div>
						)}
					</Btn>
				</li>
			))}
		</ul>
	);
}
