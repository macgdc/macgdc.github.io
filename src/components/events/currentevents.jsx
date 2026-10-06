import Event from './event'
import styles from '../styles/sections.module.css'
import pageStyles from '../styles/page.module.css'

function CurrentEvents( { home = false } ) {
    return (
        <>
        <h1 className={`${styles.sectionTitle} ${home ? styles.sectionTitleCentered : ''} fadeIn`}> 
            <i>CURRENT EVENTS</i> </h1>
            <ul className={`eventBG ${styles.eventBg} ${home ? styles.eventBgHome : ''} fadeIn`}>
                {/* Copy and paste the entire list element below to make more events; sorry if clunky - Aiden 
                
                <li><Event
                    name="Event Name"
                    description={<>
                    description goes here
                    </>}
                    date = "January 1st, 2026"
                    imagePath = '/images/events/gamejam2026.png'
                    location = 'N/A'
                    time = 'N/A'
                    links = {{
                    'Link 1': '',
                    'Link 2': ''
                    }}
                /></li>
                
                */}

                <li><Event
                    name="Gamedev Circles"
                    description={<>
                    Drop-in casual weekly meetings to hang out with other gamedevs, 
                    work on your project (or your homework lol), showcase you project or 
                    anything else that you think is cool, find playtesters, or participate in a 
                    gamedev-related activity! 
                    </>}
                    date = "Every Tuesday (unless stated otherwise)"
                    location = 'Announced on Discord'
                    time = 'Announced on Discord'
                    links = {{
                    'Discord': 'https://discord.com/invite/Gsvp8JKF66'
                    }}
                /></li>

                
                {/* 
                <p className={`fadeIn`} style={{textAlign: 'center'}}>
                 No events currently running. Check back later!
                </p>
                */}
            </ul>
        </>

    );

}

export default CurrentEvents