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
                    <NavLink href={"/lectures"}>
                        Lecture
                    </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href={"/login"}>
                    Login
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav>
                  <NavLink href={"/my-page"}>
                    MyPage
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
