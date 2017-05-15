const sass = require('node-sass');

var result = sass.renderSync({
  data: `
$font-stack:    Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
`
});

console.log(result.css.toString());
