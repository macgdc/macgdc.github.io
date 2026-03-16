import styles from './../styles/page.module.css'
import styles2 from './../styles/sections.module.css'
import aboutStyles from './../styles/about.module.css'
import Exec from './exec'

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
            <h1 className={`${styles2.sectionTitle} ${styles2.sectionTitleCentered} fadeIn`}> 
                        <i>OUR TEAM</i> </h1>
            <div className={`${aboutStyles.execsPreviewList} fadeIn`}>
                <Exec
                    name="Thomas Plagakis"
                    role="President"
                    imagePath="/icons/logo_white.svg"
                    link="https://www.linkedin.com/in/tplagakis/"
                />
                <Exec
                    name="Aidan Heathfield"
                    role="Vice-President of Finance, Workshop Exec"
                    imagePath="/icons/logo_white.svg"
                    link="https://www.linkedin.com/in/aidan-heathfield/"
                />
                <Exec
                    name="Raymond Ke"
                    role="Vice-President of Events, Workshop Exec"
                    imagePath="/icons/logo_white.svg"
                    link="https://www.linkedin.com/in/raymond-ke-564935260/"
                />
                <Exec
                    name="Braden Chan"
                    role="Vice-President of Communication, Marketing Exec"
                    imagePath="/icons/logo_white.svg"
                    link="https://www.linkedin.com/in/raymond-ke-564935260/"
                />
                <Exec
                    name="Jay Seoh"
                    role="Workshop Exec"
                    imagePath="/icons/logo_white.svg"
                    link="https://www.linkedin.com/in/jay-seoh/"
                />
                <Exec
                    name="Muiz Hamzat"
                    role="Workshop Exec"
                    imagePath="/icons/logo_white.svg"
                    link="https://www.linkedin.com/in/muiz-hamzat/"
                />
                <Exec
                    name="Owen Johnson"
                    role="Workshop Exec"
                    imagePath="/icons/logo_white.svg"
                    link="https://www.linkedin.com/in/owen-r-johnson/"
                />
                <Exec
                    name="Muhammad Zain Haque"
                    role="Workshop Exec, Marketing Exec"
                    imagePath="/icons/logo_white.svg"
                    link="https://www.linkedin.com/in/muhammad-zain-haque-b7771b2b0/"
                />
                <Exec
                    name="Aiden Ly"
                    role="Web Developer Exec, Workshop Exec"
                    imagePath="/icons/logo_white.svg"
                    link="https://www.linkedin.com/in/aidenly"
                />
            </div>


        </>
    );

}

export default About