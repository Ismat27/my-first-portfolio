import './App.css';
import './styles/Intro.css'
import { createContext, useRef } from "react";
import Header from './components/Header';
import Intro from './sections/Intro';
import AboutMe from './sections/About';
import ContactSection from './sections/ContactSection';

import { AppProvider } from './context';

export const refContext = createContext(null)

function App() {
  const aboutRef = useRef()
  const contactRef = useRef(null)
  const IntroRef = useRef(null)

  return (
      <div className='body'>
      <AppProvider>
          <refContext.Provider value={{aboutRef, contactRef, IntroRef}}>
            <Header />
            <Intro />
            <AboutMe  />
            <ContactSection />
          </refContext.Provider>
      </AppProvider>
      </div>
  );
}

export default App;
