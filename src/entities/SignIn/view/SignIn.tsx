'use client'
import { ChangeEvent, FC, useEffect } from 'react'
import classNames from 'classnames'
import { useSignInModel } from '@/entities/SignIn'
import { ModalShowTypes, useAuthModel } from '@/entities/AuthModal'

import { CustomInput } from '@/shared/ui/CustomInput'
import { CustomCheckBox } from '@/shared/ui/CustomCheckBox'
import { CustomButton } from '@/shared/ui/CustomButton'

import checkBoxOnImage from '@/shared/assets/images/Modal/signInCheckBoxOn.svg'
import checkBoxOffImage from '@/shared/assets/images/Modal/signInCheckBoxOff.svg'
import classes from './SignIn.module.sass'


export const SignIn: FC = () => {
    const {
        userData,
        errors,
        successSignIn,
        setSuccessSignIn,
        setUserData,
        toggleCheckBox,
        handleSubmit,
        validateForm,
    } = useSignInModel()

    const { username, password } = userData
    const { setModal, isSignIn } = useAuthModel()

    const handleChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target
        setUserData({ [name]: value })
    }

    useEffect(() => {
        if (username.length > 0 || password.length > 0 ) {
            validateForm()
        }
    }, [userData])

    useEffect(() => {
        if (successSignIn) {
            window.location.reload()
            setSuccessSignIn(false)
            setModal(ModalShowTypes.Close)
        }
    }, [successSignIn])

    return (
        <form
            className={classNames(classes.SignIn, {[classes.SignInMarginLeft]: isSignIn()})}
            onSubmit={handleSubmit}
        >
            <CustomInput
                value={username}
                onChange={handleChangeInput}
                name={'username'}
                error={errors.username}
                placeholder={'Username'}
                maxLength={60}
            />
            <CustomInput
                value={password}
                onChange={handleChangeInput}
                name={'password'}
                error={errors.password}
                placeholder={'Password'}
                maxLength={60}
            />
            <CustomCheckBox
                onChange={toggleCheckBox}
                checkBoxOnImage={checkBoxOnImage}
                checkBoxOffImage={checkBoxOffImage}
            >
                <p className={classes.checkBoxTitle}>
                    Запомнить меня
                </p>
            </CustomCheckBox>
            <CustomButton>
                Вход
            </CustomButton>
        </form>
    )
}