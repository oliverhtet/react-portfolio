import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-12 justify-center">
      <img
        className="w-full h-40 object-cover rounded-lg mb-3"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Nyan Win Htet</h3>
        
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+95-09977023604</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">nyanwinhtet.ucsmgy.2019@gmail.com</span>
        </p>
      </div>
      <div className="flex mt-12 flex-col gap-4">
        <div className="flex gap-8">
        <span className="bannerIcon">
            <a href="https://www.facebook.com/nyanwinhtett" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            </span>
            
            <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/nyan-win-htet-20a5371b8" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft