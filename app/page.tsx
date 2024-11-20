/* eslint-disable @next/next/no-img-element */

import { BiLogoDiscord, BiLogoGithub, BiLogoLinkedin, BiLogoTelegram } from "react-icons/bi";

/* eslint-disable jsx-a11y/alt-text */
export default function Home() {
  return (
    <div
      className="flex min-h-screen
      w-full items-center justify-center"
    >
      <div
        className="flex flex-col items-center
          justify-center gap-8 p-5 text-center"
      >
        <img
          src={"Profile.jpg"}
          className="w-[250px] h-[235px] 
              sm:w[300px] rounded-full"
        />
        <div className="space-y-1 sm:space-y-3">
          <h1 className="bg-gradient-to-r 
          from-teal-400 to-teal-600 bg-clip-text
          text-4xl font-semibold text-transparent
          md:text-4xl lg:text-5xl">Mohammad KarbalaieMehdi</h1>
          <h3 className="bg-gradient-to-r 
          from-teal-400 to-teal-600 bg-clip-text
          text-xl font-semibold text-transparent
          md:text-2xl lg:text-3xl">Web Developer</h3>
          <p className="max-w-[500px] text-sm 
          text-gray-500 mx-auto">Lorem ipsum dolor, sit amet
             consectetur adipisicing elit. Nisi id
            fugit magnam voluptatum officiis.
             Molestias quasi veritatis
            excepturi cumque voluptates iure 
            non dolorem iusto. Aliquam quisquam
            facilis molestias quod corporis!
          </p>
        </div>
        <div className="flex gap-3">
          <BiLogoGithub   className="h-10 w-10 cursor-pointer
          rounded-full border-2 border-transparent bg-teal-600
          p-2 text-white transition-all duration-200 
          hover:scale-110 hover:border-teal-600 
          hover:bg-white hover:text-teal-600 md:h-12 md:w-12"/>
          <BiLogoDiscord  className="h-10 w-10 cursor-pointer
          rounded-full border-2 border-transparent bg-teal-600
          p-2 text-white transition-all duration-200 
          hover:scale-110 hover:border-teal-600 
          hover:bg-white hover:text-teal-600 md:h-12 md:w-12"/>
          <BiLogoTelegram className="h-10 w-10 cursor-pointer
          rounded-full border-2 border-transparent bg-teal-600
          p-2 text-white transition-all duration-200 
          hover:scale-110 hover:border-teal-600 
          hover:bg-white hover:text-teal-600 md:h-12 md:w-12"/>
          <BiLogoLinkedin className="h-10 w-10 cursor-pointer
          rounded-full border-2 border-transparent bg-teal-600
          p-2 text-white transition-all duration-200 
          hover:scale-110 hover:border-teal-600 
          hover:bg-white hover:text-teal-600 md:h-12 md:w-12"/>
        </div>
      </div>
    </div>
  );
}
