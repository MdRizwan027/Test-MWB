import { css } from "@emotion/css";

export const useWholesellerCardStyle = () => {
    return {
        root: css`
            padding-top: 20px;
            padding-bottom: 20px;
            width:100%;

            .cardContainer {
                max-width: 300px;
                height: 120px;
                padding: 30px;
                border: 2px solid #ebeaed;
                border-radius: 6px;

                .CardTitle {
                    font-family: "Manrope", serif;
                    font-style: normal;
                    font-weight: 600;
                    font-size: 12px !important;
                    line-height: 18px;
                    color: #84818a;
                }

                .prizeContent {
                    margin-top: 10px;
                    display: flex;
                    gap: 10px;
                    justify-content: space-between;

                    .cardPrize {
                        font-family: "Manrope", serif;
                        font-style: normal;
                        font-weight: 700;
                        font-size: 24px;
                        line-height: 32px;
                        letter-spacing: 0.2px;
                        color: #2e2c34;
                    }
                    .svg {
                        align-self: flex-end;
                    }
                }
            }
        `,
    };
};
