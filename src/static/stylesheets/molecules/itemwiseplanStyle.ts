import { css } from "@emotion/css";

export const useItemwisePlanStyles = () => ({
  root: css`
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;

    .headTitle {
      font-family: "Manrope", serif;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 20px;
      color: #2e2c34;
    }

    .tableTitle {
      font-family: "Manrope", serif;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 19px;
      letter-spacing: 0.2px;
      text-transform: uppercase;
      color: #84818a;
    }

    .priceTitle {
      width: 100px;
      display: flex;
      justify-content: center;
      border: 2px solid #dcdcdc;
      border-radius: 6px;
      padding: 5px;
    }

    .updatePrice {
      font-family: "Manrope", serif;
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 18px;
      color: #ff6652;
    }

    .unitArea {
      width: 70px;
      display: flex;
      justify-content: center;
      border: 2px solid #dcdcdc;
      border-radius: 6px;
      padding: 5px;
    }

    .formControl {
      input[type="checkbox"] {
        height: 15px;
        width: 15px;
      }
    }
  `,
});
