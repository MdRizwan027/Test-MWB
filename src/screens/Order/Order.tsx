import React, { useState } from "react";
import { DashboardLayout } from "@/components/layouts";
import { AddButton } from "@/components/atoms/Button";
import { useNavigate } from "react-router-dom";
import TwMultiSelect from "@/components/atoms/TwMultiSelect/TwMultiSelect";
import { Dialog } from "@mui/material";
import { SearchField } from "@/components/atoms/SearchField";
import { useOrderStyles } from "@/static/stylesheets/screens";
import OrderListImg from "@/static/images/mwb_order.png";
import Placeholder from "@/static/images/placeholder.jpg";
import threeMenuIcon from "@/static/svg/ic_dotmenu.svg";

const Order = () => {
  const classes = useOrderStyles();
  const data = [1, 2, 3, 4, 5];
  const navigate = useNavigate();
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [addanotherModalOpen, setAnotherAddModalOpen] = useState(false);

  return (
    <>
      <DashboardLayout>
        <div className={classes.root}>
          <div>
            <div className="flex justify-between items-center align-middle">
              <p className="commonTitle">Orders</p>
              <div className="flex gap-5 items-center align-middle">
                <div className="flex gap-2">
                  <div>
                    <svg
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 14.35C11.2 14.35 12.2083 13.9417 13.025 13.125C13.8417 12.3083 14.25 11.2917 14.25 10.075C14.25 8.875 13.8417 7.87083 13.025 7.0625C12.2083 6.25417 11.2 5.85 10 5.85C8.78333 5.85 7.77083 6.25417 6.9625 7.0625C6.15417 7.87083 5.75 8.875 5.75 10.075C5.75 11.2917 6.15417 12.3083 6.9625 13.125C7.77083 13.9417 8.78333 14.35 10 14.35ZM10 12.85C9.2 12.85 8.54167 12.5875 8.025 12.0625C7.50833 11.5375 7.25 10.875 7.25 10.075C7.25 9.29167 7.50833 8.64167 8.025 8.125C8.54167 7.60833 9.2 7.35 10 7.35C10.7833 7.35 11.4375 7.60833 11.9625 8.125C12.4875 8.64167 12.75 9.29167 12.75 10.075C12.75 10.875 12.4875 11.5375 11.9625 12.0625C11.4375 12.5875 10.7833 12.85 10 12.85ZM1.5 18C1.1 18 0.75 17.85 0.45 17.55C0.15 17.25 0 16.9 0 16.5V3.675C0 3.29167 0.15 2.94583 0.45 2.6375C0.75 2.32917 1.1 2.175 1.5 2.175H5.175L7 0H13L14.825 2.175H18.5C18.8833 2.175 19.2292 2.32917 19.5375 2.6375C19.8458 2.94583 20 3.29167 20 3.675V16.5C20 16.9 19.8458 17.25 19.5375 17.55C19.2292 17.85 18.8833 18 18.5 18H1.5ZM18.5 16.5V3.675H14.125L12.3 1.5H7.7L5.875 3.675H1.5V16.5H18.5Z"
                        fill="#FF6652"
                      />
                    </svg>
                  </div>
                  <p className="text-[#FF6652]">2 Photo Orders</p>
                </div>

                <div>
                  <AddButton
                    label="Create New Order"
                    onClick={() => navigate("/createorder")}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between gap-5 py-5">
              <div className="flex gap-5">
                <TwMultiSelect />
                <TwMultiSelect />
                <TwMultiSelect />
                <TwMultiSelect />
                <TwMultiSelect />
                <TwMultiSelect />
              </div>
              <div>
                <SearchField />
              </div>
            </div>

            <div>
              <div className="overflow-x-auto relative pt-[40px] pb-[40px]">
                <table className="w-full text-sm text-left text-gray-500 ">
                  <thead className="text-[12px] text-gray-700 bg-gray-50 font-[600] ">
                    <tr className="color-[#2E2C34;]">
                      <th scope="col" className="py-[10px] pl-[20px]">
                        Sr. No
                      </th>
                      <th scope="col" className="py-[10px]">
                        Date
                      </th>
                      <th scope="col" className="py-[10px]">
                        Order ID
                      </th>
                      <th scope="col" className="py-[10px]">
                        Firm Name
                      </th>
                      <th scope="col" className="py-[10px]">
                        Retailer Type
                      </th>
                      <th scope="col" className="py-[10px]">
                        Phone
                      </th>
                      <th scope="col" className="py-[10px]">
                        City
                      </th>
                      <th scope="col" className="py-[10px]">
                        Ordered by
                      </th>
                      <th scope="col" className="py-[10px]">
                        Amount
                      </th>
                      <th scope="col" className="py-[10px]">
                        Order Type
                      </th>
                      <th scope="col" className="py-[10px]">
                        Payment Status
                      </th>
                      <th scope="col" className="py-[10px]">
                        Order Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item: any) => (
                      <tr className="border-b">
                        <th
                          scope="row"
                          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                        >
                          <div className="flex gap-[20px] items-center ">
                            <p
                              onClick={() => setAddModalOpen(true)}
                              className="mb-3 text-[14px] font-[600] text-gray-700 font-Manrope  cursor-pointer"
                            >
                             01
                            </p>
                          </div>
                        </th>
                        <td className="py-4 px-6  color-[#2E2C34;]">
                          <p>12/07/22</p>
                        </td>
                        <td className="py-4 px-6  color-[#2E2C34;]">
                          <div className="flex gap-2 items-center">
                            <p>#123456</p>
                            <div>
                              <svg
                                width="16"
                                height="15"
                                viewBox="0 0 16 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8 11.48C8.96 11.48 9.76667 11.1533 10.42 10.5C11.0733 9.84667 11.4 9.03333 11.4 8.06C11.4 7.1 11.0733 6.29667 10.42 5.65C9.76667 5.00333 8.96 4.68 8 4.68C7.02667 4.68 6.21667 5.00333 5.57 5.65C4.92333 6.29667 4.6 7.1 4.6 8.06C4.6 9.03333 4.92333 9.84667 5.57 10.5C6.21667 11.1533 7.02667 11.48 8 11.48ZM8 10.28C7.36 10.28 6.83333 10.07 6.42 9.65C6.00667 9.23 5.8 8.7 5.8 8.06C5.8 7.43333 6.00667 6.91333 6.42 6.5C6.83333 6.08667 7.36 5.88 8 5.88C8.62667 5.88 9.15 6.08667 9.57 6.5C9.99 6.91333 10.2 7.43333 10.2 8.06C10.2 8.7 9.99 9.23 9.57 9.65C9.15 10.07 8.62667 10.28 8 10.28ZM1.2 14.4C0.88 14.4 0.6 14.28 0.36 14.04C0.12 13.8 0 13.52 0 13.2V2.94C0 2.63333 0.12 2.35667 0.36 2.11C0.6 1.86333 0.88 1.74 1.2 1.74H4.14L5.6 0H10.4L11.86 1.74H14.8C15.1067 1.74 15.3833 1.86333 15.63 2.11C15.8767 2.35667 16 2.63333 16 2.94V13.2C16 13.52 15.8767 13.8 15.63 14.04C15.3833 14.28 15.1067 14.4 14.8 14.4H1.2ZM14.8 13.2V2.94H11.3L9.84 1.2H6.16L4.7 2.94H1.2V13.2H14.8Z"
                                  fill="#4E2FA9"
                                />
                              </svg>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6  color-[#2E2C34;]">
                          Company namer
                        </td>
                        <td className="py-4 px-6  color-[#2E2C34;] cursor-pointer">
                          Retailer
                        </td>
                        <td className="py-4 px-6  color-[#2E2C34;] cursor-pointer">
                          <p className="font-[14px] color-[#4E2FA9]">
                            9874651230
                          </p>
                        </td>

                        <td className="py-4 px-6  color-[#2E2C34;] cursor-pointer">
                          Rajkot
                        </td>
                        <td>500</td>
                        <td>Cash</td>
                        <td>Paid</td>
                        <td className="py-4 px-6  color-[#2E2C34;] cursor-pointer">
                          <div className="bg-[#FFF6ED] flex justify-center rounded-md p-[10px] w-[150px]">
                            <p
                              onClick={() => setAnotherAddModalOpen(true)}
                              className="cursor-pointer"
                            >
                              Pending Approval
                            </p>
                          </div>
                        </td>
                        <td>
                          <svg
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.5"
                              y="0.5"
                              width="35"
                              height="35"
                              rx="9.5"
                              fill="white"
                              stroke="#E1E1E1"
                            />
                            <path
                              d="M18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14ZM18 16C16.9 16 16 16.9 16 18C16 19.1 16.9 20 18 20C19.1 20 20 19.1 20 18C20 16.9 19.1 16 18 16ZM18 22C16.9 22 16 22.9 16 24C16 25.1 16.9 26 18 26C19.1 26 20 25.1 20 24C20 22.9 19.1 22 18 22Z"
                              fill="#84818A"
                            />
                          </svg>
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
              <div className="p-10">
                <div className="flex gap-5 justify-center py-5">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.33203 21.6663C1.7987 21.6663 1.33203 21.4663 0.932031 21.0663C0.532031 20.6663 0.332031 20.1997 0.332031 19.6663V14.8997H2.33203V19.6663H19.6654V14.8997H21.6654V19.6663C21.6654 20.1997 21.4654 20.6663 21.0654 21.0663C20.6654 21.4663 20.1987 21.6663 19.6654 21.6663H2.33203ZM10.9987 16.5663L4.56536 10.133L5.9987 8.69967L9.9987 12.6997V0.333008H11.9987V12.6997L15.9987 8.69967L17.432 10.133L10.9987 16.5663Z"
                      fill="#4E2FA9"
                    />
                  </svg>
                  <p>Download Photo</p>
                </div>

                <div>
                  <img
                    className="w-[500px] rounded-md"
                    src={OrderListImg}
                    alt={"Logo"}
                  />
                </div>
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
              <div className="p-[20px]">
                <div>
                  <div className="flex gap-5 justify-between py-[15px]">
                    <p className="commonTitle">Add New Product</p>
                    <div className="cursor-pointer">
                      <div className="flex gap-5">
                        <img src={threeMenuIcon} alt={"Logo"} />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-4">
                    <div className="bg-[#e7e7e7] h-screen">
                      <div className="p-4">
                        <p className="text-gray-900">GROUP</p>
                      </div>
                      <div className="bg-[#4E2FA9] p-4">
                        <div className="flex gap-5 p-2 items-center">
                          <img
                            className="w-[50px] rounded-md"
                            src={Placeholder}
                            alt={"Logo"}
                          />
                          <p className="text-white">Computers</p>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex gap-5 p-2 items-center">
                          <img
                            className="w-[50px] rounded-md"
                            src={Placeholder}
                            alt={"Logo"}
                          />
                          <p className="text-gray-900">Computers</p>
                        </div>
                      </div>
                      <div className=" p-4">
                        <div className="flex gap-5 p-2 items-center">
                          <img
                            className="w-[50px] rounded-md"
                            src={Placeholder}
                            alt={"Logo"}
                          />
                          <p className="text-gray-900">Computers</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#e7e7e7] h-screen">
                      <div className="p-4">
                        <p className="text-gray-900">GROUP</p>
                      </div>
                      <div className="bg-[#4E2FA9] p-4">
                        <div className="flex gap-5 p-2 items-center">
                          <img
                            className="w-[50px] rounded-md"
                            src={Placeholder}
                            alt={"Logo"}
                          />
                          <p className="text-white">Computers</p>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex gap-5 p-2 items-center">
                          <img
                            className="w-[50px] rounded-md"
                            src={Placeholder}
                            alt={"Logo"}
                          />
                          <p className="text-gray-900">Computers</p>
                        </div>
                      </div>
                      <div className=" p-4">
                        <div className="flex gap-5 p-2 items-center">
                          <img
                            className="w-[50px] rounded-md"
                            src={Placeholder}
                            alt={"Logo"}
                          />
                          <p className="text-gray-900">Computers</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#e7e7e7] h-screen">
                      <div className="p-4">
                        <p className="text-gray-900">GROUP</p>
                      </div>
                      <div className="bg-[#4E2FA9] p-4">
                        <div className="flex gap-5 p-2 items-center">
                          <img
                            className="w-[50px] rounded-md"
                            src={Placeholder}
                            alt={"Logo"}
                          />
                          <p className="text-white">Computers</p>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex gap-5 p-2 items-center">
                          <img
                            className="w-[50px] rounded-md"
                            src={Placeholder}
                            alt={"Logo"}
                          />
                          <p className="text-gray-900">Computers</p>
                        </div>
                      </div>
                      <div className=" p-4">
                        <div className="flex gap-5 p-2 items-center">
                          <img
                            className="w-[50px] rounded-md"
                            src={Placeholder}
                            alt={"Logo"}
                          />
                          <p className="text-gray-900">Computers</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#ffffff] h-screen">
                      <div className="p-4">
                        <p className="text-gray-900">GROUP</p>
                      </div>
                      <div className="flex gap-5 p2 cursor-pointer">
                        <p>+</p>
                        <p>Add New Product</p>
                      </div>
                      <div className="p-4">
                        <div className="flex gap-5 p-2 items-center">
                          <img
                            className="w-[50px] rounded-md"
                            src={Placeholder}
                            alt={"Logo"}
                          />
                          <p className="text-gray-900">Computers</p>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex gap-5 p-2 items-center">
                          <img
                            className="w-[50px] rounded-md"
                            src={Placeholder}
                            alt={"Logo"}
                          />
                          <p className="text-gray-900">Computers</p>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex gap-5 p-2 items-center">
                          <img
                            className="w-[50px] rounded-md"
                            src={Placeholder}
                            alt={"Logo"}
                          />
                          <p className="text-gray-900">Computers</p>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex gap-5 p-2 items-center">
                          <img
                            className="w-[50px] rounded-md"
                            src={Placeholder}
                            alt={"Logo"}
                          />
                          <p className="text-gray-900">Computers</p>
                        </div>
                      </div>
                      <div className=" p-4">
                        <div className="flex gap-5 p-2 items-center">
                          <img
                            className="w-[50px] rounded-md"
                            src={Placeholder}
                            alt={"Logo"}
                          />
                          <p className="text-gray-900">Computers</p>
                        </div>
                      </div>
                    </div>
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

export default Order;
