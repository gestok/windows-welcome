import React, { useEffect, useState } from 'react';
import DateTime from './DateTime.js';
import Weather from './Weather.js';

const LoginScreen = () => {
  const [screen, setScreen] = useState('');

  const chooseBackground = () => {
    const backgrounds = [
      'https://i.ibb.co/Db8zpTS/img100.jpg',
      'https://i.ibb.co/s5pCDZZ/img101.png',
      'https://i.ibb.co/PMsG0sX/img102.jpg',
      'https://i.ibb.co/gzmFZXt/img103.png',
      'https://i.ibb.co/F0SZjKS/img104.jpg',
    ];
    let newBG = screen;
    while (screen === newBG) {
      newBG = backgrounds[Math.round(Math.random() * (backgrounds.length - 1))];
    }
    return newBG;
  };

  useEffect(() => {
    setScreen(chooseBackground());
    setTimeout(
      () => (document.querySelector('.screen').style.opacity = 1),
      300
    );
    setInterval(() => {
      document.querySelector('.screen').style.opacity = 0;
      setTimeout(() => setScreen(chooseBackground()), 500);
      setTimeout(
        () => (document.querySelector('.screen').style.opacity = 1),
        700
      );
    }, 5000);
  }, []);

  return (
    <div className="container relative d-flex flex-column">
      <div
        className="screen"
        style={{ background: `url('${screen}') center / cover no-repeat` }}
      ></div>
      <div className="mt-auto d-flex flex-column gap-lg">
        <DateTime />
        <Weather />
      </div>
    </div>
  );
};
export default LoginScreen;
