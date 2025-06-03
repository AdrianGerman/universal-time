import React from "react"
import { formatTime, formatDate } from "../utils/dateUtils"
import { getThemeStyles } from "../utils/themeStyles"

const Clock = ({ time, timezone, theme, size = "xl" }) => {
  const styles = getThemeStyles(theme)
  const timeSize = size === "md" ? "text-[90px] md:text-[120px]" : "text-[250px]"
  const dateSize = size === "md" ? "text-lg md:text-xl" : ""

  return (
    <div className="text-center">
      <div className={`${styles.time} mb-3 ${timeSize}`}>
        {formatTime(time, timezone)}
      </div>
      <div className={`${styles.date} capitalize ${dateSize}`}>
        {formatDate(time, timezone)}
      </div>
      <div className={`text-sm mt-2 ${styles.accent}`}>
        {timezone.replace("_", " ")}
      </div>
    </div>
  )
}

export default Clock
