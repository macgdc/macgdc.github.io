import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import pageStyles from './components/styles/page.module.css'
import sectionStyles from './components/styles/sections.module.css'
import sponsorStyles from './components/styles/sponsors.module.css'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Hero from './components/hero.jsx'
import Stats from './components/stats.jsx'
import CurrentEvents from './components/events/currentevents.jsx';
import PastEvents from './components/events/pastevents.jsx';
import About from './components/about/about.jsx'
import Sponsors from './components/sponsors/sponsors.jsx';
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
                                <h1 className={`${sectionStyles.sectionTitle} ${sectionStyles.sectionTitleCentered} fadeIn`}> 
                                  <i>SPONSORS</i> </h1>
                                <p className={`${pageStyles.pageLead} fadeIn`}>
                                  A big thank you to our wonderful sponsors! Our game jams wouldn't be possible
                                  without them!</p>
                                <Sponsors/>
                                
                            </>
                      } 
                    />
                    <Route path="/events" element={
                            <>
                          <h1 className={`${pageStyles.pageTitle} fadeIn`}> <i>EVENTS</i> </h1>
                                <hr className="fadeIn"/>
                                <p className={`${pageStyles.pageLead} fadeIn`}>
                                  Please check frequently to stay up to date! This page is updated often!</p>
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
                                <h1 className={`${pageStyles.pageTitle} fadeIn`}> <i>SPONSORS</i> </h1>
                                <hr className="fadeIn"/>
                                <p className={`${pageStyles.pageLead} fadeIn`}>
                                  Game jams are a core part of our club and help our members grow as game developers. However, we wouldn't
                                  be where we are now without our lovely sponsors. If you would like to reach out about sponsorship, please
                                  contact us! We are currently working on a new sponsorship package, but please download the current one for 
                                  more information on sponsorships. Sponsors will get added to our list below!</p>
                                <div className={`${sponsorStyles.sponsorActions} fadeIn`}>
                                  <a href="mailto:macgdc@mcmaster.ca" className={sponsorStyles.sponsorActionBtn}>
                                      <img src="/icons/email.png" alt="Contact Us" loading="lazy" />
                                      <span>CONTACT US</span>
                                  </a>
                                  <a href="./MacGDC_Sponsorship_Package_2025.pdf" className={sponsorStyles.sponsorActionBtn} download>
                                      <img src="/icons/download.png" alt="Download" loading="lazy"/>
                                      <span>DOWNLOAD SPONSOR PACKAGE</span>
                                  </a>
                               </div>
                               <Sponsors/>
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
