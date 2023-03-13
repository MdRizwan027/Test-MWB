import { css } from "@emotion/css";

export const useTopwholesellerStyle = () => {
  return {
    root: css`
      width: 100%;

      .planTitle {
        width: 100%;
      }

      .bazaarTitle {
        width: 50px;
      }

      .stateTitle {
        width: 100%;
      }

      .districtTitle {
        width: 100%;
      }

      .brandData {
        display: flex;
        gap: 20px;
      }

      .brandLogo {
        width: 50px;
      }

      table {
        width: 100%;
        font-size: 14px;
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 600;
        cursor: pointer;
      }

      th {
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        color: #84818a;
        padding-top: 40px;
        padding-bottom: 10px;
        text-align: left;
        border-bottom: 1px solid #e1e1e1;
      }

      td {
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        text-align: left;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-right: 40px;
      }
    `,
  };
};
