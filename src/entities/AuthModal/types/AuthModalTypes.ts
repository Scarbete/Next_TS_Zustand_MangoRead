import { IFullUserData } from '@/shared/types/types'

export enum ModalShowTypes {
    Close = '',
    SignIn = 'SignIn',
    SignUp = 'SignUp',
}

export interface IAuthModelState {
    modalShowType: ModalShowTypes
    user_id: string | null
    userData: IFullUserData | null
    setModal: (type: ModalShowTypes) => void
    removeUserData: () => void
    isSignIn: () => boolean
    setUserData: (userData: IFullUserData) => void
}