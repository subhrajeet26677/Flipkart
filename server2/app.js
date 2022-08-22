let express = require('express')
let app = express()
let fileroute = require('./routes/fileroute');
let cors = require('cors')
let userroute = require('./routes/userroute');
let productroute = require('./routes/productroutes')
let db = require('./config/config')

let port = (process.env.PORT || 4040)


app.use(express.json());
//app.use(express.urlencoded());

app.use(cors({
    origin: "*",
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

app.use(express.static('./dist/sheikhstore'))

db.dbconnect()
app.get('/', (req, res) => {
    res.send(' i am batman')
})

app.use('/api', userroute);
app.use('/docs', fileroute)
app.use('/products', productroute);

//bla
app.listen(port)

