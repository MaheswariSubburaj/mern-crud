import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dbConfig from './database/db.js';

// Express Route
import studentRoute from './routes/student.route.js';
import usersRoute from './routes/users.route.js';

// Connecting mongoDB Database
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig, {
  useNewUrlParser: true
}).then(() => {
  console.log('Database sucessfully connected!')
},
  error => {
    console.log('Could not connect to database : ' + error)
  }
)

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/', (req, res) => res.json({ msg: 'Helo' }))
app.use('/students', studentRoute)
app.use('/users', usersRoute)


// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// 404 Error
app.use((req, res, next) => {
  next();
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
  res.json(err.message)
});