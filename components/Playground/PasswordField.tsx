/* eslint-disable @next/next/no-img-element */
import React from "react";
import InputField from "../Shared/InputField";
import { useState } from "react";

const PasswordField = () => {
    const [isSeen, setSeen] = useState(false);
    return (
        <InputField
            name="card_number"
            placeholder="1234 1234 1234 1234"
            type={isSeen ? "text" : "password"}
            label="Card number"
            className="[&>label]:!text-[14px] [&>div>input]:!h-[44px] "
            required
            height="44px"
            inputImg={() => {
                return (
                    <img
                        onClick={() => setSeen(!isSeen)}
                        src={`/assets/dashboard-billing/${
                            isSeen ? "arrow" : "lock"
                        }.svg`}
                        alt=""
                        className="absolute top-[10px] right-[10px]"
                    />
                );
            }}
        />
    );
};

export default PasswordField;
