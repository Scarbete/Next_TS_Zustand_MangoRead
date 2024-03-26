import { create } from 'zustand'
import Cookies from 'js-cookie'
import { IAuthModelState, ModalShowTypes } from '@/entities/AuthModal/types/AuthModalTypes'


export const useAuthModel = create<IAuthModelState>((set, get) => ({
    user_id: Cookies.get('user_id') || null,
    userData: null,
    modalShowType: ModalShowTypes.Close,
    isSignIn: () => {
        const {modalShowType} = get()
        return modalShowType === ModalShowTypes.SignIn
    },
    removeUserData: () => {
        Cookies.remove('user_id')
        Cookies.remove('userData')
        Cookies.remove('access_token')
        Cookies.remove('refresh_token')
    },
    setModal: (type: ModalShowTypes) => {
        set({ modalShowType: type})
    },
    setUserData: (userData) => {
        set({ userData: userData })
    }
}))
