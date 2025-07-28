import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navbar, Nav, Container } from 'react-bootstrap';

const MenuNavbar = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const res = await axios.get('http://localhost:3081/api/menubar/get-menubar');
        setMenus(res.data);
      } catch (error) {
        console.error('Failed to fetch menu bar:', error);
      }
    };

    fetchMenus();
  }, []);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-3">
      <Container>
        <Navbar.Brand href="/">मेरी वेबसाइट</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {menus.map((menu, idx) => (
              <Nav.Link key={idx} href={menu.menu_link || '#'}>
                {menu.menu_hindi}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MenuNavbar;
