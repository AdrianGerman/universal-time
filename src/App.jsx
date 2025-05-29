import React, { useEffect, useState } from "react"
import Clock from "./components/Clock"
import TimezoneSelector from "./components/TimezoneSelector"
import ThemeSelector from "./components/ThemeSelector"
import { getThemeStyles } from "./utils/themeStyles"

const App = () => {
  const [timezone, setTimezone] = useState("America/Mexico_City")
  const [theme, setTheme] = useState("modern")
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  const styles = getThemeStyles(theme)

  return (
    <div
      className={`w-full h-screen ${styles.container} flex flex-col items-center justify-center px-4`}
    >
      <div className="absolute top-4 w-full max-w-4xl flex justify-between px-6">
        <TimezoneSelector
          currentTimezone={timezone}
          onTimezoneChange={setTimezone}
        />
        <ThemeSelector currentTheme={theme} onThemeChange={setTheme} />
      </div>

      <Clock time={time} timezone={timezone} theme={theme} />
    </div>
  )
}

export default App
