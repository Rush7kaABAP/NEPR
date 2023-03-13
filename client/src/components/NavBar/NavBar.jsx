import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectUserAuth } from '../../store/modules/user/selectors';
import { unauthUser } from '../../store/modules/user/actions';

import { LOGIN_ROUTE, SHOP_ROUTE, ADMIN_ROUTE } from '../../utils/consts';
//expand="lg"
const NavBar = () => {
  const [locState, setLocState] = useState();
  const isAuth = useSelector(selectUserAuth);
  const dispatch = useDispatch();
  //console.log('isAuth Nav -', isAuth);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav.Link style={{ color: 'white' }} href={SHOP_ROUTE}>
          Купите девайс
        </Nav.Link>
        {!isAuth ? (
          <Nav.Link
            className=".ms-auto"
            style={{ color: 'white' }}
            href={LOGIN_ROUTE}
          >
            Авторизация
          </Nav.Link>
        ) : (
          <Nav className=".ms-auto" style={{ color: 'white' }}>
            <Nav.Link
              className=".ms-auto"
              style={{ color: 'white' }}
              href={ADMIN_ROUTE}
            >
              Админ панель
            </Nav.Link>

            <Button
              variant={'outline-light'}
              className="ms-2"
              onClick={() => {
                dispatch(unauthUser());
                setLocState();
              }}
            >
              Выйти
            </Button>
          </Nav>
        )}
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
};

export default NavBar;
