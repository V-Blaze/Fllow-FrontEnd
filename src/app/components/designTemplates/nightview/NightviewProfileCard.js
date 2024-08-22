import React from "react";
import { Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import { FaTiktok } from "react-icons/fa";

const NightviewProfileCard = ({ userData }) => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <Image
        width={100}
        height={100}
        className="rounded-full m-auto border border-gray-500 h-[180px] w-[180px] p-1"
        src="/vercel.svg"
      />
      <h4 className="text-2xl font-extrabold text-center text-[white]">{ userData?.storeName }</h4>
      <p className="text-sm font-semibold text-center text-white">Blockchain Software Engineer</p>
      <div className="flex justify-center items-center gap-4 my-4 text-[#33BBFE] text-[24px] font-extrabold">
        <FaTiktok strokeWidth={1} />
        <Youtube strokeWidth={1} />
        <Twitter strokeWidth={1} />
      </div>
    </div>
  );
};

export default NightviewProfileCard;
