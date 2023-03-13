import { css } from "@emotion/css";

export const usePlanLogDataTableStyles = () => ({
  root: css`
    .headTitle {
      font-family: "Manrope", serif;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: 0.2px;
      color: #4e2fa9;
    }

    .planCard {
      width: 140px;
      border-radius: 6px;
      padding: 5px;
      background: #ffffff;
      mix-blend-mode: normal;
      box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.08);
      border-radius: 6px;

      .planCardChild {
        border: 2px solid #e1e1e1;
        border-radius: 6px;
        padding: 5px;
      }
    }
  `,

  addDialog: css`
    padding: 44px;

    .modalHead {
      display: flex;
      justify-content: space-between;
      cursor: pointer;
    }

    .planCard {
      width: 160px;
      border-radius: 6px;
      padding: 5px;
      background: #ffffff;
      mix-blend-mode: normal;
      box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.08);
      border-radius: 6px;

      .planCardChild {
        border: 2px solid #e1e1e1;
        border-radius: 6px;
        padding: 5px;
      }
    }
  `,
});
