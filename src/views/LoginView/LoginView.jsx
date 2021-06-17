import React, { useCallback, useState } from 'react';

import { login } from '../../redux/auth/auth-operations';
import style from './Style.module.css';
import { useDispatch } from 'react-redux';

export default function LoginView({ onLogin }) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = useCallback(event => {
    setEmail(event.target.value);
  }, []);
  const handlePasswordChange = useCallback(event => {
    setPassword(event.target.value);
  }, []);

  const handleFormSubmit = useCallback(
    event => {
      event.preventDefault();
      dispatch(login({ email, password }));
    },
    [dispatch, email, password],
  );

  return (
    <div className={style.wrapp}>
      <h1>Страница логина</h1>

      <form
        onSubmit={handleFormSubmit}
        autoComplete="off"
        className={style.form}
      >
        <label className={style.label}>
          Почта
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            className={style.input}
          />
        </label>

        <label className={style.label}>
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            className={style.input}
          />
        </label>

        <button type="submit" className={style.btn}>
          Войти
        </button>
      </form>
    </div>
  );
}
