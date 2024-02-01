import { ACCESS_TOKEN } from '../variables/variables'
import axios, { AxiosInstance } from 'axios'

const createApi = (): AxiosInstance => {
    return axios.create({
        baseURL: process.env.BASE_URL,
    })
}

const $mainApi = createApi()
const $authApi = createApi()

$authApi.interceptors.request.use(( config ) => {
    config.headers!.Authorization = `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
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