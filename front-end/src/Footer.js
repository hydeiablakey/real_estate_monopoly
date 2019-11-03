import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

function Footer(/*props*/) {
  return (
    <footer>
  <Navbar fixed="bottom" className="footer" bg="light" expand="lg">
<Nav>
<Nav.Item>
<Navbar.Text > 
        Rules will go here
</Navbar.Text>
  </Nav.Item>
</Nav>

<Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      Controls will go here
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>
    </footer>
  );
}

export default Footer;