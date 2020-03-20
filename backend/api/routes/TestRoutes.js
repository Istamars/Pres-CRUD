const express = require('express');
const router = express.Router();

const testController = require('../controllers/TestController');

router.get('/', testController.getBooks);
router.post('/', testController.addBook);
router.patch('/:id', testController.updateBook);
router.delete('/:id', testController.deleteBook);

router.get('/about', (req, res) => {
  res.json('Books in the World');
});

module.exports = router;
