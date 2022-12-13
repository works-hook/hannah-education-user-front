import {Link} from "react-router-dom";
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
  Container, DropdownToggle,
} from "reactstrap";
import {getCookieToken} from "../../token/Cookies";
import {CheckToken} from "../../token/CheckToken";

const TopNavbar = () => {
  const auth = getCookieToken();
  const checkToken = CheckToken(auth);

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
              <span className="navbar-toggler-icon"/>
            </button>
          </Link>
          <UncontrolledCollapse navbar toggler="#navbar-default">
            <Nav className="ml-lg-auto" navbar>
              <NavItem>
                <NavLink href={"/lectures"}>
                  <i className="ni ni-credit-card"/>
                  Lecture
                </NavLink>
              </NavItem>
              { checkToken.isAuth === 'Failed' &&
                <NavItem>
                  <NavLink href={"/login"}>
                    <i className="ni ni-send"/>
                    Login
                  </NavLink>
                </NavItem>
              }
              { checkToken.isAuth === 'Success' &&
                <UncontrolledDropdown nav>
                  <DropdownToggle nav>
                    <i className="ni ni-collection d-lg-none mr-1"/>
                    <span className="nav-link-inner--text">
                    <i className="ni ni-circle-08"/>
                      MyPage
                    </span>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem to="/my-lecture" tag={Link}>
                      내 강의
                    </DropdownItem>
                    <DropdownItem to="/my-page" tag={Link}>
                      내 정보 수정
                    </DropdownItem>
                    <DropdownItem to="/logout" tag={Link}>
                      Logout
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              }
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  );
}

export default TopNavbar;
