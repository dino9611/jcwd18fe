import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  // NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
const Header = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className='mr-3 mt-2'>
              <Link to="/resep">resep</Link>
            </NavItem>
            <NavItem className='mr-3 mt-2'>
            <Link to="/hitungkata">hitung Kata</Link>
              
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>   
          <NavbarText>jumlah kata : {props.jumlahKata}</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

// menghubungkan redux ke komponent
const MapStateToProps = (state)=>{
  return {
    tambahan:state.tambahan,
    jumlahKata : state.HitungKata
  }
}

export default connect(MapStateToProps) (Header);