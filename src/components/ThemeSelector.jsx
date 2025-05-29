import React from "react"
import { themes } from "../utils/themes"

const ThemeSelector = ({ currentTheme, onThemeChange }) => {
  return (
    <div className="flex gap-2 items-center">
      {themes.map((theme) => (
        <button
          key={theme.value}
          onClick={() => onThemeChange(theme.value)}
          className={`w-6 h-6 rounded-full border-2 ${
            currentTheme === theme.value ? "border-white" : "border-transparent"
          } ${theme.color}`}
          title={theme.label}
        ></button>
      ))}
    </div>
  )
}

export default ThemeSelector
