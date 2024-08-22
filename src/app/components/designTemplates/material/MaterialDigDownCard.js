import { MdOutlineFileDownload } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MaterialDigDownCard = ({ productData, storeName }) => {
  return (
    <Link
      href={`/${storeName}/p/${productData.slug}`}
      className={`bg-[#FA6666] ${productData.style == "button" ? "rounded-2xl" : "rounded-3xl"}  flex flex-col gap-8 w-full  ${(productData.style == "preview" || productData.style == "callout") && "cursor-default"} h-fit`}
    >
      <div className="flex gap-3 items-center">
        <Image
          src={productData.productImageURL}
          alt="product logo"
          width={48}
          height={48}
          className={`${productData.style == "button" ? "rounded-bl-2xl rounded-tl-2xl w-[44px] h-[60px]" : "h-[150px] w-[108px] rounded-tl-3xl"} bg-white self-start`}
        />
        <div
          className={`flex ${productData.style == "button" ? "flex-row px-2" : "flex-col "} gap-1`}
        >
          <h4 className="font-bold text-white">{productData.title}</h4>
          <p
            className={`text-sm text-white  ${productData.style == "button" ? "hidden" : "flex"}`}
          >
            {productData.subTitle}
          </p>
          <span className="font-semibold text-[#F1FF9A]">
            ${productData?.checkoutPage?.price}
          </span>
        </div>
      </div>
      <div
        className={` ${productData.style == "button" ? "hidden" : "flex"} flex-col gap-4 p-4`}
      >
        <div
          className={` ${productData.style == "callout" ? "hidden" : "flex"}  items-center gap-2 px-4 py-4 bg-[#FB9495] rounded-lg text-sm font-bold`}
        >
          <div className="bg-[#FA66B2] rounded-full p-[3px] ">
            <MdOutlineFileDownload
              className="text-white text-[24px] p-1 rounded-full"
            />
          </div>
          <p className="text-black">Ready to Download</p>
        </div>
        <button
          type="button"
          className="w-full bg-[#fff] text-black rounded-md py-3 font-bold"
        >
          {productData.buttonText}
        </button>
        <button
          type="button"
          className={` ${productData.style == "callout" && "hidden"} text-sm text-[#fff]`}
        >
          Learn More
        </button>
      </div>
    </Link>
  );
};

export default MaterialDigDownCard;
