import {
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

const MainFooter = () => {
  return (
    <>
      <footer className="footer has-cards">
        <Container>
          <Row className="row-grid align-items-center my-md">
          </Row>
          <hr/>
          <Row className="align-items-center justify-content-md-between">
            <Col md="6">
              <div className="copyright">
                copyright © {new Date().getFullYear()}{" "}
                <a
                  target="_blank"
                  href={"https://github.com/HongChaeMin"}
                  rel="noopener noreferrer"
                >Backend Developer Hannah</a>.
              </div>
            </Col>
            <Col md="6">
              <Nav className="nav-footer justify-content-end">
                <NavItem className="footer-icon">
                  <NavLink
                    href="https://github.com/works-hook/hannah-education-user-front"
                    target="_blank"
                  >
                      <span className="btn-inner--icon mx-2">
                        <i className="fa fa-github"/>
                      </span>
                    Github
                  </NavLink>
                </NavItem>
                <NavItem className="footer-icon">
                  <NavLink
                    href="https://velog.io/@coals_0329"
                    target="_blank"
                  >
                      <span className="btn-inner--icon mx-2">
                        <i className="fa fa-vimeo"/>
                      </span>
                    Velog
                  </NavLink>
                </NavItem>
                <NavItem className="footer-icon">
                  <NavLink
                    href="https://join.slack.com/t/workshook/shared_invite/zt-1hj2htf29-R6qLE30ArKYbLz3uKH50AQ"
                    target="_blank"
                  >
                      <span className="btn-inner--icon mx-2">
                        <i className="fa fa-slack"/>
                      </span>
                    Slack
                  </NavLink>
                </NavItem>
                <NavItem className="footer-icon">
                  <NavLink
                    href="https://www.linkedin.com/in/hannah-linkdin/"
                    target="_blank"
                  >
                      <span className="btn-inner--icon mx-2">
                        <i className="fa fa-linkedin"/>
                      </span>
                    Linkedin
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default MainFooter;
