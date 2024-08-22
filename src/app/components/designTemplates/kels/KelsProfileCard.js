import React from "react";
import { Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import { FaTiktok } from "react-icons/fa";

const KelsProfileCard = ({ userData }) => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <Image
        width={100}
        height={100}
        className="h-[180px] w-full md:h-[180px] md:w-[180px] md:p-1"
        src="/vercel.svg"
      />
      <div className="flex md:flex-col justify-center gap-2 items-baseline">
        <div>
          <h4 className="text-xl font-bold md:text-center">{userData?.storeName}</h4>
          <p className="text-sm font-semibold w-[70%] md:text-center md:w-full">Blockchain Software Engineer</p>
        </div>
        <div className="flex flex-wrap justify-center md:m-auto items-center gap-4">
          <FaTiktok strokeWidth={1} />
          <Youtube strokeWidth={1} />
          <Twitter strokeWidth={1} />
        </div>
      </div>
    </div>
  );
};

export default KelsProfileCard;
