import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
} from 'reactstrap';
import { Link } from 'react-router-dom'

export default function Header(){
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open)
  }
  return(
    <Navbar color='light' light expand='md'>
      <NavbarBrand tag={Link} to='/'>Minhas Series</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={open} navbar>
        <Nav className='ml=auto' navbar>
          <NavItem>
            <NavLink tag={Link} to='/generes'>Generos</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}