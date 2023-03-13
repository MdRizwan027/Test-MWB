import { css } from "@emotion/css";

export const useBulkuploadStyles = () => {
  return {
    root: css`
      width: 100%;
      padding-top: 20px;
      padding-bottom: 20px;

      .mainTitle {
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 20px;
        color: #2e2c34;
      }

      .container {
        margin-top: 200px;

        .uploadArea {
          padding: 40px;
          height: 250px;
          background: #ffffff;
          border: 2px dashed #e1e1e1;
          border-radius: 5.30337px;
          align-items: center;
          width: 600px;
          margin: auto;
        }

        .placeholder {
          display: flex;
          justify-content: center;

          img {
            width: 300px;
          }
        }

        .contentContainer {
          padding-top: 40px;
          padding-bottom: 40px;

          .headTitle {
            font-family: "Manrope", serif;
            height: 42px;
            left: 47.43%;
            right: 34.31%;
            top: calc(50% - 42px / 2 + 68px);
            font-family: "Manrope";
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 42px;
            text-align: center;
            color: #4e2fa9;
          }

          .headDescription {
            font-family: "Manrope", serif;
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 25px;
            text-align: center;
            color: #84818a;
          }
        }

        .actonButton {
          display: flex;
          justify-content: center;
        }

        .downloadTitle {
          font-family: "Manrope", serif;
          height: 42px;
          left: 47.43%;
          right: 34.31%;
          top: calc(50% - 42px / 2 + 68px);
          font-family: "Manrope";
          font-style: normal;
          font-weight: 700;
          font-size: 24px;
          line-height: 42px;
          text-align: center;
          color: #4e2fa9;
        }
      }
    `,
  };
};
