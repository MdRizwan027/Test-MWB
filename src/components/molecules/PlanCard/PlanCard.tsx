import React, { useState } from "react";
import { usePlancardStyles } from "@/static/stylesheets/molecules/plancardStyle";
import LogoGo from "@/static/icons/ic_arrow_go.png";
import { ActionButton } from "@/components/atoms/Button/ActionButton";
import { Dialog } from "@mui/material";
import successCheckIcon from "@/static/icons/green-tick.svg";
import close from '@/static/icons/close-icon.svg';

const PlanCard = () => {
  const classes = usePlancardStyles();
  const [addModalOpen, setAddModalOpen] = useState(false);

  return (
    <div className={classes.root}>
      <div className="container" onClick={() => setAddModalOpen(true)}>
        <div className="plancard">
          <div className="plan-area">
            <div>
              <p className="planTitle">Plan Name</p>
              <p className="planSubtitle">₹24 /month</p>
            </div>

            <div>
              <div className="circle">
                <p>15</p>
              </div>
              <p className="circle-label">days</p>
            </div>
          </div>

          <p className="planDescription">Available for UP, Delhi, Punjab</p>
          <div className="actionButton">
            <p>View Features</p>
            <img src={LogoGo} alt={"Logo"} />
          </div>
        </div>
      </div>

      <Dialog open={addModalOpen}  maxWidth={"lg"} sx={{ ".MuiPaper-root": {   borderRadius: "20px", }, }}>
        <div className={classes.addDialog}>
          <div className="modalContainer">
            <div className="modalHead">
              <div>Plan Name</div>
              <div  onClick={() => setAddModalOpen(false)}><img src={close} alt="close" /></div>
            </div>

            <div className="planHead">
              <div>
                <p>
                  ₹948 <span>/month</span>
                </p>
                <p className="planDescription">
                  Available for UP, Delhi, Punjab
                </p>
              </div>

              <div className="circlePlan">
                <p className="circleTitle">12</p>
                <p className="circleDescription">Branches</p>
              </div>
            </div>

            <div className="FeatureHead">
              <p>Features</p>

              <div className="featureList">
                <img src={successCheckIcon} alt={"OTP Success"} />
                <p className="projectTitle">Unlimited projects</p>
              </div>
            </div>
          </div>
          <div>
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
        </div>
      </Dialog>
    </div>
  );
};

export { PlanCard };
