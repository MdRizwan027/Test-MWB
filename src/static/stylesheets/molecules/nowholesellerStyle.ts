import { css } from "@emotion/css";

export const useNowholesellerStyles = () => {
  return {
    root: css`
      width: 100%;
      margin: auto;

      .container {
        justify-content: center;
        align-items: center;
        width: 100%;
        margin: auto;

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
            color: #2e2c34;
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
      }
    `,
  };
};
