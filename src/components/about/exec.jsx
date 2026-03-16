import styles from './../styles/about.module.css'

function Exec({
    name = "Placeholder",
    role = "Position",
    imagePath = "/icons/logo_white.svg",
    link
}) {
    return (
        <a 
            className={styles.execCard} 
            href={link}
            target="_blank"
            rel="noreferrer"
        >
            <img src={imagePath} alt={name} className={styles.execImage} loading="lazy" />
            <div className={styles.execInfo}>
                <p className={styles.execName}>{name}</p>
                <p className={styles.execRole}>{role}</p>
            </div>
        </a>
    )
}

export default Exec
