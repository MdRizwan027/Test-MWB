import { css } from "@emotion/css";

export const useUploadAreaStyles = () => ({
  root: css`
    .uploader {
      display: flex;
      height: 59px;
      background: #ffffff;
      border: 2px dashed #e1e1e1;
      border-radius: 5.30337px;
      align-items: center;

      .icon {
        display: flex;
        width: 80px;
        justify-content: center;
        align-items: center;

        img {
          width: 30.51px;
        }
      }

      .content {
        display: flex;
        flex-direction: column;

        .title {
          font-family: "Manrope", serif;
          font-style: normal;
          font-weight: 600;
          font-size: 13px;
          line-height: 16px;
          color: #ff6652;
          margin-bottom: 5px;
        }

        .subtitle {
          font-family: "Manrope", serif;
          font-style: normal;
          font-weight: 500;
          font-size: 10px;
          line-height: 14px;
          color: #84818a;
        }
      }
    }
  `,
});
