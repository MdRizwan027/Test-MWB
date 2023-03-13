import { css } from "@emotion/css";

export const useBazaarStepperdStyles = () => {
  return {
    root: css`
      width: 100%;
      padding-top: 20px;
      padding-bottom: 20px;

      .finishContainer {
        padding-top: 50px;
      }
      .sucessMesage {
        display: flex;
        display: flex;
        gap: 15px;
        padding-top: 90px;
        padding-bottom: 40px;

        img {
          width: 30px;
        }

        .sucessTitle {
          font-family: "Manrope", serif;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 22px;
          letter-spacing: 0.2px;
        }
      }

      .BackButton {
        border: 2px solid #ebeaed;
        width: 104px;
        height: 35px;
        color: #2e2c34;
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
      }

      .BackButton:hover {
        border: 2px solid #ebeaed;
        color: #ffffff;
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
      }

      .nextButton {
        background: #4e2fa9;
        width: 104px;
        height: 35px;
        color: #ffffff;
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
      }

      .nextButton:hover {
        background: #4e2fa9;
        color: #ffffff;
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
      }

      .actionButton {
        display: flex;
        gap: 24px;
        padding-top: 30px;
      }

      .MuiStepLabel-label {
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        color: #2e2c34;
      }

      .headContainer {
        display: flex;
        gap: 20px;
        text-align: center;

        .icon {
          img {
            width: 10px;
            cursor: pointer;
          }
        }
      }

      .headTitle {
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 20px;
        color: #2e2c34;
      }
    `,

    stepperContainer: css`
      width: 100%;
      padding-top: 50px;
      padding-bottom: 50px;
    `,
  };
};
