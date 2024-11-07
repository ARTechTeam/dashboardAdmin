import { adminInformation } from "../../../data/data";

export default function InfoAdmin() {
	return (
		<div className="flex flex-col gap-3 justify-center items-center py-3 border-b border-light-border dark:border-dark-border">
			<button className="border-8 rounded-full dark:border-dark-border border-Secondary/15 w-fit h-fit relative">
				<img
					src={`${
						adminInformation.photo == "default"
							? "/IMAGE/userDefaultImage.png"
							: adminInformation.photo
					} `}
					className=""
					alt=""
				/>
				<span className="absolute text-[11px] py-[1px] font-primary-bold w-8 bg-Secondary rounded-lg text-white -bottom-2 right-0 mx-auto left-0 text-center shadow-[0_5px_20px_-2px_#4f1787]">
					new
				</span>
			</button>
			<h2 className="text-Primary dark:text-Secondary-light font-primary-bold">
				{adminInformation.name}
			</h2>
			<figcaption className="text-gray-400">
				{adminInformation.subTitle}
			</figcaption>

			<div className="flex gap-0 items-center justify-center sp">
				{adminInformation.account.map((item, i) => (
					<div
						className={`flex flex-col justify-center items-center gap-1 ${
							i !== 0
								? "border-r border-light-border dark:border-dark-border"
								: ""
						} px-5`}
						key={item[2]}
					>
						<div className="text-lg">{item[1]}</div>
						<div className="text-xs text-gray-500">{item[0]}</div>
					</div>
				))}
			</div>
		</div>
	);
}
