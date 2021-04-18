import { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Test1 from "./Test1";
import Test2 from "./Test2";
import Test3 from "./Test3";

const AppRouter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">React</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <Link className="text-decoration-none px-3" to="/test3">
                If-else
              </Link>
            </NavItem>
            <NavItem>
              <Link className="text-decoration-none px-3" to="/test2">
                Date-Time
              </Link>
            </NavItem>
            <NavItem>
              <Link className="text-decoration-none px-3" to="/test1">
                Template Literals
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Switch>
        <Route path="/test1">
          <Test1 />
        </Route>
        <Route path="/test2">
          <Test2 />
        </Route>
        <Route path="/test3">
          <Test3 />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
