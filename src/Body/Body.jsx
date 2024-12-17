import Banner from "./Banner/Banner";
import Budget from "./Banner/Budget";
import SaleOverview from "./Chart/SaleOverview";
import UserActivations from "./Chart/UserActivations";
import LastActivity from "./LastActivity/LastActivity";

export default function Body() {
	return (
		<div className="bg-slate-100 dark:bg-Secondary-dark max-md:w-full items-stretch mt-20 p-5 md:mr-72 grid grid-cols-12 gap-5 -z-50">
			{/* <div className="grid grid-rows-2 gap-5"> */}
			<div className="flex max-lg:flex-col xl:flex-col w-full col-span-5 max-xl:col-span-12 gap-5">
				<Banner />
				<div className=" flex max-sm:flex-col gap-5">
					<Budget />
					<Budget />
				</div>
			</div>
			<div className="col-span-7 max-xl:col-span-12">
				<SaleOverview />
			</div>

			<div className=" grid grid-cols-12 col-span-full gap-5">
				<div className="w-full col-span-4 max-xl:col-span-full max-xl:order-2">
					<UserActivations />
				</div>

				<div className="w-full col-span-4 max-xl:col-span-6 max-lg:col-span-full order-1">
					<LastActivity />
				</div>

				<div className="w-full col-span-4 max-xl:col-span-6 max-lg:col-span-full order-1">
					<UserActivations />
				</div>
			</div>
		</div>
	);
}
