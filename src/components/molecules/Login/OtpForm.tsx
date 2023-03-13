import React from "react";
import { useAuthenticationLayoutStyles } from "@/static/stylesheets/layouts";
import backIcon from "@/static/icons/ic_back_icon.png";

interface OtpFormProps {
  onGoBack?(): void;

  onSuccess?(): void;
}

const OtpForm: React.FC<OtpFormProps> = (props) => {
  const classes = useAuthenticationLayoutStyles();

  return (
    <>
      <div className={classes.otpTitle}>
        <span className={"back-button"} onClick={props?.onGoBack}>
          <img src={backIcon} alt={"Go Back"} />
        </span>
        OTP Verification
      </div>
      <div className={classes.hint}>
        Enter the code we sent to the mobile number ending in 6441
      </div>

      <div className={classes.otpInputContainer}>
        <input type={"text"} defaultValue={9} maxLength={1} />
        <input type={"text"} defaultValue={1} maxLength={1} />
        <input type={"text"} defaultValue={4} maxLength={1} />
        <input type={"text"} maxLength={1} />
        <input type={"text"} maxLength={1} />
        <input type={"text"} maxLength={1} />
      </div>

      <div className={classes.submitButtonContainer}>
        <button className={classes.submitButton} onClick={props?.onSuccess}>
          Verify
        </button>
      </div>
    </>
  );
};

export { OtpForm };
