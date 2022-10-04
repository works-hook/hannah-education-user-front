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
  Row,
  Col,
} from "reactstrap";

const TopNavbar = () => {
    return (
      <>
        <Navbar
            className="navbar-horizontal navbar-dark bg-primary ct-navbar"
            expand="lg"
        >
          <Container>
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
              Hannah Education
            </NavbarBrand>
            <button
                aria-controls="navbar-primary"
                aria-expanded={false}
                aria-label="Toggle navigation"
                className="navbar-toggler"
                data-target="#navbar-primary"
                data-toggle="collapse"
                id="navbar-primary"
                type="button"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbar-primary">
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/">
                      <img
                          alt="..."
                          src={require("assets/img/brand/blue.png")}
                      />
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button
                        aria-controls="navbar-primary"
                        aria-expanded={false}
                        aria-label="Toggle navigation"
                        className="navbar-toggler"
                        data-target="#navbar-primary"
                        data-toggle="collapse"
                        id="navbar-primary"
                        type="button"
                    >
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="ml-lg-auto" navbar>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Discover <span className="sr-only">(current)</span>
                  </NavLink>
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
                      id="navbar-primary_dropdown_1"
                      onClick={e => e.preventDefault()}
                      role="button"
                  >
                    Settings
                  </NavLink>
                  <DropdownMenu
                      aria-labelledby="navbar-primary_dropdown_1"
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
