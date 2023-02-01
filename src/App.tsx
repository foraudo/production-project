import React, { Suspense } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './index.scss';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';

const App = () => {
  return (
    <div className="app">
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <Suspense fallback={<div>Loading ....</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />}></Route>
          <Route path="/about" element={<AboutPageAsync />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;