import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        asphalt: '#050608',
        obsidian: '#0A0D10',
        gunmetal: '#182027',
        graphite: '#222B33',
        titanium: '#A7B0B8',
        chrome: '#E7ECF0',
        ember: '#F05A28'
      },
      fontFamily: {
        display: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 80px rgba(240, 90, 40, 0.22)',
        card: '0 24px 80px rgba(0, 0, 0, 0.45)'
      },
      backgroundImage: {
        'radial-ember': 'radial-gradient(circle at 50% 0%, rgba(240,90,40,0.26), transparent 36%)',
        'carbon-fiber': 'linear-gradient(135deg, rgba(255,255,255,0.035) 25%, transparent 25%), linear-gradient(225deg, rgba(255,255,255,0.035) 25%, transparent 25%), linear-gradient(45deg, rgba(255,255,255,0.035) 25%, transparent 25%), linear-gradient(315deg, rgba(255,255,255,0.035) 25%, #080A0D 25%)'
      }
    }
  },
  plugins: []
};

export default config;
