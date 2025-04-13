import { FaArrowRight, FaYenSign } from 'react-icons/fa';
import RateBtn from '../../Components/RateBtn';

export default function Budget() {
  return (
    <div className="p-3 dark:bg-slate-700 bg-white group w-full h-full shadow relative overflow-hidden flex flex-col justify-center items-center gap-3 hover:cursor-pointer">
      <button className=" bg-light-border rounded-[50%] group-hover:bg-Primary transition-all duration-500 p-4">
        <FaYenSign className="text-Primary text-3xl group-hover:text-light-border transition-all duration-500" />
      </button>
      <h2 className="text-2xl font-secondary-bold">{340988}</h2>
      <figcaption className="text-xs text-black/30">Our Annual Income</figcaption>
      <RateBtn>90.54%</RateBtn>

      <span className="absolute -rotate-[135deg] -left-10 -top-10 ">
        <FaYenSign className="text-[150px] text-black/5 " />
      </span>
    </div>
  );
}
