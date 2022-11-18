import styled from "styled-components"
import Nav from "./Nav"
import { useGlobalContext } from "../context"
import Hamburger from "./Hamburger"
const Header = () => {
    const data = useGlobalContext()
    console.log(data);

    return (
        <Wrapper>
            <div className="container header">
                <div className="xyz">
                    Ismail Adegbite
                    <Hamburger />
                </div>
                <Nav />
            </div>
            <div className="head-q4"><a className="nav-link" href={'/'}></a></div>
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