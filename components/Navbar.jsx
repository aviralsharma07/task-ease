"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex py-3 flex-wrap justify-around">
      <h1 className="text-lg font-semibold">TaskEase</h1>
      <ul className="flex gap-[40px] text-m">
        <Link href="/">Home </Link>
        {/* <li>Products</li> */}
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </ul>
    </div>
  );
};

export default Navbar;
