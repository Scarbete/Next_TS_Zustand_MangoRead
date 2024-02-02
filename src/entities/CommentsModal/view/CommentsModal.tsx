'use client'
import {ChangeEventHandler, FC, FormEventHandler} from 'react'
import { ICommentsModalProps } from '@/entities/CommentsModal/types/CommentsModalTypes'
import { useCommentsModal } from '@/entities/CommentsModal/model/CommentsModalModel'
import { useAuthModel } from '@/entities/AuthModal/model/AuthModel'
import CustomModal from '@/shared/ui/CustomModal/CustomModal'
import classNames from 'classnames'
import Image from 'next/image'
import classes from './CommentsModal.module.sass'


const CommentsModal: FC<ICommentsModalProps> = props => {
    const { mangaId } = props
    const { userData, user_id } = useAuthModel()

    const {
        isModalShow,
        commentText,
        commentInputError,
        setCommentText,
        toggleShowModal,
        handleSubmit
    } = useCommentsModal()

    const changeCommentText: ChangeEventHandler<HTMLInputElement> = (event) => {
        setCommentText(event.target.value)
    }

    const submitForm: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        handleSubmit(Number(mangaId), Number(user_id))
    }

    const closeModal = () => toggleShowModal(false)

    return (
        <>
            <CustomModal
                open={isModalShow}
                handleClose={closeModal}
                className={classes.customModal}
            >
                <div className={classes.userInfo}>
                    {typeof userData?.image === 'string' && (
                        <Image
                            src={userData?.image}
                            alt={'userImage'}
                            width={100}
                            height={100}
                            className={classes.userInfo__image}
                        />
                    )}
                    <p>{userData?.username}, {userData?.nickname}</p>
                </div>
                <form
                    className={classNames(
                        classes.inputForm,
                        {[ classes.error ]: commentInputError},
                    )}
                    onSubmit={submitForm}
                >
                    <input
                        value={commentText}
                        onChange={changeCommentText}
                        type="text"
                        placeholder={'Добавьте комментарий'}
                        maxLength={200}
                    />
                    <button>Добавить</button>
                </form>
            </CustomModal>
        </>
    )
}

export default CommentsModal