import Home from "./Pages/Home";
import { createGlobalStyle } from "styled-components";
import Pages from "./Pages/Pages";
import Header from "./Components/Header";
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 24px;
  font: inherit;
  vertical-align: baseline;
	font-family: "Fascinate", cursive;
  
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
  font-size: 24px;  
  background-color: red;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
a {
  text-decoration:none;
  color: inherit;
}
h1{
  font-size: 60px;
}
h2{

  font-size: 48px;
}
h3{

  font-size: 36px;
}
h4{
  
  font-size: 30px;
}
h5{

  font-size: 24px;
}
h6{

  font-size: 18px;
}
`;
function App() {
	return (
		<div className="App">
			<GlobalStyle />
	
			<Pages />
		</div>
	);
}

export default App;
