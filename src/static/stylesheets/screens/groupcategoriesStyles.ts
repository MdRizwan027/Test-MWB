import { css } from "@emotion/css";

export const useGroupCategoriesStyles = () => ({
  root: css`
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;

    .brandLogo {
      img {
        width: 60px;
        border-radius: 5px;
      }
    }

    .addButton {
      display: flex;
      cursor: pointer;
      gap: 10px;
      width: 300px;
      border: 2px dashed #4e2fa9;
      text-align: center;
      justify-content: center;
      margin-top: 60px;
      margin-bottom: 60px;
      padding: 20px;

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

    .ActionLogo {
      display: flex;
      gap: 20px;
      border: 2px solid #ebeaed;
      width: 110px;
      padding: 15px;
      border-radius: 5px;
      text-align: center;

      .dividor {
        border-left: 2px solid #ebeaed;
      }

      img {
        width: 20px;
        height: 20px;
        cursor: pointer;
      }
    }

    table {
      width: 400px;
      font-size: 14px;
      font-family: "Manrope", serif;
      font-style: normal;
      font-weight: 600;
      margin-top: 25px;
      margin-bottom: 25px;
    }
    th {
      font-family: "Manrope", serif;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 18px;
      color: #84818a;
      width: auto;
      padding-top: 30px;
      padding-bottom: 30px;
      text-align: left;
    }
    td {
      font-family: "Manrope", serif;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      text-align: left;
      padding-top: 20px;
      padding-bottom: 20px;
      padding-right: 40px;
    }
    th {
      text-align: left;
      padding-top: 10px;
      padding-bottom: 10px;
    }
  `,
});
