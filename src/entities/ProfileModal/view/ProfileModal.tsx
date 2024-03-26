'use client'
import { FC, useEffect } from 'react'
import Image from 'next/image'

import { useProfileModel } from '@/entities/ProfileModal'
import { useAuthModel } from '@/entities/AuthModal'
import { CustomInput } from '@/shared/ui/CustomInput'
import { CustomModal } from '@/shared/ui/CustomModal'
import { CustomButton } from '@/shared/ui/CustomButton'

import modalCloseImage from '@/shared/assets/images/Modal/CloseModal.svg'
import classes from './ProfileModal.module.sass'


const ProfileModal: FC = () => {

    const { userData } = useAuthModel()

    const {
        profileModalVisible,
        userDataObj,
        setProfileModalVisible,
        getUserData,
        handleSubmitProfile,
        handleChangeInput
    } = useProfileModel()

    const closeModal = () => setProfileModalVisible(false)

    useEffect(() => {
        getUserData(userData ?? {})
    }, [userData])

    return (
        <CustomModal
            open={profileModalVisible}
            handleClose={closeModal}
            contentClass={classes.modalContent}
            className={classes.modalWrapper}
        >
            <div className={classes.modalTop}>
                <h2>Редактирование</h2>
                <Image
                    src={modalCloseImage}
                    alt={'modalCloseImage'}
                    width={23}
                    height={23}
                    className={classes.closeImage}
                    onClick={closeModal}
                />
            </div>
            <form className={classes.editForm} onSubmit={handleSubmitProfile}>
                <CustomInput
                    value={userDataObj.username}
                    onChange={handleChangeInput}
                    name={'username'}
                    // error={errors.username}
                    placeholder={'Username'}
                    maxLength={60}
                />
                <CustomInput
                    value={userDataObj.nickname}
                    onChange={handleChangeInput}
                    name={'nickname'}
                    // error={errors.password}
                    placeholder={'Nickname'}
                    maxLength={60}
                />
                <CustomButton>
                    Сохранить изменения
                </CustomButton>
            </form>
        </CustomModal>
    )
}

export default ProfileModal