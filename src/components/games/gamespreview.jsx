import styles from './../styles/page.module.css'
import styles2 from './../styles/sections.module.css'
import styles3 from './../styles/games.module.css'
import GameCard from './gamecard'

function GamesPreview() {
    return (
        <>
        <h1 className={`${styles2.sectionTitle} ${styles2.sectionTitleCentered} fadeIn`}> 
            <i>FEATURED GAMES</i>
        </h1>
        <p className={`${styles.pageLead} fadeIn`}>Please check out these games created by our talented members!</p>
        <div className={`${styles3.gamesPreviewList} fadeIn`}>
            <GameCard
                name="SHIO."
                creator="471"
                imagePath="./images/games/shio.png"
                link="https://313248317-51.itch.io/shio"
            />
            <GameCard
                name="10:30"
                creator="egg_shells"
                imagePath="./images/games/1030.png"
                link="https://egg-shells.itch.io/1030-pm"
            />
            <GameCard
                name="Kronological Order"
                creator="InboundMink8558, Aidan Heathfield, prismoid, Ponitia"
                imagePath="./images/games/kronologicalorder.png"
                link="https://inboundmink8558.itch.io/kronological-order"
            />
            <GameCard
                name="Spaced Out"
                creator="B-rando"
                imagePath="./images/games/spacedout.png"
                link="https://b-rando.itch.io/spaced-out"
            />
            <GameCard
                name="Desmond the Moon Bear"
                creator="CowSoCool37, EricMBu"
                imagePath="./images/games/desmond.png"
                link="https://cowsocool37.itch.io/desmond-the-moon-bear"
            />
            <GameCard
                name="Bluescreen"
                creator="Shivermist"
                imagePath="./images/games/bluescreen.png"
                link="https://shivermist.itch.io/bluescreen"
            />
 
        </div>
        </>
    );


}

export default GamesPreview