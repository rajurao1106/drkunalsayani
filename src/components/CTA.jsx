"use client";
import React from "react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { BsYoutube } from "react-icons/bs";

export default function CTA() {
  return (
    <div className="">
      <div
        className="fixed rounded-tl-lg rounded-bl-lg bg-[#0084ff] z-50 top-[30vh] right-0
        max-lg:bottom-0 max-lg:top-auto max-lg:w-full max-lg:flex max-lg:flex-row-reverse max-lg:rounded-none"
      >
        {/* Phone Button */}
        <a
          href="tel://918048034415"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-white p-3 shadow-md rounded-tl-lg max-lg:rounded-tl-none hover:bg-gray-700 
          transition duration-200 flex items-center justify-center max-lg:w-full"
          aria-label="Call for appointment"
        >
          <FiPhoneCall size={22} />
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919970939063"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-3 shadow-md hover:bg-[#1ebe5d] transition duration-200 flex items-center justify-center max-lg:w-full"
          aria-label="WhatsApp appointment"
        >
          <FaWhatsapp size={22} />
        </a>

        {/* Email Button */}
        <a
          href="drkunalsayani.professional@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1AAEBC] text-white p-3 shadow-md hover:bg-[#5fc1ca] transition duration-200 flex items-center justify-center max-lg:w-full"
          aria-label="Email appointment"
        >
          <MdOutlineMailOutline size={22} />
        </a>

        {/* Share Button */}
        <div className="relative group max-lg:w-full ">
          <div
            className="text-white bg-[#0084ff] rounded-bl-lg p-3 flex items-center justify-center"
            aria-label="Share this page"
          >
            <IoMdShare  size={24}/>
          </div>

          {/* Share Icons - Desktop */}
          <div
            className="absolute -top-30 justify-center items-center max-lg:rounded-tr-lg max-lg:rounded-br-lg group-hover:top-12
             max-lg:top-12 max-lg:group-hover:-top-44 w-full duration-300 -z-50 right-0 bg-white 
            rounded-l-lg shadow-lg py-2 px-3 flex-col 
            gap-3 flex transition-all "
          >
            <a
              href="https://www.instagram.com/drkunalsayani/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E1306C] hover:scale-110 transition text-xl max-lg:text-3xl"
              aria-label="Share on Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/sharer/sharer.php?u="
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1877F2] hover:scale-110 transition text-xl max-lg:text-3xl"
              aria-label="Share on Facebook"
            >
              <FaFacebookF  />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF0000] hover:scale-110 transition text-xl max-lg:text-3xl"
              aria-label="Share on YouTube"
            >
              <BsYoutube  />
            </a>
            <a
              href="https://www.linkedin.com/shareArticle?mini=true&url="
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0077B5] hover:scale-110 transition text-xl max-lg:text-3xl"
              aria-label="Share on LinkedIn"
            >
              <FaLinkedin  />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
