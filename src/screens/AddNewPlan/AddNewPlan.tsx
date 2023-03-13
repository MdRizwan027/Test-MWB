import React, { useState } from "react";
import { ActionButton } from "@/components/atoms/Button/ActionButton";
import { DashboardLayout } from "@/components/layouts";
import { useaddAgentStyle } from "@/static/stylesheets/molecules/addagent";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

import LogoPrev from "@/static/icons/ic_previous.png";
import IcView from "@/static/svg/ic_view.svg";
import { FreePlan } from "@/components/molecules/FreePlan";
import { PaidPlan } from "@/components/molecules/PaidPlan";
import { useNavigate } from "react-router-dom";

const AddNewPlan = () => {
  const classes = useaddAgentStyle();
  const [ChangeType, setChangeType] = useState("free");
  const navigate = useNavigate();

  return (
    <>
      <DashboardLayout>
        <div className={classes.root}>
          <div className="container">
            <div className="flex gap-5 items-center justify-between">
              <div className="flex gap-5">
                <img className="w-[10px]" src={LogoPrev} alt={"Logo"} />
                <div className="headTitle">Add New Plan</div>
              </div>

              <div className="flex gap-5 items-center border-2 border-[#4E2FA9] rounded-md border-dashed py-[10px] px-[30px] cursor-pointer" onClick={() => navigate("/reviewplan")}>
                <div className="w-[20px]">
                  <img src={IcView} alt={"Logo"} />
                </div>
                <div className="text-[18px] font-medium">Preview</div>
              </div>
            </div>

            <div className="radio-actionButton">
              <div>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="radio-buttons"
                    name="controlled-radio-buttons"
                    value={ChangeType}
                    onChange={() => setChangeType("free")}
                  >
                    <FormControlLabel
                      value="free "
                      control={<Radio />}
                      checked={ChangeType === "free" ? true : false}
                      label={
                        <div className="flex gap-4 items-center">Free</div>
                      }
                    />
                  </RadioGroup>
                </FormControl>
              </div>

              <div>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="radio-buttons"
                    name="controlled-radio-buttons"
                    value={ChangeType}
                    onChange={() => setChangeType("paid")}
                  >
                    <FormControlLabel
                      value="paid"
                      control={<Radio />}
                      checked={ChangeType === "paid"}
                      label={<div className="flex gap-4 items-center">Paid</div>}
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>

            {ChangeType === "free" && (
              <>
                <div>
                  <FreePlan />
                </div>
              </>
            )}

            {ChangeType === "paid" && (
              <>
                <div>
                  <PaidPlan />
                </div>
              </>
            )}

            <div className="flex gap-5 pt-[10px] pb-[40px]">
              <ActionButton title="Cancel" variant="primary" />
              <ActionButton title="Submit" variant="default" />
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default AddNewPlan;
