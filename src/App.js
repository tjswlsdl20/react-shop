import './App.css';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl, Jumbotron } from 'react-bootstrap';
import info from './data.js';
import { useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Detail from './Detail.js';

function App() {


  let [infos, setInfos] = useState(info);
  return (
    <div className="App">

      <Navbar bg="light" expand="lg">
        <Navbar.Brand ><Link to="/">shoes-shoes</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link ><Link to="/">Home</Link></Nav.Link>
            <Nav.Link ><Link to="/detail">Detail</Link></Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>


      <Route exact path='/'>
        <Jumbotron className="background">
          <h1>20%OFF</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
        </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
        <div className="container">
          <div className="row">
            <Shoe infos={infos} />

          </div>
        </div>
      </Route>


      <Route path='/detail'>

        <Detail />
      </Route>
    </div>

  );
}

function Shoe(props) {
  return (
    props.infos.map(
      (shoeInfo, i) => {
        return (

          <div className="col-md-4">
            <img src={"https://codingapple1.github.io/shop/shoes" + (i + 1) + ".jpg"} width="100%" />
            <h4>{shoeInfo.title}</h4>
            <p>{shoeInfo.content}</p>
            <p>{shoeInfo.price}</p>
          </div>

        )
      }
    )

  )
}
export default App;
