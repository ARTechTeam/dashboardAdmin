import { FaArrowRight } from 'react-icons/fa';

export default function RateBtn({ children }) {
  return (
    <div className="flex gap-2 items-center justify-center w-fit">
      <button className="bg-Secondary/10 text-Secondary rounded-full p-1.5 -rotate-45">
        <FaArrowRight />
      </button>
      <p>{children}</p>
    </div>
  );
}
