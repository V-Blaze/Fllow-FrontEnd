import React from "react";
import { Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import { FaTiktok } from "react-icons/fa";

const MaterialProfileCard = ({ userData }) => {
  return (
    <div className="flex md:flex-col md:py-4 md:px-7 gap-4 items-start bg-[#FA66B2] rounded-3xl">
      <Image
        width={100}
        height={100}
        className="rounded-tl-3xl rounded-bl-3xl md:rounded-lg md:m-auto h-[100%] md:h-[180px] w-[180px] p-1"
        src="/vercel.svg"
      />
      <div>
        <h4 className="text-xl font-bold text-white py-4 md:text-center">{userData?.storeName}</h4>
        <p className="text-sm font-semibold text-white md:text-center">Blockchain Software Engineer</p>
        <div className="flex items-center md:justify-center gap-4 mt-6 text-white my-4">
          <FaTiktok strokeWidth={1} />
          <Youtube strokeWidth={1} />
          <Twitter strokeWidth={1} />
        </div>
      </div>
    </div>
  );
};

export default MaterialProfileCard;
