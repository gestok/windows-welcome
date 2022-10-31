import React from 'react';
import AppendHead from 'react-append-head';
import LoginScreen from './components/LoginScreen.js';
import 'normalize.css';
import './style.css';

export default function App() {
  return (
    <>
      <AppendHead>
        <link
          name="segoe-ui"
          href="https://fonts.cdnfonts.com/css/segoe-ui-4"
          rel="stylesheet"
        />
      </AppendHead>
      <LoginScreen />
    </>
  );
}
