import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import heroImage from "./images/heroImage.png";
import info1 from "./images/infographic-1.png";
import info2 from "./images/infographic-2.png";
import { creatorsStore } from './data/storedata';
import { feedback } from './data/feedbackdata';
import Image from 'next/image';
import "./style.css";

const Homepage = () => {
  const usersStore = creatorsStore;
  const usersFeedback = feedback;

  return (
    <div>
      <div className="top-0 sticky">
        <Navbar />
      </div>
      <section className="bg-[#6355FF] px-[5%]">
        <div className="md:flex px-[5%] justify-between items-center gap-4 pt-[3%] pb-[4%]">
          <div className="md:w-[60%]">
            <h1 className="md:text-[72px] text-[36px] text-white font-[600]">Meet Your All·in·One Creator Store</h1>
            <p className="md:text-[22px] text-[15px] text-[#FFFFFF99] my-4">
              Fllow is the easiest way to make money online.
              All of your courses, digital products,
              and bookings are now hosted in your link·in·bio.
            </p>
            <button type="button" className="bg-[#30FFB4] text-[#131F60] rounded-[35px] px-6 py-4 text-[26px] font-[600]">
              <a href="https://admin.fllow.store" target='_blank'>Continue &rarr;</a>
            </button>
          </div>
          <div className="mt-4">
            <Image alt="hero Image" src={heroImage} className="w-[100%] md:ml-[3%]" />
          </div>
        </div>
      </section>
      <section className="px-[5%] mt-[5%]">
        <div>
          <p className="text-[#131F60] text-center text-[36px] font-[600]">The Best Creators Use Fllow 🚀</p>
          <p className="text-[#131F60] text-center text-[18px] py-4">See how our creators use Fllow to superpower their businesses!</p>
        </div>
        <div className="flex items-center gap-[5%] store_container overflow-hidden overflow-x-auto mt-[7%]">
          {usersStore.map((store, index) => (
            <div key={index}>
              <p className="text-[#131F60] text-[14px] text-center w-[95%] bg-[#EBEDFF] px-4 mb-6 py-3 rounded-[25px]">{store.category}</p>
              <div>
                <div className="shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-[15px] p-4">
                  <Image alt="user img" src={store.insProfileImg} width={60} height={20} className="rounded-[50%] m-auto" />
                  <p className="text-center font-[500] text-[12px] py-[4px] mb-2">{store.insUsername}</p>
                  <div className="flex justify-center items-center gap-6">
                    <div>
                      <p className="text-[13px] text-center font-[600]">{store.insFollowing}</p>
                      <p className="text-[11px] text-center text-[#00000091]">Following</p>
                    </div>
                    <div>
                      <p className="text-[13px] text-center font-[600]">{store.insFollowers}</p>
                      <p className="text-[11px] text-center text-[#00000091]">Followers</p>
                    </div>
                    <div>
                      <p className="text-[13px] text-center font-[600]">{store.insLikes}</p>
                      <p className="text-[11px] text-center text-[#00000091]">Likes</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-2 mt-6">
                  <Image alt="user img" src={store.store} className="" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="md:flex justify-center items-center gap-[5%] mt-[10%] mb-[8%]">
          <div className="bg-[#F5F5F5] w-fit m-auto rounded-[50%] px-[5%] py-[5%] md:py-[7%]">
            <p className="text-[#131F60] p-4 text-[40px] font-extrabold">$15M+</p>
            <p className="text-[#131F60] p-4 text-[16px]">Made for creators</p>
          </div>
          <div className="bg-[#F5F5F5] w-fit m-auto px-[12%] md:px-[9%] py-[7%] my-4 rounded-[50%]">
            <p className="text-[#131F60] p-4 text-[80px] text-center font-extrabold">0%</p>
            <p className="text-[#131F60] p-4 text-[16px] text-center">Transaction fees</p>
          </div>
          <div className="bg-[#F5F5F5] w-fit m-auto rounded-[50%] px-[2%] py-[10%] md:px-[4%] md:py-[7%]">
            <p className="text-[#131F60] p-4 text-center text-[40px] font-extrabold">10min</p>
            <p className="text-[#131F60] p-4 text-[16px] text-center">Avg. Time to Create Store</p>
          </div>
        </div>
      </section>
      <section className="bg-[#EEEEF9] px-[5%]">
        <div className="py-[5%]">
          <p className="text-[#131F60] text-[36px] font-extrabold text-center">See What People Are Saying 👀</p>
          <p className="text-[#131F60] text-[18px] text-center">No more paying for 5+ different apps! Fllow brings it all home.</p>
        </div>
        <div className="py-[5%] flex flex-wrap justify-center gap-6">
          {usersFeedback.map((comment, index) => (
            <div key={index} className="shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-[15px] p-4 md:w-[340px] h-fit bg-white">
              <div className="flex items-start gap-2 mb-4">
                <Image alt="user img" src={comment.userImg} width={40} height={20} className="rounded-[50%]" />
                <div>
                  <p className="text-[14px] text-[#131F60] font-extrabold">{comment.name}</p>
                  <p className="text-[12px] text-[#131F60]">{comment.userName}</p>
                </div>
              </div>
              <div>
                <>{comment.comment}</>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <div className="md:flex md:items-center pt-[5%] info_con1">
          <div className="px-[5%]">
            <p className="text-[#131F60] text-[28px] md:text-[40px] pt-[7%] font-extrabold text-end">One Tap Checkout</p>
            <p className="text-[#131F60] text-[16px] md:text-[18px]">You shouldn’t have to go through hurdles just to sell your product. Fllow brings the entire checkout process into your own hands.</p>
          </div>
          <Image src={info1} alt="info1" className="md:w-[50%] mt-4" />
        </div>
        <div className="md:flex md:items-center info_con2 pt-[7%] md:pt-[1%]">
          <Image src={info2} alt="info1" className="md:w-[50%] mt-4" />
          <div className="px-[5%] md:pl-[0%]">
            <p className="text-[#131F60] text-[28px] md:text-[40px] pt-[7%] font-extrabold md:text-start">No Coding Required</p>
            <p className="text-[#131F60] text-[16px] md:text-[18px]">Fllow is super easy to use for beginners, and you really don’t need any coding experience to get started. We think even a caveman could do it.</p>
          </div>
        </div>
        <div className="flex justify-center my-6">
          <button type="button" className="bg-[#131F60] text-[#fff] rounded-[35px] px-6 py-4 text-[26px] font-[600]">
            <a href="https://admin.fllow.store" target='_blank'>Continue &rarr;</a>
          </button>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Homepage;
