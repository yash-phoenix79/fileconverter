import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'dark-primary': '#111827',     // Background color for the entire page
        'dark-secondary': '#1E293B',   // Background color for the navigation bar
        'dark-body': '#1E293B',        // Background color for the page body
        'dark-drop-zone': '#111827',   // Background color for the drop zone section
      },
      textColor: {
        'dark-text': '#D1D5DB',       // Text color for most of the content
        'dark-primary': '#F3F4F6',     // Text color for primary elements
        'dark-link': '#93C5FD',        // Text color for links or interactive elements
      },
    },
  },
  plugins: [],
}
export default config
