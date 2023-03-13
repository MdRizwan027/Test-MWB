import React, { useState } from "react";
import { DashboardLayout } from "@/components/layouts";
import { useCreateOfferStyles } from "@/static/stylesheets/screens/createOfferStyle";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import UploadAreaImage from "@/static/svg/ic_uploadarea.svg";

const CreateOffer = () => {
  const classes = useCreateOfferStyles();
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
              <p className="HeadTitle">Create New Offer</p>
            </div>

            <div className="py-[20px]">
              <div className="formContainer">
                <Select
                  sx={{
                    border: 0,
                    boxShadow: "none",
                  }}
                  label="Age"
                  variant={"standard"}
                  fullWidth={true}
                  value={masterType}
                  onChange={handleChangeMasterType}
                >
                  <MenuItem value={"Regional Wholeseller"}>Grocery</MenuItem>
                  <MenuItem value={"Regional Wholeseller 1"}>
                    Grocery 1
                  </MenuItem>
                </Select>

                <Select
                  label="Age"
                  variant={"standard"}
                  fullWidth={true}
                  value={masterType}
                  onChange={handleChangeMasterType}
                >
                  <MenuItem value={"Regional Wholeseller"}>Grocery</MenuItem>
                  <MenuItem value={"Regional Wholeseller 1"}>
                    Grocery 1
                  </MenuItem>
                </Select>
              </div>

              <div className="formContainer">
                <Select
                  label="Age"
                  variant={"standard"}
                  fullWidth={true}
                  value={masterType}
                  onChange={handleChangeMasterType}
                >
                  <MenuItem value={"Regional Wholeseller"}>Grocery</MenuItem>
                  <MenuItem value={"Regional Wholeseller 1"}>
                    Grocery 1
                  </MenuItem>
                </Select>

                <Select
                  label="Age"
                  variant={"standard"}
                  fullWidth={true}
                  value={masterType}
                  onChange={handleChangeMasterType}
                >
                  <MenuItem value={"Regional Wholeseller"}>Grocery</MenuItem>
                  <MenuItem value={"Regional Wholeseller 1"}>
                    Grocery 1
                  </MenuItem>
                </Select>
              </div>

              <div className="formContainer">
                <Select
                  label="Age"
                  variant={"standard"}
                  fullWidth={true}
                  value={masterType}
                  onChange={handleChangeMasterType}
                >
                  <MenuItem value={"Regional Wholeseller"}>Grocery</MenuItem>
                  <MenuItem value={"Regional Wholeseller 1"}>
                    Grocery 1
                  </MenuItem>
                </Select>

                <Select
                  label="Age"
                  variant={"standard"}
                  fullWidth={true}
                  value={masterType}
                  onChange={handleChangeMasterType}
                >
                  <MenuItem value={"Regional Wholeseller"}>Grocery</MenuItem>
                  <MenuItem value={"Regional Wholeseller 1"}>
                    Grocery 1
                  </MenuItem>
                </Select>
              </div>
              <div className="singleForm">
                <Select
                  label="Age"
                  variant={"standard"}
                  fullWidth={true}
                  value={masterType}
                  onChange={handleChangeMasterType}
                >
                  <MenuItem value={"Regional Wholeseller"}>Grocery</MenuItem>
                  <MenuItem value={"Regional Wholeseller 1"}>
                    Grocery 1
                  </MenuItem>
                </Select>
              </div>

              <div className="singleForm">
                <Select
                  label="Age"
                  variant={"standard"}
                  fullWidth={true}
                  value={masterType}
                  onChange={handleChangeMasterType}
                >
                  <MenuItem value={"Regional Wholeseller"}>Grocery</MenuItem>
                  <MenuItem value={"Regional Wholeseller 1"}>
                    Grocery 1
                  </MenuItem>
                </Select>
              </div>

              <div className="formContainer">
                <Select
                  label="Age"
                  variant={"standard"}
                  fullWidth={true}
                  value={masterType}
                  onChange={handleChangeMasterType}
                >
                  <MenuItem value={"Regional Wholeseller"}>Grocery</MenuItem>
                  <MenuItem value={"Regional Wholeseller 1"}>
                    Grocery 1
                  </MenuItem>
                </Select>

                <Select
                  label="Age"
                  variant={"standard"}
                  fullWidth={true}
                  value={masterType}
                  onChange={handleChangeMasterType}
                >
                  <MenuItem value={"Regional Wholeseller"}>Grocery</MenuItem>
                  <MenuItem value={"Regional Wholeseller 1"}>
                    Grocery 1
                  </MenuItem>
                </Select>
              </div>
              <div className="formContainer">
                <Select
                  label="Age"
                  variant={"standard"}
                  fullWidth={true}
                  value={masterType}
                  onChange={handleChangeMasterType}
                >
                  <MenuItem value={"Regional Wholeseller"}>Grocery</MenuItem>
                  <MenuItem value={"Regional Wholeseller 1"}>
                    Grocery 1
                  </MenuItem>
                </Select>

                <Select
                  label="Age"
                  variant={"standard"}
                  fullWidth={true}
                  value={masterType}
                  onChange={handleChangeMasterType}
                >
                  <MenuItem value={"Regional Wholeseller"}>Grocery</MenuItem>
                  <MenuItem value={"Regional Wholeseller 1"}>
                    Grocery 1
                  </MenuItem>
                </Select>
              </div>
              <div className="formContainer">
                <Select
                  label="Age"
                  variant={"standard"}
                  fullWidth={true}
                  value={masterType}
                  onChange={handleChangeMasterType}
                >
                  <MenuItem value={"Regional Wholeseller"}>Grocery</MenuItem>
                  <MenuItem value={"Regional Wholeseller 1"}>
                    Grocery 1
                  </MenuItem>
                </Select>

                <Select
                  label="Age"
                  variant={"standard"}
                  fullWidth={true}
                  value={masterType}
                  onChange={handleChangeMasterType}
                >
                  <MenuItem value={"Regional Wholeseller"}>Grocery</MenuItem>
                  <MenuItem value={"Regional Wholeseller 1"}>
                    Grocery 1
                  </MenuItem>
                </Select>
              </div>

              <div className="singleForm">
                <Select
                  label="Age"
                  variant={"standard"}
                  fullWidth={true}
                  value={masterType}
                  onChange={handleChangeMasterType}
                >
                  <MenuItem value={"Regional Wholeseller"}>Grocery</MenuItem>
                  <MenuItem value={"Regional Wholeseller 1"}>
                    Grocery 1
                  </MenuItem>
                </Select>
              </div>
            </div>

            <div>
              <div className="w-[400px]">
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
      </DashboardLayout>
    </>
  );
};

export default CreateOffer;
