"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [searchVal, setSearchVal] = useState();
  const [user, setUser] = useState();
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const handleSearchChange = (e) => {
    setSearchVal(e.target.value);
  };

  return (
    <div className="flex flex-row w-full h-12 mb-10 bg-white">
      <div className="flex items-center h-full w-80">
        <div className="font-bold ">CONSTRUCTO</div>
      </div>
      <div className="flex items-center w-full h-full">
        <Image
          src="/icon_search.svg"
          width={20}
          height={20}
          alt="Search icon"
          className="mr-2"
        />
        <input
          type="text"
          value={searchVal}
          onChange={handleSearchChange}
          placeholder="Quick search"
        />
      </div>
      <div className="flex items-center w-fit">{user?.name}</div>
    </div>
  );
}
