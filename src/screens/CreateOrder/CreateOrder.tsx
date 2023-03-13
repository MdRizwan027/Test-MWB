import React, { useState } from "react";
import { DashboardLayout } from "@/components/layouts";
import { Dialog, SelectChangeEvent } from "@mui/material";
import { useCreateOrderStyles } from "@/static/stylesheets/screens";
import { MenuItem, Select } from "@mui/material";
import { ActionButton } from "@/components/atoms/Button/ActionButton";
import { UploadArea } from "@/components/organisms/UploadArea";
import NewProduct from "@/components/molecules/NewProduct/NewProduct";
import MwbImage from "@/static/images/basket_image.png";

const CreateOrder = () => {
  const classes = useCreateOrderStyles();
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [addanotherModalOpen, setAnotherAddModalOpen] = useState(false);
  const [masterType, setMasterType] = useState("Regional Wholeseller");
  const handleChangeMasterType = (event: SelectChangeEvent) => {
    setMasterType(event.target.value as string);
  };

  return (
    <>
      <DashboardLayout>
        <div className={classes.root}>
          <div>
            <div>
              <p className="commonTitle">Create New Order</p>
              <div className="py-5 w-[500px]">
                <p>Retailer</p>
                <Select
                  label="Age"
                  variant={"standard"}
                  fullWidth={true}
                  value={masterType}
                  onChange={handleChangeMasterType}
                >
                  <MenuItem value={"Regional Wholeseller"}>
                    Laxmi Traders
                  </MenuItem>
                  <MenuItem value={"Regional Wholeseller 1"}>
                    Laxmi Traders
                  </MenuItem>
                </Select>
              </div>

              <div className="py-5 w-[500px]">
                <p>Order Type</p>
                <Select
                  label="Age"
                  variant={"standard"}
                  fullWidth={true}
                  value={masterType}
                  onChange={handleChangeMasterType}
                >
                  <MenuItem value={"Regional Wholeseller"}>Cash</MenuItem>
                  <MenuItem value={"Regional Wholeseller 1"}>Cash</MenuItem>
                </Select>
              </div>

              <div>
                <p>Choose Products</p>
                <div className="flex gap-5 py-5 items-center align-middle">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.66537 5.66634H5.66536V9.66634H4.33203V5.66634H0.332031V4.33301H4.33203V0.333008H5.66536V4.33301H9.66537V5.66634Z"
                      fill="#5542F6"
                    />
                  </svg>
                  <p className="cursor-pointer">Add More Product</p>
                </div>

                <div className="overflow-x-auto relative pt-[40px] pb-[40px]">
                  <table className="w-full text-sm text-left text-gray-500 ">
                    <thead className="text-[12px] text-gray-700 border-b border-gray-200 font-[600] ">
                      <tr className="color-[#2E2C34;]">
                        <th scope="col" className="py-3 px-6">
                          <input type="checkbox" />
                        </th>
                        <th scope="col" className="py-3 px-6">
                          Sr. No
                        </th>
                        <th scope="col" className="py-3 px-6">
                          Image
                        </th>
                        <th scope="col" className="py-3 px-6">
                          Product Name
                        </th>
                        <th scope="col" className="py-3 px-6">
                          Brand
                        </th>
                        <th scope="col" className="py-3 px-6">
                          Offers
                        </th>

                        <th scope="col" className="py-3 px-6">
                          Quantity
                        </th>
                        <th scope="col" className="py-3 px-6">
                          Unit Price
                        </th>
                        <th scope="col" className="py-3 px-6">
                          Total Price
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[1, 2, 3].map((item: any) => (
                        <tr className="border-b ">
                          <th
                            scope="row"
                            className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                          >
                            <input type="checkbox" />
                          </th>
                          <td className="py-4 px-6 text-[14px] text-gray-700 font-[500] leading-[20px]">
                            01
                          </td>
                          <td className="py-4 px-6 text-[14px] text-gray-700 font-[500] leading-[20px]">
                            <img
                              className="w-[50px] rounded-md"
                              src={MwbImage}
                              alt={"Mwb Bazaar"}
                            />
                          </td>
                          <td className="py-4 px-6 text-[14px] text-gray-700 font-[500] leading-[20px]">
                            Amazon Echo Plus 3nd Gen…
                          </td>
                          <td className="py-4 px-6 text-[14px] text-gray-700 font-[500] leading-[20px]">
                            Amazon
                          </td>
                          <td className="py-4 px-6 text-[14px] text-gray-700 font-[500] leading-[20px]">
                            N/A
                          </td>
                          <td className="py-4 px-6 text-[14px] text-gray-700 font-[500] leading-[20px]">
                            <div className="quantityArea cursor-pointer">
                              <div className="flex  gap-3 items-center p-[5px] ">
                                <div>
                                  <svg
                                    width="13"
                                    height="2"
                                    viewBox="0 0 13 2"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M11.6077 1.9375H1.39342C0.880089 1.9375 0.464844 1.51797 0.464844 0.999707C0.464844 0.481445 0.880089 0.0625 1.39342 0.0625H11.6077C12.121 0.0625 12.5363 0.481445 12.5363 0.999707C12.5363 1.51797 12.1213 1.9375 11.6077 1.9375Z"
                                      fill="#FF6652"
                                    />
                                  </svg>
                                </div>
                                <div>10</div>
                                <div>
                                  <svg
                                    width="13"
                                    height="14"
                                    viewBox="0 0 13 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M12.5363 7C12.5363 7.51826 12.1204 7.93779 11.6077 7.93779H7.42913V12.1565C7.42913 12.6748 7.0133 13.0938 6.50056 13.0938C5.98781 13.0938 5.57199 12.6748 5.57199 12.1565V7.93779H1.39342C0.88067 7.93779 0.464844 7.51826 0.464844 7C0.464844 6.48174 0.88067 6.06279 1.39342 6.06279H5.57199V1.84404C5.57199 1.32578 5.98781 0.90625 6.50056 0.90625C7.0133 0.90625 7.42913 1.32578 7.42913 1.84404V6.06279H11.6077C12.1213 6.0625 12.5363 6.48145 12.5363 7Z"
                                      fill="#FF6652"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-[14px] text-gray-700 font-[500] leading-[20px]">
                            500 ₹
                          </td>
                          <td className="py-4 px-6 text-[14px] text-gray-700 font-[500] leading-[20px]">
                            1500 ₹
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="flex gap-4 justify-end py-[10px]">
              <p>Total Amount</p>
              <p>8,962 ₹</p>
            </div>
            <div className="flex gap-5 pb-[30px]">
              <ActionButton title="Cancel" variant="primary" />
              <ActionButton title="Add Order" variant="default" />
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
                <NewProduct />
              </div>
            </Dialog>
          </div>

          <div>
            <Dialog
              open={addanotherModalOpen}
              maxWidth={"lg"}
              sx={{
                ".MuiPaper-root": {
                  borderRadius: "20px",
                },
              }}
              onClose={() => setAnotherAddModalOpen(false)}
            >
              <div>
                <p className="title">Add Payment Details ok</p>
                <UploadArea label={"Upload Icon"} />
                <div>
                  <div className={"action-bar"}>
                    <ActionButton
                      variant={"default"}
                      title={"Cancel"}
                      onClick={() => setAnotherAddModalOpen(false)}
                    />

                    <ActionButton
                      variant={"primary"}
                      title={"Add"}
                      onClick={() => setAnotherAddModalOpen(false)}
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

export default CreateOrder;
