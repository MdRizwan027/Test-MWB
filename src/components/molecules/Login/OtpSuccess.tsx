import React, { useEffect } from "react";
import { useAuthenticationLayoutStyles } from "@/static/stylesheets/layouts";
import successCheckIcon from "@/static/icons/ic_check.png";
import { useNavigate } from "react-router";
import { routePaths } from "@/routes";

const OtpSuccess = () => {
  const classes = useAuthenticationLayoutStyles();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(routePaths.dashboard);
    }, 2000);
  });

  return (
    <div className={classes.otpSuccessContainer}>
      <div className={"wrapper"}>
        <div className={"success-icon"}>
          <img src={successCheckIcon} alt={"OTP Success"} />
        </div>
        <div className={"success-title"}>SUCCESS!</div>
        <div className={"success-message"}>
          You have been Logged In Successfully!
        </div>
      </div>
    </div>
  );
};

export { OtpSuccess };
