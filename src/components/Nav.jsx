import { useState, useContext } from "react"
import { refContext } from "../App"
import { useGlobalContext } from "../context"

const Nav = () => {
    const {isMenuOpen} = useGlobalContext()
    const {aboutRef, contactRef} = useContext(refContext)

    const [activeNav, setActiveNav] = useState('home')

    const navClick = (event, nav, ref) => {
        event.preventDefault()
        setActiveNav(nav)
        if (ref && ref.current /* + other conditions */) {
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        console.log(activeNav);
    }

    return (
        <nav className={isMenuOpen? 'nav-opened': ''}>
            <ul className="nav-items">
                <li className="nav-item">
                    <a onClick={(event) => navClick(event, 'home', aboutRef)} className="nav-link" href={'/'}>Home</a>
                </li>
                <li className="nav-item">
                    <a onClick={(event) => navClick(event, 'about-me', aboutRef)} className="nav-link" href={'#about-me'}>About Me</a>
                </li>
                <li className="nav-item">
                    <a onClick={(event) => navClick(event, 'latest-work',)} className="nav-link" href={'/'}>Latest Work</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href={'#services'}>Services</a>
                </li>
                <li className="nav-item">
                    <a onClick={(event) => navClick(event, 'contact-me', contactRef)} className="nav-link" href={'#contact-me'}>Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav