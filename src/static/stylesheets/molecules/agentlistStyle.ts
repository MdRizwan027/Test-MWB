import { css } from "@emotion/css";

export const useAgentStyles = () => {
  return {
    root: css`
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
        font-size: 14px;
        line-height: 18px;
        color: #84818a;
        width: auto;
        padding-top: 30px;
        padding-bottom: 30px;
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
        padding-top: 20px;
        padding-bottom: 20px;
        padding-right: 40px;
        border-bottom: 1px solid #e1e1e1;
      }
      th {
        text-align: left;
        padding-top: 10px;
        padding-bottom: 10px;
      }

      .brandData {
        display: flex;
        gap: 20px;
        align-items: center;
      }

      .brandLogo {
        width: 25px;
      }

      .status {
        color: #ffa043;
        background: #fff6ed;
        border-radius: 5px;
        padding: 10px;
        width: 150px;
      }
    `,
  };
};
