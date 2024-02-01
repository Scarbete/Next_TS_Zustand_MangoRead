'use client'

export const useScrollToTop = () => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}