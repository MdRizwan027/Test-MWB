import { css } from "@emotion/css";

export const useElectronicsBazaarStyles = () => ({
  root: css`
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;

    .bazaarButtons {
      display: flex;
      gap: 10px;
      padding-top: 20px;
      padding-bottom: 20px;
    }
    .bazaarButtons.add-bazar button{
      padding:6px !important;
    }
    .leftContent {
      display: flex;
      gap: 10px;
      padding-top: 20px;
      padding-bottom: 20px;
      justify-content: end;
    }

    .headingTitle {
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
    gap: 10px;

    img {
      width: 20px;
      height: 20px;
    }

    .reportButton {
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      text-align: right;
      color: #ff6652;
      cursor: pointer;
    }
  `,
});
