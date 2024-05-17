import { type Config } from 'tailwindcss'
import animatePlugin from 'tailwindcss-animate'
import radixPlugin from 'tailwindcss-radix'
import { extendedTheme } from './app/utils/extended-theme.ts'

export const marketingPreset = {
	theme: {
		extend: {
			keyframes: {
				'roll-reveal': {
					from: { transform: 'rotate(12deg) scale(0)', opacity: '0' },
					to: { transform: 'rotate(0deg) scale(1)', opacity: '1' },
				},
				'slide-left': {
					from: { transform: 'translateX(20px)', opacity: '0' },
					to: { transform: 'translateX(0px)', opacity: '1' },
				},
				'slide-top': {
					from: { transform: 'translateY(20px)', opacity: '0' },
					to: { transform: 'translateY(0px)', opacity: '1' },
				},
			},
			animation: {
				'roll-reveal': 'roll-reveal 0.4s cubic-bezier(.22,1.28,.54,.99)',
				'slide-left': 'slide-left 0.3s ease-out',
				'slide-top': 'slide-top 0.3s ease-out',
			},
			appear: {
				"0%, 99%": {
					height: "0",
					width: "0",
					opacity: "0",
				},
				"100%": {
					height: "auto",
					width: "auto",
					opacity: "1",
				},
			},
			disappear: {
				"0%, 99%": {
					height: "auto",
					width: "auto",
					opacity: "1",
				},
				"100%": {
					height: "0",
					width: "0",
					opacity: "0",
				},
			},
		},
	},
} satisfies Omit<Config, 'content'>

export default {
	content: ['./app/**/*.{ts,tsx,jsx,js}'],
	darkMode: 'class',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: extendedTheme,
	},
	presets: [marketingPreset],
	plugins: [animatePlugin, radixPlugin],
} satisfies Config
