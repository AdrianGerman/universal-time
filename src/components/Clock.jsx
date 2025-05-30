import React from "react"
import { formatTime, formatDate } from "../utils/dateUtils"
import { getThemeStyles } from "../utils/themeStyles"

const Clock = ({ time, timezone, theme }) => {
  const styles = getThemeStyles(theme)

  return (
    <div className="text-center">
      <div className={`${styles.time} mb-3 text-[250px]`}>
        {formatTime(time, timezone)}
      </div>
      <div className={`${styles.date} capitalize`}>
        {formatDate(time, timezone)}
      </div>
      <div className={`text-sm mt-2 ${styles.accent}`}>
        {timezone.replace("_", " ")}
      </div>
    </div>
  )
}

export default Clock
