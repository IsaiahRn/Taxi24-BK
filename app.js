import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes';


dotenv.config();


const isProduction = process.env.NODE_ENV === 'production';

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);

// / catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Handle application error
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  let error = {};
  if (!isProduction) {
    error = err;
  }
  res.status(err.status || 500);
  if (err.message === 'Validation error') {
    res.json({
      status: 409,
      errors: {
        body: error.errors[0].message,
      },
    });
  }
  if (err.message === 'SequelizeDatabaseError') {
    res.json({
      status: 401,
      errors: {
        body: 'Unable to access database',
      },
    });
  }
  res.json({
    errors: {
      message: err.message,
      error,
    },
  });
});
// PORT
const port = process.env.PORT || 3000;

app.listen(port);

export default app;
