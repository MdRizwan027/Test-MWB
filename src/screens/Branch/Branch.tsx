import React from "react";
import { DashboardLayout } from "@/components/layouts";
import { ActionButton } from "@/components/atoms/Button/ActionButton";
import { useBranchStyles } from "@/static/stylesheets/screens";
import ContactLogo from "@/static/svg/ic_contactuser.svg";
import { GridOptionButton } from "@/components/atoms/Button";
import ArrowIcon from "@/static/svg/ic_arrow.svg";

const Branch = () => {
  const classes = useBranchStyles();
  const data = [1, 2, 3, 4, 5];

  return (
    <>
      <DashboardLayout>
        <div className={classes.root}>
          <div>
            <div className="flex gap-5 align-center">
              <div className="cursor-pointer">
                <img src={ArrowIcon} alt={"Logo"} />
              </div>
              <p className="commonTitle">Edit Order: #Order ID-21214589</p>
            </div>

            <div className="bg-[#f8f8f8] p-[20px] my-5">
              <div className="flex gap-5">
                <div className="px-5">
                  <p>Date</p>
                  <p>12/07/22</p>
                </div>
                <div className="px-5">
                  <p>Firm Name</p>
                  <p>India Mart</p>
                </div>
                <div className="px-5">
                  <p>Contact Person Name</p>
                  <p>Mr. Satish Hari</p>
                </div>
                <div className="px-5">
                  <p>Contact Number</p>
                  <p>9685741236</p>
                </div>
                <div className="px-5">
                  <p>City</p>
                  <p>Rajkot</p>
                </div>
                <div className="px-5">
                  <p>Order Type</p>
                  <p>Cash</p>
                </div>
              </div>
            </div>

            <div>
              <div className="overflow-x-auto relative pt-[40px] pb-[40px]">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-[12px] text-gray-700 bg-gray-50 font-[600] ">
                    <tr className=" color-[#2E2C34;]">
                      <th scope="col" className="py-3 px-6">
                        Name
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Contact Person
                      </th>
                      <th scope="col" className="py-3 px-6">
                        City
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Type
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Plan
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Agent
                      </th>
                      <th scope="col" className="py-3 px-6"></th>
                      <th scope="col" className="py-3 px-6"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item: any) => (
                      <tr className="border-b">
                        <th
                          scope="row"
                          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          <div className="flex gap-[20px] items-center ">
                            <p className="mb-3 text-[14px] font-[600] text-gray-700 font-Manrope dark:text-gray-400 cursor-pointer">
                              Laxmi Traders
                            </p>
                          </div>
                        </th>
                        <td className="py-4 px-6 color-[#2E2C34;]">
                          <div className="flex gap-5 align-middle">
                            <div>
                              <img src={ContactLogo} alt={"Logo"} />
                            </div>
                            <div>
                              <p className="font-[14px] color-[#4E2FA9]">
                                Sachin Yadav
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6  color-[#2E2C34;]">Rajkot</td>
                        <td className="py-4 px-6  color-[#2E2C34;]">
                          Re-seller
                        </td>
                        <td className="py-4 px-6  color-[#2E2C34;] cursor-pointer">
                          Diamond
                        </td>
                        <td className="py-4 px-6  color-[#2E2C34;] cursor-pointer">
                          <div className="flex gap-5 align-middle">
                            <div>
                              <img src={ContactLogo} alt={"Logo"} />
                            </div>
                            <div>
                              <p className="font-[14px] color-[#4E2FA9]">
                                Sachin Yadav
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6 color-[#2E2C34;] cursor-pointer">
                          <div className="bg-[#FFF6ED] flex justify-center rounded-md p-[10px] w-[150px]">
                            <p className="cursor-pointer">Pending Approval</p>
                          </div>
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

            <div>
              <ActionButton title="Send For Approval" />
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Branch;
