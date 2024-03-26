'use client'
import Image from 'next/image'
import classNames from 'classnames'
import { ModalShowTypes } from '@/entities/AuthModal'
import { useAuthModel } from '@/entities/AuthModal/model/AuthModel'
import { SignIn } from '@/entities/SignIn'
import { SignUp } from '@/entities/SignUp'
import CustomModal from '@/shared/ui/CustomModal/view/CustomModal'

import modalCloseImage from '@/shared/assets/images/Modal/CloseModal.svg'
import classes from './AuthModal.module.sass'


const AuthModal = () => {
    const { modalShowType, setModal, isSignIn } = useAuthModel()

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
                    <div className={classNames(classes.divider, {[classes.dividerIsSignIn]: isSignIn()})}></div>
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
            <div className={classNames(classes.modalSlider, {[classes.modalSliderSignIn]: isSignIn()})}>
                <SignIn/>
                <SignUp/>
            </div>
        </CustomModal>
    )
}

export default AuthModal