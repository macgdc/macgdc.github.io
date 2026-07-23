import styles from './../styles/page.module.css'
import GameCard from './gamecard';

function Games() {
    return (
        <>
    <h1 className={`${styles.pageTitle} fadeIn`}> <i>GAMES</i> </h1>
        <hr className="fadeIn"/>
    <p className={`${styles.pageLead} fadeIn`}>Please check out the games created by our talented members!</p>
    {/* WIP; This would be for a subpage for only games in addition to the games shown on the home page, unsure if needed right now */}
        </>

    );

}

export default Games