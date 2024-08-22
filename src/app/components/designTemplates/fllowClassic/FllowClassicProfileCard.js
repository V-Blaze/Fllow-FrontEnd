import React from "react";
import { Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import { FaTiktok } from "react-icons/fa";

const FllowClassicProfileCard = ({ userData }) => {
  return (
    <div className="flex md:flex-col gap-2 items-center justify-between">
      <Image
        width={100}
        height={100}
        className="rounded-full border border-gray-500 h-[80px] w-[80px] md:h-[180px] md:w-[180px] p-1"
        src="/vercel.svg"
      />
      <div>
        <h4 className="text-xl font-bold md:text-center">{userData?.storeName}</h4>
        <p className="text-sm font-semibold md:text-center">Blockchain Software Engineer</p>
        <div className="flex items-center gap-4 md:justify-center">
          <FaTiktok strokeWidth={1} />
          <Youtube strokeWidth={1} />
          <Twitter strokeWidth={1} />
        </div>
      </div>
    </div>
  );
};

export default FllowClassicProfileCard;
