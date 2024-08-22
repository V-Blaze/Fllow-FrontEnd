import React from "react";
import NightviewDigDownCard from "./NightviewDigDownCard";
import NightviewURLCard from "./NightviewURLCard";
import Link from "next/link";
import NightviewProfileCard from "./NightviewProfileCard";

const Nightview = ({ products, userData, storeName }) => {
  return (
    <div>
      <div className="w-full grid grid-cols-1 lg:flex lg:gap-6 gap-0 h-screen bg-[#0A185C]">
        <div className="flex flex-col justify-center items-center lg:h-screen lg:max-w-[50%] lg:fixed col-span-1  px-[5%] py-[5%]">
          <NightviewProfileCard userData={userData} />
        </div>
        <div className="bg-[#0A185C] col-span-2 pr-[5%] px-[5%] py-[5%] lg:ml-[25%]">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-4">
            {products &&
              products?.map((productData) => (
                <div key={productData.title} className="my-4">
                  {productData.type === "digital-download" ? (
                    <NightviewDigDownCard productData={productData} storeName={storeName} />
                  ) : (
                    <NightviewURLCard productData={productData} />
                  )}
                </div>
              ))}
          </div> 
          <div className="w-full flex items-center justify-center py-8">
            <Link href="/" className="py-2 px-4 rounded-2xl bg-slate-300">
              {" "}
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nightview;
