import Event from './event'
import styles from '../styles/sections.module.css'

function PastEvents() {
    return (
        <>
        <h1 className={`${styles.sectionTitle} fadeIn`}> 
            <i>PAST EVENTS</i> </h1>
            <ul className={`eventBG ${styles.eventBg} fadeIn`}>
                {/* Please archive old events by placing the newest at the top! - Aiden */}
                <li><Event
                    name="Gender Diversity in Game Dev"
                    description={<>
                    Computer Science Society and MacGDC are teaming up to bring you the first event in our Game Jam 2026 schedule: 
                    Gender Diversity in Gamedev! Join us for an evening celebrating women and genderqueer creators in game development! 
                    This event features a presentation from indie game developer <b>Adrienne "insertdisc5" Bazir (she/they), creator of 
                    In Stars and Time</b>, who will share their journey, creative process, and insights on how gender-diverse perspectives 
                    shape the games we love. Refreshments will be provided, and after their presentation we'll be hosting a small social and 
                    then game design workshop on prototypes & constraint-based design! We hope to see you there! Find out more about Adrienne 
                    at <a href='https://www.insertdisc5.com/' target="_blank" rel="noopener noreferrer" style={{color: "white"}}>https://www.insertdisc5.com/</a>
                    </>}
                    date = "March 9th, 2026"
                    imagePath = '/images/events/genderdiversity2026.png'
                    location = 'PGCLL B131'
                    time = '6:00 - 9:00 PM'
                /></li>
                
                <li><Event
                    name="Pixel Art Workshop 2026"
                    description={<>
                    In this workshop you will: <br/>Learn pixel art fundamentals, <br/>Create an object or character, <br/>Animate the object or character. 
                    You will need a laptop and we recommend bringing a mouse as well. The meeting will be recorded and posted on the MacGDC YouTube Channel:  
                    <a href='https://www.youtube.com/@MacGDC' target="_blank" rel="noopener noreferrer" style={{color: "white"}}> https://www.youtube.com/@MacGDC</a>, 
                    so if you can't make it in-person, be sure to check the video out!
                    </>}
                    date = "February 11th, 2026"
                    imagePath = '/images/events/pixelart2026.png'
                    location = 'JHE A101'
                    time = '6:00 - 8:00 PM'
                /></li>

                <li><Event
                    name="3D Art & Blender Workshop 2026"
                    description={<>
                     MacGDC is kicking things off with it's first meeting on January 20th at ETB 124 (6-8pm). 
                     Not only that but we will also be hosting a beginner friendly blender workshop that will be going over 
                     how to make a treasure chest. The meeting will also be recoreded in case you missed it as well. Please 
                     bring a charged laptop as ETB 124 has not alot of outlets.
                    </>}
                    date = "January 20th, 2026"
                    imagePath = '/images/events/3dblender2026.png'
                    location = 'ETB 124'
                    time = '6:00 - 8:00 PM'
                    link = "https://www.youtube.com/watch?v=nfXEMOLIpbg"
                /></li>

                <li><Event
                    name="Microgame Jam 2025"
                    description={<>
                    This is our first game jam of the year! A 10-day long event where you can compete to develop a small "microgame"
                    in Godot, with the top three games winning prizes! We've run this game jam annually for the past 2 years as a way 
                    to let beginners have the chance to make their own game, but all skill levels are welcome! Microgames are simple, short 
                    minigames that take 2-10 seconds to play, and have a simple control scheme and mechanics. They're inspired by the WarioWare series. <br/>
                    The winners of the Microgame Jam 2025 are: <br/><br/><b>
                    1st Place: Knights Out by Akhil<br/>
                    2nd Place: Arrow Karaoke by Logan<br/>
                    3rd Place: Assassin by Emre</b><br/>

                    A playable compilation of the microgames can be found in the itch.io link below!
                    </>}
                    date = "November 10th - 20th, 2025 | November 26th (Awards Ceremony)"
                    imagePath = '/images/events/microgame2025.png'
                    location = 'JHE H324 (Awards Ceremony)'
                    time = '7:00 - 9:00 PM (Awards Ceremony)'
                    link = "https://macgdc.itch.io/microgame-jam-2025"
                /></li>

                <li><Event
                    name="Level Design Workshop 2025"
                    description={<>
                    This week Wednesday October 29 from 7-9 PM in MDCL 1102 we will be holding our Level Design Workshop!
                    <br/>
                    Things we will be doing:<br/>
                    Discussing what makes a good level<br/>
                    Starting Level Design Challenge<br/>
                    Demo for making a level in our Godot Game for the challenge<br/><br/>

                    Level Design Challenge Details:<br/>
                    Starts Wednesday October 29<br/>
                    Ends Wednesday Nov 5<br/>
                    Will be using our custom Godot project to make levels<br/>
                    People who submit will get limited time role in discord!<br/>
                    Submission and other details will be announced on the discord after the workshop<br/>

                    Bring your laptops if you want to follow along! Our Level Design Challenge is playable at the link below.
                    </>}
                    date = "October 29th, 2025"
                    imagePath = '/images/events/leveldesign2025.png'
                    location = 'MDCL 1102'
                    time = '7:00 - 9:00 PM'
                    link = "https://macgdc.itch.io/level-design-challenge-2025"
                /></li>

                <li><Event
                    name="MacGDC Game Jam 2025"
                    description={<>
                    For those of you who don't know, a game jam is a short, time-limited event where 
                    developers, artists, and designers collaborate to create video games from scratch, 
                    often around a specific theme. The Game Jam 2025 is MacGDC's biggest event of the school year, 
                    where you and up to three other people can team together to make a game! This year's theme 
                    was <b><u>time.</u> </b> <br/>The winners of the Microgame Jam 2025 are: <br/><br/><b>
                    1st Place: SHIO. by Logan<br/>
                    2nd Place: 10:30 by Alex<br/>
                    3rd Place: Kronological Order by Muiz, Aidan, Lucas, Jay</b> <br/>
                    
                    The games submitted to the jam can be found in the itch.io link below!
                    </>}
                    date = "March 5th - March 27th, 2025 | April 2nd, 2025 (Awards Ceremony)"
                    imagePath = '/images/events/gamejam2025.png'
                    location = 'ETB 119 (Awards Ceremony)'
                    time = '7:00 - 9:00 PM (Awards Ceremony)'
                    link = "https://itch.io/jam/macgdc-game-jam-2025"
                /></li>

                <li><Event
                    name="Microgame Jam 2024"
                    description={<>
                    This is a beginner-oriented game jam where you make a micro game using Godot.
                    Microgames are simple, short 
                    minigames that take 2-10 seconds to play, and have a simple control scheme and mechanics. They're inspired by the WarioWare series. <br/>
                    The winners of the Microgame Jam 2025 are: <br/><br/><b>
                    1st Place: Get to the Flag! by @billy bobby joey (on Discord) <br/>
                    2nd Place: Pancake Flip by @Shivermist (on Discord)<br/>
                    3rd Place: Bounce Bounce Kitty by @Birb={'>'} (on Discord)</b><br/>

                    A playable compilation of the microgames can be found in the itch.io link below!
                    </>}
                    date = "November 13th - November 27th, 2024 | December 2nd, 2024 (Awards Ceremony)"
                    imagePath = '/images/events/microgame2024.jpg'
                    location = 'PGCLL M22 (Awards Ceremony)'
                    time = '7:00 - 9:00 PM (Awards Ceremony)'
                    link = "https://macgdc.itch.io/microgame-jam-2024"
                /></li>

                <li><Event
                    name="MacGDC Game Jam 2024"
                    description={<>
                    For those of you who don't know, a game jam is a short, time-limited event where 
                    developers, artists, and designers collaborate to create video games from scratch, 
                    often around a specific theme. The Game Jam 2025 is MacGDC's biggest event of the school year, 
                    where you and up to three other people can team together to make a game! This year's theme 
                    was <b><u>space.</u> </b> <br/>The winners of the Microgame Jam 2025 are: <br/><br/><b>
                    1st Place: Spaced Out by B-rando (on itch.io)<br/>
                    2nd Place: Desmond the Moon Bear by CowSoCool37 (on itch.io)<br/>
                    3rd Place: Bluescreen by Shivermist (on itch.io)</b> <br/>
                    
                    The games submitted to the jam can be found in the itch.io link below!
                    </>}
                    date = "February 12th - March 18th, 2024"
                    imagePath = '/images/events/gamejam2024.png'
                    link = "https://itch.io/jam/macgdc-game-jam-2023"
                /></li>

                <li><Event
                    name="Microgame Jam 2023"
                    description={<>
                    This is a beginner-oriented game jam where you make a micro game using Godot. Microgames are simple, short 
                    minigames that take 2-10 seconds to play, and have a simple control scheme and mechanics. They're inspired by the WarioWare series. <br/>
                    The winners of the Microgame Jam 2025 are: <br/><br/><b>
                    1st Place: XTreme Micro Fishing by Owen <br/>
                    2nd Place: Dodging Triangles by Raymond<br/>
                    3rd Place: Counting Sheep! by Riley</b><br/>

                    A playable compilation of the microgames can be found in the itch.io link below!
                    </>}
                    date = "January 22nd - February 4th, 2024"
                    imagePath = '/images/events/microgame2023.png'
                    link = "https://macgdc.itch.io/microgame-jam-2023"
                /></li>
            </ul>
        </>

    );

}

export default PastEvents