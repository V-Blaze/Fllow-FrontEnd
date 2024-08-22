import { Download, DownloadCloud } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CoachTrishURLCard = ({ productData }) => {
  return (
    <Link
      href=""
      className={`bg-transparent border-[1px] border-[#000] rounded-lg p-4 flex flex-col gap-8 w-full h-fit ${productData.style == "callout" && "cursor-default"}`}
    >
      <div className="w-full flex gap-4 items-center">
        <Image
          src={productData.productImageURL}
          alt="url logo"
          width={44}
          height={44}
          className="w-[44px] h-[44px] rounded-md self-start"
        />
        <div className="flex flex-col gap-2">
          <h4 className="font-bold">{productData.title}</h4>
          <p
            className={`${productData.style == "button" && "hidden"} text-sm font-semibold`}
          >
            {productData.subTitle}
          </p>
        </div>
      </div>
      <div className={`${productData.style == "button" && "hidden"} w-full`}>
        <button
          type="button"
          className="w-full bg-[#F91E77] rounded-md py-3 font-bold text-white"
        >
          {productData.buttonText}
        </button>
      </div>
    </Link>
  );
};

export default CoachTrishURLCard;