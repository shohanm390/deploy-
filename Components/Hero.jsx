import Image from "next/image";
import character from "@/images/character.png";

const Hero = () => {
  return (
    <div>
      <div>
        <h1 className="text-center text-5xl font-semibold my-10 font-mono">
          Designer, Frontend Developer & Mentor
        </h1>
        <h2 className="text-center text-3xl">
          I design and code beautifully simple things, and I love what I do.
        </h2>
      </div>
      <div className="bg-purple-700 rounded-full w-64 h-64 object-contain mx-auto mt-24">
        <Image src={character} className="rounded-b-full h-72 w-64 -mt-20 inline-block "></Image>
      </div>
    </div>
  );
};

export default Hero;
