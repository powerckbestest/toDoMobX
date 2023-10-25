import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import AppNavbar from './components/UI/AppNavbar';

function App(): JSX.Element {
  return (
    <Container>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Container>
  );
}

export default App;
