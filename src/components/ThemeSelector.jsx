import React from "react"
import { Palette } from "lucide-react"

const ThemeSelector = ({ currentTheme, onThemeChange }) => {
  const themes = [
    { value: "modern", label: "Moderno", color: "from-blue-500 to-purple-500" },
    {
      value: "classic",
      label: "Clásico",
      color: "from-amber-400 to-orange-400"
    },
    { value: "neon", label: "Neón", color: "from-green-400 to-green-600" },
    { value: "minimal", label: "Minimal", color: "from-gray-300 to-gray-500" },
    { value: "dark", label: "Oscuro", color: "from-gray-700 to-gray-900" }
  ]

  return (
    <div className="bg-slate-950 rounded-xl shadow-lg p-6 border border-gray-800">
      <div className="flex items-center gap-2 mb-4">
        <Palette className="text-purple-600" size={20} />
        <h3 className="text-lg font-semibold text-gray-300">Tema del Reloj</h3>
      </div>
      <div className="grid grid-cols-1 gap-3">
        {themes.map((theme) => (
          <button
            key={theme.value}
            onClick={() => onThemeChange(theme.value)}
            className={`p-3 rounded-lg border-2 transition-all duration-200 flex items-center gap-3 ${
              currentTheme === theme.value
                ? "border-purple-800 bg-purple-800"
                : "border-gray-800 hover:border-purple-800 hover:bg-gray-900"
            }`}
          >
            <div
              className={`w-6 h-6 rounded-full bg-gradient-to-r ${theme.color}`}
            ></div>
            <span className="font-medium text-gray-300">{theme.label}</span>
            {currentTheme === theme.value && (
              <div className="ml-auto w-2 h-2 bg-purple-500 rounded-full"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ThemeSelector
