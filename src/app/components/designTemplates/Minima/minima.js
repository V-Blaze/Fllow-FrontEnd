import React from "react";
import MinimaDigitalDownloadCard from "./MinimaDigitalDownloadCard";
import MinimaURLCard from "./MinimaURLCard";
import Link from "next/link";
import MinimaProfileCard from "./MinimaProfileCard";

function Minima({ products, userData, storeName }) {
  return (
    <div>
      <div className="w-full grid grid-cols-1 lg:flex lg:gap-6 gap-0 h-screen bg-[#F6F6F6]">
        <div className="flex flex-col justify-center items-center lg:h-screen lg:max-w-[50%] lg:fixed col-span-1  px-[5%] py-[5%]">
          <MinimaProfileCard userData={userData} />
        </div>
        <div className="bg-[#F6F6F6] col-span-2 pr-[5%] px-[5%] py-[5%] lg:ml-[25%]">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-4">
            {products &&
              products?.map((productData) => (
                <React.Fragment key={productData.title}>
                  {productData.type === "digital-download" ? (
                    <MinimaDigitalDownloadCard productData={productData} storeName={storeName} />
                  ) : (
                    <MinimaURLCard productData={productData} />
                  )}
                </React.Fragment>
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
}

export default Minima;