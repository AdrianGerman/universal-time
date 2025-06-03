const themes = {
  modern: {
    container: 'bg-gradient-to-br from-blue-900 to-purple-900 text-white',
    time: 'text-7xl font-mono font-bold',
    date: 'text-xl',
    accent: 'text-blue-200',
  },
  classic: {
    container:
      'bg-gradient-to-br from-yellow-100 to-yellow-400 text-gray-900 border-4 border-yellow-700 rounded-xl shadow-lg font-serif',
    time: 'text-8xl font-serif font-bold tracking-widest italic',
    date: 'text-2xl font-serif italic',
    accent: 'text-yellow-700',
  },
  digital: {
    container:
      'bg-gradient-to-br from-gray-900 to-gray-700 text-green-400 border-2 border-green-500 rounded-lg shadow-2xl font-digital',
    time: 'text-8xl font-digital font-bold tracking-widest drop-shadow-[0_0_20px_rgba(34,197,94,0.8)]',
    date: 'text-2xl font-digital',
    accent: 'text-green-500',
  },
  retro: {
    container:
      'bg-gradient-to-br from-pink-400 to-orange-400 text-white border-4 border-pink-700 rounded-2xl shadow-xl font-retro',
    time: 'text-8xl font-retro font-bold tracking-widest',
    date: 'text-2xl font-retro',
    accent: 'text-orange-700',
  },
  luxury: {
    container:
      'bg-gradient-to-br from-yellow-400 to-gray-900 text-yellow-100 border-4 border-yellow-600 rounded-full shadow-2xl font-luxury',
    time: 'text-8xl font-luxury font-extrabold tracking-widest',
    date: 'text-2xl font-luxury italic',
    accent: 'text-yellow-400',
  },
  'sci-fi': {
    container:
      'bg-gradient-to-br from-cyan-400 to-blue-900 text-cyan-100 border-2 border-cyan-500 rounded-lg shadow-2xl font-scifi',
    time: 'text-8xl font-scifi font-bold tracking-widest',
    date: 'text-2xl font-scifi',
    accent: 'text-cyan-400',
  },
  nature: {
    container:
      'bg-gradient-to-br from-green-300 to-green-700 text-green-900 border-2 border-green-500 rounded-lg shadow-xl font-nature',
    time: 'text-8xl font-nature font-bold tracking-widest',
    date: 'text-2xl font-nature',
    accent: 'text-green-700',
  },
};

export const getThemeStyles = (theme) => themes[theme] || themes.modern;
