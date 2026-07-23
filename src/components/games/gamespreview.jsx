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
                name="Horse Magnifier"
                creator="sketbordcat"
                imagePath="./images/games/horsemagnifier.jpg"
                link="https://store.steampowered.com/app/4585340/Horse_Magnifier_The_Full_Horse/"
            />
            <GameCard
                name="Spectre"
                creator="Alkyline"
                imagePath="./images/games/spectre.png"
                link="https://alkyline.itch.io/spectre"
            />
            <GameCard
                name="2200"
                creator="471"
                imagePath="./images/games/2200.png"
                link="https://313248317-51.itch.io/2200"
            />
            <GameCard
                name="Lumen"
                creator="gullyngames, sophistryy, iMathII"
                imagePath="./images/games/lumen.png"
                link="https://gullyngames.itch.io/lumen"
            />
            <GameCard
                name="Inhuman Resources"
                creator="coolfontsonline, kazuriae"
                imagePath="./images/games/inhuman.png"
                link="https://coolfontsonline.itch.io/inhuman-resources"
            />
            <GameCard
                name="Schrodinger's Blind Date!?"
                creator="Goloob"
                imagePath="./images/games/schrodinger.png"
                link="https://goloob.itch.io/schrodingers-blind-date"
            />
            <GameCard
                name="Vocualize"
                creator="Thagamersbuffet, prismoid"
                imagePath="./images/games/vocualize.png"
                link="https://thagamersbuffet.itch.io/vocualize"
            />
            <GameCard
                name="Truth"
                creator="frozenmonke, danya99, HaidenCMD, Valestar"
                imagePath="./images/games/truth.png"
                link="https://frozenmonke.itch.io/truth"
            />
            <GameCard
                name="Snow By Dawn"
                creator="InboundMink8558, Ponitia, Aidan Heathfield, Owen Johnson"
                imagePath="./images/games/snowbydawn.png"
                link="https://inboundmink8558.itch.io/snow-by-dawn"
            />
            
 
        </div>
        </>
    );


}

export default GamesPreview