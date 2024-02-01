'use client'
import { FC } from 'react'
import { ICommentsModalProps } from '@/entities/CommentsModal/types/CommentsModalTypes'
import { useCommentsModal } from '@/entities/CommentsModal/model/CommentsModalModel'
import { useAuthModel } from '@/entities/AuthModal/model/AuthModel'
import Modal from '@/shared/ui/Modal/Modal'
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

    return (
        <>
            <Modal open={isModalShow} handleClose={() => toggleShowModal(false)} className={classes.customModal}>
                <div className={classes.userInfo}>
                    <Image
                        src={userData?.image as string}
                        alt={'userImage'}
                        width={100}
                        height={100}
                        className={classes.userInfo__image}
                    />
                    <p>{userData?.username}, {userData?.nickname}</p>
                </div>
                <form
                    className={classNames(
                        classes.inputForm,
                        {[ classes.error ]: commentInputError},
                    )}
                    onSubmit={e => handleSubmit(e, Number(mangaId), Number(user_id))}
                >
                    <input
                        value={commentText}
                        onChange={e => setCommentText(e.target.value)}
                        type="text"
                        placeholder={'Добавьте комментарий'}
                        maxLength={200}
                    />
                    <button>Добавить</button>
                </form>
            </Modal>
        </>
    )
}

export default CommentsModal