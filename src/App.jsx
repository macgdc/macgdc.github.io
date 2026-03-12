import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import styles from './components/styles/page.module.css'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Hero from './components/hero.jsx'
import Stats from './components/stats.jsx'
import CurrentEvents from './components/events/currentevents.jsx';
import PastEvents from './components/events/pastevents.jsx';
import About from './components/about.jsx'
import Sponsors from './components/sponsors.jsx';
import Games from './components/games/games.jsx';
import GamesPreview from './components/games/gamespreview.jsx';

function App() {
    const location = useLocation()

    return (
      <>
        <Header/>
        <main>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={
                            <>
                                <Hero />
                                <Stats />
                                <hr className='fadeIn'/>
                                <CurrentEvents home="true"/>
                                <hr className='fadeIn'/>
                                <GamesPreview/>
                                <hr className='fadeIn'/>
                            </>
                      } 
                    />
                    <Route path="/events" element={
                            <>
                          <h1 className={`${styles.pageTitle} fadeIn`}> <i>EVENTS</i> </h1>
                                <hr className="fadeIn"/>
                                <p className={`${styles.pageLead} fadeIn`}>Please check frequently to stay up to date! This page is updated often!</p>
                                <CurrentEvents/>
                                <PastEvents/>
                            </>
                      } 
                    />
                    <Route path="/games" element={
                            <>
                                <Games />
                            </>
                      } 
                    />
                    <Route path="/about" element={
                            <>  
                              <About />
                            </>
                      } 
                    />
                    <Route path="/sponsors" element={
                            <>
                                <Sponsors />
                            </>
                      } 
                    />
                    <Route path="*" element={<Navigate to="/"/>} />
                </Routes>
        </main>
        <Footer/>
      </>
    );
}

export default App
