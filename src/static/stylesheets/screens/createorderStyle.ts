import { css } from "@emotion/css";

export const useCreateOrderStyles = () => ({
  root: css`
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;

    .quantityArea{
      border: 2px solid #E1E1E1;
      border-radius: 6px;
      width: 90px;
      padding: 4px;
    }
    .commonTitle {
      font-family: "Manrope", serif;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 20px;
      color: #2e2c34;
    }
  `,
});
