const express = require('express');
const bookRouter = express.Router();

const books = [
  {
    title: 'Sample book title here',
    genre: 'Historical fiction',
    author: 'Kwame Oppong',
    read: false,
  },
  {
    title: 'Sample book title here',
    genre: 'Historical fiction',
    author: 'Kwame Oppong',
    read: false,
  },
  {
    title: 'Sample book title here',
    genre: 'Historical fiction',
    author: 'Kwame Oppong',
    read: false,
  },
  {
    title: 'Sample book title here',
    genre: 'Historical fiction',
    author: 'Kwame Oppong',
    read: false,
  },
];
bookRouter.route('/')
  .get((req, res) => {
    res.render(
      'bookListView',
      {
        nav: [{ link: '/books', title: 'Books' },
          { link: '/author', title: 'Authors' }],
        title: 'Library',
        books,
      },
    );
  });
bookRouter.route('/:id')
  .get((req, res) => {
    const { id } = req.params;
    res.render(
      'bookView',
      {
        nav: [{ link: '/books', title: 'Books' },
          { link: '/author', title: 'Authors' }],
        title: 'Library',
        book: books[id],
      },
    );
  });

module.exports = bookRouter;