type ButtonOwnProps = {
    loading?: boolean | React.ReactNode
    startIcon?: React.ReactNode
    endIcon?: React.ReactNode
    children?: React.ReactNode
}

export type ButtonProps = ButtonOwnProps & UseTwButtonProps & Omit<React.ComponentProps<'button'>, 'size'>

export type UseTwButtonProps = {
    color?: 'primary' | 'primary-invert' | 'gray';
    // varient?: 'text' | 'contained' | 'outlined';
    size?: 'small' | 'large';
    // rounded?: boolean | 'sm' | 'md' | 'lg' | 'full' | 'roundedSquare' | 'square' | 'circle'
}