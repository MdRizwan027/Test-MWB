import React, { useState } from "react";
import { ActionButton } from "@/components/atoms/Button/ActionButton";
import { useKycFormStyles } from "@/static/stylesheets/molecules";
import { Avatar, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import LogoDelete from "@/static/icons/ic_delete.png";
import LogoEdit from "@/static/icons/ic_edit.png";

const KycForm = () => {
  const classes = useKycFormStyles();
  const [masterType, setMasterType] = useState("Regional Wholeseller");

  const handleChangeMasterType = (event: SelectChangeEvent) => {
    setMasterType(event.target.value as string);
  };

  return (
    <div className={classes.root}>
      <div className="headContainer">
        <Avatar
          sx={{
            width: 100,
            height: 100,
          }}
        >
          Logo
        </Avatar>
        <div>
          <ActionButton variant="default" title="Upload new picture" />
        </div>
        Remove picture
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

      <div className="mapButton">
        <p>Set Location via Google Maps</p>
        <ActionButton variant="primary" title="Set Location" />
      </div>

      <div className="docContainer">
        <p>Documents</p>
        <div className="Attachment-file">
          <div>
            Aadhaar Card
            <Avatar
              sx={{
                width: 100,
                height: 100,
              }}
              variant="square"
            >
              Card
            </Avatar>
            <div className="documentButton">
              <div className="ActionLogo">
                <img src={LogoDelete} alt={"Logo"} />
                <div className="dividor"></div>
                <img src={LogoEdit} alt={"Logo"} />
              </div>
            </div>
          </div>
          <div>
            Pan Card
            <Avatar
              sx={{
                width: 100,
                height: 100,
              }}
              variant="square"
            >
              Card
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
};

export { KycForm };
