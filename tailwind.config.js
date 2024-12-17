/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		container: {
			center: "center",
			padding: {
				DEFAULT: "1rem",
				sm: "1.5rem",
				md: "1rem",
				lg: "1.5rem",
				xl: "4rem",
			},
		},
		extend: {
			maxWidth: {
				310: "1400px",
			},
			fontFamily: {
				primary: "primary",
				"primary-bold": "primary-bold",
				secondary: "secondary",
				"secondary-bold": "secondary-bold",
			},
			colors: {
				// 
				Primary: "#C40C0C",
				// 
				"Primary-dark": "#050505",
				// 
				Secondary: "#FF6500",

				
				"Secondary-dark": "#202938",
				"Secondary-light": "#FF8A08",
				

				"dark-border": "#1f2937",
				"light-border": "#e5e7eb",
			},
		},
	},
	plugins: [],
};
