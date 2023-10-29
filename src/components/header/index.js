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

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.assign("/login");
  };

  return (
    <div className="flex flex-row w-full h-fit mb-10 bg-white py-4">
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
      <div className="flex items-center w-auto min-w-fit">{user?.name}</div>
      <div
        className="p-2  rounded hover:cursor-pointer hover:bg-custom_blue-2 mx-4"
        onClick={handleLogout}
      >
        <Image
          src="/icon_logout.svg"
          width={20}
          height={20}
          alt="Search icon"
        />
      </div>
    </div>
  );
}
