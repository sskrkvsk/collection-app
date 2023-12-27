import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`

* {
	box-sizing: border-box;
}
body {
	margin: 0;
	padding: 0;
	font-family: 'Lato', sans-serif;
}

a {
	text-decoration: none;
}

img {
	height: auto;
	max-width: 100%;
	user-select: none;
}

button {
  color: inherit; /* By default, buttons don't inherit the font colour, this is a useful default to override */
}

a, button {
  touch-action: manipulation; /* Element doesn't want double-tap on mobile to zoom */
}

svg {
  /* Make the SVGs fit the parent container by default */
  height: 100%;
  width: 100%;
  /* Prevent the SVG from altering cursor interaction */
  pointer-events: none;
}

iframe, video {
  /* Make iframes & videos fit the parent container by default */
  height: 100%;
  width: 100%
}
`;
export default GlobalStyle;