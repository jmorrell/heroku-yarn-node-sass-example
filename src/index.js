const http = require('http')
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

const PORT = process.env.PORT || 5000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(result.css.toString());
})

server.listen(PORT, () => console.log(`Listening on ${PORT}`));
