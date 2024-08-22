import { ChevronLeftIcon } from "lucide-react";
import { useRouter } from 'next/navigation';
import NightviewProfileCard from "./NightviewProfileCard";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const NightviewCheckout = ({ productData }) => {
  const router = useRouter();
  return (
    <div className="w-full grid grid-cols-1 lg:flex lg:gap-6 gap-2 h-screen bg-[#0A185C]">
      <div className="flex-col hidden md:flex justify-center items-center lg:h-screen lg:max-w-[50%] lg:fixed col-span-1  px-[5%] py-[5%]">
        <NightviewProfileCard />
      </div>
      <div className="col-span-2 pr-[5%] px-[5%] py-[5%] md:ml-[25%] lg:ml-[30%]">
        <div className="w-full relative px-4 py-2">
          <Image
            src={productData.checkoutImageURL}
            alt="checkout image"
            className="h-[171px] w-full rounded-lg"
            height={171}
            width={100}
          />
          <button type="button" onClick={() => router.back()}>
            <ChevronLeftIcon
              strokeWidth={1}
              className="absolute top-2 left-3 rounded-full bg-gray-300 p-1"
            />
          </button>
        </div>
        <div className="bg-[#0A185C] px-4 py-2">
          <div className="flex flex-col gap-4">
            <h4 className="text-3xl font-bold text-white">{productData.descriptionTitle}</h4>
            <p className="font-semibold text-xl text-[#fff]">
              ${productData.hasDiscount && productData.discoutPrice}
              {productData.hasDiscount ? (
                <span className="text-[#fff]/50 line-through mx-2">
                  {productData.price}
                </span>
              ) : (
                productData.price
              )}
            </p>
            <div
              className="text-white"
              dangerouslySetInnerHTML={{ __html: productData?.descriptionBody }}
            />
          </div>
          <div className="w-full mt-4">
            <p className="text-center font-bold text-white text-lg">
              {productData.BottomTitle}
            </p>
            <p className="text-center font-bold text-lg text-white">Pay with Crypto</p>
            <div className="flex flex-col gap-5 w-full my-4">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full outline-none text-[#808EB6] border-[1px] border-white focus:outline-none py-4 px-2 rounded-md bg-transparent "
              />
              <input
                type="text"
                placeholder="Enter Your Email"
                className="w-full outline-none text-[#808EB6] border-[1px] border-white focus:outline-none py-4 px-2 rounded-md bg-transparent "
              />
            </div>
            <button
              type="button"
              className="w-full bg-[#33BBFE] text-black rounded-md py-3 font-bold mt-5"
            >
              {productData.ButtonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NightviewCheckout;
