import Search from "./Search";

function Header() {
  return (
    <header className="w-4/5 mx-auto mt-10 flex justify-around items-center bg-primary-300 p-5 rounded-4xl">
      <h1 className="w-1/3 font-black text-3xl text-secondary-600">
        Country Browser
      </h1>
      <div className="w-1/3">
        <Search />
      </div>
    </header>
  );
}

export default Header;
