const express = require('express')
const app = express()
const port = 3000

/*
 * Serving static files in Express
 * https://expressjs.com/en/starter/static-files.html
 */
app.use(express.static('client'))

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
