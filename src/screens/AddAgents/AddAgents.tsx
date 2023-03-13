import { ActionButton } from "@/components/atoms/Button/ActionButton";
import { DashboardLayout } from "@/components/layouts";
import { useaddAgentStyle } from "@/static/stylesheets/molecules/addagent";
import {
  FormControl,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React, { useState } from "react";
import SalesManIcon from "@/static/icons/icon_salesman.svg";
import indivitualIcon from "@/static/icons/icon_indivitual.svg";
import AgancyIcon from "@/static/icons/icon_agancy.svg";

const AddAgents = () => {
  const classes = useaddAgentStyle();
  const [paymentType, setPaymentType] = React.useState("cash");
  const [masterType, setMasterType] = useState("Regional Wholeseller");

  const handleChangeMasterType = (event: SelectChangeEvent) => {
    setMasterType(event.target.value as string);
  };

  return (
    <>
      <DashboardLayout>
        <div className={classes.root}>
          <div className="container">
            <div className="textContainer">
              <p className="titleHead">Add Agent</p>
            </div>
            <div className="radio-actionButton">
              <div className="radio-button">
                <FormControl>
                  <RadioGroup
                    aria-labelledby="radio-buttons"
                    name="controlled-radio-buttons"
                    value={paymentType}
                    onChange={() => setPaymentType("cash")}
                  >
                    <FormControlLabel
                      value="Cash "
                      control={<Radio />}
                      checked={paymentType === "cash" ? true : false}
                      label={
                        <div className="flex gap-4 items-center">
                          <img src={indivitualIcon} alt={"Logo"} />
                          Indivitual
                        </div>
                      }
                    />
                  </RadioGroup>
                </FormControl>
              </div>
              <div className="radio-button">
                <FormControl>
                  <RadioGroup
                    aria-labelledby="radio-buttons"
                    name="controlled-radio-buttons"
                    value={paymentType}
                    onChange={() => setPaymentType("online")}
                  >
                    <FormControlLabel
                      value="Online"
                      control={<Radio />}
                      checked={paymentType === "online" ? true : false}
                      label=<div className="flex gap-4 items-center">
                        <img src={AgancyIcon} alt={"Logo"} /> Agency
                      </div>
                    />
                  </RadioGroup>
                </FormControl>
              </div>
              <div className="radio-button">
                <FormControl>
                  <RadioGroup
                    aria-labelledby="radio-buttons"
                    name="controlled-radio-buttons"
                    value={paymentType}
                    onChange={() => setPaymentType("online")}
                  >
                    <FormControlLabel
                      value="Online"
                      control={<Radio />}
                      checked={paymentType === "online" ? true : false}
                      label=<div className="flex gap-4 items-center">
                        <img src={SalesManIcon} alt={"Logo"} /> Salesman
                      </div>
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
            {paymentType === "cash" ? (
              <>
                <div>
                  <div className="formContainer">
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
                  <div className="formContainer">
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
                  <div className="singleForm">
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
                  <div className="formContainer">
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
                  <div className="formContainer">
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
                </div>
              </>
            ) : (
              <>
                {/* Agency */}
                <div>
                  <div className="formContainer">
                    <Select
                      label="Age"
                      variant={"standard"}
                      fullWidth={true}
                      value={masterType}
                      onChange={handleChangeMasterType}
                    >
                      <MenuItem value={"Regional Wholeseller"}>
                      Subhash Rattan
                      </MenuItem>
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
                      <MenuItem value={"Regional Wholeseller"}>
                      Phone number
                      </MenuItem>
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
                      <MenuItem value={"Regional Wholeseller"}>
                      State
                      </MenuItem>
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
                      <MenuItem value={"Regional Wholeseller"}>
                        Grocery
                      </MenuItem>
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
                      <MenuItem value={"Regional Wholeseller"}>
                        Grocery
                      </MenuItem>
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
                      <MenuItem value={"Regional Wholeseller"}>
                        Grocery
                      </MenuItem>
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
                      <MenuItem value={"Regional Wholeseller"}>
                        Grocery
                      </MenuItem>
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
                      <MenuItem value={"Regional Wholeseller"}>
                        Grocery
                      </MenuItem>
                      <MenuItem value={"Regional Wholeseller 1"}>
                        Grocery 1
                      </MenuItem>
                    </Select>
                  </div>
                </div>
              </>
            )}
            <div className="flex gap-5 py-7">
              <ActionButton title="Cancel" variant="primary" />
              <ActionButton title="Save" variant="default" />
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default AddAgents;
