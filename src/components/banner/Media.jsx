import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs, SiLaravel, SiTypescript } from "react-icons/si";
const Media = () => {
  return (
    <div className="  xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
            <a href="https://www.facebook.com/nyanwinhtett" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            </span>
            <span className="bannerIcon">
            <a href=" www.linkedin.com/in/nyan-win-htet-20a5371b8" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            </span>
            <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/nyan-win-htet-20a5371b8" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base mt-3 uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiLaravel />
            </span>
            <span className="bannerIcon">
              <SiTypescript />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media