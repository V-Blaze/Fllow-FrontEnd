import React from "react";
import StoneDigDownCard from "./StoneDigDownCard";
import StoneURLCard from "./StoneURLCard";
import Link from "next/link";
import StoneProfileCard from "./StoneProfileCard";

const Stone = ({ products, userData, storeName }) => {
  return (
    <div>
      <div className="w-full grid grid-cols-1 gap-0 lg:flex lg:gap-6 h-screen bg-[#FAF9F6]">
        <div className="flex flex-col justify-center items-center lg:h-screen lg:max-w-[50%] lg:fixed col-span-1  px-[5%] py-[5%]">
          <StoneProfileCard userData={userData} />
        </div>
        <div className="bg-[#FAF9F6] col-span-2 pr-[5%] px-[5%] py-[5%] lg:ml-[25%]">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-4">
            {products &&
              products?.map((productData) => (
                <React.Fragment key={productData.title}>
                  {productData.type === "digital-download" ? (
                    <StoneDigDownCard productData={productData} storeName={storeName} />
                  ) : (
                    <StoneURLCard productData={productData} />
                  )}
                </React.Fragment>
              ))}
          </div>
          <div className="w-full flex items-center justify-center py-8">
            <Link href="/" className="py-2 px-4 rounded-2xl bg-teal-500 text-white hover:bg-teal-600 transition-colors duration-300">
              {" "}
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stone;