import Service from "../components/Service";

const ServiceSection = () => {
    return (
        <section className="services">
            <div className="service-container container">
                <h1 className="hl-pink section-title">Services</h1>
                <p className="section-desc">
                    
                </p>
                <div className="service-cards">
                    <Service/>
                    <Service/>
                    <Service/>
                </div>
            </div>
        </section>
    )
}

export default ServiceSection