import React, { useState } from "react";
import { DashboardLayout } from "@/components/layouts";
import TwMultiSelect from "@/components/atoms/TwMultiSelect/TwMultiSelect";
import { ActionButton } from "@/components/atoms/Button/ActionButton";
import { Dialog } from "@mui/material";
import { usePhotosOrderStyles } from "@/static/stylesheets/screens";
import { UploadArea } from "@/components/organisms/UploadArea";
import photoIcon from "@/static/svg/ic_photo.svg";
import { GridOptionButton } from "@/components/atoms/Button";

const PhotoOrder = () => {
  const classes = usePhotosOrderStyles();
  const data = [1, 2];
  const [addModalOpen, setAddModalOpen] = useState(false);
 
  return (
    <>
      <DashboardLayout>
        <div className={classes.root}>
          <div>
            <div>
              <p className="commonTitle">Photo Orders (2)</p>
            </div>

            <div className="flex gap-5 py-5">
              <TwMultiSelect />
              <TwMultiSelect />
              <TwMultiSelect />
            </div>

            <div>
              <div className="overflow-x-auto relative pt-[40px] pb-[40px]">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-[12px] text-gray-700 bg-gray-50 font-[600] ">
                    <tr className=" color-[#2E2C34;]">
                      <th scope="col" className="py-3 px-6">
                        S. No
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Date
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Retailer Name
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Manager Nme
                      </th>
                      <th scope="col" className="py-3 px-6">
                        City
                      </th>
                      <th scope="col" className="py-3 px-6"></th>
                      <th scope="col" className="py-3 px-6"></th>
                      <th scope="col" className="py-3 px-6"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item: any) => (
                      <tr className="border-b">
                        <th
                          onClick={() => setAddModalOpen(true)}
                          scope="row"
                          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap  cursor-pointer"
                        >
                          001
                        </th>
                        <td className="py-4 px-6  color-[#2E2C34;]">
                          12/07/22
                        </td>
                        <td className="py-4 px-6  color-[#2E2C34;]">
                          Comapany Name
                        </td>
                        <td className="py-4 px-6  color-[#2E2C34;]">
                          Ashish Patel
                        </td>
                        <td className="py-4 px-6  color-[#2E2C34;] cursor-pointer">
                          Rajkot
                        </td>
                        <td className="py-4 px-6  color-[#2E2C34;] cursor-pointer">
                          <div className="flex gap-5 align-middle">
                            <div>
                              <img src={photoIcon} alt={"Logo"} />
                            </div>
                            <div>
                              <p className="font-[14px] color-[#4E2FA9]">
                                View Photo
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6  color-[#2E2C34;] cursor-pointer">
                          <ActionButton title="Create Order" />
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

          <div>
            <Dialog
              open={addModalOpen}
              maxWidth={"lg"}
              sx={{
                ".MuiPaper-root": {
                  borderRadius: "20px",
                },
              }}
              onClose={() => setAddModalOpen(false)}
            >
              <div>
                <p className="title">Add Payment Details</p>
                <UploadArea label={"Upload Icon"} />
                <div>
                  <div className={"action-bar"}>
                    <ActionButton
                      variant={"default"}
                      title={"Cancel"}
                      onClick={() => setAddModalOpen(false)}
                    />

                    <ActionButton
                      variant={"primary"}
                      title={"Add"}
                      onClick={() => setAddModalOpen(false)}
                    />
                  </div>
                </div>
              </div>
            </Dialog>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default PhotoOrder;
