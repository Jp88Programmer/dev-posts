import Link from "next/link";
import React from "react";
("use striect");
const Navbar = () => {
  return (
    <div className="bg-blue-900 bg-gradient-to-l from-white via-white dark:from-black dark:via-black-900  w-full flex gap-5 px-10 py-5">
      <ul className="flex w-full items-center gap-10">
        <li className="navbar-item">
          <Link href="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link href="/blogs">Blogs</Link>
        </li>
        <li className="navbar-item">
          <Link href="/newsletters">Newsletters</Link>
        </li>
        <li className="navbar-item">
          <Link href="/summarys">Summarys</Link>
        </li>
        <li className="navbar-item">
          <Link href="/articles">Articles</Link>
        </li>
        <li className="navbar-item">
          <Link href="/about">About</Link>
        </li>
        <li className="navbar-item">
          <Link href="/contact"> Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
