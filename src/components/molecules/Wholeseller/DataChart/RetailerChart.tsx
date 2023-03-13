import React from "react";

export default function RetailerChart() {
  return (
    <div>
      <div className="flex gap-4 px-[20px]">
        <div className="flex gap-4 align-middle items-center">
          <div>
            <svg
              width="7"
              height="8"
              viewBox="0 0 7 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="3.5" cy="4" r="3.5" fill="#5542F6" />
            </svg>
          </div>
          <p className="text-[#84818A] font-[500] leading-[20px] cursor-pointer">
            Electronic
          </p>
        </div>

        <div className="flex gap-4 align-middle items-center">
          <div>
            <svg
              width="7"
              height="8"
              viewBox="0 0 7 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="3.5" cy="4" r="3.5" fill="#73EA8D" />
            </svg>
          </div>
          <p className="text-[#84818A] font-[500] leading-[20px] cursor-pointer">
            Computer
          </p>
        </div>

        <div className="flex gap-4 align-middle items-center">
          <div>
            <svg
              width="7"
              height="8"
              viewBox="0 0 7 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="3.5" cy="4" r="3.5" fill="#16D1EB" />
            </svg>
          </div>
          <p className="text-[#84818A] font-[500] leading-[20px] cursor-pointer">
            Fashion
          </p>
        </div>

        <div className="flex gap-4 align-middle items-center">
          <div>
            <svg
              width="7"
              height="8"
              viewBox="0 0 7 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="3.5" cy="4" r="3.5" fill="#F6C362" />
            </svg>
          </div>
          <p className="text-[#84818A] font-[500] leading-[20px] cursor-pointer">
            Grocery
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center  p-6 pb-6  bg-white rounded-lg sm:p-8">
        <div className="flex items-end flex-grow w-full mt-2 space-x-2 sm:space-x-3">
          <div className="relative flex flex-col items-center flex-grow pb-5 group">
            <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
              $37,500
            </span>
            <div className="flex items-end w-full">
              <div className="relative flex justify-center flex-grow h-8 bg-[#4a4ac9]" />
              <div className="relative flex justify-center flex-grow h-6 bg-[#1dc91d]" />
              <div className="relative flex justify-center flex-grow h-16 bg-[#ff8952]" />
            </div>
            <span className="absolute bottom-0 text-xs font-bold">Jan</span>
          </div>
          <div className="relative flex flex-col items-center flex-grow pb-5 group">
            <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
              $45,000
            </span>
            <div className="flex items-end w-full">
              <div className="relative flex justify-center flex-grow h-10 bg-[#4a4ac9]" />
              <div className="relative flex justify-center flex-grow h-6 bg-[#1dc91d]" />
              <div className="relative flex justify-center flex-grow h-20 bg-[#ff8952]" />
            </div>
            <span className="absolute bottom-0 text-xs font-bold">Feb</span>
          </div>
          <div className="relative flex flex-col items-center flex-grow pb-5 group">
            <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
              $47,500
            </span>
            <div className="flex items-end w-full">
              <div className="relative flex justify-center flex-grow h-10 bg-[#4a4ac9]" />
              <div className="relative flex justify-center flex-grow h-8 bg-[#1dc91d]" />
              <div className="relative flex justify-center flex-grow h-20 bg-[#ff8952]" />
            </div>
            <span className="absolute bottom-0 text-xs font-bold">Mar</span>
          </div>
          <div className="relative flex flex-col items-center flex-grow pb-5 group">
            <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
              $50,000
            </span>
            <div className="flex items-end w-full">
              <div className="relative flex justify-center flex-grow h-10 bg-[#4a4ac9]" />
              <div className="relative flex justify-center flex-grow h-6 bg-[#1dc91d]" />
              <div className="relative flex justify-center flex-grow h-24 bg-[#ff8952]" />
            </div>
            <span className="absolute bottom-0 text-xs font-bold">Apr</span>
          </div>
          <div className="relative flex flex-col items-center flex-grow pb-5 group">
            <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
              $47,500
            </span>
            <div className="flex items-end w-full">
              <div className="relative flex justify-center flex-grow h-10 bg-[#4a4ac9]" />
              <div className="relative flex justify-center flex-grow h-8 bg-[#1dc91d]" />
              <div className="relative flex justify-center flex-grow h-20 bg-[#ff8952]" />
            </div>
            <span className="absolute bottom-0 text-xs font-bold">May</span>
          </div>
          <div className="relative flex flex-col items-center flex-grow pb-5 group">
            <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
              $55,000
            </span>
            <div className="flex items-end w-full">
              <div className="relative flex justify-center flex-grow h-12 bg-[#4a4ac9]" />
              <div className="relative flex justify-center flex-grow h-8 bg-[#1dc91d]" />
              <div className="relative flex justify-center flex-grow h-24 bg-[#ff8952]" />
            </div>
            <span className="absolute bottom-0 text-xs font-bold">Jun</span>
          </div>
          <div className="relative flex flex-col items-center flex-grow pb-5 group">
            <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
              $60,000
            </span>
            <div className="flex items-end w-full">
              <div className="relative flex justify-center flex-grow h-12 bg-[#4a4ac9]" />
              <div className="relative flex justify-center flex-grow h-16 bg-[#1dc91d]" />
              <div className="relative flex justify-center flex-grow h-20 bg-[#ff8952]" />
            </div>
            <span className="absolute bottom-0 text-xs font-bold">Jul</span>
          </div>
          <div className="relative flex flex-col items-center flex-grow pb-5 group">
            <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
              $57,500
            </span>
            <div className="flex items-end w-full">
              <div className="relative flex justify-center flex-grow h-12 bg-[#4a4ac9]" />
              <div className="relative flex justify-center flex-grow h-10 bg-[#1dc91d]" />
              <div className="relative flex justify-center flex-grow h-24 bg-[#ff8952]" />
            </div>
            <span className="absolute bottom-0 text-xs font-bold">Aug</span>
          </div>
          <div className="relative flex flex-col items-center flex-grow pb-5 group">
            <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
              $67,500
            </span>
            <div className="flex items-end w-full">
              <div className="relative flex justify-center flex-grow h-12 bg-[#4a4ac9]" />
              <div className="relative flex justify-center flex-grow h-10 bg-[#1dc91d]" />
              <div className="relative flex justify-center flex-grow h-32 bg-[#ff8952]" />
            </div>
            <span className="absolute bottom-0 text-xs font-bold">Sep</span>
          </div>
          <div className="relative flex flex-col items-center flex-grow pb-5 group">
            <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
              $65,000
            </span>
            <div className="flex items-end w-full">
              <div className="relative flex justify-center flex-grow h-12 bg-[#4a4ac9]" />
              <div className="relative flex justify-center flex-grow h-12 bg-[#1dc91d]" />
              <div className="relative flex justify-center flex-grow bg-[#ff8952] h-28" />
            </div>
            <span className="absolute bottom-0 text-xs font-bold">Oct</span>
          </div>
          <div className="relative flex flex-col items-center flex-grow pb-5 group">
            <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
              $70,000
            </span>
            <div className="flex items-end w-full">
              <div className="relative flex justify-center flex-grow h-8 bg-[#4a4ac9]" />
              <div className="relative flex justify-center flex-grow h-8 bg-[#1dc91d]" />
              <div className="relative flex justify-center flex-grow h-40 bg-[#ff8952]" />
            </div>
            <span className="absolute bottom-0 text-xs font-bold">Nov</span>
          </div>
          <div className="relative flex flex-col items-center flex-grow pb-5 group">
            <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
              $75,000
            </span>
            <div className="flex items-end w-full">
              <div className="relative flex justify-center flex-grow h-12 bg-[#4a4ac9]" />
              <div className="relative flex justify-center flex-grow h-8 bg-[#1dc91d]" />
              <div className="relative flex justify-center flex-grow h-40 bg-[#ff8952]" />
            </div>
            <span className="absolute bottom-0 text-xs font-bold">Dec</span>
          </div>
        </div>
        <div className="flex w-full mt-3">
          <div className="flex items-center ml-auto">
            <span className="block w-4 h-4 bg-[#ff8952]" />
            <span className="ml-1 text-xs font-medium">Existing</span>
          </div>
          <div className="flex items-center ml-4">
            <span className="block w-4  h-4 bg-[#1dc91d]" />
            <span className="ml-1 text-xs font-medium">Upgrades</span>
          </div>
          <div className="flex items-center ml-4">
            <span className="block w-4  h-4 bg-[#4a4ac9]" />
            <span className="ml-1 text-xs font-medium">New</span>
          </div>
        </div>
      </div>
    </div>
  );
}
