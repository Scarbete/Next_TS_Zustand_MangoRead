'use client'
import { CSSProperties, FC, ReactNode, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import classes from './CustomModal.module.sass'

interface Props {
    children: ReactNode,
    open: boolean,
    handleClose: () => void,
    className?: string,
    contentClass?: string,
    style?: CSSProperties
}


const CustomModal: FC<Props> = props => {
    const { children, open, handleClose, className, contentClass, style } = props
    const [ mounted, setMounted ] = useState<boolean>(false)
    const timer = useRef<NodeJS.Timeout>()

    const nodeForModal = document.querySelector('#portal') || document.body

    useEffect(() => {
        clearTimeout(timer.current)
        if (!open) {
            timer.current = setTimeout(() => setMounted(false), 300)
            document.body.style.overflow = 'auto'
        }
        else {
            setMounted(true)
            document.body.style.overflow = 'hidden'
        }
    }, [ open ])

    return !mounted ? <></> : createPortal(
        <>
            <div
                className={`${classes.background} ${open ? classes.open : classes.closed}`}
                onClick={event => {
                    event.stopPropagation()
                    handleClose()
                }}>
            </div>
            <div
                className={`${
                    classes.wrapper} 
                    ${open ? classes.open : classes.closed} 
                    ${className ? className : ''}`
                }
                style={style}
            >
                <div className={`${classes.content} ${contentClass || ''}`}>
                    {children}
                </div>
            </div>
        </>,
        nodeForModal
    )
}

export default CustomModal