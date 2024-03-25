'use client'
import { FC, useState } from 'react'
import Image from 'next/image'
import { useAuthModel } from '@/entities/AuthModal/model/AuthModel'
import { ModalShowTypes } from '@/entities/AuthModal/types/AuthModalTypes'
import CustomButton from '@/shared/ui/CustomButton/CustomButton'

import dropDownImage from '@/shared/assets/images/Header/arrow_drop_down.svg'
import classes from './HeaderAuth.module.sass'


const HeaderAuth: FC = () => {
    const { setModal, userData } = useAuthModel()
    const [ isSignOutFocus, setIsSignOutFocus ] = useState<boolean>(false)

    const toggleSignOutFocus = () => setIsSignOutFocus((!isSignOutFocus))

    const openSignIn = () => setModal(ModalShowTypes.SignIn)
    const openSignUp = () => setModal(ModalShowTypes.SignUp)

    const handleLogout = () => {
        localStorage.clear()
        window.location.reload()
    }

    return (
        <div className={classes.authButtons}>
            {userData ? (
                <div className={classes.userBlock}>
                    <p>{userData.username}</p>
                    <button onClick={toggleSignOutFocus} className={classes.logButton}>
                        <Image
                            src={userData?.image as string}
                            alt={'userImage'}
                            width={70}
                            height={70}
                            className={classes.userBlock__img}
                        />
                        <Image
                            src={dropDownImage}
                            alt={'dropDown'}
                            height={24}
                            width={24}
                            style={{transform: `rotate(${isSignOutFocus ? '180' : '0'}deg)`}}
                        />
                    </button>
                </div>
            ) : (
                <>
                    <CustomButton variant={'outline'} onClick={openSignIn}>
                        войти
                    </CustomButton>
                    <CustomButton onClick={openSignUp}>
                        регистрация
                    </CustomButton>
                </>
            )}
            <ul
                className={classes.dropDownView}
                style={{
                    opacity: Number(isSignOutFocus),
                    height: isSignOutFocus ? '80px' : '0px',
                }}
            >
                <li>
                    {/*<Image/>*/}
                    <span>Профиль</span>
                </li>
                <li onClick={handleLogout}>
                    {/*<Image/>*/}
                    <span>Выйти</span>
                </li>
            </ul>
        </div>
    )
}

export default HeaderAuth