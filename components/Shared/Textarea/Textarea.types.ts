import React, { ReactNode } from "react";

export type TextareaProps = UseTwTextareaProps & OnlyTextareaProps & Omit<React.ComponentProps<'textarea'>, 'size'>

type OnlyTextareaProps = {
    startAdornment?: React.ReactNode
    startAdornmentClass?: string
    endAdornment?: React.ReactNode
    endAdornmentClass?: string
    label?: ReactNode;
    labelClass?: string
    floatingLabel?: boolean;
    floatingLabelClass?: string;
}

export type TextareaSizes = 'extra_small' | 'small' | 'medium' | 'large'

export type UseTwTextareaProps = {
    varient?: 'contained' | 'outlined' | 'standard';
    rounded?: boolean | 'sm' | 'md' | 'lg' | 'full'
    size?: TextareaSizes
}

// export type UseTwTextareaReturnProps = {
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
