import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Header = () => {
  const router = useRouter();

  const handleHover = (href: any) => {
    router.push(href);
  };

  return (
    <div className="flex gap-5 p-10 justify-center items-center">
      <div>
        <button
          className="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-indigo-100 rounded hover:bg-white group py-1.5 px-2.5"
          onClick={() => handleHover("/payment")}
        >
          <span className="w-56 h-48 rounded bg-sky-900 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">
            payment
          </span>
        </button>
      </div>
      <div onClick={() => handleHover("/")}>
        <Link href="/">home</Link>
      </div>
      <div onClick={() => handleHover("/about")}>
        <Link href="/about">about</Link>
      </div>
      <div onClick={() => handleHover("/dashboard")}>
        <Link href="/dashboard">dashboard</Link>
      </div>
    </div>
  );
};

export default Header;
