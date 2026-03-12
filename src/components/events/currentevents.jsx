import Event from './event'
import styles from '../styles/sections.module.css'

function CurrentEvents( { home = false } ) {
    return (
        <>
        <h1 className={`${styles.sectionTitle} ${home ? styles.sectionTitleCentered : ''} fadeIn`}> 
            <i>CURRENT EVENTS</i> </h1>
            <ul className={`eventBG ${styles.eventBg} ${home ? styles.eventBgHome : ''} fadeIn`}>
                {/* Copy and paste the entire list element below to make more events; sorry if clunky - Aiden */}
                <li><Event
                    name="MacGDC Game Jam 2026"
                    description={<>
                    Our annual game jam is back, bigger and better than ever! If you don't know what a game
                    jam is, it's a small period of time where you or a team come together to create a game based on a theme, 
                    with prizes for the top three. This year, we're being sponsored by Ubisoft Toronto, Studio Resonance, the McMaster 
                    Student Union, and Adam Jolly! This game jam will run from March 5 - March 26, all of the info relating to it can be found in 
                    the #game-jam-2026 channel on our Discord and itch.io page linked below. This year's theme is <b><u>visibility.</u> </b> 
                    We hope to see you join, and we're so excited to see what everyone makes!
                    </>}
                    date = "March 5th - March 26th, 2026 (Active Now!)"
                    imagePath = '/images/events/gamejam2026.png'
                    location = 'N/A'
                    time = 'N/A'
                    link = "https://itch.io/jam/macgdc-game-jam-2026"
                /></li>

                <li><Event
                    name="Visual Novel Workshop 2026"
                    description={<>
                    Our second event of the game jam is here! Join us and the McMaster Fanfiction Club for a tutorial 
                    on how to create your very own visual novel using ren'py! All skill levels are welcome, and this 
                    is a perfect opportunity for you if you don't know how to code, since ren'py is a beginner-friendly
                    tool that we'll be showing you how to use step-by-step. The Visual Novel Workshop will be taking place 
                    Monday, March 16, 6:30 - 9:00 PM in ETB 119, we hope to see you there!
                    </>}
                    date = "March 16th, 2026"
                    imagePath = '/images/events/visualnovel.png'
                    location = 'ETB 119'
                    time = '6:30PM - 9:00 PM'
                /></li>

                <li><Event
                    name="Gamedev Circles"
                    description={<>
                    Drop-in casual weekly meetings to hang out with other gamedevs, 
                    work on your project (or your homework lol), showcase you project or 
                    anything else that you think is cool, find playtesters, or participate in a 
                    gamedev-related activity! 
                    </>}
                    date = "Every Thursday (unless stated otherwise)"
                    location = 'Announced on Discord'
                    time = 'Announced on Discord'
                    link = "https://discord.com/invite/Gsvp8JKF66"
                /></li>
            </ul>
        </>

    );

}

export default CurrentEvents