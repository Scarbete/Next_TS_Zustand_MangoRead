'use client'
import { ChangeEvent, FC, useEffect } from 'react'
import { ModalShowTypes } from '@/entities/AuthModal/types/AuthModalTypes'
import { useSignInModel } from '@/entities/SignIn/model/SignInModel'
import { useAuthModel } from '@/entities/AuthModal/model/AuthModel'

import CustomCheckBox from '@/shared/ui/CustomCheckBox/CustomCheckBox'
import CustomInput from '@/shared/ui/CustomInput/CustomInput'
import CustomButton from '@/shared/ui/CustomButton/CustomButton'

import checkBoxOnImage from '@/shared/assets/images/Modal/signInCheckBoxOn.svg'
import checkBoxOffImage from '@/shared/assets/images/Modal/signInCheckBoxOff.svg'
import classes from './SignIn.module.sass'


const SignIn: FC = () => {
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
    const { setModal, modalShowType } = useAuthModel()
    const isSignIn = modalShowType === ModalShowTypes.SignIn

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
            className={classes.SignIn}
            onSubmit={handleSubmit}
            style={{marginLeft: isSignIn ? '0' : 'calc(-100% - 100px)'}}
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

export default SignIn