import React, { useState } from "react"
import Clock from "./components/Clock"
import TimezoneSelector from "./components/TimezoneSelector"
import ThemeSelector from "./components/ThemeSelector"

const App = () => {
  const [timezone, setTimezone] = useState("America/Mexico_City")
  const [theme, setTheme] = useState("modern")

  return (
    <div className="flex justify-center items-center min-h-screen p-4 text-white">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            🕒 Reloj Mundial
          </h1>
          <p className="text-white">
            Consulta la hora en diferentes zonas horarias con estilos
            personalizables
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Clock timezone={timezone} theme={theme} />
          </div>
          <div className="space-y-6">
            <TimezoneSelector
              currentTimezone={timezone}
              onTimezoneChange={setTimezone}
            />
            <ThemeSelector currentTheme={theme} onThemeChange={setTheme} />
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="bg-slate-950 rounded-lg p-4 shadow-sm border border-gray-700 inline-block">
            <p className="text-sm text-gray-300">
              💡 El reloj se actualiza automáticamente cada segundo
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
