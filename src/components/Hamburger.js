import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context'

const Hamburger = () => {
    const {isMenuOpen, toggleMenu} = useGlobalContext()
  return (
    <Wrapper onClick={toggleMenu}>
        <div className={isMenuOpen? 'menu menu-open': 'menu'}>
            <div className='first'></div>
            <div className='middle'></div>
            <div className='last'></div>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
.menu {
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  align-items: center;
}
.first,
.middle,
.last {
  background-color: #FF3E78;
  height: 4px;
  border-radius: 50px;
  box-shadow: 0px 0.4px 0.8px rgba(255, 255, 255, 0.3);
  transition: all 500ms ease-in-out;
  width: 24px;
}
.menu-open .first {
  transform: translateY(8px) rotate(45deg);
}
.menu-open .middle {
  width: 0px;
}
.menu-open .last {
  transform: translateY(-8px) rotate(-45deg);
}
@media (min-width: 768px) {
    display: none;
}
`

export default Hamburger