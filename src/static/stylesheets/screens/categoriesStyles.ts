import { css } from "@emotion/css";

export const useCategoriesStyles = () => ({
  root: css`
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;

    .container {
      display: flex;
      gap: 80px;
    }

    .leftContainer {
      height: 300px;
      width: 300px;
      padding-top: 20px;
    }

    .rightContainer {
      padding: 20px;
    }
  `,
});
