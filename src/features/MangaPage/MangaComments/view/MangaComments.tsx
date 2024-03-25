'use client'
import { FC, useEffect } from 'react'

import Image from 'next/image'
import { IManga } from '@/widgets/MainPageWidget'
import { ModalShowTypes, useAuthModel } from '@/entities/AuthModal'
import { useCommentsModal } from '@/entities/CommentsModal'
import { FRONT_URL } from '@/shared/lib/variables/variables'

import classes from './MangaComments.module.sass'

interface Props {
    manga: IManga | null
}

const MangaComments: FC<Props> = props => {
    const { manga } = props
    const { setModal, userData } = useAuthModel()
    const {
        reviews,
        setReviews,
        toggleShowModal
    } = useCommentsModal()

    const handleAddComment = () => {
        userData
            ? toggleShowModal(true)
            : setModal(ModalShowTypes.SignUp)
    }

    useEffect(() => {
        if (manga?.manga_review) {
            setReviews(manga.manga_review)
        }
    }, [manga?.manga_review, setReviews])

    return (
        <div className={classes.mangaComments}>
            <div className={classes.commentTopBar}>
                <h3>Топ комментарий</h3>
                <button onClick={handleAddComment}>
                    добавить комментарий
                </button>
            </div>
            <div className={classes.commentsWrapper}>
                {reviews.length > 0
                    ? <div className={classes.commentsWrapper__Box}>
                        {reviews?.map((item, index) =>
                            <div key={index} className={classes.userComment}>
                                <div className={classes.userComment__imageBox}>
                                    <Image
                                        src={`${FRONT_URL}${item?.image}`}
                                        alt={'userImage'}
                                        height={100}
                                        width={100}
                                    />
                                </div>
                                <div className={classes.userComment__TextBox}>
                                    <h3>{item?.username}{item?.nickname && `, ${item?.nickname}`}</h3>
                                    <p>{item?.text}</p>
                                </div>
                            </div>
                        )}
                    </div>
                    : <p className={classes.nullComments}>
                        Комментарии пусты
                    </p>
                }
            </div>
        </div>
    )
}

export default MangaComments