import { css } from "@emotion/css";

export const useNewWholesellerStyles = () => {
  return {
    root: css`
      width: 600px;
      padding-top: 30px;
      padding-bottom: 30px;

      .field {
        padding-top: 50px;
        padding-top: 50px;
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

      .headContainer {
        display: flex;
        gap: 20px;
        text-align: center;

        .icon {
          img {
            width: 10px;
            cursor: pointer;
          }
        }
      }

      .headTitle {
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 20px;
        color: #2e2c34;
      }
      .actionButton {
        display: flex;
        gap: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
      }
    `,
  };
};
