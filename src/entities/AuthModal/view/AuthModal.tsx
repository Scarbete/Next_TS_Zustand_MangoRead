'use client'
import Image from 'next/image'
import { ModalShowTypes } from '../types/AuthModalTypes'
import { useAuthModel } from '@/entities/AuthModal/model/AuthModel'
import SignIn from '@/entities/SignIn/view/SignIn'
import SignUp from '@/entities/SignUp/view/SignUp'
import Modal from '@/shared/ui/Modal/Modal'

import classes from './AuthModal.module.sass'
import modalCloseImage from '@/shared/assets/images/Modal/CloseModal.svg'


const AuthModal = () => {
    const { modalShowType, setModal } = useAuthModel()
    const isSignIn = modalShowType === ModalShowTypes.SignIn

    return (
        <Modal
            open={Boolean(modalShowType)}
            handleClose={() => setModal(ModalShowTypes.Close)}
            contentClass={classes.modalContainer}
        >
            <div className={classes.modalNavBar}>
                <div className={classes.modalNavBar__buttons}>
                    <button onClick={() => setModal(ModalShowTypes.SignIn)}>
                        Вход
                    </button>
                    <button onClick={() => setModal(ModalShowTypes.SignUp)}>
                        Регистрация
                    </button>
                    <div
                        className={classes.divider}
                        style={{left: isSignIn ? '-0px' : '92px', width: isSignIn ? '64px' : '164px'}}
                    ></div>
                </div>
                <Image
                    src={modalCloseImage}
                    alt={'modalCloseImage'}
                    width={23}
                    height={23}
                    className={classes.modalNavBar__closeImage}
                    onClick={() => setModal(ModalShowTypes.Close)}
                />
            </div>
            <div style={{height: isSignIn ? '340px' : '520px'}} className={classes.modalSlider}>
                <SignIn/>
                <SignUp/>
            </div>
        </Modal>
    )
}

export default AuthModal