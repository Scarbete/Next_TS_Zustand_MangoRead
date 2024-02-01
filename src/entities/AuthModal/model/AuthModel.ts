import { create } from 'zustand'
import { IAuthModelState, ModalShowTypes } from '@/entities/AuthModal/types/AuthModalTypes'


export const useAuthModel = create<IAuthModelState>((set) => ({
    user_id: JSON.parse(localStorage.getItem('user_id') || 'null'),
    userData: JSON.parse(localStorage.getItem('userData') || 'null'),
    modalShowType: ModalShowTypes.Close,
    setModal: (type: ModalShowTypes) => {
        set({ modalShowType: type})
    }
}))
