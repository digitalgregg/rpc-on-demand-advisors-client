import React from "react";
import { checkout } from "../../utils/checkout";

const Test = () => {
    return (
        <div>
            <button
                onClick={() => {
                    checkout({
                        lineItems: [
                            {
                                price: "price_1LjkXTIUV3yBfaTzu8MaDuu8",
                                quantity: 1,
                            },
                        ],
                    });
                }}
            >
                BUY!
            </button>
        </div>
    );
};

export default Test;
