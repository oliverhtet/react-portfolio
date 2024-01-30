import React from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Laravel Developer.", "Full Stack Web Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Nyan Win Htet</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>

            <p className="text-justify">    Hello,I'm on an exciting journey into the vast and dynamic world of IT. As a newcomer to the field, I bring a fresh perspective, eagerness to learn, and a passion for embracing new technologies that shape the digital landscape
              Currently, I am actively engaged in continuous learning, immersing myself in the ever-evolving realm of information technology. My journey began with a genuine curiosity about how technology powers our world, and I've since discovered a love for problem-solving and creative solutions that IT offers.
              Throughout my career, I have had the pleasure of working on diverse projects, ranging from dynamic single-page applications to robust e-commerce platforms. I am adept at collaborating with cross-functional teams, translating client requirements into technical solutions, and staying up-to-date with the latest industry trends and best practices.
              What excites me most about IT is the limitless potential for innovation and the opportunity to contribute to shaping the future. I thrive on challenges, and each obstacle is a chance to learn and improve. I am open to collaboration, mentorship, and any opportunity that allows me to apply my skills and learn from experienced professionals in the field.
            </p>

      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;