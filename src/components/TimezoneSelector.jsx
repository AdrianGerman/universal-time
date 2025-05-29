import React from "react"
import { timezones } from "../utils/timezones"

const TimezoneSelector = ({ currentTimezone, onTimezoneChange }) => {
  return (
    <select
      value={currentTimezone}
      onChange={(e) => onTimezoneChange(e.target.value)}
      className="bg-transparent border-b border-white text-white px-2 py-1 text-sm outline-none"
    >
      {timezones.map((tz) => (
        <option key={tz.value} value={tz.value} className="text-black">
          {tz.flag} {tz.label}
        </option>
      ))}
    </select>
  )
}

export default TimezoneSelector
