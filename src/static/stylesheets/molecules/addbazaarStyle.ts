import { css } from "@emotion/css";

export const useAddbazaarStyles = () => ({
  root: css`
    padding-top: 20px;
    padding-bottom: 20px;
    width: 500px;

    .field {
      padding-top: 50px;
      padding-top: 50px;
    }

    .fieldTitle {
      font-family: "Manrope";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
      color: #84818a;
    }

    .bazaarField {
      padding-top: 20px;
      padding-bottom: 20px;
    }

    .cityField {
      padding-top: 20px;
      padding-bottom: 20px;
    }

    .stateField {
      padding-top: 20px;
      padding-bottom: 20px;
      display: flex;
      gap: 12px;
    }

    .action-bar {
      margin-top: 41px;
      display: flex;
      gap: 12px;
    }
  `,

  content: css`
    height: 170px;
    width: 500px;
    background: #ffffff;
    border: 2px dashed #e1e1e1;
    border-radius: 5.30337px;
    text-align: center;

    .uploadIcon {
      display: flex;
      justify-content: center;
      position: relative;

      img {
        width: 50px;
      }
      .kycForms {
        position: absolute;
        top: 0;
        height: 150px;
        width: 100%;
        opacity: 0;
        cursor: pointer;
      }
    }

    .title {
      font-family: "Manrope", serif;
      font-style: normal;
      font-weight: 500;
      font-size: 17px;
      line-height: 24px;
      color: #4e2fa9;
    }

    .subtitle {
      font-family: "Manrope", serif;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      color: #84818a;
    }
  `,
});
