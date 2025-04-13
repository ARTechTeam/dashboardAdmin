import { useState } from 'react';
import DashboardHead from './DashboardHead';
import DashboardBody from './DashboardBody';

export default function Dashboard() {
  const [isVisible, setIsVisible] = useState(false);

  function changeVisible() {
    setIsVisible((prev) => !prev);
  }

  return (
    <div className="min-h-svh">
      <div className="flex flex-col ">
        <DashboardHead changeVisible={changeVisible} />

        <div className="max-md:hidden overflow-y-auto">
          <DashboardBody />
        </div>

        <div
          className={`transition-all z-50 duration-700 ease-in-out transform min-md:hidden ${
            isVisible ? 'translate-x-0 opacity-100 ' : 'translate-x-full opacity-0'
          }`}
        >
          <DashboardBody />
        </div>
      </div>
    </div>
  );
}
