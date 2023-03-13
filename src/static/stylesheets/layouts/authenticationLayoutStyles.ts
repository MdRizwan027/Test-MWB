import { css } from "@emotion/css";
import backgroundClipArt from "@/static/images/authentication-bg-clipart.png";

export const useAuthenticationLayoutStyles = () => {
  return {
    root: css`
      background-color: #f9f5f2;
      display: flex;
      height: 100vh;
      font-family: "Manrope", serif;
    `,
    container: css`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      flex: 1;
      flex-grow: 1;
      background: url("${backgroundClipArt}");
      height: 100vh;
      background-repeat: no-repeat;
      background-size: 107.3%;
      background-position: center;
    `,
    containerCard: css`
      padding: 36px 55.5px;
      background: #ffffff;
      width: 479px;
      height: 495px;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.16);
      border-radius: 32px;
    `,
    logoContainer: css`
      text-align: center;

      img {
        width: 211px;
        margin: auto;
      }
    `,
    loginTitle: css`
      font-family: "Manrope", serif;
      font-style: normal;
      font-weight: 600;
      font-size: 36px;
      line-height: 48px;
      text-align: center;
      margin-top: 40.19px;
      color: #2e2c34;
    `,

    otpTitle: css`
      position: relative;
      font-family: "Manrope", serif;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 48px;
      text-align: center;
      margin-top: 40.19px;
      color: #2e2c34;

      .back-button {
        position: absolute;
        top: 0;
        left: 0;
        cursor: pointer;

        img {
          width: 26.67px;
        }

        :hover {
          opacity: 0.7;
        }
      }
    `,

    hint: css`
      font-family: "Manrope", serif;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: #7f7e81;
      margin-top: 40px;
      text-align: center;
    `,

    phoneTextInput: css`
      display: flex;
      flex-direction: row;
      margin-top: 40px;
      height: 48px;
      border-bottom: 1px solid #ebeaed;

      select {
        width: 65px;
        outline: 0;
        border: 0;
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: #2e2c34;
      }

      input {
        width: 100%;
        box-sizing: border-box;
        padding: 0 10px;
        outline: 0;
        border: 0;
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: #2e2c34;
      }
    `,

    otpInputContainer: css`
      display: flex;
      flex-direction: row;
      height: 59px;
      gap: 8px;
      margin-top: 40px;

      input {
        width: 100%;
        box-sizing: border-box;
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 600;
        font-size: 36px;
        line-height: 48px;
        text-align: center;
        background: #ffffff;
        border: 1px solid #ebeaed;
        border-radius: 4px;
        color: #2e2c34;
        outline: 0 !important;
      }
    `,

    otpSuccessContainer: css`
      margin-top: 100.44px;
      text-align: center;

      .wrapper {
        display: inline-block;
        width: 254px;

        .success-icon {
          text-align: center;

          img {
            display: inline-block;
            width: 97.5px;
          }
        }

        .success-title {
          margin-top: 34.25px;
          font-family: "Manrope", serif;
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          line-height: 27px;
          color: #20c9ac;
          text-align: center;
        }

        .success-message {
          font-family: "Manrope", serif;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 22px;
          text-align: center;
          letter-spacing: 0.2px;
          color: #2e2c34;
          margin-top: 18px;
        }
      }
    `,

    submitButtonContainer: css`
      margin-top: 40px;
    `,

    submitButton: css`
      padding: 11px 24px;
      height: 55px;
      background: #ff6652;
      border: 0;
      border-radius: 4px;
      font-family: "Manrope", serif;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 20px;
      color: #fbfafc;
      text-align: center;
      text-transform: capitalize;
      width: 100%;
      cursor: pointer;

      :hover {
        opacity: 0.8;
      }
    `,
  };
};
