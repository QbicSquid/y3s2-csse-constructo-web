"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function SidebarButton({ name }) {
  const pathname = usePathname();
  const isCurrentPage = pathname.includes(name);
  const router = useRouter();

  const handleClick = () => {
    console.log("meow");
    router.push(`/dashboard/${name}`);
  };

  return (
    <div
      onClick={handleClick}
      className={
        "flex flex-row items-center mx-4 mb-4 rounded hover:cursor-pointer active:scale-95" +
        (isCurrentPage ? " bg-custom_blue-2" : "")
      }
    >
      <Image
        src={"/sidebar/" + name + (isCurrentPage ? "_blue" : "_grey") + ".svg"}
        width={30}
        height={30}
        alt={name + " icon"}
        className="my-2 ml-2 mr-3"
      />
      <div
        className={
          "font-semibold" +
          (isCurrentPage ? " text-custom_blue-1" : " text-custom_black-1")
        }
      >
        {name.substring(0, 1).toUpperCase() + name.substring(1)}
      </div>
    </div>
  );
}
