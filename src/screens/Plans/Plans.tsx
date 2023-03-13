import React from "react";
import { DashboardLayout } from "@/components/layouts";
import { AddButton, GridOptionButton } from "@/components/atoms/Button";
import { useNavigate } from "react-router-dom";
import TwMultiSelect from "@/components/atoms/TwMultiSelect/TwMultiSelect";
import { useRetailerStyles } from "@/static/stylesheets/screens/retailersStyle";
import { SearchField } from "@/components/atoms/SearchField";
import { Switch } from "@/components/atoms/Switch";

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
              <p className="commonTitle">Plans</p>

              <div className="flex gap-5 align-middle justify-end">
                <SearchField />
                <AddButton
                  label="Add Plan"
                  onClick={() => navigate("/addnewplan")}
                />
              </div>
            </div>
          </div>

          <div className="flex gap-5 pt-6 flex-col">
            <div className="flex gap-4">
              <TwMultiSelect />
              <TwMultiSelect />
              <TwMultiSelect />
              <TwMultiSelect />
              <TwMultiSelect />
              <TwMultiSelect />
            </div>
            <div className="text-[#FF0000] self-end font-semibold">
              Subscriber total, active, expired, deactivated
            </div>
          </div>

          <div>
            <div className="overflow-x-auto relative pt-[20px] pb-[40px]">
              <table className="w-full text-sm text-left text-gray-500 ">
                <thead className="text-[12px] text-[#2E2C34] bg-gray-50 font-[600]">
                  <tr className=" [#2E2C34]">
                    <th scope="col" className="py-3 px-4">
                      Plan Title
                    </th>
                    <th scope="col" className="py-3 px-4">
                      Start Time
                    </th>
                    <th scope="col" className="py-3 px-4">
                      End Time
                    </th>
                    <th scope="col" className="py-3 px-4">
                      Branches
                    </th>
                    <th scope="col" className="py-3 px-4">
                      Bazaar
                    </th>
                    <th scope="col" className="py-3 px-4">
                      State
                    </th>
                    <th scope="col" className="py-3 px-4">
                      District
                    </th>
                    <th scope="col" className="py-3 px-4">
                      City
                    </th>
                    <th scope="col" className="py-3 px-4">
                      Price
                    </th>
                    <th scope="col" className="py-3 px-4">
                      Enable/Disable
                    </th>
                    <th scope="col" className="py-3 px-4"></th>
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
                          <p className="mb-3 text-[14px] font-[600] text-[#2E2C34] font-Manrope  cursor-pointer">
                            Individual
                          </p>
                        </div>
                      </th>
                      <td className="py-4 px-6  [#2E2C34]">
                        <div className="flex gap-5 align-middle">
                          <div>
                            <p className="font-[14px] text-[#2E2C34]">
                              24 Jan, 2021 4:00PM
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6  [#2E2C34]">
                        24 Jan, 2023 12:00PM
                      </td>
                      <td className="py-4 px-6  [#2E2C34]">12</td>
                      <td className="py-4 px-6  [#2E2C34] cursor-pointer">
                        Electronic, Computer
                      </td>
                      <td className="py-4 px-6  [#2E2C34] cursor-pointer">
                        <div className="flex gap-5 align-middle">
                          <div>
                            <p className="font-[14px] color-[#4E2FA9]">
                              UP, Delhi
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6  [#2E2C34] cursor-pointer">
                        <p className="font-[14px] color-[#4E2FA9]">UP, Delhi</p>
                      </td>
                      <td className="py-4 px-6  [#2E2C34] cursor-pointer">
                        All
                      </td>
                      <td className="py-4 px-6  [#2E2C34] cursor-pointer">
                      All
                      </td>
                      <td className="py-4 px-6  [#2E2C34] cursor-pointer">
                      <Switch/>
                      </td>
                      <td className="py-4 px-6  [#2E2C34] cursor-pointer">
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
