export const getStoredValue = (key, fallback) => {
  if (typeof localStorage === "undefined") return fallback
  return localStorage.getItem(key) || fallback
}

export const setStoredValue = (key, value) => {
  if (typeof localStorage === "undefined") return
  localStorage.setItem(key, value)
}
