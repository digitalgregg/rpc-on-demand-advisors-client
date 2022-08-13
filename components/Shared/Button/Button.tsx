import React, { Ref } from "react";
import { ButtonProps } from "./Button.types";
// import CircularProgress from "../CircularProgress";
import { tw_button } from "./tw_button";

export const Button = (
    ownerState: ButtonProps,
    ref: Ref<HTMLButtonElement>
) => {
    // Client props
    const {
        color,
        size,
        className = "",
        startIcon,
        endIcon,
        loading,
        disabled,
        children,
        ...props
    } = ownerState;

    const buttonClasses = tw_button({
        color,
        size,
    });

    return (
        <button
            ref={ref}
            disabled={loading || disabled ? true : false}
            className={`${buttonClasses} ${className} ${
                loading ? "!opacity-100" : ""
            } relative`}
            {...props}
            type="submit"
        >
            <>
                {loading && (
                    <div
                        className={`absolute w-full h-full flex items-center justify-center aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
                            loading === true ? "scale-[0.6]" : "scale-[0.8]"
                        }`}
                    >
                        {loading === true ? "loading..." : loading}
                    </div>
                )}
                <span
                    className={`flex items-center h-full w-full justify-center gap-10 ${
                        loading ? "opacity-0" : ""
                    }`}
                >
                    {startIcon}
                    {children}
                    {endIcon}
                </span>
            </>
        </button>
    );
};

Button.displayName = "Button";
export default React.memo(
    React.forwardRef<HTMLButtonElement, ButtonProps>(Button)
);
