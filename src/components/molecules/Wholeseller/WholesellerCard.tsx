import { useWholesellerCardStyle } from "@/static/stylesheets/molecules";
import React from "react";

interface WholesellerCardProps {
    title?: string;
    prize?: string;
}

const WholesellerCard: React.FC<WholesellerCardProps> = (props) => {
    const classes = useWholesellerCardStyle();

    return (
        <div className={classes.root}>
            <div className="cardContainer">
                <p className="CardTitle">{props?.title}</p>

                <div className="prizeContent">
                    <p className="cardPrize">{props?.prize}</p>
                    <svg
                        className="svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2 0C0.895431 0 0 0.895431 0 2L0 14C0 15.1046 0.895431 16 2 16L14 16C15.1046 16 16 15.1046 16 14L16 2C16 0.895431 15.1046 0 14 0L2 0Z"
                            fill="#FC3400"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M4.00175 4.9426L9.73874 10.6796L4.46844 10.6796L4.47315 12.0137L12.0156 12.0137L12.0156 4.4712L10.6863 4.4712L10.6816 9.73679L4.94456 3.99979L4.00175 4.9426Z"
                            fill="white"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export { WholesellerCard };
