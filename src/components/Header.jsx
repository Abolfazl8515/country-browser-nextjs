import FilterDropDown from "./FilterDropDown";
import Search from "./Search";

const option = [
  { label: "Africa", value: "africa" },
  { label: "Americas", value: "americas" },
  { label: "Asia", value: "asia" },
  { label: "Europe", value: "europe" },
  { label: "Oceania", value: "oceania" },
];

function Header() {
  return (
    <header className="w-4/5 mx-auto mt-10 flex justify-around items-center bg-primary-300 p-5 rounded-4xl gap-x-3">
      <h1 className="w-1/3 font-black text-3xl text-secondary-600">
        Country Browser
      </h1>
      <div className="w-1/3">
        <Search />
      </div>
      <div className="w-1/3">
        <FilterDropDown options={option} filterField="region" />
      </div>
    </header>
  );
}

export default Header;
