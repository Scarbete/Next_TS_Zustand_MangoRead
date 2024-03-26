import { IFullUserData } from '@/shared/types/types'
import { ChangeEvent, FormEvent } from 'react'


export interface ProfileModelState {
    profileModalVisible: boolean
    setProfileModalVisible: (visible: boolean) => void
    userDataObj: IFullUserData
    getUserData: (userData: IFullUserData) => void
    handleSubmitProfile: (event: FormEvent<HTMLFormElement>) => void
    handleChangeInput: (event: ChangeEvent<HTMLInputElement>) => void
}