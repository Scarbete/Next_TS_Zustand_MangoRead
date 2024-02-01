import { FormEvent } from 'react'
import { IComment } from '@/features/MangaPage/MangaComments/types/types'


export interface ICommentsModalProps {
    mangaId: number
}

export interface ICommentData {
    user: number,
    manga: number,
    text: string
}

export interface ICommentsModelState {
    isModalShow: boolean
    commentText: string
    commentInputError: boolean
    reviews: IComment[]
    setReviews: (data: IComment[]) => void
    setCommentInputError: (bool: boolean) => void
    setCommentText: (text: string) => void
    toggleShowModal: (bool: boolean) => void
    handleSubmit: (event: FormEvent<HTMLFormElement>, mangaId: number, userId: number) => void
    asyncPostComment: (commentData: ICommentData) => void
}