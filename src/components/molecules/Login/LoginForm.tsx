import React from "react";
import { useAuthenticationLayoutStyles } from "@/static/stylesheets/layouts";


interface LoginFormProps {
  onSuccess?(): void;
}

const LoginForm: React.FC<LoginFormProps> = (props) => {
  const classes = useAuthenticationLayoutStyles();

  return (
    <>
      <div className={classes.loginTitle}>Admin Login</div>
      <div className={classes.hint}>
        Enter your registered mobile number to get OTP
      </div>

      <div className={classes.phoneTextInput}>
        <select>
          <option>+91</option>
          <option>+88</option>
        </select>
        <input placeholder={"Mobile number"} type={"number"} />
      </div>

      <div className={classes.submitButtonContainer}>
        <button className={classes.submitButton} onClick={props?.onSuccess}>
          Sign In
        </button>
      </div>
    </>
  );
};

export { LoginForm };
