import React from 'react';
import fllowLogo from "./images/FllowLogoBlack.png";
import Image from 'next/image';
import { RiYoutubeLine } from "react-icons/ri";
import { SlSocialTwitter } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { TbBrandTiktok } from "react-icons/tb";
import { SlSocialLinkedin } from "react-icons/sl";

const Footer = () => {
  const socialIcons = [
    {
      icon: <RiYoutubeLine />,
    },
    {
      icon: <SlSocialTwitter />,
    },
    {
      icon: <FaInstagram />,
    },
    {
      icon: <TbBrandTiktok />,
    },
    {
      icon: <SlSocialLinkedin />,
    },
  ]

  const style = {
    list: "text-[16px] text-[#131F60] py-[4px]"
  }

  return (
    <div className="bg-[#F2F4F8] py-[5%] px-[5%]">
      <div className="md:flex justify-between items-start gap-4">
        <div>
          <div className="flex items-center gap-5">
            {socialIcons.map((icon, index) => (
              <div key={index} className="bg-[#131F60] rounded-[50%] p-4">
                <div className="text-[#fff] font-extrabold text-[20px]">{icon.icon}</div>
              </div>
            ))}
          </div>
          <Image alt="flow logo" src={fllowLogo} className="w-[150px] hidden md:block md:mt-[20%]" />
        </div>
        <div className="mt-4 md:mt-0">
          <ul>
            <li className={style.list}>Sign In</li>
            <li className={style.list}>Afiliate Program</li>
            <li className={style.list}>Jobs</li>
            <li className={style.list}>Helps</li>
            <li className={style.list}>Privacy Policy</li>
            <li className={style.list}>Terms and condition</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
