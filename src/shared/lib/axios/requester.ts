import { ACCESS_TOKEN } from '../variables/variables'
import axios, { AxiosInstance } from 'axios'

import Cookies from 'js-cookie'

const createApi = (): AxiosInstance => {
    return axios.create({
        baseURL: process.env.BASE_URL,
    })
}

const $mainApi = createApi()
const $authApi = createApi()

$authApi.interceptors.request.use(( config ) => {
    const accessToken = Cookies.get(ACCESS_TOKEN)

    if (accessToken) {
        config.headers!.Authorization = `Bearer ${accessToken}`
    }

    return config
})

$authApi.interceptors.response.use(config => { return config }, ( error ) => {
    const ogRequest = error.config

    if (!ogRequest._isRetry) {
        ogRequest._isRetry = true

        try {
            return $authApi.request(ogRequest)
        }
        catch {
            return null
        }
    }
    return Promise.reject(error)
})

export { $mainApi, $authApi }