import { css } from "@emotion/css";

export const useSubCategoriesStyles = () => ({
  root: css`
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;

    .field {
      padding-top: 20px;
      padding-top: 20px;
    }

    .bazaarField {
      display: flex;
      gap: 12px;
      padding-top: 20px;
      padding-bottom: 20px;
    }

    .commonSelectText {
      font-family: "Manrope";
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 18px;
      color: #84818a;
    }

    .cityField {
      display: flex;
      gap: 12px;
      padding-top: 20px;
      padding-bottom: 20px;
    }

    .stateField {
      padding-top: 20px;
      padding-bottom: 20px;
      display: flex;
      gap: 12px;
      width: 100%;
    }

    .action-bar {
      margin-top: 41px;
      display: flex;
      gap: 12px;
    }

    .container {
    }

    .uploadContainer {
      display: flex;
      gap: 40px;
    }

    .content {
      text-align: start;

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
    }

    .uploadCard {
      cursor: pointer;
      padding: 10px;
      width: 500px;
      background: #ffffff;
      border: 2px dashed #e1e1e1;
      border-radius: 5.30337px;
      padding: 20px;
      text-align: center;
      display: flex;
      justify-content: center;

      .uploadIcon {
        display: flex;
        justify-content: center;

        img {
          width: 40px;
          height: 40px;
        }
      }
    }

    .rightContainer {
      padding-top: 40px;
      width: 100%;

      .addButton {
        display: flex;
        gap: 20px;
        padding: 20px;
        text-align: center;
        justify-content: center;
        border: 2px solid #e1e1e1;
        border-radius: 5px;
        cursor: pointer;

        p {
          font-family: "Manrope", serif;
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 20px;
          color: #4e2fa9;
        }

        img {
          width: 20px;
        }
      }
    }
  `,
});
