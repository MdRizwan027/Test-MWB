import { css } from "@emotion/css";

export const useBreadcrumbStyles = () => {
  return {
    root: css`
      padding-top: 25px;
      padding-bottom: 25px;

      .headTitle {
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 33px;
        letter-spacing: 0.2px;
        color: #000000;
      }
    `,
    container: css`
      display: flex;
      justify-content: end;

      .brandData {
        display: flex;
        text-align: center;
        gap: 20px;
        align-items: center;

        img {
          width: 50px;
          cursor: pointer;
          padding: 10px;
          border: 3px solid #ebeaed;
          border-radius: 5px;
        }
      }
    `,
  };
};
