import React from "react";
import { DashboardLayout } from "@/components/layouts";
import { useOffersStyles } from "@/static/stylesheets/screens";
import { AddButton, GridOptionButton } from "@/components/atoms/Button";
import { SearchField } from "@/components/atoms/SearchField";
import { Switch } from "@/components/atoms/Switch";
import { useNavigate } from "react-router-dom";

const Offers = () => {
  const classes = useOffersStyles();
  const data = [1, 2, 3, 4, 5];
  const navigate = useNavigate();

  return (
    <>
      <DashboardLayout>
        <div className={classes.root}>
          <div>
            <div className="flex justify-between">
              <p className="commonTitle">Offers</p>
              <AddButton
                label="Create New Offer"
                onClick={() => navigate("/createoffer")}
              />
            </div>
          </div>

          <div>
            <SearchField />
          </div>

          <div>
            <div className="overflow-x-auto relative pt-[40px] pb-[40px]">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-[12px] text-gray-700 bg-gray-50 font-[600]">
                  <tr className=" color-[#2E2C34;]">
                    <th scope="col" className="py-3 px-6">
                      S. No
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Offer Type
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Offer For
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Name
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Offer Price
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Created Date
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Expiry Date
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Status
                    </th>
                    <th scope="col" className="py-3 px-6"></th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item: any) => (
                    <tr className="border-b ">
                      <th
                        scope="row"
                        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                      >
                        <div className="flex gap-[20px] items-center ">
                          <p className="mb-3 text-[14px] font-[600] text-gray-700 font-Manrope  cursor-pointer">
                            001
                          </p>
                        </div>
                      </th>
                      <td className="py-4 px-6  color-[#2E2C34;]">Item</td>
                      <td className="py-4 px-6  color-[#2E2C34;]">
                        Wholesaler Retailer
                      </td>
                      <td className="py-4 px-6  color-[#2E2C34;]">
                        <div className="tag">
                          <p className="tagTitle">MWB Gold-Basmati Rice</p>
                        </div>
                      </td>
                      <td className="py-4 px-6  color-[#2E2C34;]">
                        <div className="tag">
                          <p className="tagTitle">500.00</p>
                        </div>
                      </td>
                      <td className="py-4 px-6  color-[#2E2C34;]">
                        <div className="tag">
                          <p className="tagTitle">02/02/2022</p>
                        </div>
                      </td>
                      <td className="py-4 px-6  color-[#2E2C34;]">
                        10/02/2022
                      </td>
                      <td className="py-4 px-6  color-[#2E2C34;]">
                        <Switch />
                      </td>
                      <td className="py-4 px-6  color-[#2E2C34;] cursor-pointer">
                        <GridOptionButton icon={"vertical-options"} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Offers;
