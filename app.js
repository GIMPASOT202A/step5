const express = require('express');
const morgan = require('morgan');
const path = require('path');
const debug = require('debug')('app');

const app = express();
const port = process.env.PORT || 3000;


app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/boostrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/boostrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist/')));
app.set('views', './src/views');
app.set('view engine', 'ejs');
const bookRouter = require('./src/routes/bookRoute');

app.use('/books', bookRouter);
app.get('/', (req, res) => {
  res.render(
    'index',
    {
      nav: [{ link: '/books', title: 'Books' },
        { link: '/author', title: 'Authors' }],
      title: 'Library',
    },
  );
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  debug(`Listeing on port ${port}`);
});
