import Nav from "./Nav"
const Header = () => {
    return (
        <header>
            <div className="container header">
                {/* <div className="xyz">
                    <div className="hamburger"></div>
                </div> */}
                <Nav />
            </div>
            <div className="head-q4"><a className="nav-link" href={'/'}>Ismail Adegbite</a></div>
        </header>
    )
}

export default Header