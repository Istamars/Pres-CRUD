const { pool } = require('../../config');

exports.getBooks = (req, res) => {
  pool
    .query('SELECT * FROM books')
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.addBook = (req, res) => {
  const { author, title } = req.body;

  pool
    .query('INSERT INTO books (author, title) VALUES ($1, $2)', [author, title])
    .then(result => {
      res.status(201).json({ status: 'success', message: 'Book added.' });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.deleteBook = (req, res) => {
  const id = req.params.id;

  pool
    .query('DELETE FROM books WHERE id = $1', [id])
    .then(result => {
      res.status(201).json({ status: 'success', message: 'Book deleted.' });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

const queryUpdateBuilder = (id, body) => {
  var query = ['UPDATE books'];
  query.push('SET');
  var set = [];
  Object.keys(body).forEach((key, i) => {
    set.push(key + ' = ($' + (i + 1) + ')');
  });
  query.push(set.join(', '));
  query.push('WHERE id = ' + id);

  return query.join(' ');
};

exports.updateBook = function(req, res) {
  const query = queryUpdateBuilder(req.params.id, req.body);

  const columnValues = Object.keys(req.body).map(key => {
    return req.body[key];
  });

  pool
    .query(query, columnValues)
    .then(result => {
      res.status(201).json({ status: 'success', message: 'Book updated.' });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};
