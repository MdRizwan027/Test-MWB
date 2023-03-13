import React, { useState } from "react";
import { DashboardLayout } from "@/components/layouts";
import { useProductsStyles } from "@/static/stylesheets/screens/productsStyles";
import { AddButton } from "@/components/atoms/Button";
import TwMultiSelect from "@/components/atoms/TwMultiSelect/TwMultiSelect";
import { SearchField } from "@/components/atoms/SearchField";
import MwbImage from "@/static/images/basket_image.png";
import { Switch } from "@/components/atoms/Switch";
import { Dialog } from "@mui/material";
import ProductImage from "@/static/images/placeholder.jpg";
import barCodeImage from "@/static/images/mwb_barcode.png";
import barIcon from "@/static/svg/ic_barcode.svg";
import pieIcon from "@/static/svg/ic_piechart.svg";
import ChartIcon from "@/static/svg/ic_chart.svg";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const classes = useProductsStyles();
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [anotherModalOpen, setAnotherModalOpen] = useState(false);

  return (
    <>
      <DashboardLayout>
        <div className={classes.root}>
          <div className="py-[20px]">
            <div className="headContainer">
              <div className="headTitle">
                <p>All Products (1245)</p>
              </div>
              <div className="actionButton">
                <div>
                  <AddButton
                    label="Add Products"
                    onClick={() => navigate("/addproduct")}
                  />
                </div>
                <div>
                  <AddButton label="Import from Tally" variant="primary" />
                </div>
              </div>
            </div>

            <div className="productFilters flex gap-5 py-[50px] justify-between">
              <TwMultiSelect />
              <TwMultiSelect />
              <TwMultiSelect />
              <TwMultiSelect />
              <TwMultiSelect />
              <TwMultiSelect />
              <TwMultiSelect />
              <TwMultiSelect />
              <TwMultiSelect />
              <SearchField />
            </div>

            <div>
              <div className="overflow-x-auto relative pt-[10px] pb-[40px]">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-[12px] text-gray-700 bg-gray-50 font-[600] ">
                    <tr className=" color-[#2E2C34;]">
                      <th scope="col" className="py-3 px-6">
                        Product Name
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Brand
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Brand
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Group Category
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Category
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Sub-Category
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Weight
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Base Price
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Stock
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Enable/Disable
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item: any) => (
                      <tr className="border-b ">
                        <th
                          scope="row"
                          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          <div className="flex gap-[20px] items-center ">
                            <img
                              className="w-[50px] rounded-md"
                              src={MwbImage}
                              alt={"Mwb Bazaar"}
                            />
                            <p
                              onClick={() => setAddModalOpen(true)}
                              className="mb-3 text-[14px] font-[600] text-gray-700 font-Manrope dark:text-gray-400 cursor-pointer"
                            >
                              Wingreens Mart
                            </p>
                          </div>
                        </th>
                        <td className="py-4 px-6  color-[#2E2C34;]">amazon</td>
                        <td className="py-4 px-6  color-[#2E2C34;]">
                          Branch Name
                        </td>
                        <td className="py-4 px-6  color-[#2E2C34;]">
                          <div className="tag">
                            <p className="tagTitle">electronics</p>
                          </div>
                        </td>
                        <td className="py-4 px-6  color-[#2E2C34;]">
                          <div className="tag">
                            <p className="tagTitle">electronics</p>
                          </div>
                        </td>
                        <td className="py-4 px-6  color-[#2E2C34;]">
                          <div className="tag">
                            <p className="tagTitle">electronics</p>
                          </div>
                        </td>
                        <td className="py-4 px-6  color-[#2E2C34;]">XX Kg</td>
                        <td className="py-4 px-6  color-[#2E2C34;]">
                          ₹15,302.00
                        </td>
                        <td className="py-4 px-6  color-[#2E2C34;]">
                          <p className="stockStatusTitle">Available</p>
                        </td>
                        <td className="py-4 px-6  color-[#2E2C34;]">
                          <div className="actionMenu">
                            <div>
                              <img src={pieIcon} alt={"Logo"} />
                            </div>

                            <div
                              onClick={() => setAnotherModalOpen(true)}
                              className="cursor-pointer"
                            >
                              <img src={barIcon} alt={"Logo"} />
                            </div>

                            <div>
                              <Switch />
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <Dialog
                open={addModalOpen}
                maxWidth={"lg"}
                sx={{
                  ".MuiPaper-root": {
                    borderRadius: "6px",
                  },
                }}
                onClose={() => setAddModalOpen(false)}
              >
                <div className={classes.addDialog}>
                  <div className="pb-[10px] flex justify-end modalHead">
                    <div onClick={() => setAddModalOpen(false)}>
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="18" cy="18" r="18" fill="#E1E1E1" />
                        <line
                          x1="24.7305"
                          y1="12.423"
                          x2="12.4268"
                          y2="24.7266"
                          stroke="#84818A"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <line
                          x1="24.3104"
                          y1="24.7266"
                          x2="12.0068"
                          y2="12.4229"
                          stroke="#84818A"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="flex gap-5 pt-[20px]">
                    <div>
                      <img src={ProductImage} alt={"Product"} />
                    </div>
                    <div>
                      <img src={ProductImage} alt={"Product"} />
                    </div>
                    <div>
                      <img src={ProductImage} alt={"Product"} />
                    </div>
                  </div>

                  <div className="flex justify-between pt-[20px] pb-[20px]">
                    <div>
                      <p className="modalTitle">
                        Amazon Echo Plus (3nd Gen) - Premium…
                      </p>
                      <p className="modalSubtitile">Brand- Amazon</p>
                      <p className="modalPrize">Our Base Price: Rs. 5,000</p>

                      <div className="flex gap-5">
                        <p className="groupTitle">Group</p>
                        <div className="statusTag">
                          <p className="tagTitle">Computers</p>
                        </div>

                        <p className="groupTitle">Category</p>
                        <div className="statusTag">
                          <p className="tagTitle">Laptop</p>
                        </div>

                        <p className="groupTitle">Sub Category</p>
                        <div className="statusTag">
                          <p className="tagTitle">Gaming Laptops</p>
                        </div>
                      </div>
                    </div>

                    <div className="barCode">
                      <img src={barCodeImage} alt={"Go Back"} />
                    </div>
                  </div>

                  <div className="py-[20px]">
                    <p className="commonTitle">Price Details</p>
                    <div className="flex gap-5">
                      <div>
                        <p className="commonSybtitle py-[10px]">Total Weight</p>
                        <p>20 Kg</p>
                      </div>
                      <div>
                        <p className="commonSybtitle py-[10px]">Total Weight</p>
                        <p>20 Kg</p>
                      </div>
                      <div>
                        <p className="commonSybtitle py-[10px]">Total Weight</p>
                        <p>20 Kg</p>
                      </div>
                    </div>
                  </div>

                  <div className="py-[20px]">
                    <p className="commonTitle">Unit Price Detail</p>
                    <div className="flex gap-5">
                      <div>
                        <p className="commonSybtitle py-[10px]">Total Weight</p>
                        <p>20 Kg</p>
                      </div>
                      <div>
                        <p className="commonSybtitle py-[10px]">Total Weight</p>
                        <p>20 Kg</p>
                      </div>
                    </div>
                  </div>

                  <div className="py-[20px]">
                    <p className="commonTitle">Tax Details</p>
                    <div className="flex gap-5">
                      <div>
                        <p className="commonSybtitle py-[10px]">Total Weight</p>
                        <p>20 Kg</p>
                      </div>
                      <div>
                        <p className="commonSybtitle py-[10px]">Total Weight</p>
                        <p>20 Kg</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog>
            </div>

            <div>
              <Dialog
                open={anotherModalOpen}
                maxWidth={"lg"}
                sx={{
                  ".MuiPaper-root": {
                    borderRadius: "6px",
                  },
                }}
                onClose={() => setAnotherModalOpen(false)}
              >
                <div className={classes.addDialog}>
                  <div className="flex justify-between modalHead w-[500px] py-[10px]">
                    <p className="reportTitle">Sales Report</p>
                    <div onClick={() => setAnotherModalOpen(false)}>
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="18" cy="18" r="18" fill="#E1E1E1" />
                        <line
                          x1="24.7305"
                          y1="12.4228"
                          x2="12.4268"
                          y2="24.7265"
                          stroke="#84818A"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <line
                          x1="24.3104"
                          y1="24.7266"
                          x2="12.0068"
                          y2="12.4229"
                          stroke="#84818A"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="flex gap-10 py-[20px] items-center">
                    <div>
                      <div className="text-center p-[50px]">
                        <p className="font-bold">2400</p>
                        <p>Order</p>
                      </div>
                      <img src={ChartIcon} alt={"chart"} />
                    </div>
                    <div className="flex gap-[80px] justify-between">
                      <div>
                        <li className="text-red-500">
                          <span className="text-black">Complete</span>
                        </li>
                        <li className="text-red-500">
                          <span className="text-black">In Progress</span>
                        </li>
                        <li className="text-red-500">
                          <span className="text-black">Cancel</span>
                        </li>
                      </div>
                      <div>
                        <p>1200</p>
                        <p>800</p>
                        <p>200</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Products;
