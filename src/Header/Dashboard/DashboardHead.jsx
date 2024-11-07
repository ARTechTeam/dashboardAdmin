import { IoMenuSharp } from "react-icons/io5";
import Logo from "../../Logo/Logo";
import Btn from "../../Components/Btn";

export default function DashboardHead({ changeVisible }) {
	return (
		<>
			<div className="flex justify-between items-center border py-5 border-gray-200 dark:border-gray-800 pl-5 max-md:max-w-36 max-md:w-36 max-w-72 md:min-w-72 pr-5 min-h-20">
				<div className="">
					<Logo />
				</div>
				<div className="md:opacity-20">
					<Btn
						onClickHandler={() => {
							if (window.innerWidth < 768) {
								changeVisible();
								console.log(window.innerWidth);
							}
						}}
					>
						<IoMenuSharp className="text-2xl" />
					</Btn>
				</div>
			</div>
		</>
	);
}
