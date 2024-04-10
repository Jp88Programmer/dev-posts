"use client";
import useWindow from "@/hooks/useWindow";
import Image from "next/image";
import React, { useState } from "react";
import Hamburger from "../../public/hamburger-menu.svg";
import { Button } from "@nextui-org/react";

const Header = () => {
  const size = useWindow();
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="w-full p-6 flex gap-5 items-center justify-between border-b-2 border-[#d3cedb]">
      <div>
        <Image src="" alt="" />
      </div>
      <div className="flex gap-3">
        <input className="w-[50vw] py-3 px-4 md:py-2 md:px-3 border-2 border-[#c2c2c2] rounded-xl text-black font-medium text-lg outline-none" />
        <Button color="default" variant="solid" className="button-primary">
          Search
        </Button>
      </div>
      {size < 768 ? (
        <Image src={Hamburger} alt="haburger" />
      ) : (
        <Button
          color="default"
          variant="solid"
          className="button-primary"
          onClick={() => {
            setIsClicked(!isClicked);
          }}
        >
          Register
        </Button>
      )}
    </div>
  );
};

export default Header;
