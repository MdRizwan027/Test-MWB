import { css } from "@emotion/css";

export const usewholesellerMartStyle = () => ({
  root: css`
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;

    .bazaarContainer {
      padding-top: 20px;
      padding-bottom: 20px;
    }

    .bazaarReport {
      display: flex;
      gap: 20px;
    }

    .bazaarFilters {
      display: flex;
      gap: 10px;
      padding-bottom: 20px;
    }

    .commonTitle {
      font-family: "Manrope", serif;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 25px;
      color: #2e2c34;
      padding-top: 20px;
      padding-bottom: 20px;
    }

    .pageTitle {
      font-family: "Manrope", serif;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 20px;
      color: #2e2c34;
    }

    .title {
      font-family: "Manrope", serif;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 20px;
      color: #2e2c34;
      margin-bottom: 27px;
    }
  `,
});
