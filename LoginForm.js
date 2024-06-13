import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.css'; // Подключаем стили

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/auth/login', {
        username,
        password,
      });

      console.log(response.data); // Обработка успешного входа
      // Здесь можно добавить редирект на другую страницу или обновление данных пользователя
    } catch (error) {
      console.error(error.response.data); // Обработка ошибок
      setError('Неверные учетные данные');
    }
  };

  return (
    <div className="login-form">
      <h2>Вход</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Имя пользователя</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default LoginForm;
