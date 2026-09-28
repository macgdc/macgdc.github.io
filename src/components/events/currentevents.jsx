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
                    name="General Meeting + Beginner Godot Workshop 2026"
                    description={<>
                    Hello everyone! The time has finally come for our general meeting! We'll begin with 
                    introductions of our team and what we do in the club, plans for future events (game jams and workshops... 👀 ), 
                    and letting all of you talk to your fellow game devs! Afterwards, we'll be doing a <b>Beginner Godot Workshop</b>, teaching 
                    you the basics of the game engine and making a small game together! This is aimed at people of all skill levels, so no 
                    experience is required! However, please make sure to <b>bring your laptop if you wish to participate!</b> this meeting will take place
                    on <b>Tuesday, September 29th, from 7-9PM, in BSB B155</b>, but we may take a bit of time to set up and start closer to 7:15PM! whether
                    you are a programmer, musician, writer, artist, or just interested in game development, everyone is welcome regardless of their 
                    skill level! we hope to see you all there!
                    </>}
                    date = "September 29th, 2026"
                    imagePath = '/images/events/genmeet2026.png'
                    location = 'BSB B155'
                    time = '7-9PM'
                    links = {{
                    'Become a Member!': 'https://campus.hellorubric.com/?s=16527'
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