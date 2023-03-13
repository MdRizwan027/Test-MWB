import React, { useState } from "react";
import { AddButton, GridOptionButton } from "@/components/atoms/Button";
import { useMasterListStyles } from "@/static/stylesheets/screens";
import { Switch } from "@/components/atoms/Switch";
import { Dialog, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { UploadArea } from "@/components/organisms/UploadArea";
import { ActionButton } from "@/components/atoms/Button/ActionButton";

interface MasterListGridProps {
  type?: "WholeSeller" | "Retailer";
}

const MasterListGrid: React.FC<MasterListGridProps> = (props) => {
  const classes = useMasterListStyles();
  const { type } = props;
  const [addModalOpen, setAddModalOpen] = useState(false);

  const [masterType, setMasterType] = useState("Regional Wholeseller");

  const handleChangeMasterType = (event: SelectChangeEvent) => {
    setMasterType(event.target.value as string);
  };

  return (
    <>
      <div>
        <AddButton
          label={type === "WholeSeller" ? "Wholeseller" : "Retailer"}
          onClick={() => setAddModalOpen(true)}
        />
      </div>

      <div>
        <table className={classes.dataGrid} cellPadding={0} cellSpacing={0}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Enable/Disable</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {type === "WholeSeller" ? "Wholeseller" : "Retailer"} Type
              </td>
              <td>
                <Switch />
              </td>
              <td>
                <GridOptionButton icon={"vertical-options"} />
              </td>
            </tr>

            <tr>
              <td>{type === "WholeSeller"} Type</td>
              <td>
                <Switch />
              </td>
              <td>
                <GridOptionButton icon={"vertical-options"} />
              </td>
            </tr>

            <tr>
              <td>
                {type === "WholeSeller" ? "Wholeseller" : "Retailer"} Type
              </td>
              <td>
                <Switch />
              </td>
              <td>
                <GridOptionButton icon={"vertical-options"} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

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
        <div className={classes.addDialog}>
          <div className={"title"}>
            Add {type === "WholeSeller" ? "Wholeseller" : "Retailer"} Type
          </div>

          <UploadArea label={"Upload Icon"} />

          <div className={"select-master"}>
            <div className={"input-label"}>
              {type === "WholeSeller" ? "Wholeseller" : "Retailer"} Type
            </div>
            <Select
              label="Age"
              variant={"standard"}
              fullWidth={true}
              value={masterType}
              onChange={handleChangeMasterType}
            >
              <MenuItem value={"Regional Wholeseller"}>
                Regional Wholeseller
              </MenuItem>
              <MenuItem value={"Regional Wholeseller 1"}>
                Regional Wholeseller 1
              </MenuItem>
              <MenuItem value={"Regional Wholeseller 2"}>
                Regional Wholeseller 2
              </MenuItem>
            </Select>
          </div>

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
      </Dialog>
    </>
  );
};

export { MasterListGrid };
