import React, { useState } from "react";
import { DashboardLayout } from "@/components/layouts";
import { ActionButton } from "@/components/atoms/Button/ActionButton";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useaddBranchStyles } from "@/static/stylesheets/screens";

const AddBranch = () => {
  const classes = useaddBranchStyles();
  const [masterType, setMasterType] = useState("Regional Wholeseller");

  const handleChangeMasterType = (event: SelectChangeEvent) => {
    setMasterType(event.target.value as string);
  };

  return (
    <>
      <DashboardLayout>
        <div className={classes.root}>
          <div>
            <div className="py-5">
              <p className="commonTitle">Add Branch</p>
            </div>

            <div>
              <p className="branchLabel">Branch name</p>
              <div className="formContainer">
                <Select
                  label="Branch name"
                  variant={"standard"}
                  fullWidth={true}
                  value={masterType}
                  onChange={handleChangeMasterType}
                >
                  <MenuItem value={"Regional Wholeseller"}>
                    Branch - ABC
                  </MenuItem>
                  <MenuItem value={"Regional Wholeseller 1"}>
                    Branch - ABC
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
            </div>

            <div>
              <p className="branchLabel">Manager name</p>
              <div className="formContainer">
                <Select
                  label="Age"
                  variant={"standard"}
                  fullWidth={true}
                  value={masterType}
                  onChange={handleChangeMasterType}
                >
                  <MenuItem value={"Regional Wholeseller"}>
                    Ashish Patel
                  </MenuItem>
                  <MenuItem value={"Regional Wholeseller 1"}>
                    Ashish Patel
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
            </div>

            <div>
              <p className="branchLabel">Branch Phone</p>
              <div className="formContainer">
                <Select
                  label="Age"
                  variant={"standard"}
                  fullWidth={true}
                  value={masterType}
                  onChange={handleChangeMasterType}
                >
                  <MenuItem value={"Regional Wholeseller"}>1234567890</MenuItem>
                  <MenuItem value={"Regional Wholeseller 1"}>
                    1234567890
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
            </div>

            <div>
              <p className="branchLabel">Category</p>
              <div className="singleForm">
                <Select
                  label="Branch"
                  variant={"standard"}
                  fullWidth={true}
                  value={masterType}
                  onChange={handleChangeMasterType}
                >
                  <MenuItem value={"Regional Wholeseller"}>Rice</MenuItem>
                  <MenuItem value={"Regional Wholeseller 1"}>Rice</MenuItem>
                </Select>
              </div>
            </div>

            <div>
              <p className="branchLabel">Sub Category</p>
              <div className="singleForm">
                <Select
                  label="Age"
                  variant={"standard"}
                  fullWidth={true}
                  value={masterType}
                  onChange={handleChangeMasterType}
                >
                  <MenuItem value={"Regional Wholeseller"}>Basmati</MenuItem>
                  <MenuItem value={"Regional Wholeseller 1"}>Basmati</MenuItem>
                </Select>
              </div>
            </div>

            <div>
              <p className="branchLabel">Item</p>
              <div className="formContainer">
                <Select
                  label="Age"
                  variant={"standard"}
                  fullWidth={true}
                  value={masterType}
                  onChange={handleChangeMasterType}
                >
                  <MenuItem value={"Regional Wholeseller"}>MWB Rice</MenuItem>
                  <MenuItem value={"Regional Wholeseller 1"}>MWB Rice</MenuItem>
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
            </div>

            <div>
              <p className="branchLabel">Address Line 1</p>
              <div className="formContainer">
                <Select
                  label="Age"
                  variant={"standard"}
                  fullWidth={true}
                  value={masterType}
                  onChange={handleChangeMasterType}
                >
                  <MenuItem value={"Regional Wholeseller"}>
                    Address Line 1
                  </MenuItem>
                  <MenuItem value={"Regional Wholeseller 1"}>
                    Address Line 1
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
            </div>

            <div>
              <p className="branchLabel">Pincode</p>
              <div className="formContainer">
                <Select
                  label="Age"
                  variant={"standard"}
                  fullWidth={true}
                  value={masterType}
                  onChange={handleChangeMasterType}
                >
                  <MenuItem value={"Regional Wholeseller"}>Pincode</MenuItem>
                  <MenuItem value={"Regional Wholeseller 1"}>Pincode</MenuItem>
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
            </div>

            <div>
              <p className="branchLabel">City</p>
              <div className="singleForm">
                <Select
                  label="Age"
                  variant={"standard"}
                  fullWidth={true}
                  value={masterType}
                  onChange={handleChangeMasterType}
                >
                  <MenuItem value={"Regional Wholeseller"}>Select</MenuItem>
                  <MenuItem value={"Regional Wholeseller 1"}>Select</MenuItem>
                </Select>
              </div>
            </div>

            <div className="flex gap-5 py-5">
              <ActionButton title="Cancel" variant="primary" />

              <ActionButton title="Cancel" variant="default" />
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default AddBranch;
