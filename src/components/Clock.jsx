import React, { useState, useEffect } from "react"

const Clock = ({ timezone, theme }) => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formattedTimezone = timezone.replace("_", " ")

  const formatTime = (date) =>
    new Intl.DateTimeFormat("es-ES", {
      timeZone: timezone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    }).format(date)

  const formatDate = (date) =>
    new Intl.DateTimeFormat("es-ES", {
      timeZone: timezone,
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    }).format(date)

  const getThemeStyles = () => {
    const themes = {
      modern: {
        container:
          "bg-gradient-to-br from-blue-900 to-purple-900 text-white border-2 border-blue-400",
        time: "text-6xl font-mono font-bold text-blue-100 drop-shadow-lg",
        date: "text-lg text-blue-200",
        accent: "text-blue-300"
      },
      classic: {
        container:
          "bg-gradient-to-br from-amber-100 to-orange-200 text-gray-800 border-4 border-amber-600 shadow-xl",
        time: "text-6xl font-serif font-bold text-amber-900",
        date: "text-lg text-amber-800",
        accent: "text-amber-700"
      },
      neon: {
        container:
          "bg-black text-green-400 border-2 border-green-500 shadow-2xl shadow-green-500/20",
        time: "text-6xl font-mono font-bold text-green-400 drop-shadow-[0_0_15px_rgba(34,197,94,0.8)]",
        date: "text-lg text-green-300",
        accent: "text-green-500"
      },
      minimal: {
        container: "bg-gray-50 text-gray-900 border border-gray-300",
        time: "text-6xl font-light text-gray-700",
        date: "text-lg text-gray-600",
        accent: "text-gray-500"
      },
      dark: {
        container: "bg-gray-900 text-gray-100 border-2 border-gray-700",
        time: "text-6xl font-bold text-white",
        date: "text-lg text-gray-300",
        accent: "text-gray-400"
      }
    }
    return themes[theme] || themes.modern
  }

  const styles = getThemeStyles()

  return (
    <div
      className={`p-8 rounded-2xl ${styles.container} text-center transition-all duration-300 hover:scale-105`}
    >
      <div className={`${styles.time} mb-2 transition-all duration-500`}>
        {formatTime(time)}
      </div>
      <div className={`${styles.date} mb-4 capitalize`}>{formatDate(time)}</div>
      <div
        className={`flex items-center justify-center gap-2 ${styles.accent} text-sm`}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12,6 12,12 16,14" />
        </svg>
        <span>{formattedTimezone}</span>
      </div>
    </div>
  )
}

export default Clock
