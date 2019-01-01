import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";


export const Header: React.StatelessComponent = () => (
    <Navbar id="navbar" inverse={true}>
        <Navbar.Header>
            <Navbar.Brand>
                <img src={require("../Images/letro-logo.png")} />
            </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight={true}>
                <NavItem target="_blank" href="https://github.com/kevinkarlsson94/Letro">
                    GitHub <FontAwesomeIcon icon={faGithub} />
                </NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);
export default Header;