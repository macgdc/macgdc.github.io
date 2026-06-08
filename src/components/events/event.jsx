import { useState } from 'react'
import styles from '../styles/event.module.css'

function Event({
    name = 'Event Name',
    description = 'Event description goes here.',
    date = 'N/A',
    imagePath = '/icons/logo_white.svg',
    location = 'N/A',
    time = 'N/A',
    links = {},
}) {
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false)
    const linkEntries = Object.entries(links).filter(([, url]) => typeof url === 'string' && url.trim().length > 0)

    return (
        <div className={`${styles.eventCard} fadeIn`}>
            <img
                src={imagePath}
                alt={name}
                className={styles.eventImage}
                loading="lazy"
            />
            <div className={styles.eventContent}>
                <h2 className={styles.eventName}>{name}</h2>
                <p className={styles.eventDate}>{date}</p>
                <button
                    type="button"
                    className={styles.eventAccordionToggle}
                    onClick={() => setIsDescriptionOpen((open) => !open)}
                    aria-expanded={isDescriptionOpen}
                >
                    {isDescriptionOpen ? 'Hide Description ▲' : 'Show Description ▼'}
                </button>
                <div className={`${styles.eventDescriptionWrap} ${isDescriptionOpen ? styles.eventDescriptionOpen : ''}`}>
                    <p className={styles.eventDescription}>{description}</p>
                </div>
                <div className={styles.eventMeta}>
                    <u>Date:</u> {date} <br/>
                    <u>Location:</u> {location} <br/> 
                    <u>Time:</u> {time}
                </div>
                {linkEntries.length > 0 && (
                    <div className={styles.eventLinks}>
                        {linkEntries.map(([label, url]) => (
                            <a
                                key={label}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.eventLink}
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Event