import React, { useState } from 'react';
import { Container, Form, Card, FormControl, Button } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { login, registration } from '../http/userAPI';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';

import { useDispatch, useSelector } from 'react-redux';

import { selectUserAuth } from '../store/modules/user/selectors';
import { authUser } from '../store/modules/user/actions';

const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  //const isAuth = useSelector(selectUserAuth);
  const dispatch = useDispatch();

  const clickResSign = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      //console.log(data);
      dispatch(authUser(data));
      navigate(SHOP_ROUTE);
    } catch (e) {
      console.log(e);
      alert(e.response.data.message);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className="d-flex flex-column">
          <FormControl
            className="mt-3"
            placeholder="Введите ваш email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormControl
            className="mt-3"
            placeholder="Введите ваш пароль..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <Form.Group className="d-flex justify-content-between mt-3 pl-3 pr-3">
            {isLogin ? (
              <div>
                Нет аккаунта?
                <NavLink to={REGISTRATION_ROUTE}> Зарегистрируйся! </NavLink>
              </div>
            ) : (
              <div>
                Есть аккаунт?
                <NavLink to={LOGIN_ROUTE}> Войдите! </NavLink>
              </div>
            )}
            <Button variant={'outline-success'} onClick={clickResSign}>
              {isLogin ? 'Войти' : 'Зарегистрироваться'}
            </Button>
          </Form.Group>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
