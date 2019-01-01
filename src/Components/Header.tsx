import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";

class Header extends React.Component {
  public render() {
    return (
        <Navbar id="navbar" inverse={true}>
            <Navbar.Header>
                <Navbar.Brand>
                    <img src={require("../Images/letro-logo.png")} />
                </Navbar.Brand>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight={true}>
                    <NavItem eventKey={2} href="#">
                        GitHub <FontAwesomeIcon icon={faGithub} />
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default Header;