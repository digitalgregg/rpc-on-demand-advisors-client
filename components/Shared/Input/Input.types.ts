import React from "react";

export type InputProps = UseTwInputProps & OnlyInputProps & Omit<React.ComponentProps<'input'>, 'size'>

type OnlyInputProps = {
    startAdornment?: React.ReactNode
    startAdornmentClass?: string
    endAdornment?: React.ReactNode
    endAdornmentClass?: string
    label?: string
    labelClass?: string
    enablePasswordShoHideButton?: boolean
    floatingLabel?: boolean;
    floatingLabelClass?: string;
    widthFull?: boolean;
}

export type InputSizes = 'extra_small' | 'small' | 'medium' | 'large'

export type UseTwInputProps = {
    varient?: 'contained' | 'outlined' | 'standard';
    rounded?: boolean | 'sm' | 'md' | 'lg' | 'full'
    size?: InputSizes
}

// export type UseTwInputReturnProps = {
//     inputVarient: string
//     inputSize: string
//     isRounded: string
//     inputClasses: string
// }

export type AdornmentProps = {
    children: React.ReactNode;
    position: 'start' | 'end'
    fontSize?: string
    startAdornmentClass?: string
    endAdornmentClass?: string
} & React.ComponentProps<'div'>;

export type PasswordFieldToggleButtonProps = {
    inputRef: any
} & React.ComponentProps<'div'>;
