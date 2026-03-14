import styles from './../styles/sponsors.module.css'
import SponsorCard from './sponsorcard'

function Sponsors() {
    return (
        <>
            {/* GOLD TIER */}
            <div className={`${styles.tierSection} fadeIn`}>
                <h2 className={styles.goldTierTitle}>
                    <span className={styles.crown}>👑</span>
                    <i>GOLD TIER</i>
                    <span className={styles.crown}>👑</span>
                </h2>
                <div className={styles.goldContainer}>
                    <SponsorCard 
                        imagePath="./images/sponsors/ubisoft.webp"
                        link="https://toronto.ubisoft.com/"
                    />
                    <SponsorCard 
                        imagePath="./images/sponsors/studioresonance.png"
                        link="https://www.roblox.com/communities/35150553/Studio-Resonance#!/about"
                    />
                </div>
            </div>

            {/* SILVER TIER */}
            <div className={`${styles.tierSection} fadeIn`}>
                <h2 className={styles.silverTierTitle}>
                    <i>SILVER TIER</i>
                </h2>
                <div className={styles.silverContainer}>
                    <SponsorCard 
                        imagePath="/images/sponsors/MSU.png"
                        link="https://msumcmaster.ca/"
                    />
                    <SponsorCard 
                        imagePath="/images/sponsors/adamjolly.png"
                    />
                </div>
            </div>
        </>
    );
}

export default Sponsors
