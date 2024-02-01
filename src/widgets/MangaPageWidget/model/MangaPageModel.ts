import { BASE_URL } from '@/shared/lib/variables/variables'


export const asyncGetManga = async (id: number) => {
    try {
        const response = await fetch(`${BASE_URL}manga/${id}/`)
        return response.json()
    }
    catch (error) {
        return null
    }
}