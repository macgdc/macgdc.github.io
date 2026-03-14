import styles from './styles/stats.module.css'
import CountUp from 'react-countup'

function Stats() {
    return(
        <div className={`${styles.stats} fadeIn`}>
            <div className={styles.statItem}>
                <img src="/icons/member.png" alt="" className={styles.statIcon} loading="lazy" />
                <div className={styles.bigstat}><CountUp end={500}/>+</div>
                <div className={styles.statLabel}>MEMBERS</div>
            </div>
            <div className={styles.statItem}>
                <img src="/icons/gamepad.png" alt="" className={styles.statIcon} loading="lazy" />
                <div className={styles.bigstat}><CountUp end={70}/>+</div>
                <div className={styles.statLabel}>GAMES MADE</div>
            </div>
            <div className={styles.statItem}>
                <img src="/icons/laptop.svg" alt="" className={styles.statIcon} loading="lazy" />
                <div className={styles.bigstat}><CountUp end={5}/>+</div>
                <div className={styles.statLabel}>GAME JAMS</div>
                <div className={styles.recurringLabel}>(recurring annually!)</div>
            </div>
            <div className={styles.statItem}>
                <img src="/icons/presentation.png" alt="" className={styles.statIcon} loading="lazy" />
                <div className={styles.bigstat}><CountUp end={10}/>+</div>
                <div className={styles.statLabel}>WORKSHOPS</div>
            </div>
        </div>
    );
}

export default Stats