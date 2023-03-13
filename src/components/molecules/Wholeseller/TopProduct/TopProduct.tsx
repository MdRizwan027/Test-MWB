import React from "react";
import TwMultiSelect from "@/components/atoms/TwMultiSelect/TwMultiSelect";
import MwbImage from "@/static/images/basket_image.png";
import { usetopProductStyle } from "@/static/stylesheets/molecules";

const TopProduct = () => {
  const classes = usetopProductStyle();

  return (
    <div className={classes.root}>
      <div className="p-6 max-w-full bg-white rounded-lg border border-gray-200  ">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex gap-9 items-center">
            <p className="mb-3 text-[16px] font-[700] text-gray-700 font-Manrope ">
              Top Product
            </p>
            <p>
              <TwMultiSelect />
            </p>
          </div>
          <p className="mb-3 text-[14px] font-[700] items-center text-[#5542F6] cursor-pointer text-end  font-Manrope">
            View All
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto relative pt-[40px] pb-[40px]">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-[12px] text-gray-700 border-b border-gray-200 font-[600] ">
              <tr className="color-[#2E2C34;]">
                <th scope="col" className="py-3 px-6 w-[900px] ">
                  ITEM
                </th>
                <th scope="col" className="py-3 px-6">
                  Most purchased by
                </th>
                <th scope="col" className="py-3 px-6">
                  UNITS SOLD
                </th>
                <th scope="col" className="py-3 px-6">
                  SALES
                </th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((item: any) => (
                <tr className="border-b ">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                  >
                    <div className="flex gap-[20px] items-center ">
                      <img
                        className="w-[50px] rounded-md"
                        src={MwbImage}
                        alt={"Mwb Bazaar"}
                      />
                      <p className="mb-3 text-[14px] font-[600] text-gray-700 font-Manrope ">
                        Gaming Laptops
                      </p>
                    </div>
                  </th>
                  <td className="py-4 px-6  text-[14px] text-gray-700 font-[500] leading-[20px]">
                    Laxmi Traders
                    <div className="flex gap-4">
                      <p>Rs. 12000</p>
                      <p className="text-[#84818A;]">16.30%</p>
                    </div>
                    <div className="w-[150px] bg-[#EBEAED] rounded-full h-2.5">
                      <div
                        className="bg-[#5542F6] h-2.5 rounded-full"
                        style={{ width: "30%" }}
                      ></div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-[14px] text-gray-700 font-[500] leading-[20px]">
                    5,951
                  </td>
                  <td className="py-4 px-6 text-[14px] text-gray-700 font-[500] leading-[20px]">
                    ₹15,302.00
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export { TopProduct };
