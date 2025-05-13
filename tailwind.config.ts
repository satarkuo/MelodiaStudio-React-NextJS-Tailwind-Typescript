import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '0.75rem',
        },
        screens: {
          xl: '1320px', //最大寬度
        },
      },
      colors: {
        black: 'var(--black)',
        white: 'var(--white)',
        gray: {
          0: 'var(--gray0)',
          1: 'var(--gray1)',
          2: 'var(--gray2)',
          3: 'var(--gray3)',
          4: 'var(--gray4)',
        },
        admin: {
          default: 'var(--adminDefault)',
          defaultDark: 'var(--adminDefaultDark)',
          delete: 'var(--adminDelete)',
          deleteDark: 'var(--adminDeleteDark)',
          success: 'var(--adminSuccess)',
          successDark: 'var(--adminSuccessDark)',
        },
        primary: {
          default: 'var(--primaryDefault)',
          light: 'var(--primaryLight)',
          dark: 'var(--primaryDark)',
          pestel: 'var(--primaryPestel)',
        },
        secondary: {
          default: 'var(--secondaryDefault)',
          light: 'var(--secondaryLight)',
          dark: 'var(--secondaryDark)',
        },
        accessory: {
          red: 'var(--accessoryRed)',
          blue: 'var(--accessoryBlue)',
          white: 'var(--accessoryWhite)',
        },
      },
      fontSize: {
        //.text-h1  .text-body-xl //字體大小,行高
        h1: ['2.5rem', { lineHeight: '3rem', letterSpacing: '0.04em' }],
        h2: ['2rem', { lineHeight: '2.4rem' }],
        h3: ['1.75rem', { lineHeight: '2.1rem' }],
        h4: ['1.5rem', { lineHeight: '1.8rem' }],
        h5: ['1.25rem', { lineHeight: '1.5rem' }],
        h6: ['1rem', { lineHeight: '1.2rem' }],
        body1: ['1.25rem', { lineHeight: '1.25rem' }],
        body2: ['1rem', { lineHeight: '1rem' }],
        body3: ['0.875rem', { lineHeight: '0.875rem' }],
        button: ['1rem', { lineHeight: '0.875rem' }],
        caption: ['0.75rem', { lineHeight: '0.75rem' }],
      },
      borderRadius: {
        default: '8px',
      },
      boxShadow: {
        card: '0 2px 10px rgba(0, 0, 0, 0.1)', // 若有卡片陰影需求
      },
    },
  },
  plugins: [],
};
export default config;
