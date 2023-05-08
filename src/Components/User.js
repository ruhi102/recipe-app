import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import './User.css';

export const User = () => {
  const [currentForm, setCurrentForm] = useState('login');
  
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting form with username: ', user, ' and password: ', pass);
  }
  
  const [user, setUserName] = useState('');
  const [pass, setPass] = useState('');

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Recipe App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {currentForm === 'login' ? (
                <>
                  <Nav.Link active href="#">Log In</Nav.Link>
                  <Nav.Link onClick={() => toggleForm('register')}>Register</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link onClick={() => toggleForm('login')}>Log In</Nav.Link>
                  <Nav.Link active href="#">Register</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="auth-form-container">
        <h2>{currentForm === 'login' ? 'Log In' : 'Register'}</h2>
        <form className={currentForm === 'login' ? 'login-form' : 'register-form'} onSubmit={handleSubmit}>
          <label htmlFor='username'>Username</label>
          <input value={user} onChange={(e) => setUserName(e.target.value)} type="username" placeholder="username" id="username" name="username"/>
          <label htmlFor='password'>Password</label>
          <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>
          <button type="submit">{currentForm === 'login' ? 'Log In' : 'Register'}</button>
        </form>
      </div>
    </div>
  );
}

export default User;