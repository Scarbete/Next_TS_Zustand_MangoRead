'use client'
import { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import Cookies from 'js-cookie'
import classNames from 'classnames'

import { useProfileModel } from '@/entities/ProfileModal'
import { ModalShowTypes, useAuthModel } from '@/entities/AuthModal'
import { CustomButton } from '@/shared/ui/CustomButton'

import dropDownImage from '@/shared/assets/images/Header/arrow_drop_down.svg'
import classes from './HeaderAuth.module.sass'


const HeaderAuth: FC = () => {
    const { setProfileModalVisible } = useProfileModel()
    const openProfileModal = () => setProfileModalVisible(true)

    const { setModal, userData, removeUserData, setUserData } = useAuthModel()

    const [ isSignOutFocus, setIsSignOutFocus ] = useState<boolean>(false)
    const toggleSignOutFocus = () => setIsSignOutFocus((!isSignOutFocus))

    const openSignIn = () => setModal(ModalShowTypes.SignIn)
    const openSignUp = () => setModal(ModalShowTypes.SignUp)

    const handleLogout = () => {
        removeUserData()
        typeof window !== 'undefined' && window.location.reload()
    }

    useEffect(() => {
        if (Cookies.get('userData')) {
            const myUserData = JSON.parse(Cookies.get('userData') as string)
            setUserData(myUserData)
        }
    }, [])

    return (
        <div className={classes.authButtons}>
            {userData ? (
                <div className={classes.userBlock}>
                    <p>{userData?.username}</p>
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
            <ul className={classNames(classes.dropDownView, {[classes.dropDownAnimate]: isSignOutFocus})}>
                <li onClick={openProfileModal}>
                    <span>Профиль</span>
                </li>
                <li onClick={handleLogout}>
                    <span>Выйти</span>
                </li>
            </ul>
        </div>
    )
}

export default HeaderAuth