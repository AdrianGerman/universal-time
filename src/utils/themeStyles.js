const themes = {
  modern: {
    container: "bg-gradient-to-br from-blue-900 to-purple-900 text-white",
    time: "text-7xl font-mono font-bold",
    date: "text-xl",
    accent: "text-blue-200"
  },
  classic: {
    container: "bg-gradient-to-br from-amber-100 to-orange-200 text-gray-800",
    time: "text-7xl font-serif font-bold",
    date: "text-xl",
    accent: "text-amber-700"
  },
  neon: {
    container: "bg-black text-green-400",
    time: "text-7xl font-mono font-bold drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]",
    date: "text-xl",
    accent: "text-green-500"
  },
  minimal: {
    container: "bg-white text-gray-900",
    time: "text-7xl font-light",
    date: "text-xl",
    accent: "text-gray-500"
  },
  dark: {
    container: "bg-gray-900 text-white",
    time: "text-7xl font-bold",
    date: "text-xl",
    accent: "text-gray-400"
  }
}

export const getThemeStyles = (theme) => themes[theme] || themes.modern
