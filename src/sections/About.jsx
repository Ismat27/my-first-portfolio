import '../styles/AboutMe.css'
import image from '../images/about-picture.png'
import Skill from '../components/Skill'
import { refContext } from '../App'
import { useContext } from 'react'
const AboutMe = () => {
    const {aboutRef} = useContext(refContext)
    return (
        <>
            <section ref={aboutRef} id="about-me">
                <div className="about-div">
                    {/* <div className="about-img-container">
                        <img src={image} alt="" />
                    </div> */}
                    <div className='about-text-div'>
                        <div className="container">
                            <div className="about-text">
                                <h1 className='hl-pink section-title'>About Me</h1>
                                <h2>Full Stack <span className='hl-blue'>Developer</span></h2>
                                {/* <h3>I am Ismail Adegbite, a creative fullstack developer based in Nigeria</h3> */}
                                <p className="about-p about-epistle">
                                I am a self-taught web developer with more than one year working experience. I love writing codes, as a means to create solutions to human challenges and create innovative software. As a self-taught developer, I have participated in various coding bootcamps and challenges to improve my skills and connect with the world of coders, gurus, professionals and problem solvers.
                                </p>
                                <p className="about-p about-close">I am growth oriented individual and always open to growth opportunities. Want to work together or say hey? <a className='hl-pink' href="#contact-me">Let's chat</a></p>
                            </div>
                        </div>
                        {/* <div className="blue-q4"></div> */}
                    </div>
                </div>
            </section>

            <section id="skills">
                <div className="container">
                    <h1 className='hl-pink section-title'>Skills</h1>
                    <p className='skill-p'>
                    During my one year plus journey in becoming a Full-stack web developer, I have acquired skills in the following programming languages: Python and JavaScript and also in in the following web technologies: HTML, CSS, BOOTSTRAP and REACT
                    </p>
                    <div className="skills-container">
                        <div className="skills-div">
                            <Skill item={'html'} percent={85} />
                            <Skill item={'css'} percent={80} />
                            <Skill item={'javascript'} percent={80} />
                            <Skill item={'bootstrap'} percent={85} />
                            <Skill item={'reactjs'} percent={85} />
                            <Skill item={'python'} percent={85} />
                            <Skill item={'django'} percent={65} />
                            <Skill item={'flask'} percent={60} />
                        </div>
                    </div>
                <div className="pink-half"></div>
                </div>
            </section>
        </>
    )
}

export default AboutMe