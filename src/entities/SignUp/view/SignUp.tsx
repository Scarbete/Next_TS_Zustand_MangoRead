'use client'
import { ChangeEvent, DragEventHandler, FC, useEffect, useRef } from 'react'
import Image from 'next/image'

import { useSignUpModel } from '@/entities/SignUp'
import { ModalShowTypes, useAuthModel } from '@/entities/AuthModal'

import { CustomInput } from '@/shared/ui/CustomInput'
import { CustomButton } from '@/shared/ui/CustomButton'

import defaultAvatar from '@/shared/assets/images/Modal/AvatarMangoRead.png'
import classes from './SignUp.module.sass'


export const SignUp: FC = () => {
    const {
        userData,
        setUserData,
        setUserImage,
        userImage,
        errors,
        validateForm,
        handleSubmit,
        successSignUp,
        setSuccessSignUp
    } = useSignUpModel()

    const { setModal } = useAuthModel()
    const { username, password } = userData

    const imageRef = useRef<HTMLInputElement>(null)
    const clickAddImage = () => imageRef.current?.click()

    const handleChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target
        setUserData({ [name]: value })
    }

    const handleChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        file && setUserImage(file)
    }

    const handleDragEnter: DragEventHandler<HTMLLabelElement> = (event) => event.preventDefault()
    const handleDragOver: DragEventHandler<HTMLLabelElement> = (event) => event.preventDefault()

    const handleDrop: DragEventHandler<HTMLLabelElement> = (event) => {
        event.preventDefault()
        const file = event.dataTransfer.files?.[0]
        file && setUserImage(file)
    }

    useEffect(() => {
        if (username.length > 0 || password.length > 0 ) {
            validateForm()
        }
    }, [userData, userImage])

    useEffect(() => {
        if (successSignUp) {
            setModal(ModalShowTypes.SignIn)
            setSuccessSignUp(false)
        }
    }, [successSignUp])

    return (
        <form className={classes.signUp} onSubmit={handleSubmit}>
            <label
                htmlFor={'fileInput'}
                onDragEnter={handleDragEnter}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className={classes.avatarLabel}
            >
                <Image
                    src={userImage ? userImage : defaultAvatar}
                    alt={'defaultAvatar'}
                    width={161}
                    height={161}
                    className={classes.avatarImage}
                />
                <button type={'button'} onClick={clickAddImage}>
                    ДОБАВИТЬ ФОТО
                </button>
                <input
                    type="file"
                    ref={imageRef}
                    onChange={handleChangeImage}
                    className={classes.fileInput}
                    id={'fileInput'}
                />
            </label>
            <div className={classes.fields}>
                <CustomInput
                    value={username}
                    onChange={handleChangeInput}
                    placeholder={'Username'}
                    name={'username'}
                    error={errors.username}
                    maxLength={20}
                />
                <CustomInput
                    value={password}
                    onChange={handleChangeInput}
                    placeholder={'Password'}
                    name={'password'}
                    error={errors.password}
                    maxLength={20}
                />
                <CustomButton>
                    регистрация
                </CustomButton>
            </div>
        </form>
    )
}