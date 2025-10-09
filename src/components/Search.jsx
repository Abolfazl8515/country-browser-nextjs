"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

function Search() {
  const queryParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const search = queryParams.get("search");
  const [value, setValue] = useState(search ?? "");

  const changeHandler = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    const newParams = new URLSearchParams(queryParams.toString());
    if (newValue) {
      newParams.set("search", newValue);
    } else {
      newParams.delete("search");
    }
    router.push(`${pathName}?${newParams.toString()}`, {
      scroll: false,
    });
  };

  return (
    <input
      type="text"
      name="search"
      placeholder="Search for countries ..."
      className="textField__input py-3 text-xs bg-secondary-0"
      onChange={(e) => changeHandler(e)}
      value={value}
    />
  );
}

export default Search;
