import { css } from "@emotion/css";

export const useColorCardStyle = () => {
    return {
        root: css`
            width: 100%;
            padding-top: 20px;
            padding-bottom: 20px;

            .CardTitle {
                font-family: "Manrope", serif;
                font-style: normal;
                font-weight: 600;
                font-size: 20px;
                line-height: 125%;
                color: #ffffff;
            }

            .cardContainer {
                width: 100%;
                height: 130px;
                padding: 30px;
                border: 3px solid #f2f2f2;
                border-radius: 10px;
                background: #4e2fa9;
                display: flex;
                gap: 20px;
                justify-content: space-between;

                .pendingAppr {
                    font-family: "Manrope", serif;
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 150%;
                    font-feature-settings: "ss01" on;
                    color: #ffffff;
                    padding-top: 10px;
                }

                button {
                    padding: 10px 20px;
                    align-self: center;
                }
            }
        `,
    };
};
