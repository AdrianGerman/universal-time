export const formatTime = (date, timezone) =>
  new Intl.DateTimeFormat("es-ES", {
    timeZone: timezone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  }).format(date)

export const formatDate = (date, timezone) =>
  new Intl.DateTimeFormat("es-ES", {
    timeZone: timezone,
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(date)
