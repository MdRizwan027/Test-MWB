import React, { useState } from "react";
import { DashboardLayout } from "@/components/layouts";
import { ActionButton } from "@/components/atoms/Button/ActionButton";
import {
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { usAddRetailerStyles } from "@/static/stylesheets/screens/addretailerStyle";


const AddRetailers = () => {
  const classes = usAddRetailerStyles();

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
              <p className="commonTitle">Add Retailer</p>
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
                <MenuItem value={"Regional Wholeseller 1"}>Grocery 1</MenuItem>
              </Select>

              <Select
                label="Age"
                variant={"standard"}
                fullWidth={true}
                value={masterType}
                onChange={handleChangeMasterType}
              >
                <MenuItem value={"Regional Wholeseller"}>Grocery</MenuItem>
                <MenuItem value={"Regional Wholeseller 1"}>Grocery 1</MenuItem>
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
                <MenuItem value={"Regional Wholeseller 1"}>Grocery 1</MenuItem>
              </Select>

              <Select
                label="Age"
                variant={"standard"}
                fullWidth={true}
                value={masterType}
                onChange={handleChangeMasterType}
              >
                <MenuItem value={"Regional Wholeseller"}>Grocery</MenuItem>
                <MenuItem value={"Regional Wholeseller 1"}>Grocery 1</MenuItem>
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
                <MenuItem value={"Regional Wholeseller 1"}>Grocery 1</MenuItem>
              </Select>

              <Select
                label="Age"
                variant={"standard"}
                fullWidth={true}
                value={masterType}
                onChange={handleChangeMasterType}
              >
                <MenuItem value={"Regional Wholeseller"}>Grocery</MenuItem>
                <MenuItem value={"Regional Wholeseller 1"}>Grocery 1</MenuItem>
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
                <MenuItem value={"Regional Wholeseller 1"}>Grocery 1</MenuItem>
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
                <MenuItem value={"Regional Wholeseller 1"}>Grocery 1</MenuItem>
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
                <MenuItem value={"Regional Wholeseller 1"}>Grocery 1</MenuItem>
              </Select>

              <Select
                label="Age"
                variant={"standard"}
                fullWidth={true}
                value={masterType}
                onChange={handleChangeMasterType}
              >
                <MenuItem value={"Regional Wholeseller"}>Grocery</MenuItem>
                <MenuItem value={"Regional Wholeseller 1"}>Grocery 1</MenuItem>
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
                <MenuItem value={"Regional Wholeseller 1"}>Grocery 1</MenuItem>
              </Select>

              <Select
                label="Age"
                variant={"standard"}
                fullWidth={true}
                value={masterType}
                onChange={handleChangeMasterType}
              >
                <MenuItem value={"Regional Wholeseller"}>Grocery</MenuItem>
                <MenuItem value={"Regional Wholeseller 1"}>Grocery 1</MenuItem>
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
                <MenuItem value={"Regional Wholeseller 1"}>Grocery 1</MenuItem>
              </Select>

              <Select
                label="Age"
                variant={"standard"}
                fullWidth={true}
                value={masterType}
                onChange={handleChangeMasterType}
              >
                <MenuItem value={"Regional Wholeseller"}>Grocery</MenuItem>
                <MenuItem value={"Regional Wholeseller 1"}>Grocery 1</MenuItem>
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
                <MenuItem value={"Regional Wholeseller 1"}>Grocery 1</MenuItem>
              </Select>
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

export default AddRetailers;
