"use client";
import { useState } from "react";
import p1 from "@/images/p1.png";
import p2 from "@/images/p2.png";
import p3 from "@/images/p3.png";
import Image from "next/image";

const Section2 = () => {
  const [imageHover, setImageHover] = useState(Array(3).fill(false)); // Initialize state for each image

  const oArray = [
    {
      imgSource: p1,
      siteLink: "https://mypassapp.netlify.app/",
      desc: "Instantly generate a secure, random password with the myPass online tool",
    },
    {
      imgSource: p2,
      siteLink: "https://txt-convert.netlify.app",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, harum.",
    },
    {
      imgSource: p3,
      siteLink: "https://astonishing-sopapillas-b29395.netlify.app",
      desc: "We Make Your Website Better",
    },
  ];

  const handleMouseOver = (index) => {
    const newImageHover = [...imageHover];
    newImageHover[index] = true;
    setImageHover(newImageHover);
  };

  const handleMouseOut = (index) => {
    const newImageHover = [...imageHover];
    newImageHover[index] = false;
    setImageHover(newImageHover);
  };

  return (
    <div className="mt-52 relative">
      <h1 className="text-5xl text-center font-open-sans font-bold">
        My Recent Work
      </h1>
      <p className="text-center my-5 font-semibold">
        Here are a few past design projects I've worked on. Want to see more?
        <a href="mailto:msshohanhossan@gmail.com" className="text-blue-500">
          Email me.
        </a>
      </p>
      <div className="mt-32 md:px-20  mb-96 flex md:flex-row items-center flex-col gap-5 justify-center">
        {oArray.map((item, index) => (
          <div
            key={index}
            className="bg-slate-950 p-5 duration-500 md:w-3/12 w-80 h-64 rounded-lg"
            onMouseOver={() => handleMouseOver(index)}
            onMouseOut={() => handleMouseOut(index)}
          >
            <Image
              src={item.imgSource}
              className={`object-cover w-full h-full ${
                imageHover[index] ? "hidden" : "block"
              }`}
              alt=""
            />
            <div className={`${imageHover[index] ? "block" : "hidden"}`}>
              <h1 className="text-gray-50 md:text-2xl text-xl p-2 text-center mb-8">
                {item.desc}
              </h1>
              <h2 className="mx-auto w-2/4">
                <a
                  href={item.siteLink}
                  target="_blank"
                  className="md:text-2xl text-lg text-nowrap border-2 border-purple-800 rounded-full px-3 flex items-center py-1 text-white hover:bg-violet-800 duration-500"
                >
                  Visit Website{" "}
                  <i className="fa-solid fa-greater-than font-extralight md:text-xl text-sm ml-1"></i>
                </a>
              </h2>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute left-2/4 -translate-x-2/4 -bottom-28">
        <a
          href="https://dribbble.com/shohanm390"
          className=" border-2 border-purple-600 rounded-full px-3 py-2 hover:bg-purple-600 hover:text-white font-semibold duration-200 text-xl text-nowrap"
        >
          <i className="fa-brands fa-dribbble"></i> See more on Dribble
        </a>
      </div>
    </div>
  );
};

export default Section2;
