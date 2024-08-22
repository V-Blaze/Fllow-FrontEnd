import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";
import { FaTiktok } from "react-icons/fa";

function MinimaProfileCard({ userData }) {
  return (
    <div className="pl-[5%] flex flex-col gap-4 items-center justify-center">
      <Image
        width={100}
        height={100}
        className="rounded-full border border-gray-500 h-[180px] w-[180px] p-1"
        src="/vercel.svg"
      />
      <h4 className="text-xl font-bold">{userData?.storeName}</h4>
      <p className="text-sm text-center">Blockchain Software Engineer</p>
      <div className="flex justify-center items-center gap-4">
        <FaTiktok strokeWidth={1} />
        <FaYoutube strokeWidth={1} />
        <FaTwitter strokeWidth={1} />
      </div>
    </div>
  );
}

export default MinimaProfileCard;
