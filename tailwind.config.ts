import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		fontFamily: {
			sans: ['Inter', 'sans-serif'], // For Notion's style
			slack: ['Lato', 'sans-serif'], // For Slack's style
			futura: ['Futura', 'sans-serif'], // For Futura's style
			serif: ['Cinzel', 'serif'], // For Cinzel's style
			mono: ['Menlo', 'monospace'], // For Monospace's style
			heading: ['Montserrat', 'sans-serif'], // For Heading's style
			handwriting: ['Caveat', 'cursive'], // For handwritten style
			marker: ['Permanent Marker', 'cursive'], // For marker/sharpie style
		  },
		keyframes: {
			jitter: {
				'0%': { transform: 'translate(0, 0)' },
				'25%': { transform: 'translate(0px, 2px)' },
				'50%': { transform: 'translate(0px, 2px)' },
				'75%': { transform: 'translate(0px, 2px)' },
				'100%': { transform: 'translate(0px, 2px)' }
			  },
			  
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' }
        },
			comic: {
			  '0%, 100%': { transform: 'scale(1.01)' },
			  '50%': { transform: 'scale(1.03)' }
			},
			float: {
			  '0%, 100%': { transform: 'translateY(0)' },
			  '50%': { transform: 'translateY(-10px)' }
			}
		  },
		  animation: {
			jitter: 'jitter 0.3s infinite',
			comic: 'comic 1s ease-in-out infinite',
			blink: 'blink  1s step-start infinite',
			float: 'float 3s ease-in-out infinite',
		  },
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
	
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
