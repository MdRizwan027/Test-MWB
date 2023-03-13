import { css } from "@emotion/css";

export const useMultiSelectStyles = () => {
  return {
    root: css`
      margin: 0 !important;
      width: auto !important;
      padding-top: 10px !important;
      padding-bottom: 10px !important;

      .lMuiInput-underline:after {
        color: red !important;
      }

      .MuiSelect-select {
        color: #000000 !important;
        border: 1px solid #ebeaed !important;
        padding: 10px 30px 10px 10px !important;
        border-radius: 5px !important;
        border-bottom: none !important;
        color: #84818a !important;
      }

      .MuiInput-underline:before {
        border-color: #ebeaed !important;
        border-radius: 5px !important;
      }
    `,

    label: css`
      color: #000000 !important;
    `,
  };
};
