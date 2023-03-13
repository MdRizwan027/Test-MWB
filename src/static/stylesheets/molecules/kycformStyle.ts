import { css } from "@emotion/css";

export const useKycFormStyles = () => {
  return {
    root: css`
      width: 600px;
      .headContainer {
        display: flex;
        gap: 24px;
        padding-top: 30px;
        padding-bottom: 20px;
        align-items: center;
      }

      .singleForm {
        width: 300px;
        padding-top: 20px;
        padding-bottom: 20px;
      }

      .documentButton {
        padding-top: 30px;
        padding-bottom: 30px;
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

      .formContainer {
        padding-top: 20px;
        padding-bottom: 20px;
        display: flex;
        gap: 24px;
      }

      .mapButton {
        padding-top: 20px;
        padding-bottom: 20px;
        display: flex;
        gap: 24px;

        p {
          font-family: "Manrope", serif;
          font-weight: 500;
          font-size: 14px;
          line-height: 20px;
          color: #2e2c34;
        }
      }

      .docContainer {
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: #2e2c34;
        padding-top: 20px;
        padding-bottom: 20px;

        .Attachment-file {
          display: flex;
          gap: 24px;
          padding-top: 20px;
          padding-bottom: 20px;
        }
.buttonKycForms{
  position:relative;
}
.kycFormsTwo{
  position: absolute;
  top: 22px;
  width: 100px;
  height: 100px;
  opacity: 0;
  cursor: pointer;
}
        
      }
      .buttonKycForms{
        position:relative;
      }
      .kycForms{
        position: absolute;
    top: 0px;
    left: 0px;
    width: 160px;
    height: 36px;
    opacity: 0;
    cursor: pointer;
      }
    `,
  };
};
