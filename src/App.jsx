import React, { useEffect, useState } from 'react';
import Clock from './components/Clock';
import TimezoneSelector from './components/TimezoneSelector';
import ThemeSelector from './components/ThemeSelector';
import { getThemeStyles } from './utils/themeStyles';
import { getStoredValue, setStoredValue } from './utils/persistence';

const App = () => {
  const [timezone1, setTimezone1] = useState(() =>
    getStoredValue('timezone1', 'America/Mexico_City'),
  );
  const [timezone2, setTimezone2] = useState(() =>
    getStoredValue('timezone2', 'America/Argentina/Buenos_Aires'),
  );
  const [showSecondClock, setShowSecondClock] = useState(
    () => getStoredValue('showSecondClock', 'false') === 'true',
  );
  const [theme, setTheme] = useState(() => getStoredValue('theme', 'modern'));
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setStoredValue('timezone1', timezone1);
  }, [timezone1]);
  useEffect(() => {
    setStoredValue('timezone2', timezone2);
  }, [timezone2]);
  useEffect(() => {
    setStoredValue('showSecondClock', showSecondClock);
  }, [showSecondClock]);
  useEffect(() => {
    setStoredValue('theme', theme);
  }, [theme]);

  const styles = getThemeStyles(theme);

  return (
    <div
      className={`w-full h-screen ${styles.container} flex flex-col items-center justify-center px-4`}
    >
      <div className="absolute top-4 w-full max-w-4xl flex flex-col md:flex-row justify-between px-6 gap-4">
        <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-start md:items-center">
          <div className="flex flex-col gap-2">
            <TimezoneSelector
              currentTimezone={timezone1}
              onTimezoneChange={setTimezone1}
            />
            {showSecondClock && (
              <TimezoneSelector
                currentTimezone={timezone2}
                onTimezoneChange={setTimezone2}
              />
            )}
          </div>

          <label className="flex items-center gap-3 cursor-pointer select-none text-white text-sm mt-2 md:mt-0">
            <span className="text-white">Mostrar 2 relojes</span>
            <span className="relative inline-block w-12 h-7">
              <input
                type="checkbox"
                checked={showSecondClock}
                onChange={(e) => setShowSecondClock(e.target.checked)}
                className="peer sr-only"
              />
              <span className="block w-full h-full rounded-full bg-gray-400 peer-checked:bg-blue-600 transition-colors duration-300 ease-in-out shadow-inner" />
              <span className="absolute left-0 top-0 w-7 h-7 bg-white border border-gray-300 rounded-full transition-transform duration-300 ease-in-out transform peer-checked:translate-x-5 shadow-md" />
            </span>
          </label>
        </div>

        <div className="flex gap-4 items-center">
          <ThemeSelector currentTheme={theme} onThemeChange={setTheme} />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-around w-full mt-16">
        <Clock
          time={time}
          timezone={timezone1}
          theme={theme}
          size={showSecondClock ? 'md' : undefined}
        />
        {showSecondClock && (
          <Clock time={time} timezone={timezone2} theme={theme} size="md" />
        )}
      </div>
    </div>
  );
};

export default App;
