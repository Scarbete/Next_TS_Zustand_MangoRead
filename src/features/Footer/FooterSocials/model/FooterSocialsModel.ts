import { FooterSocialsTypes } from '@/features/Footer/FooterSocials/types/FooterSocialsTypes'
import { create } from 'zustand'

import footerFacebook from '@/shared/assets/images/Footer/FooterFacebook.svg'
import footerInstagram from '@/shared/assets/images/Footer/FooterInstagram.svg'
import footerTwitter from '@/shared/assets/images/Footer/FooterTwitter.svg'


export const useFooterSocials = create<FooterSocialsTypes>(() => ({
    socials: [
        { label: 'Link One', image: footerFacebook, url: 'https://www.youtube.com/watch?v=FHHpiF4S_Sk' },
        { label: 'Link Two', image: footerInstagram, url: 'https://www.youtube.com/watch?v=nJhtVdMyFFc' },
        { label: 'Link Three', image: footerTwitter, url: 'https://www.youtube.com/watch?v=vBm_LhIlNhY' },
    ]
}))