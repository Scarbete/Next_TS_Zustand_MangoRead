'use client'
import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from 'react'
import { objectWithoutProperties } from '@/shared/lib/helpers/helpers'
import classNames from 'classnames'
import classes from './CustomButton.module.sass'

export type TButtonVariant = 'default' | 'outline' | 'secondary'

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode
    className?: string
    variant?: TButtonVariant
    weight?: 'regular' | 'semiBold'
}

const CustomButton: FC<Props> = props => {
    const {
        children,
        className,
        disabled,
        variant = 'default',
        weight = 'regular'
    } = props

    return (
        <button
            {...objectWithoutProperties(props, [ 'className',
                'variant',
                'weight',
            ])}
            className={classNames(
                classes.button,
                {
                    [ classes[ variant ] ]: variant,
                    [ classes.disabled ]: disabled
                },
                className,
            )}
        >
            {children}
        </button>
    )
}

export default CustomButton