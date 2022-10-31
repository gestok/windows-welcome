import React, { useEffect, useState } from 'react';

const DateTime = () => {
  const [dateTime, setDateTime] = useState(['', '']);
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const formatZero = (val) => {
    return parseInt(val) < 10 ? `0${val}` : val;
  };

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setDateTime([
        `${formatZero(date.getHours())}:${formatZero(date.getMinutes())}`,
        `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`,
      ]);
    }, 1000);
  }, []);

  return (
    <div id="datetime" className="d-flex flex-column gap-sm">
      <span className="pe-none user-select-none">{dateTime[0]}</span>
      <span className="pe-none user-select-none">{dateTime[1]}</span>
    </div>
  );
};
export default DateTime;
