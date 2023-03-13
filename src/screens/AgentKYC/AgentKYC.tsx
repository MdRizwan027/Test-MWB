import React from "react";
import { ActionButton } from "@/components/atoms/Button/ActionButton";
import { DashboardLayout } from "@/components/layouts";
import { useaddAgentStyle } from "@/static/stylesheets/molecules/addagent";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

import SalesManIcon from "@/static/icons/icon_salesman.svg";
import indivitualIcon from "@/static/icons/icon_indivitual.svg";
import AgancyIcon from "@/static/icons/icon_agancy.svg";
import LogoPrev from "@/static/icons/ic_previous.png";
import { IndivitualKYCForm } from "@/components/molecules/AgentsKycForm/IndivitualKYCForm";
import { AgencyKYCForm } from "@/components/molecules/AgentsKycForm/AgencyKYCForm";
import { SalesManKYCForm } from "@/components/molecules/AgentsKycForm/SalesManKYCForm";

const AgentKYC = () => {
  const classes = useaddAgentStyle();
  const [ChangeType, setChangeType] = React.useState("cash");

  return (
    <>
      <DashboardLayout>
        <div className={classes.root}>
          <div className="container">
            <div className="headContainer">
              <div className="icon">
                <img src={LogoPrev} alt={"Logo"} />
              </div>
              <div className="headTitle">Agent KYC</div>
            </div>

            <div className="radio-actionButton">
              <div className="radio-button">
                <FormControl>
                  <RadioGroup
                    aria-labelledby="radio-buttons"
                    name="controlled-radio-buttons"
                    value={ChangeType}
                    onChange={() => setChangeType("indivisual")}
                  >
                    <FormControlLabel
                      value="indivisual "
                      control={<Radio />}
                      checked={ChangeType === "indivisual"}
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
                    value={ChangeType}
                    onChange={() => setChangeType("Agency")}
                  >
                    <FormControlLabel
                      value="agency"
                      control={<Radio />}
                      checked={ChangeType === "Agency"}
                      label={
                        <div className="flex gap-4 items-center">
                          <img src={AgancyIcon} alt={"Logo"} /> Agency
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
                    value={ChangeType}
                    onChange={() => setChangeType("Sales")}
                  >
                    <FormControlLabel
                      value="Sales"
                      control={<Radio />}
                      checked={ChangeType === "Sales"}
                      label={
                        <div className="flex gap-4 items-center">
                          <img src={SalesManIcon} alt={"Logo"} /> Salesman
                        </div>
                      }
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>

            {ChangeType === "indivisual" && (
              <>
                <div>
                  <IndivitualKYCForm />
                </div>
              </>
            )}

            {ChangeType === "Agency" && (
              <>
                <div>
                  <AgencyKYCForm />
                </div>
              </>
            )}

            {ChangeType === "Sales" && (
              <>
                <div>
                  <SalesManKYCForm />
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

export default AgentKYC;
