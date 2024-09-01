import Image from "next/image";

const navItems = [
  ["about", "https://img.icons8.com/fluency/28/user-male-circle--v1.png", "user-male-circle--v1"],
  ["skills", "https://img.icons8.com/fluency/28/programming.png", "programming"],
  ["works", "https://img.icons8.com/fluency/28/paint-palette.png", "paint-palette"],	
  ["faqs", "https://img.icons8.com/fluency/28/stackexchange.png", "stackexchange"],
  ["contact", "https://img.icons8.com/fluency/28/contact-card.png", "contact-card"],
]

export default function Header() {
  return (
    <header className="text-[#3F3F3F] py-8">
      <div className="flex mx-auto w-fit">
        <div className="flex items-center space-x-10">
          {navItems.map(([name, icon, alt]) => (
            <div className="flex items-center space-x-2">
              <Image width="28" height="28" src={icon} alt={alt} />
              <p className="text-xl font-bold">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </ header>
  );
}
