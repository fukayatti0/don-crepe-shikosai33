import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../constants/content';

const Countdown = ({ targetDate }) => {
  const { language } = useLanguage();
  const t = content[language].Countdown;
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-white/80 p-6 rounded-lg shadow-lg mb-8 backdrop-blur-sm">
    <h2 className="text-2xl font-bold mb-4">{t.title}</h2>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
      <div className="bg-purple-100 p-3 rounded-lg">
        <div className="text-xl font-bold text-purple-600 flex flex-col justify-center items-center">
          {timeLeft.days}
          <span className="text-xl text-purple-700">{t.days}</span>
        </div>
      </div>
      <div className="bg-purple-100 p-3 rounded-lg">
        <div className="text-xl font-bold text-purple-600 flex flex-col justify-center items-center">
          {timeLeft.hours}
          <span className="text-xl text-purple-700">{t.hours}</span>
        </div>
      </div>
      <div className="bg-purple-100 p-3 rounded-lg">
        <div className="text-xl font-bold text-purple-600 flex flex-col justify-center items-center">
          {timeLeft.minutes}
          <span className="text-xl text-purple-700">{t.minutes}</span>
        </div>
      </div>
      <div className="bg-purple-100 p-3 rounded-lg">
        <div className="text-xl font-bold text-purple-600 flex flex-col justify-center items-center">
          {timeLeft.seconds}
          <span className="text-xl text-purple-700">{t.seconds}</span>
        </div>
      </div>
    </div>
  </div>
  );
};

const calculateTimeLeft = (targetDate) => {
  const difference = +new Date(targetDate) - +new Date();
  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;
};

export default Countdown;