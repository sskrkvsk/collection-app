import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`

* {
	box-sizing: border-box;
}
body, p {
	margin: 0;
	padding: 0;
	font-family: 'Lato', sans-serif;
  background-color: #FFFAFA;
}

a {
	text-decoration: none;
}

img {
	height: auto;
	max-width: 100%;
	user-select: none;
}

button, input {
  border: none;
}

a, button {
  touch-action: manipulation;
  cursor: pointer;
  color: black;
}

ul {
  list-style: none;
}

svg {
  height: 100%;
  width: 100%;
  pointer-events: none;
}

iframe, video {
  height: 100%;
  width: 100%
}
`;
export default GlobalStyle;