import Navbar from './Navbar/Navbar';
import SearchBar from './SearchBar/SearchBar';

export default function Header({ changeMode, showVisibleMenu }) {
  return (
    <header className="fixed  z-40 w-full bg-white dark:bg-Primary-dark dark:text-white border-b border-gray-200 dark:border-gray-800 pl-5 h-20 top-0 right-0">
      <div className="h-20 flex justify-between items-center w-full">
        <SearchBar />
        <Navbar changeMode={changeMode} showVisibleMenu={showVisibleMenu} />
      </div>
    </header>
  );
}
