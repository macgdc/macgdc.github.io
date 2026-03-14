import styles from './styles/header.module.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <div className={styles.navbar}>
                <div className={styles.navLeft}>
                    <Link to="/">
                        <img src="/icons/logo_white.svg" alt="Logo" className={styles.logo} loading="lazy"/>
                    </Link>
                </div>
                <div className={styles.navRight}>
                    <Link className={styles.navlink} to="/"><p>Home</p></Link>
                    <Link className={styles.navlink} to="/events"><p>Events</p></Link>
                    {/* <Link className={styles.navlink} to="/games"><p>Games</p></Link> */}
                    <Link className={styles.navlink} to="/about"><p>About Us</p></Link>
                    <Link className={styles.navlink} to="/sponsors"><p>Sponsors</p></Link>
                </div>
            </div>
        </header>
    );
}

export default Header