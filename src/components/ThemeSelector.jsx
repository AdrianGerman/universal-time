import React from "react"

const ThemeSelector = ({ currentTheme, onThemeChange }) => {
  const themes = ["modern", "classic", "neon", "minimal", "dark"]

  return (
    <select
      value={currentTheme}
      onChange={(e) => onThemeChange(e.target.value)}
      className="bg-transparent border-b border-white text-white px-2 py-1 text-sm outline-none"
    >
      {themes.map((theme) => (
        <option key={theme} value={theme} className="text-black">
          {theme}
        </option>
      ))}
    </select>
  )
}

export default ThemeSelector
