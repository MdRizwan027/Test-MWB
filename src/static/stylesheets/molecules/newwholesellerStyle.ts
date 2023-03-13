import { css } from "@emotion/css";

export const usenewWholesellerStyles = () => {
  return {
    root: css`
      margin-top: 30px;

      p {
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        color: #2e2c34;
      }

      .container {
        display: flex;
        gap: 20px;

        .brandData {
          display: flex;
          gap: 20px;
          padding-top: 10px;
          padding-bottom: 10px;
        }

        .brandLogo {
          width: 50px;
        }
      }
    `,
  };
};
