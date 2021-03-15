module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sans: ['Lato', 'ui-sans-serif', 'system-ui'],
				serif: ['Josefin Sans', 'ui-serif', 'Georgia'],
				mono: ['ui-monospace', 'SFMono-Regular'],
				display: ['Josefin Sans'],
				body: ['Open Sans'],
			},
      colors: {
        "primary": {
          "50": "#52667f",
          "100": "#485c75",
          "200": "#3e526b",
          "300": "#344861",
          "400": "#2a3e57",
          "500": "#20344d",
          "600": "#162a43",
          "700": "#0c2039",
          "800": "#02162f",
          "900": "#000c25"
        },
        "secondary": {
          "50": "#ffc73f",
          "100": "#ffbd35",
          "200": "#fbb32b",
          "300": "#f1a921",
          "400": "#e79f17",
          "500": "#dd950d",
          "600": "#d38b03",
          "700": "#c98100",
          "800": "#bf7700",
          "900": "#b56d00"
        }
      }
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
