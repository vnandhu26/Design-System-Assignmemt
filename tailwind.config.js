
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.stories.{js,jsx,ts,tsx}" 
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary-50': '#f0f9ff',
        'primary-100': '#e0f2fe',
        'primary-500': '#3b82f6',
        'primary-900': '#1e3a8a',
        
        // Secondary Colors
        'secondary-50': '#f5f3ff',
        'secondary-100': '#ede9fe',
        'secondary-500': '#8b5cf6',
        'secondary-900': '#4c1d95',
        
        // Semantic Colors
        'success-500': '#10b981',
        'info-500': '#3b82f6',
        'warning-500': '#f59e0b',
        'error-500': '#ef4444',
      },
    },
  },
  plugins: [],
}