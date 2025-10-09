import FilterDropDown from "./FilterDropDown";
import Search from "./Search";
import ToggleDarkMode from "./ui/ToggleDarkMode";

const option = [
  { label: "Africa", value: "africa" },
  { label: "Americas", value: "americas" },
  { label: "Asia", value: "asia" },
  { label: "Europe", value: "europe" },
  { label: "Oceania", value: "oceania" },
];

function Header() {
  return (
    <header className="w-4/5 md:space-y-0 space-y-4 mx-auto mt-10 flex md:flex-row flex-col items-center bg-primary-300 p-5 rounded-4xl">
      <div className="md:w-1/3 w-full flex gap-x-2 items-center">
        <ToggleDarkMode />
        <h1 className="font-black xl:text-3xl md:text-lg text-2xl text-secondary-600">
          Country Browser
        </h1>
      </div>
      <div className="md:w-2/3 w-full md:space-y-0 space-y-4 flex md:flex-row flex-col gap-x-3">
        <div className="md:w-1/2 w-full">
          <Search />
        </div>
        <div className="md:w-1/2 w-full">
          <FilterDropDown options={option} filterField="region" />
        </div>
      </div>
    </header>
  );
}

export default Header;
