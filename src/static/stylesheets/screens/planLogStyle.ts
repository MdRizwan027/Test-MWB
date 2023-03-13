import { css } from "@emotion/css";

export const useplanLogStyles = () => ({
  root: css`
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;

    .pageTitle {
      font-family: "Manrope", serif;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 20px;
      color: #2e2c34;
    }

    .categoryButton {
      display: flex;
      gap: 20px;
      padding-top: 30px;
      padding-bottom: 20px;
      flex-wrap: wrap;
    }

    .selectMenu {
      display: flex;
      gap: 20px;
      padding-top: 30px;
      padding-bottom: 20px;
      flex-wrap: wrap;
    }
  `,
});
