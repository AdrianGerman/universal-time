import React from "react"
import { Globe } from "lucide-react"

const TimezoneSelector = ({ currentTimezone, onTimezoneChange }) => {
  const timezones = [
    { value: "America/Mexico_City", label: "México (CDMX)", flag: "🇲🇽" },
    { value: "America/New_York", label: "Nueva York", flag: "🇺🇸" },
    { value: "America/Los_Angeles", label: "Los Ángeles", flag: "🇺🇸" },
    { value: "Europe/London", label: "Londres", flag: "🇬🇧" },
    { value: "Europe/Paris", label: "París", flag: "🇫🇷" },
    { value: "Europe/Madrid", label: "Madrid", flag: "🇪🇸" },
    { value: "Asia/Tokyo", label: "Tokio", flag: "🇯🇵" },
    { value: "Asia/Shanghai", label: "Shanghái", flag: "🇨🇳" },
    { value: "Australia/Sydney", label: "Sídney", flag: "🇦🇺" },
    { value: "America/Sao_Paulo", label: "São Paulo", flag: "🇧🇷" }
  ]

  return (
    <div className="bg-slate-950 rounded-xl shadow-lg p-6 border border-gray-800">
      <div className="flex items-center gap-2 mb-4">
        <Globe className="text-blue-600" size={20} />
        <h3 className="text-lg font-semibold text-gray-300">Zona Horaria</h3>
      </div>
      <select
        value={currentTimezone}
        onChange={(e) => onTimezoneChange(e.target.value)}
        className="w-full p-3 border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-950 text-gray-300"
      >
        {timezones.map((tz) => (
          <option key={tz.value} value={tz.value}>
            {tz.flag} {tz.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default TimezoneSelector
