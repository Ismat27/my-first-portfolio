import styled from "styled-components"
import Nav from "./Nav"
import Hamburger from "./Hamburger"
const Header = () => {
    
    return (
        <Wrapper>
            <div className="container header">
                <div className="xyz">
                    <h2>Ismail Adegbite</h2>
                    <Hamburger />
                </div>
                <Nav />
            </div>
            {/* <div className="head-q4"><a className="nav-link" href={'/'}></a></div> */}
        </Wrapper>
    )
}

const Wrapper = styled.header`
.xyz {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
`

export default Header