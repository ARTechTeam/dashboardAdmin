export default function Btn({ onClickHandler, title, children }) {
	return (
		<button
			onClick={() => onClickHandler()}
			className={`flex gap-2 justify-center items-center rounded-lg  ${
				!title
					? "hover:bg-slate-100 p-1.5 dark:hover:bg-white/5"
					: "bg-slate-100 dark:bg-gray-500/10 dark:text-blue-500 hover:dark:text-white hover:bg-Primary hover:dark:bg-Primary hover:text-white transition-all duration-700 py-1 px-7"
			}`}
		>
			{children}
		</button>
	);
}
