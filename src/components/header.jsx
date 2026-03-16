import styles from './styles/header.module.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [menuOpen]);

    const toggleMenu = (e) => {
        if (isAnimating) return;
        
        e.preventDefault();
        e.stopPropagation();
        
        setIsAnimating(true);
        setMenuOpen(prev => !prev);
        
        setTimeout(() => {
            setIsAnimating(false);
        }, 300);
    };

    const closeMenu = () => {
        if (isAnimating || !menuOpen) return;
        
        setIsAnimating(true);
        setMenuOpen(false);
        
        setTimeout(() => {
            setIsAnimating(false);
        }, 300);
    };

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
                    <Link className={styles.navlink} to="/about"><p>About Us</p></Link>
                    <Link className={styles.navlink} to="/sponsors"><p>Sponsors</p></Link>
                </div>
                <button 
                    className={`
                        ${styles.hamburger} 
                        ${menuOpen ? styles.hamburgerOpen : ''} 
                        ${isAnimating ? styles.isAnimating : ''}
                    `}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div 
                className={`
                    ${styles.mobileMenuOverlay} 
                    ${menuOpen ? styles.overlayOpen : ''} 
                    ${isAnimating ? styles.isAnimating : ''}
                `} 
                onClick={closeMenu}
            ></div>
            <nav className={`${styles.mobileMenu} ${menuOpen ? styles.menuOpen : ''}`}>
                <Link className={styles.mobileNavLink} to="/" onClick={closeMenu}><p>Home</p></Link>
                <Link className={styles.mobileNavLink} to="/events" onClick={closeMenu}><p>Events</p></Link>
                <Link className={styles.mobileNavLink} to="/about" onClick={closeMenu}><p>About Us</p></Link>
                <Link className={styles.mobileNavLink} to="/sponsors" onClick={closeMenu}><p>Sponsors</p></Link>
            </nav>
        </header>
    );
}

export default Header