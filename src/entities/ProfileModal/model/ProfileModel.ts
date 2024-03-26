import { create } from 'zustand'
import { ProfileModelState } from '@/entities/ProfileModal'


export const useProfileModel = create<ProfileModelState>((set, get) => ({
    profileModalVisible: false,
    setProfileModalVisible: (visible: boolean) => {
        set({
            profileModalVisible: visible
        })
    },
    userDataObj: {
        username: '',
        nickname: '',
    },
    getUserData: (userData) => {
        const { username, nickname } = userData
        set({
            userDataObj: {
                username: username ?? '',
                nickname: nickname ?? ''
            }
        })
    },
    handleSubmitProfile: (event) => {
        event.preventDefault()
        const { userDataObj } = get()
        console.log('userDataObj', userDataObj)
    },
    handleChangeInput: (event) => {
        const { name, value } = event.target
        set((state) => ({
            userDataObj: {
                ...state.userDataObj,
                [name]: value
            }
        }))
    }
}))