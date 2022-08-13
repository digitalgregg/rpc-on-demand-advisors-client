import { UseTwButtonProps } from "./Button.types";

export const tw_button = (options = {} as UseTwButtonProps): string => {

    // Default settings
    const {
        color = 'primary',
        size = "small",
    } = options

    const buttonSize =
        size === 'small' ?
            'h-[42px] text-[20px] leading-[24px] px-[58px]' :
            size === 'large' ?
                'h-[58px] text-[36px] leading-[40px] px-[75px]' :
                ''

    const buttonColor =
        color === 'primary' ?
            'bg-primary ring-primary hover:bg-primary-dark text-white' :
            color === 'primary-invert' ?
                'bg-white ring-primary hover:bg-primary hover:text-white text-primary' :
                'bg-btn-gray text-white ring-btn-gray hover:bg-gray';


    return `${buttonColor} ${buttonSize} flex items-center justify-center font-semibold mx-auto rounded-full focus:ring-2 ring-offset-2 outline-none duration-150 disabled:opacity-50 disabled:pointer-events-none`;
}