// components/Footer.js
import Image from "next/image";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdPhone, MdEmail, MdLocationOn, MdAccessTime } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-[#3E3E43] text-white py-12 max-lg:pb-18 px-4 text-sm">
      <div className="max-w-[1100px] relative right-14 max-lg:right-0 mx-auto grid gap-10 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {/* Logo & Tagline */}
        <div className="space-y-4 col-span-1">
          <Image
            src="/images/components/navbar/logo_footer.png"
            alt="Auro Skin"
            width={100}
            height={100}
            className="object-contain"
          />
          <p className="text-white">
            Transform How You Feel <br /> Not Just How You Look
          </p>
        </div>

        {/* About Us */}
        <div>
          <h4 className="text-base font-semibold mb-3">About Us</h4>
          <ul className="space-y-2 ">
            <li>
              <a href="/about/clinic" className="hover:text-white">
                About Dr. Kunal Sayani
              </a>
            </li>
            <li>
              <a href="/about/dr-kunal" className="hover:text-white">
                About Clinic
              </a>
            </li>
            <li>
              <a href="/about/team" className="hover:text-white">
                Our Team
              </a>
            </li>
            
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-base font-semibold mb-3">Services</h4>
          <ul className="space-y-2 ">
            <li>
              <a href="/services/body/tummy-tuck-abdominoplasty" className="hover:text-white">
                Abdominoplasty
              </a>
            </li>
            <li>
              <a href="/services/breast/breast-augmentation" className="hover:text-white">
                Breast Augmentation
              </a>
            </li>
            <li>
              <a href="/services/hair/hair-transplant" className="hover:text-white">
               Hair Transplant
              </a>
            </li>
            <li>
              <a href="/services/breast/buttock-augmentation-bbl" className="hover:text-white">
              Buttock Augmentation
              </a>
            </li>
             <li>
              <a href="/services/breast/botox-(wrinkles-anti-ageing)" className="hover:text-white">
                Botox
              </a>
            </li>
            <li>
              <a href="/services/body/liposuction" className="hover:text-white">
              Liposuction
              </a>
            </li>
            <li>
              <a href="/services/breast/aesthetics" className="hover:text-white">
             Mommy Makeover
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-base font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 ">
            <li>
              <a href="/reviews" className="hover:text-white">
                Patient Reviews
              </a>
            </li>
            <li>
              <a href="/blogs" className="hover:text-white">
                Blogs
              </a>
            </li>
            <li>
              <a href="/book-appointment" className="hover:text-white">
                Appointments
              </a>
            </li>
            <li>
              <a href="/faqs" className="hover:text-white">
                Disclaimer
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-white">
                Terms and Condition
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="w-66 max-lg:w-72">
          <h4 className="text-base font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-3 ">
            <li className="flex items-start gap-2">
              <MdPhone className="text-teal-500" />
              <a href="tel:+9108048034415" className="hover:text-white">
                +91 9967267567, 02246056767
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MdEmail className="text-teal-500" />
              <a
                href="mailto:drkunalsayani.professional@gmail.com"
                className="hover:text-white break-all"
              >
                drkunalsayani.professional@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <FaLocationDot className="text-teal-500 w-10 pt-1" />
              <span className="leading-snug">
                TVAMEVA AESTHETICS - 501/502 Sapphire Plaza, Dadabhai Road,
                Swami Vivekananda Rd, Vile Parle West, Mumbai, Maharashtra
              </span>
            </li>
            <li className="flex items-start gap-2">
              <MdAccessTime className="text-teal-500 mt-1" />
              <span>
                Mon–Sat: 10 AM – 8 PM <br />
                Sunday: Closed
              </span>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5 text-xl text-teal-500">
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaFacebook />
            </a>

            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://youtube.com"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="w-full my-8 border-gray-600" />

      {/* Copyright */}
      <div className="text-center text-gray-400 text-xs px-4">
        © {new Date().getFullYear()}{" "}
        <a
          href="https://www.drkunalsayani.com/"
          className="text-white hover:underline"
        >
          drkunalsayani
        </a>
        . All rights reserved. Designed & developed by{" "}
        <a
          href="https://pracharkarsolutions.com"
          className="text-white hover:underline"
        >
          pracharkarsolutions
        </a>
        .
      </div>
    </footer>
  );
}
