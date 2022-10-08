import { Link } from "react-router-dom";
import {
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

const TopNavbar = () => {
    return (
      <>
        <Navbar
            className="navbar-horizontal navbar-dark bg-default ct-navbar"
            expand="lg"
        >
          <Container>
            <Link to={"/"} className="text-white">
              <NavbarBrand>
                Hannah Education
              </NavbarBrand>
              <button
                aria-controls="navbar-default"
                aria-expanded={false}
                aria-label="Toggle navigation"
                className="navbar-toggler"
                data-target="#navbar-default"
                data-toggle="collapse"
                id="navbar-default"
                type="button"
              >
                <span className="navbar-toggler-icon" />
              </button>
            </Link>
            <UncontrolledCollapse navbar toggler="#navbar-default">
              <Nav className="ml-lg-auto" navbar>
                <NavItem>
                  <Link to={"/lectures"} className="text-white">
                    <NavLink>
                        Lecture
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Profile
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav>
                  <NavLink
                      aria-expanded={false}
                      aria-haspopup={true}
                      data-toggle="dropdown"
                      href="#pablo"
                      id="navbar-default_dropdown_1"
                      onClick={e => e.preventDefault()}
                      role="button"
                  >
                    Settings
                  </NavLink>
                  <DropdownMenu
                      aria-labelledby="navbar-default_dropdown_1"
                      right
                  >
                    <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                    >
                      Action
                    </DropdownItem>
                    <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                    >
                      Another action
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                    >
                      Something else here
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </>
    );
}

export default TopNavbar;
