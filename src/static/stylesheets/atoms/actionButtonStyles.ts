import { css } from "@emotion/css";

export const useActionButtonStyles = () => ({
  root: css`
    border-radius: 4px !important;
    font-family: "Manrope", serif !important;
    font-style: normal !important;
    font-weight: 600 !important;
    font-size: 14px !important;
    line-height: 20px !important;
    text-transform: capitalize !important;
    height: 36px;
  `,

  default: css`
    background: #ffffff !important;
    border: 1px solid #ebeaed !important;
    color: #2e2c34 !important;
  `,

  primary: css`
    background: #4e2fa9 !important;
    border: 1px solid #4e2fa9 !important;
    color: #ffffff !important;
  `,
});
