import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaHeadphonesAlt } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { TiSocialTwitter } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="bg-black text-white p-5">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-5 gap-5">
        <div>
          <h3 className="text-xl font-semibold mb-4">CS-Ticket System</h3>
          <p className="text-[#A1A1AA]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div>
          <p className="text-xl font-semibold mb-4">Company</p>
          <ul className="text-[#A1A1AA]">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Our Missiuon</a>
            </li>
            <li>
              <a href="#">Contact Sale</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="text-[#A1A1AA]">
            <li>
              <a href="#">Products & Services</a>
            </li>
            <li>
              <a href="#">Customer Stories</a>
            </li>
            <li>
              <a href="#">Download Apps</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-semibold mb-4">Information</p>
          <ul className="text-[#A1A1AA]">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Join Us</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-semibold mb-4">Information</p>
          <ul className="text-[#A1A1AA]">
            <li>
              <div className="flex items-center gap-2">
                <FaFacebookSquare />
                <a href="#">@CS-Ticket System</a>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <AiFillLinkedin />
                <a href="#">@CS-Ticket System</a>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <TiSocialTwitter />
                <a href="#">@CS-Ticket System</a>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <FaHeadphonesAlt />
                <a href="#">support@cst.com</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <hr className="opacity-30 mt-4" />
      <p className=" mt-4 text-center max-w-[1280px] mx-auto">
        © {new Date().getFullYear()} - CS — Ticket System. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
