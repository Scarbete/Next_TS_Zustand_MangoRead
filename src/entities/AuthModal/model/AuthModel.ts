import { create } from 'zustand'
import Cookies from 'js-cookie'
import { IAuthModelState, ModalShowTypes } from '@/entities/AuthModal/types/AuthModalTypes'


export const useAuthModel = create<IAuthModelState>((set) => ({
    user_id: Cookies.get('user_id') || null,
    userData: Cookies.get('userData') ? JSON.parse(Cookies.get('userData') as string) : null,
    modalShowType: ModalShowTypes.Close,
    removeUserData: () => {
        Cookies.remove('user_id')
        Cookies.remove('userData')
        Cookies.remove('access_token')
        Cookies.remove('refresh_token')
    },
    setModal: (type: ModalShowTypes) => {
        set({ modalShowType: type})
    }
}))
