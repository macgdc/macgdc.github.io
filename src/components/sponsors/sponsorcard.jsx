import styles from './../styles/sponsors.module.css'

function SponsorCard({ imagePath = "/icons/logo_white.svg", link }) {
    return (
        <a
            className={styles.sponsorCard}
            href={link}
            target="_blank"
            rel="noreferrer"
        >
            <img src={imagePath} alt="Sponsor" className={styles.sponsorImage} loading="lazy" />
        </a>
    )
}

export default SponsorCard
