import { css } from "@emotion/css";

export const useProductsStyles = () => ({
  root: css`
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;

    .headContainer {
      display: flex;
      gap: 20px;
      justify-content: space-between;

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
      }
    }

    .productFilters {
    }

    .tag {
      background: #e6f6ff;
      border-radius: 6px;
      padding: 10px;
      display: flex;
      justify-content: center;

      .tagTitle {
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        color: #00a5ff;
      }
    }

    .stockStatusTitle {
      font-family: "Manrope", serif;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: #20c9ac;
    }

    .actionMenu {
      display: flex;
      gap: 20px;
    }
  `,
  addDialog: css`
    padding: 44px;

    .reportTitle {
      font-family: "Manrope", serif;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 20px;
      color: #2e2c34;
    }

    .modalHead {
      display: flex;
      justify-content: space-between;
      cursor: pointer;
    }

    .barCode {
      img {
        width: 200px;
      }
    }

    .modalTitle {
      font-family: "Manrope", serif;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 33px;
      color: #2e2c34;
      padding-top: 5px;
      padding-top: 5px;
      padding-bottom: 5px;
    }

    .modalSubtitile {
      font-family: "Manrope", serif;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 25px;
      color: #4e2fa9;
      padding-top: 5px;
      padding-bottom: 5px;
    }

    .modalPrize {
      font-family: "Manrope", serif;
      font-style: normal;
      font-weight: 700;
      font-size: 22px;
      line-height: 20px;
      color: #2e2c34;
      padding-top: 5px;
      padding-bottom: 20px;
    }

    .statusTag {
      background: #e6f6ff;
      border-radius: 6px;
      padding: 5px;

      .tagTitle {
        font-family: "Manrope", serif;
        display: flex;
        justify-content: center;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        color: #00a5ff;
      }
    }

    .groupTitle {
      font-family: "Manrope", serif;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: #84818a;
    }

    .commonTitle {
      font-family: "Manrope", serif;
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
      color: #2e2c34;
    }

    .commonSybtitle {
      font-family: "Manrope", serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 13px;
      color: #a39f9f;
    }
  `,
});
