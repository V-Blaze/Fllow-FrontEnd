import React from "react";
import { Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import { FaTiktok } from "react-icons/fa";

const StoneProfileCard = ({ userData }) => {
  return (
    <div className="pl-[5%] flex flex-col gap-4 items-center justify-center">
      <Image
        width={100}
        height={100}
        className="rounded-full border border-gray-500 h-[180px] w-[180px] p-1"
        src="/vercel.svg"
      />
      <h4 className="text-xl font-bold md:text-center">{userData?.storeName}</h4>
      <p className="text-sm font-semibold md:text-center">Blockchain Software Engineer</p>
      <div className="flex justify-center items-center gap-4">
        <FaTiktok strokeWidth={1} />
        <Youtube strokeWidth={1} />
        <Twitter strokeWidth={1} />
      </div>
    </div>
  );
};

export default StoneProfileCard;
