import { css } from "@emotion/css";

export const useDashboardStyles = () => ({
  root: css`
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;

    .bazaarReport {
      display: flex;
      gap: 24px;
    }

    .counterCard {
      padding-top: 40px;
      padding-bottom: 40px;
    }

    .planList {
      padding-top: 20px;
      padding-bottom: 20px;
    }

    .bazaarButtons {
      display: flex;
      gap: 10px;
    }
    .bazaarCard {
      padding: 0;
      padding-bottom: 50px;
    }
    .bazaarFilters {
      display: flex;
      gap: 10px;
      padding-bottom: 20px;
    }
  `,

  summaryTitle: css`
    display: flex;
    gap: 24px;
    padding-top: 20px;
    padding-bottom: 20px;
    p {
      font-family: "Manrope", serif;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 33px;
      letter-spacing: 0.2px;
      color: #000000;
    }
    .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input{
      padding:5.5px 12px;
    }
    .css-1u3bzj6-MuiFormControl-root-MuiTextField-root{
      width:110px;
    }
  `,

  commonTitle: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    padding-top: 40px;
    padding-bottom: 10px;
    p {
      font-family: "Manrope", serif;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 33px;
      letter-spacing: 0.2px;
      color: #000000;
    }
    .moreButton {
      color: orangered;
      cursor: pointer;
    }
  `,
});
