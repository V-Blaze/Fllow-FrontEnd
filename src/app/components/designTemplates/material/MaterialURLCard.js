import { Download, DownloadCloud } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MaterialURLCard = ({ productData }) => {
  return (
    <Link
      href=""
      className={`bg-[#FA6666] rounded-2xl flex flex-col gap-8 w-full h-fit ${productData.style == "callout" && "cursor-default"}`}
    >
      <div className="w-full flex gap-4 items-center">
        <Image
          src={productData.productImageURL}
          alt="url logo"
          width={44}
          height={44}
          className={`w-[44px] h-[60px] bg-white ${productData.style == "button" ? "rounded-bl-2xl" : ""} rounded-tl-2xl self-start`}
        />
        <div className="flex flex-col gap-2">
          <h4 className="font-bold text-white">{productData.title}</h4>
          <p
            className={`${productData.style == "button" && "hidden"} text-sm text-white font-semibold`}
          >
            {productData.subTitle}
          </p>
        </div>
      </div>
      <div className={`${productData.style == "button" && "hidden"} w-full p-4`}>
        <button
          type="button"
          className="w-full bg-[#fff] text-black rounded-md py-3 font-bold"
        >
          {productData.buttonText}
        </button>
      </div>
    </Link>
  );
};

export default MaterialURLCard;
