import React from "react"

const TimezoneSelector = ({ currentTimezone, onTimezoneChange }) => {
  const timezones = [
    { value: "America/Mexico_City", label: "CDMX" },
    { value: "America/New_York", label: "NY" },
    { value: "Europe/Madrid", label: "Madrid" },
    { value: "Europe/London", label: "Londres" },
    { value: "Asia/Tokyo", label: "Tokio" }
  ]

  return (
    <select
      value={currentTimezone}
      onChange={(e) => onTimezoneChange(e.target.value)}
      className="bg-transparent border-b border-white text-white px-2 py-1 text-sm outline-none"
    >
      {timezones.map((tz) => (
        <option key={tz.value} value={tz.value} className="text-black">
          {tz.label}
        </option>
      ))}
    </select>
  )
}

export default TimezoneSelector
