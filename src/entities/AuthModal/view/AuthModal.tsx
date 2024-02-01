'use client'
import Image from 'next/image'
import { ModalShowTypes } from '../types/AuthModalTypes'
import { useAuthModel } from '@/entities/AuthModal/model/AuthModel'
import SignIn from '@/entities/SignIn/view/SignIn'
import SignUp from '@/entities/SignUp/view/SignUp'
import CustomModal from '@/shared/ui/CustomModal/CustomModal'

import classes from './AuthModal.module.sass'
import modalCloseImage from '@/shared/assets/images/Modal/CloseModal.svg'


const AuthModal = () => {
    const { modalShowType, setModal } = useAuthModel()
    const isSignIn = modalShowType === ModalShowTypes.SignIn

    const closeModal = () => setModal(ModalShowTypes.Close)
    const openSignIn = () => setModal(ModalShowTypes.SignIn)
    const openSignUp = () => setModal(ModalShowTypes.SignUp)

    return (
        <CustomModal
            open={Boolean(modalShowType)}
            handleClose={closeModal}
            contentClass={classes.modalContainer}
        >
            <div className={classes.modalNavBar}>
                <div className={classes.modalNavBar__buttons}>
                    <button onClick={openSignIn}>
                        Вход
                    </button>
                    <button onClick={openSignUp}>
                        Регистрация
                    </button>
                    <div
                        className={classes.divider}
                        style={{
                            left: isSignIn ? '-0px' : '92px',
                            width: isSignIn ? '64px' : '164px'
                        }}
                    ></div>
                </div>
                <Image
                    src={modalCloseImage}
                    alt={'modalCloseImage'}
                    width={23}
                    height={23}
                    className={classes.modalNavBar__closeImage}
                    onClick={closeModal}
                />
            </div>
            <div
                style={{height: isSignIn ? '340px' : '520px'}}
                className={classes.modalSlider}
            >
                <SignIn/>
                <SignUp/>
            </div>
        </CustomModal>
    )
}

export default AuthModal