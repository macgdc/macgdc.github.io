import styles from './styles/page.module.css'
import styles2 from './styles/sections.module.css'

function GamesPreview() {
    return (
        <>
        <h1 className={`${styles2.sectionTitle} fadeIn`}> 
            <i>FEATURED GAMES</i>
            <span className={styles2.inlineSubtext}><i>(made by our talented members!)</i></span>
            
        </h1>
        </>
    );


}

export default GamesPreview