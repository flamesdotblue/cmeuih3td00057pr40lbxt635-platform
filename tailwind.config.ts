import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mist: {
          50: '#f8fbfb',
          100: '#eef7f7',
          200: '#d9eeee',
          300: '#c3e4e4',
          400: '#a0d3d3',
          500: '#7bc2c2',
        },
      },
      backgroundImage: {
        'soft-radial':
          'radial-gradient(1200px 800px at 85% -10%, rgba(123, 194, 194, 0.18), transparent 60%), radial-gradient(1000px 700px at -10% 20%, rgba(180, 166, 240, 0.14), transparent 60%), radial-gradient(900px 600px at 50% 120%, rgba(255, 182, 193, 0.12), transparent 60%)',
      },
      boxShadow: {
        soft: '0 8px 30px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
}

export default config
