import { create } from 'zustand'
import { ICommentData, ICommentsModelState } from '@/entities/CommentsModal/types/CommentsModalTypes'
import { alertToast } from '@/shared/ui/CustomAlert/CustomAlert'
import { $authApi } from '@/shared/lib/axios/requester'


export const useCommentsModal = create<ICommentsModelState>((set, get) => ({
    isModalShow: false,
    commentText: '',
    commentInputError: false,
    reviews: [],
    setReviews: (data) => {
        set({ reviews: [...data] })
    },
    setCommentInputError: (bool) => {
        set({ commentInputError: bool })
    },
    setCommentText: (text) => {
        set({ commentText: text })
    },
    toggleShowModal: (bool) => {
        set({ isModalShow: bool })
    },
    handleSubmit: (mangaId, userId) => {
        const { commentText, setCommentText, setCommentInputError, asyncPostComment } = get()

        if (commentText.trim()) {
            setCommentText('')
            setCommentInputError(false)

            const commentData: ICommentData = {
                user: userId,
                manga: mangaId,
                text: commentText
            }

            asyncPostComment(commentData)
        }
        else {
            setCommentInputError(true)
            alertToast('error', 'Поле ввода пустое!')
        }
    },
    asyncPostComment: async (commentData) => {
        try {
            const { data, status } = await $authApi.post(`review/`, commentData)
            if (status <= 204 && status >= 200) {
                alertToast('success', 'Вы успешно добавили коментарий!')
                set((state) => ({
                    reviews: [...state.reviews, data],
                    isModalShow: false
                }))
            }
        }
        catch (error) {
            console.error(error)
        }
    }
}))