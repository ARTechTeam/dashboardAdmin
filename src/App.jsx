import { useEffect, useState } from 'react';
import Header from './Header/Header';
import NavUl from './Header/Navbar/NavUl';
import Body from './Body/Body';
import Dashboard from './Header/Dashboard/Dashboard';
import SearchBar from './Header/SearchBar/SearchBar';
import Navbar from './Header/Navbar/Navbar';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isVisibleMenu, setIsVisibleMenu] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  function changeMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  function showVisibleMenu() {
    setIsVisibleMenu((prev) => !prev);
  }

  return (
    <div className={`font-secondary bg-gray-100 text-sm md:flex`}>
      <div className="min-w-72 z-50 fixed max-w-72 max-md:hidden max-h-svh min-h-svh h-full overflow-y-scroll overflow-x-hidden">
        <div className="min-md:absolute">
          <Dashboard />
        </div>
      </div>
      <div className="*:md:pr-[300px]">
        <Header changeMode={changeMode} showVisibleMenu={showVisibleMenu} />
        <Body />
      </div>
    </div>
  );
}

export default App;
