import {createRef, useEffect, useState} from "react";
import {
  Collapse,
  Container, DropdownItem, DropdownMenu, DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  UncontrolledDropdown
} from "reactstrap";

const Header = () =>  {
  return (
      <>
        <header className="navbar-dark flex-column flex-md-row bd-navbar navbar navbar-expand bg-info"><a
            className="navbar-brand mr-0 mr-md-2 navbar-absolute-logo" href="#/">Now UI Kit - React</a>
          <ul className="flex-row d-none d-md-flex navbar-nav">
            <li className="nav-item"><a href="#" className="p-2 nav-link">1.5.0</a></li>
            <li className="nav-item"><a href="https://github.com/creativetimofficial/now-ui-kit-react?ref=creativetim"
                                        target="_blank" className="p-2 nav-link"><i className="fab fa-github"></i></a>
            </li>
            <li className="nav-item"><a target="_blank" href="https://twitter.com/CreativeTim?ref=creativetim"
                                        className="p-2 nav-link"><i className="fab fa-twitter"></i></a></li>
          </ul>
          <div className="navbar-nav-scroll ml-md-auto">
            <ul className="bd-navbar-nav flex-row navbar-nav">
              <li className="nav-item"><a
                  href="https://www.creative-tim.com/product/now-ui-kit-pro-react?ref=nukr-docs-navbar-upgrade-pro"
                  target="_blank" className="nav-link"><i className="now-ui-icons objects_spaceship"></i> Upgrade to PRO</a>
              </li>
              <li className="nav-item"><a href="https://github.com/creativetimofficial/now-ui-kit-react?ref=creativetim"
                                          target="_blank" className="nav-link"><i
                  className="now-ui-icons objects_diamond"></i> Give us a star</a></li>
              <li className="nav-item"><a className="nav-link" href="#/"><i
                  className="now-ui-icons design_bullet-list-67"></i> Back to Kit</a></li>
              <li className="nav-item"><a
                  href="https://github.com/creativetimofficial/now-ui-kit-react/issues?ref=creativetim" target="_blank"
                  className="nav-link"><i className="now-ui-icons health_ambulance"></i> Report a bug</a></li>
            </ul>
          </div>
        </header>
      </>
  );
}

export default Header;
