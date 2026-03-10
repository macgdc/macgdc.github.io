import styles from './styles/page.module.css'
import styles2 from './styles/sections.module.css'

function About() {
    return (
        <>
        <h1 className={`${styles.pageTitle} fadeIn`}> <i>ABOUT US</i> </h1>
            <hr className="fadeIn"/>
            <p className={`${styles.pageLead} fadeIn`}>
            A place for McMaster students with an interest in video games and video game development, of all skill levels! 
            We host annual game jams (usually with awards!), frequent workshops, and weekly meetings to help our members develop their skills and meet
            others! Come join us if you're interested in coding, art, game design, music, or even if you just like playing games!
            </p>
            <h1 className={`${styles2.sectionTitle} fadeIn`}> 
                        <i>MEET THE TEAM</i> </h1>


        </>
    );

}

export default About