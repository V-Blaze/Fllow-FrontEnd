import React from "react";
import TylaDigDownCard from "./TylaDigDownCard";
import TylaURLCard from "./TylaURLCard";
import Link from "next/link";
import TylaProfileCard from "./TylaProfileCard";

const Tyla = ({ products, userData, storeName }) => {
  return (
    <div>
      <div className="w-full grid grid-cols-1 gap-0 lg:flex lg:gap-6 h-screen bg-[#F0F0F0]">
        <div className="flex flex-col justify-center bg-[#FFFFFF] shadow-lg rounded-lg items-center lg:h-screen lg:max-w-[50%] lg:fixed col-span-1  px-[5%] py-[5%]">
          <TylaProfileCard userData={userData} />
        </div>
        <div className="bg-[#F0F0F0] col-span-2 pr-[5%] px-[5%] py-[5%] lg:ml-[25%]">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-4">
            {products &&
              products?.map((productData) => (
                <React.Fragment key={productData.title}>
                  {productData.type === "digital-download" ? (
                    <TylaDigDownCard productData={productData} storeName={storeName} />
                  ) : (
                    <TylaURLCard productData={productData} />
                  )}
                </React.Fragment>
              ))}
          </div>
          <div className="w-full flex items-center justify-center py-8">
            <Link href="/" className="py-2 px-4 rounded-2xl bg-[#000] text-white hover:bg-[#14202b]">
              {" "}
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tyla;
