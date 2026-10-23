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
                    name="Microgame Jam 2026 / Microgame Workshop"
                    description={<>
                    This is our first beginner-friendly game jam of the year, where participants create short "microgames" (like warioware!) in Godot using a provided template! 
                    The top three winners will be announced during our awards ceremony at a later date (will have free food, games, and a raffle with cash prizes!!!)..... Keep an eye out for it!!
                    The jam will start on Oct 26 and ending on Nov 7, and don't worry about having no experience because we'll also be hosting a Microgame Workshop on Oct 26, 6:30-8:30PM, in ETB 124 to teach you how to make your own microgame!!! it will be recorded (hopefully), so don't stress if you can't make it! DID I MENTION THERE'S ALSO FREE PIZZA???? Check our Discord for additional info!
                    You can either work solo or with a group, but keep in mind that the prize money will be split amongst you if you win! we're very excited for all of you to participate and to see all of your submissions!!!! we hope to see you all there on monday!!!!!

                    </>}
                    date = "October 26th - November 7th, 2026 (Jam) | October 26th (Workshop)"
                    imagePath = '/images/events/microgame2026.jpg'
                    location = 'ETB 124 (Workshop)'
                    time = '6:30PM - 8:30PM (Workshop)'
                    links = {{
                    'Discord': 'https://discord.com/invite/Gsvp8JKF66'
                    }}
                /></li>

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