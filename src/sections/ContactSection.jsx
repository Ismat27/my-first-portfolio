import '../styles/ContactSection.css'
import { useContext } from 'react'
import { refContext } from '../App'

const ContactSection = () => {
    const {contactRef}=  useContext(refContext)

    const formSubmit = (event) => {
        event.preventDefault()
        console.log('submitted');
    }
    return (
        <section ref={contactRef} id='contact-me' className="section contact-secton">
            <div className="container ">
                <div className="contact-container">
                    <h1 className='hl-pink'>I am eager to connect with you</h1>
                    <form onSubmit={formSubmit}>
                        <div>
                            <input className='name-input' type="text" placeholder='Your name please' required />
                            <input className='email-input' type="email" placeholder='And your email' required />
                        </div>
                        <textarea name="" id="" cols="" rows="10" placeholder='Your message' required />
                        <button className='btn action-btn'>Send Message</button>
                    </form>
                </div>
            </div> 
        </section>
    )
}

export default ContactSection