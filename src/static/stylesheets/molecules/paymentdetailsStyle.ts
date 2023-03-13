import { css } from "@emotion/css";

export const usePaymentdetailsStyle = () => {
  return {
    root: css`
      .textContainer {
        padding-top: 40px;
        padding-bottom: 40px;

        .titleHead {
          font-family: "Manrope", serif;
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          line-height: 33px;
          letter-spacing: 0.2px;
          color: #2e2c34;
        }

        .titleDescription {
          font-family: "Manrope", serif;
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          line-height: 33px;
          letter-spacing: 0.2px;
          color: #2e2c34;
        }
      }

      .radio-actionButton {
        display: flex;
        gap: 20px;
        padding-top: 20px;
        padding-bottom: 20px;

        .radio-button {
          border: 2px solid #e6e9ed;
          padding: 10px;
          width: 335px;
          height: 60px;
          border-radius: 10px;
          background: #f9fafb;
        }
      }

      .inputField {
        display: flex;
        gap: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
      }

      .inputLabel {
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.02em;
        color: #242b42;
      }

      .paymentButton {
        padding-top: 20px;
        padding-bottom: 40px;

        p {
          color: #ff6652;
          font-family: "Manrope", serif;
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 19px;
          letter-spacing: 0.02em;
          padding-top: 20px;
          cursor: pointer;
        }

        span {
          color: #000000;
          font-family: "Manrope", serif;
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 19px;
          letter-spacing: 0.02em;
        }
      }
    `,

    addDialog: css`
      padding: 44px;
      width: 461px;

      .title {
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 20px;
        color: #2e2c34;
        margin-bottom: 27px;
      }

      .select-master {
        margin-top: 26px;

        .input-label {
          font-family: "Manrope", serif;
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 18px;
          color: #84818a;
        }
      }

      .action-bar {
        margin-top: 41px;
        display: flex;
        gap: 12px;
      }
    `,
  };
};
