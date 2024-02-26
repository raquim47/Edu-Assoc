import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
}

*[hidden] {
    display: none;
}

body {
  font-family: 'Noto Sans KR', sans-serif;
  overflow-x: hidden;
}

body.scrollHidden {
  overflow-y: hidden;
}

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
  font-size: 100%;
  vertical-align: baseline;
}

article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}

menu, ol, ul {
  list-style: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

input, select {
  outline: none;
}

a {
  text-decoration:none;
  color:inherit;
}

button {
  font-family: 'Noto Sans KR', sans-serif;
  background: none;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
}

img {
  display: block;
}
`;

