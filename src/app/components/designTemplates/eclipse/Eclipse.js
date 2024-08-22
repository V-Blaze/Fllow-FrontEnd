import React from 'react';
import EclipseDigDownloadCard from './EclipseDigDownloadCard';
import EclipseURLCard from './EclipseURLCard';
import Link from "next/link";
import EclipseProfileCard from './EclipseProfileCard';

const Eclipse = ({ products, userData, storeName }) => {
  return (
    <div>
      <div className="w-full grid grid-cols-1 gap-0 lg:flex lg:gap-6 h-screen" style={{ background: 'linear-gradient(to bottom, #9B00FF, #4B00FF)', width: '100%', height: '100%', padding: '4%' }}>
        <div className="flex flex-col justify-center items-center lg:h-screen lg:max-w-[50%] lg:fixed col-span-1  px-[5%] py-[5%]">
          <EclipseProfileCard userData={userData} />
        </div>
        <div className="col-span-2 pr-[5%] px-[5%] py-[5%] lg:ml-[25%]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-auto">
            {products &&
              products?.map((productData) => (
                <React.Fragment key={productData.title}>
                  {productData.type === "digital-download" ? (
                    <EclipseDigDownloadCard productData={productData} storeName={storeName} />
                  ) : (
                    <EclipseURLCard productData={productData} />
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
};

export default Eclipse;
