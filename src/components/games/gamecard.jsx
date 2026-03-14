import styles from './../styles/games.module.css'

function GameCard( {
    name = "Placeholder", 
    creator = "Placeholder", 
    imagePath = "/icons/logo_white.svg",
    link = "#"} ) {

    return (
        <a
            className={styles.gameCard}
            href={link}
            target="_blank"
            rel="noreferrer"
        >
            <img src={imagePath} alt={name} className={styles.gameCardBg} loading="lazy" />
            <div className={styles.gameCardOverlay}>
                <p className={styles.gameCardName}>{name}</p>
                <p className={styles.gameCardCreator}>by {creator}</p>
            </div>
        </a>
    )
}

export default GameCard