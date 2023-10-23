import { Colors, Element } from 'my-react-component'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { media } from '@/styles/theme'
const Nav = styled.nav`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  gap: 20px;
`
const NavItemContainer = styled.ul<{ open: boolean }>`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  list-style: none;
  margin: 0;
  ${media.mobile} {
    width: 100%;
    flex-direction: column;
    position: absolute;
    top: 50px;
    left: 0;
    align-items: center;
    z-index: 10000;
    overflow: hidden;
    opacity: ${(props) => (props.open ? '1' : '0')};
    max-height: ${(props) => (props.open ? '100%' : '0')};
    height: ${(props) => (props.open ? '100vh' : '0')};
    /* transition: all 0.3s ease-in; */
    transition:
      all 0.5s ease-out,
      background 0.6s ease-out;
    /* background: linear-gradient(90deg, rgba(17, 17, 17, 0.7019607843) 40%, transparent); */
    transition-delay: 0.2s;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
    overflow-y: overlay;
  }
`
const NaviItem = styled.li`
  padding: 10px;
  color: ${({ theme }) => theme.color.white};
  font-size: 14px;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
`
const HamburgerWrapper = styled.div`
  display: none;
  ${media.mobile} {
    display: flex;
    align-items: center;
    display: block;
    cursor: pointer;
  }
`

const navItems = ['영화', 'TV', 'ETC']
const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false)
  useEffect(() => {
    const body = document.querySelector('body')
    if (open) {
      body!.style.overflow = 'hidden'
    } else {
      body!.style.overflow = 'unset'
    }
  }, [open])
  return (
    <Nav>
      <Logo>
        <Image width={70} height={40} src="/next.svg" alt="logo" />
      </Logo>
      <NavItemContainer open={open}>
        {navItems.map((item, key) => (
          <NaviItem key={item}>{item}</NaviItem>
        ))}
      </NavItemContainer>
      <HamburgerWrapper onClick={() => setOpen((prev) => !prev)}>
        <Element name="Hamburger" size="medium" color={Colors.white} />
      </HamburgerWrapper>
    </Nav>
  )
}

export default Navbar
