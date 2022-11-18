import smartDev from '../images/smartdev.jpg'

const Intro = () => {
    return (
        <section id="intro">
            <div className="container intro">
                <div className="intro-img-container">
                    <img className="intro-img" src={smartDev} alt="smartDev" />
                </div>
                <div className='intro-text'>
                    <h1>HI<br/>I am <span className="my-name">Ismail Adegbite</span></h1>
                    <p>I am a Fullstack developer and an addictive problem solver who thinks out side the box.<br/>Based in Nigeria</p>
                    <div className="action-links">
                        <a className="action-link download-cv" href="#download">Download CV</a>
                        <a className="action-link " href="#contact-me">Contact me</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro