import express from 'express';
import { listBooks, searchBooks, purchaseBook, addBook, deleteBook } from '../controller/bookController.js';

const router = express.Router();

router.get('/books',listBooks);
router.get('/books/search',searchBooks);
router.post('/books/purchase/:id',purchaseBook);
router.post('/books/addBook',addBook);
router.delete('/books/:id', deleteBook);

export default router;