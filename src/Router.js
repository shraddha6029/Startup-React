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
import ExampleImportExport from "./components/ExampleImportExport";
import ExampleProps from "./components/ExampleProps";
import SlotMachine from "./components/SlotMachine";
import UseStateHooks from "./components/UseStateHooks";

const AppRouter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
      <Navbar color="light" light expand="md" className="container-fluid">
        <NavbarBrand href="/">React</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <Link className="text-decoration-none px-3" to="/test1">
                Template Literals
              </Link>
            </NavItem>

            <NavItem>
              <Link className="text-decoration-none px-3" to="/test2">
                Date-Time
              </Link>
            </NavItem>
            <NavItem>
              <Link className="text-decoration-none px-3" to="/test3">
                If-else
              </Link>
            </NavItem>
            <NavItem>
              <Link
                className="text-decoration-none px-3"
                to="/components/import-export"
              >
                Import-Export
              </Link>
            </NavItem>
            <NavItem>
              <Link
                className="text-decoration-none px-3"
                to="/components/props"
              >
                Props
              </Link>
            </NavItem>
            <NavItem>
              <Link
                className="text-decoration-none px-3"
                to="/components/slot-machine"
              >
                Slot Machine
              </Link>
            </NavItem>
            <NavItem>
              <Link
                className="text-decoration-none px-3"
                to="/components/use-state"
              >
                UseStateHooks
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
        <Route path="/components/import-export">
          <ExampleImportExport />
        </Route>
        <Route path="/components/props">
          <ExampleProps />
        </Route>
        <Route path="/components/slot-machine">
          <SlotMachine />
        </Route>
        <Route path="/components/use-state">
          <UseStateHooks />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
