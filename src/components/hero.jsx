import Typewriter from 'typewriter-effect'
import styles from './styles/hero.module.css'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <>
        <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
                <h1 className={`${styles.heroTitle} fadeIn`}><i>MCMASTER</i></h1>
                <div className={styles.heroSubGroup}>
                    <h1 className={`${styles.heroSub} fadeIn`}><i>GAME DEVELOPMENT</i></h1>
                    <h1 className={`${styles.heroSub2} fadeIn`}><i>CLUB</i></h1>
                </div>
                
                <p className={`${styles.tagline} fadeIn`}>
                    where your{' '}
                    <span className={styles.typewriterWord}>
                        <Typewriter
                            options={{
                                strings: ['programming', 'art', 'writing', 'composing'],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 'natural',
                                delay: 'natural',
                                deleteAll: true,
                                cursor: '|',
                            }}
                        />
                    </span>
                    skills can thrive.
                </p>
            </div>

            <div className={`${styles.actionSection} fadeIn`}>
                <h2 className={styles.actionTitle}><i>FIND OUT MORE!</i></h2>
                <div className={styles.buttonGrid}>
                    <a href="https://discord.com/invite/Gsvp8JKF66" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
                        <img src="/images/discord.webp" alt="Discord"/>
                        <span>DISCORD</span>
                    </a>
                    <a href="https://www.instagram.com/macgdc/" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
                        <img src="/images/instagram.webp" alt="Instagram"/>
                        <span>INSTAGRAM</span>
                    </a>
                    <a href="https://macgdc.itch.io/" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
                        <img src="/images/itchio.png" alt="itch.io"/>
                        <span>ITCH.IO</span>
                    </a>
                    <a href="https://www.youtube.com/@MacGDC" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
                        <img src="/images/youtube.webp" alt="YouTube" />
                        <span>YOUTUBE</span>
                    </a>
                    <a href="https://www.bouncelife.com/organizations/6686e1838b391c59c2a6f9df" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
                        <img src="/images/bouncelife.png" alt="Bouncelife" />
                        <span>BOUNCELIFE</span>
                    </a>
                    <a href="https://linktr.ee/macgdc" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
                        <img src="/images/linktree-white-icon.webp" alt="Linktree" />
                        <span>LINKTREE</span>
                    </a>
                </div>
                <Link to="/sponsors" className={styles.sponsorBtn}>BECOME A SPONSOR</Link>
            </div>
        </div>
        </>

    );
}

export default Hero;