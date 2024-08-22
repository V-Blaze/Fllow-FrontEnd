import React from "react";
import { CiYoutube } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa6";
import Image from "next/image";
import { FaTiktok } from "react-icons/fa";

const EclipseProfileCard = ({ userData }) => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <Image
        width={100}
        height={100}
        className="rounded-full border border-gray-500 h-[180px] w-[180px] p-1"
        src="/vercel.svg"
      />
      <h4 className="text-xl font-bold text-white">{userData?.storeName}</h4>
      <p className="text-sm font-semibold text-white">Blockchain Software Engineer</p>
      <div className="flex justify-center items-center gap-4">
        <FaTiktok strokeWidth={1} className="text-white text-[24px] font-extrabold" />
        <CiYoutube strokeWidth={1} className="text-white text-[24px] font-extrabold" />
        <FaTwitter strokeWidth={1} className="text-white text-[24px] font-extrabold" />
      </div>
    </div>
  );
};

export default EclipseProfileCard;
