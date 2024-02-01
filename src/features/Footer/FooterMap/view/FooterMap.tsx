import classes from './FooterMap.module.sass'

const FooterMap = () => {
    return (
        <div className={classes.footerMap}>
            {/*  FIX ME  */}
            <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.7040230242824!2d74.615768675839!3d42.87909090215336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb794b532a8f1%3A0xcea5bfa3cae816aa!2sVictory!5e0!3m2!1sru!2skg!4v1691149096284!5m2!1sru!2skg'
                allowFullScreen
                loading={'lazy'}
                className={classes.googleMap}
            ></iframe>
        </div>
    )
}

export default FooterMap