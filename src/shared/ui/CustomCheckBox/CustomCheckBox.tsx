import { ChangeEvent, FC, ReactNode, memo } from 'react'
import Image from 'next/image'
import classes from './CustomCheckBox.module.sass'

interface Props {
    id?: string
    error?: boolean
    children?: ReactNode
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
    checkBoxOn: string
    checkBoxOff: string
}

const CustomCheckbox:FC<Props> = props => {
    const {
        id,
        onChange,
        error,
        children,
        checkBoxOn,
        checkBoxOff
    } = props

    return (
        <label className={classes.label}>
            <input
                type='checkbox'
                id={id}
                onChange={onChange}
                className={classes.input}
            />
            <div className={classes.customCheckbox}>
                <Image
                    src={checkBoxOn}
                    alt={'checkBoxOn'}
                    width={35}
                    height={35}
                    className={classes.tickMark}
                />
                <Image
                    src={checkBoxOff}
                    alt={'checkBoxOff'}
                    width={35}
                    height={35}
                />
            </div>
            <div className={classes.labelText}>
                {error ? error : children}
            </div>
        </label>
    )
}

export default memo(CustomCheckbox)