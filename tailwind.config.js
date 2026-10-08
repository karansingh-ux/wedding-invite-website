/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'butter-yellow': '#F6DFA0',
        'warm-ivory': '#FFF8EA',
        'soft-cream': '#F4EBDD',
        'deep-maroon': '#641F27',
        'warm-brown': '#3D2A25',
        'soft-pink': '#EFA6B5',
        'peach': '#F2B08A',
        'sunset-orange': '#D9784B',
        'soft-lilac': '#C8B7D9',
        'sage': '#A8B29A',
        'deep-green': '#53614D',
        'muted-gold': '#C7A85A',
      },
      fontFamily: {
        display: ['var(--font-bricolage)', 'sans-serif'],
        editorial: ['var(--font-newsreader)', 'serif'],
      },
      spacing: {
        'space-1': '8px',
        'space-2': '16px',
        'space-3': '24px',
        'space-4': '32px',
        'space-5': '40px',
        'space-6': '48px',
        'space-7': '64px',
        'space-8': '80px',
        'space-9': '96px',
        'space-10': '128px',
        'space-11': '160px',
        'space-12': '192px',
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1200px',
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
};
