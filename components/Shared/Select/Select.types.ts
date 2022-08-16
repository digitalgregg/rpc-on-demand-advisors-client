import React from "react";

export type SelectProps = UseTwInputProps & OnlySelectProps & React.ComponentProps<'select'>

type OnlySelectProps = {
    label?: string
    labelClass?: string
    widthFull?: boolean;
}
export type InputSizes = 'medium' | 'large'

export type UseTwInputProps = {
    varient?: 'contained' | 'outlined' | 'standard';
    rounded?: boolean | 'md' | 'full'
    size?: InputSizes
}
