import Image from "next/image";

export default function Header() {
  return (
    <header className="">
      <div className="flex">
        <div className="flex items-center gap-x-10">
          <Image src="/vercel.svg" alt="Logo" width={64} height={64} />
          <p className="text-xl font-bold">about</p>
        </div>
      </div>
    </ header>
  );
}
