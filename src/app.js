import express from 'express'
import morgan from 'morgan'
import routes from './routes/routes'


const app = express();
var cors = require('cors');

app.use(express.json());
app.use(cors());

app.use(morgan('dev'));

// app.get('/',function(req, res, next){
//     res.send('Welcome to Node.JS...!');
// });

app.use('/Exa02', routes);

export default app;