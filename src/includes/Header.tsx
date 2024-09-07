'use client';

import Image from "next/image";
import { useState } from "react";

const navItems = [
  ["about", "https://img.icons8.com/fluency/28/user-male-circle--v1.png", "user-male-circle--v1"],
  ["skills", "https://img.icons8.com/fluency/28/programming.png", "programming"],
  ["works", "https://img.icons8.com/fluency/28/paint-palette.png", "paint-palette"],	
  ["faqs", "https://img.icons8.com/fluency/28/stackexchange.png", "stackexchange"],
  ["contact", "https://img.icons8.com/fluency/28/contact-card.png", "contact-card"],
]

export default function Header() {
  const [hoverKey, setHoverKey] = useState<number>(-1);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleHover = (key: number) => {
    if (key == -1) {
      setIsHovered(false);
      setHoverKey(-1);

      return;
    }

    setHoverKey(key);
    setIsHovered(true);
  }

  return (
    <header className="text-[#3F3F3F] py-8 absolute w-full z-50">
      <div className="flex mx-auto w-fit">
        <div className="flex items-center space-x-10">
          {navItems.map(([name, icon, alt], key) => (
            <a href="/" key={key} className={`flex items-center space-x-2 transition-all duration-300 ease-in-out ${hoverKey == key && isHovered && "grayscale-0"} ${hoverKey != key && isHovered && "grayscale"}`} onMouseEnter={() => handleHover(key)} onMouseLeave={() => handleHover(-1)}>
              <Image width="28" height="28" src={icon} alt={alt} />
              <p className="text-xl font-bold">{name}</p>
            </a>
          ))}
        </div>
      </div>
    </ header>
  );
}
