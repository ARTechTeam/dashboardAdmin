import { IoSearch } from "react-icons/io5";

export default function SearchBar() {
	return (
		<div className="py-5 pr-5 flex items-center justify-center">
			<form className="flex justify-center items-center w-full gap-4">
				<label htmlFor="" className="w-6 flex place-content-center">
					<IoSearch
						className="text-Secondary text-2xl p-1 "
						strokeWidth="15px"
					/>
				</label>
				<input
					type="text"
					name=""
					id=""
					placeholder="جستجو ..."
					className="w-full h-5 outline-none bg-transparent"
				/>
			</form>
		</div>
	);
}
