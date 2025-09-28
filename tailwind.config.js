/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
	content: [
		"./pages/**/*.{js,jsx}",
		"./components/**/*.{js,jsx}",
		"./app/**/*.{js,jsx}",
		"./src/**/*.{js,jsx}",
		"./node_modules/flowbite/**/*.js",
	],
	prefix: "",
	theme: {
		extend: {
			fontFamily: {
				sans: ["Poppins", "sans-serif"],
				serif: ["Roboto"],
			},
			colors: {
				primary: "#2563eb", // 
				rating: "#f59e0b", // amber
			},

			position: ["fixed"],

			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideUp: {
					'0%': { opacity: '0', transform: 'translateY(12px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				float: {
					'0%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-6px)' },
					'100%': { transform: 'translateY(0)' },
				},
			},
			animation: {
				'fade-in': 'fadeIn 500ms ease-out both',
				'slide-up': 'slideUp 600ms 100ms ease-out both',
				float: 'float 6s ease-in-out infinite',
			},
		},
	},
	plugins: [],
};
