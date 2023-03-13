import React from "react";
import { DashboardLayout } from "@/components/layouts";
import { AddButton, GridOptionButton } from "@/components/atoms/Button";
import { useNavigate } from "react-router-dom";
import TwMultiSelect from "@/components/atoms/TwMultiSelect/TwMultiSelect";
import { useRetailerStyles } from "@/static/stylesheets/screens/retailersStyle";
import { SearchField } from "@/components/atoms/SearchField";
import ContactIcon from "@/static/svg/ic_contactuser.svg";

const Retailers = () => {
  const classes = useRetailerStyles();
  const data = [1, 2, 3, 4, 5];
  const navigate = useNavigate();

  return (
    <>
      <DashboardLayout>
        <div className={classes.root}>
          <div>
            <div className="flex align-middle justify-between">
              <p className="commonTitle">Retailers</p>

              <div className="flex gap-5 align-middle justify-end">
                <SearchField />
                <AddButton
                  label="Add Retailer"
                  onClick={() => navigate("/addretailers")}
                />
                <AddButton
                  label="Add Retailer"
                  onClick={() => navigate("/addretailers")}
                />
              </div>
            </div>
          </div>

          <div className="flex gap-5">
            <TwMultiSelect />
            <TwMultiSelect />
            <TwMultiSelect />
            <TwMultiSelect />
            <TwMultiSelect />
            <TwMultiSelect />
          </div>

          <div>
            <div className="overflow-x-auto relative pt-[40px] pb-[40px]">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-[12px] text-gray-700 bg-gray-50 font-[600]">
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
                      <td className="py-4 px-6  color-[#2E2C34;]">
                        <div className="flex gap-5 align-middle">
                          <div>
                            <img src={ContactIcon} alt={"Logo"} />
                          </div>
                          <div>
                            <p className="font-[14px] color-[#4E2FA9]">
                              Sachin Yadav
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6  color-[#2E2C34;]">Rajkot</td>
                      <td className="py-4 px-6  color-[#2E2C34;]">Re-seller</td>
                      <td className="py-4 px-6  color-[#2E2C34;] cursor-pointer">
                        Diamond
                      </td>
                      <td className="py-4 px-6  color-[#2E2C34;] cursor-pointer">
                        <div className="flex gap-5 align-middle">
                          <div>
                            <img src={ContactIcon} alt={"Logo"} />
                          </div>
                          <div>
                            <p className="font-[14px] color-[#4E2FA9]">
                              Sachin Yadav
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6  color-[#2E2C34;] cursor-pointer">
                        <div className="bg-[#FFF6ED] flex justify-center rounded-md p-[10px] w-[150px]">
                          <p>Pending Approval</p>
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
        </div>
      </DashboardLayout>
    </>
  );
};

export default Retailers;
