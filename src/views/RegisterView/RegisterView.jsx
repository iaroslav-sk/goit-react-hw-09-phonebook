import React, { useCallback, useState } from 'react';

import { register } from '../../redux/auth/auth-operations';
import style from './Style.module.css';
import { useDispatch } from 'react-redux';

export default function RegisterView() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = useCallback(event => {
    setName(event.target.value);
  }, []);

  const handleEmailChange = useCallback(event => {
    setEmail(event.target.value);
  }, []);
  const handlePasswordChange = useCallback(event => {
    setPassword(event.target.value);
  }, []);

  const handleFormSubmit = useCallback(
    event => {
      event.preventDefault();
      dispatch(register({ name, email, password }));
      setName('');
      setEmail('');
      setPassword('');
    },
    [dispatch, name, email, password],
  );

  return (
    <div className={style.wrapp}>
      <h1>Страница регистрации</h1>

      <form
        onSubmit={handleFormSubmit}
        className={style.form}
        autoComplete="off"
      >
        <label className={style.label}>
          Имя
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
            className={style.input}
          />
        </label>

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
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}
