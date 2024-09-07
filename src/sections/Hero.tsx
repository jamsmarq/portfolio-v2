import { space_grotesk } from "@/app/layout";
import Image from "next/image";

export default function Hero() {
  return (
    <div id="hero" className="text-[#1E1E1E] h-fit text-center relative overflow-x-clip">
      <div className="mx-auto relative flex max-w-screen-lg items-center h-screen text-center">
        <div className="h-fit relative w-full">
          <div className="mx-auto text-center w-fit space-y-8 flex pt-10 flex-col items-center">
            <h1 className={`${space_grotesk.className} text-6xl font-bold leading-snug w-[49rem]`}>A <span className="text-[#4D7EFF]">Designer </span>and <span className="text-[#FF4D4D]">Developer </span>from Gensan who's here to learn, improve, & survive.</h1>

            <p className="text-xl text-[#3f3f3f] font-medium w-[43rem] leading-normal">To be specific, I aspiringly specialized in <b>UX Design</b> and <b>Web Development</b>. I play musical instruments and learn Korean sometimes, just so you know.</p>

            <div className="space-x-5">
              <button className={`${space_grotesk.className} font-bold text-xl rounded-full bg-[#937CE4] text-white px-8 py-4 border-8 border-[#BEB4EA]`}>Connect now</button>
              <button className={`${space_grotesk.className} font-bold text-xl rounded-full bg-[#ffffff] px-8 py-4 border-8 border-[#D9DBDD]`}>Learn more</button>
            </div>
          </div>

          <Image src="/hero-left.png" width="500" height="500" alt="hero-left-image" className="absolute -bottom-52 -left-96 -z-10" />
          <Image src="/hero-right.png" width="500" height="500" alt="hero-right-image" className="absolute -bottom-52 -right-96 -z-10" />

        </div>

        <Image src="/circle-accent.png" width="792" height="792" alt="hero-right-image" className="absolute -top-[26rem] -left-80 -z-20" />

      </div>

      <Image src="/circle-accent.png" width="792" height="792" alt="hero-right-image" className="absolute top-1/3 -right-72 -z-20" />
    </div>
  );
}
