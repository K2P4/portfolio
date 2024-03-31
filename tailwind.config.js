/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
	darkMode: ["class"],
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
				sans: ["Montserrat", "sans-serif"],
				serif: ["Roboto"],
			},
			colors: {
				basic: "#008DDA",
			},
			position: ["fixed"],
		},
	},
	plugins: [require("tailwindcss-animate", "flowbite/plugin")],
};
