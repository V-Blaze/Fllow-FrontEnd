import React from "react";
import SpotlightDigDownCard from "./SpotlightDigDownCard";
import SpotlightURLCard from "./SpotlightURLCard";
import Link from "next/link";
import SpotlightProfileCard from "./SpotlightProfileCard";

const Spotlight = ({ products, userData, storeName }) => {
  return (
    <div>
      <div className="w-full grid grid-cols-1 gap-0 lg:flex lg:gap-6 h-screen bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="flex flex-col justify-center items-center lg:h-screen lg:max-w-[50%] lg:fixed col-span-1  px-[5%] py-[5%]">
          <SpotlightProfileCard userData={userData} />
        </div>
        <div className="col-span-2 pr-[5%] px-[5%] py-[5%] lg:ml-[25%]">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-4">
            {products &&
              products?.map((productData) => (
                <React.Fragment key={productData.title}>
                  {productData.type === "digital-download" ? (
                    <SpotlightDigDownCard productData={productData} storeName={storeName} />
                  ) : (
                    <SpotlightURLCard productData={productData} />
                  )}
                </React.Fragment>
              ))}
          </div>
          <div className="w-full flex items-center justify-center py-8">
            <Link href="/" className="py-2 px-4 rounded-2xl bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              {" "}
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
