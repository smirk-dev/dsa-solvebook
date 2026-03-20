import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Cascadia Code', 'ui-monospace', 'monospace'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        terminal: {
          bg: '#0d1117',
          surface: '#161b22',
          border: '#30363d',
          text: '#c9d1d9',
          muted: '#8b949e',
          green: '#3fb950',
          blue: '#58a6ff',
          yellow: '#d29922',
          red: '#f85149',
          purple: '#bc8cff',
        },
      },
      typography: (theme: (arg: string) => string) => ({
        invert: {
          css: {
            '--tw-prose-body': theme('colors.terminal.text'),
            '--tw-prose-headings': theme('colors.white'),
            '--tw-prose-code': theme('colors.terminal.blue'),
            '--tw-prose-pre-bg': theme('colors.terminal.surface'),
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
