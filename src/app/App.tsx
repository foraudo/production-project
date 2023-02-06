import React, { Suspense, useContext } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { classNames } from 'helpers/classNames/classNames';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>toggle</button>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <Suspense fallback={<div>Loading ....</div>}>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
