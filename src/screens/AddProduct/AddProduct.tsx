import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "@/components/layouts";
import { useAddnewProductStyles } from "@/static/stylesheets/screens";
import Placeholder from "@/static/images/placeholder.jpg";
import UploadImg from "@/static/svg/ic_bulkupload.svg";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import UploadAreaImage from "@/static/svg/ic_uploadarea.svg";

const AddProduct = () => {
  const classes = useAddnewProductStyles();
  const navigate = useNavigate();
  const [masterType, setMasterType] = useState("Regional Wholeseller");

  const handleChangeMasterType = (event: SelectChangeEvent) => {
    setMasterType(event.target.value as string);
  };

  return (
    <>
      <DashboardLayout>
        <div className={classes.root}>
          <div>
            <div className="flex gap-5 justify-between items-center pb-[20px]">
              <p className="commonTitle">Add New Product</p>
              <div className="border-2 p-3 rounded-md cursor-pointer">
                <div
                  onClick={() => navigate("/bulkupload")}
                  className="flex gap-5"
                >
                  <img src={UploadImg} alt={"Logo"} />
                  <p>Bulk Upload</p>
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
                  <p className="text-gray-900">CATEGORY</p>
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

              <div className=" h-screen">
                <div className="bg-[#e7e7e7] p-[20px]">
                  <p className="text-gray-900">PRODUCTS</p>
                </div>
                <div className="flex gap-5 pt-[20px] cursor-pointer">
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

              <div className="h-screen">
                <div className=" bg-[#e7e7e7] p-[20px]">
                  <p className="text-gray-900">CATEGORY</p>
                </div>

                <div className=" p-4">
                  <div className="py-[10px]">
                    <p className="tableTitle">Product Name</p>
                    <Select
                      label="Age"
                      variant={"standard"}
                      fullWidth={true}
                      value={masterType}
                      onChange={handleChangeMasterType}
                    >
                      <MenuItem value={"Regional Wholeseller"}>
                        Alienware 13 Inch Gaming Laptop
                      </MenuItem>
                      <MenuItem value={"Regional Wholeseller 1"}>
                        Alienware 13 Inch Gaming Laptop
                      </MenuItem>
                    </Select>
                  </div>

                  <div className="py-[10px]">
                    <p className="tableTitle">Dell</p>
                    <Select
                      label="Age"
                      variant={"standard"}
                      fullWidth={true}
                      value={masterType}
                      onChange={handleChangeMasterType}
                    >
                      <MenuItem value={"Regional Wholeseller"}>
                        Grocery
                      </MenuItem>
                      <MenuItem value={"Regional Wholeseller 1"}>
                        Grocery 1
                      </MenuItem>
                    </Select>
                  </div>
                  <div>
                    <div className="py-[10px]">
                      <p className="tableTitle">Unit Price Detail</p>
                    </div>
                    <div className="flex gap-2 w-full">
                      <div className="w-full">
                        <p className="py-[10px]">Per Unit Weight</p>
                        <Select
                          label="Age"
                          variant={"standard"}
                          fullWidth={true}
                          value={masterType}
                          onChange={handleChangeMasterType}
                        >
                          <MenuItem value={"Regional Wholeseller"}>
                            20 Kg
                          </MenuItem>
                          <MenuItem value={"Regional Wholeseller 1"}>
                            20 Kg
                          </MenuItem>
                        </Select>
                      </div>
                      <div className="w-full">
                        <p className="py-[10px]">MRP</p>
                        <Select
                          label="Age"
                          variant={"standard"}
                          fullWidth={true}
                          value={masterType}
                          onChange={handleChangeMasterType}
                        >
                          <MenuItem value={"Regional Wholeseller"}>
                            ₹ 500.00
                          </MenuItem>
                          <MenuItem value={"Regional Wholeseller 1"}>
                            ₹ 500.00
                          </MenuItem>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="py-[10px]">
                      <p className="tableTitle pt-[20px]">Price Details</p>
                    </div>
                    <div className="flex gap-2 w-full">
                      <div className="w-full">
                        <p className="py-[10px]">Total Weight</p>
                        <Select
                          label="Age"
                          variant={"standard"}
                          fullWidth={true}
                          value={masterType}
                          onChange={handleChangeMasterType}
                        >
                          <MenuItem value={"Regional Wholeseller"}>
                            20 Kg
                          </MenuItem>
                          <MenuItem value={"Regional Wholeseller 1"}>
                            20 Kg
                          </MenuItem>
                        </Select>
                      </div>

                      <div className="w-full">
                        <p className="py-[10px]">Total MRP</p>
                        <Select
                          label="Age"
                          variant={"standard"}
                          fullWidth={true}
                          value={masterType}
                          onChange={handleChangeMasterType}
                        >
                          <MenuItem value={"Regional Wholeseller"}>
                            52 Packs
                          </MenuItem>
                          <MenuItem value={"Regional Wholeseller 1"}>
                            52 Packs
                          </MenuItem>
                        </Select>
                      </div>

                      <div className="w-full">
                        <p className="py-[10px]">Weight</p>
                        <Select
                          label="Age"
                          variant={"standard"}
                          fullWidth={true}
                          value={masterType}
                          onChange={handleChangeMasterType}
                        >
                          <MenuItem value={"Regional Wholeseller"}>
                            ₹ 90,500.00
                          </MenuItem>
                          <MenuItem value={"Regional Wholeseller 1"}>
                            ₹ 90,500.00
                          </MenuItem>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="py-[30px]">
                    <div className="w-[370px] py-[5px]">
                      <div className="flex gap-3 justify-center align-middle items-center border-[#E1E1E1;] border-2 border-dashed rounded-md p-5 bg-[#F9FAFB] cursor-pointer">
                        <div>
                          <img src={UploadAreaImage} alt={"Logo"} />
                        </div>
                        <div>
                          <p>Upload Image</p>
                          <p>Supports JPG, PNG, and JPEG</p>
                        </div>
                      </div>
                    </div>

                    <div className="w-[370px] py-[5px]">
                      <div className="flex gap-3 justify-center align-middle items-center border-[#E1E1E1;] border-2 border-dashed rounded-md p-5 bg-[#F9FAFB] cursor-pointer">
                        <div>
                          <img src={UploadAreaImage} alt={"Logo"} />
                        </div>
                        <div>
                          <p>Upload Image</p>
                          <p>Supports JPG, PNG, and JPEG</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default AddProduct;
