import { DownloadCloud } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NightviewDigDownCard = ({ productData, storeName }) => {
  return (
    <Link
      href={`/${storeName}/p/${productData.slug}`}
      className={`bg-[#0A185C] border-[1px] border-[#fff] rounded-3xl p-4 flex flex-col gap-8 w-full  ${(productData.style == "preview" || productData.style == "callout") && "cursor-default"} h-fit`}
    >
      <div className="flex gap-3 items-center">
        <Image
          src={productData.productImageURL}
          alt="product logo"
          width={48}
          height={48}
          className="h-[48px] w-[48px] rounded-md self-start"
        />
        <div
          className={`flex ${productData.style == "button" ? "flex-row" : "flex-col "} gap-1`}
        >
          <h4 className="font-bold text-white">{productData.title}</h4>
          <p
            className={`text-sm text-white  ${productData.style == "button" ? "hidden" : "flex"}`}
          >
            {productData.subTitle}
          </p>
          <span className="font-semibold text-[#33BBFE]">
            ${productData?.checkoutPage?.price}
          </span>
        </div>
      </div>
      <div
        className={` ${productData.style == "button" ? "hidden" : "flex"} flex-col gap-4`}
      >
        <div
          className={` ${productData.style == "callout" ? "hidden" : "flex"} text-white items-center gap-2 pl-4 text-sm`}
        >
          <DownloadCloud
            strokeWidth={1}
            size={20}
            className="bg-[#33BBFE]/40 p-1 rounded-full"
          />
          Ready to Download
        </div>
        <button
          type="button"
          className="w-full bg-[#33BBFE] text-black rounded-md py-3 font-bold"
        >
          {productData.buttonText}
        </button>
        <button
          type="button"
          className={` ${productData.style == "callout" && "hidden"} text-sm text-[#33BBFE]"`}
        >
          Learn More
        </button>
      </div>
    </Link>
  );
};

export default NightviewDigDownCard;
