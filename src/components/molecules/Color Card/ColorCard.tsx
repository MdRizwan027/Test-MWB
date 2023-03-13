import { useColorCardStyle } from "@/static/stylesheets/molecules";
import React from "react";

interface WholesellerCardProps {
    title?: string;
    prize?: string;
}

const ColorCard: React.FC<WholesellerCardProps> = (props) => {
    const classes = useColorCardStyle();

    return (
        <div className={classes.root}>
            <div className="cardContainer">
                <div className="btnWrapper">
                    <p className="CardTitle">{props?.title}</p>
                    <p className="pendingAppr">{props?.prize}</p>
                </div>

                <button
                    type="button"
                    className="text-white bg-[#FF6652] hover:bg-[#e95744] font-[Manrope] rounded-lg text-sm mr-2 mb-2 "
                >
                    View
                </button>
            </div>
        </div>
    );
};

export { ColorCard };
