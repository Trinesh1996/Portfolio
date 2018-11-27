const express = require("express")
const bodyParser = require("body-parser")
const flash = require("express-flash")
const cors = require("cors")
const pg =  require("pg")
const Pool = pg.Pool
const axios = require('axios')

const connectionString = process.env.DATABASE_URL || 'postgresql://trinesh:Trinesh1997@@localhost:5432/portfolio';

let app = express();
let PORT = process.env.PORT || 3015;

let useSSL = false;
let local = process.env.LOCAL || false;
if (process.env.DATABASE_URL && !local) {
  useSSL = true
}


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cors());
app.use(flash());

app.post('/welcome', (req, res) => {
    res.json( {
        message: `welcome ${req.body.test} your name is connecting the client to server`
    })
})


app.listen(PORT, function () {
    console.log('App starting on port', PORT)
  });