import { Router } from 'express';
import bookController from './book.controller';
import validateRequest from '../../middlewares/validateRequest';
import {
  bookupdateValidationSchema,
  bookValidationSchema,
} from './book.validation';

const route = Router();

route.post(
  '/',
  validateRequest(bookValidationSchema),
  bookController.createBook,
);

route.get('/', bookController.getAllBook);

route.get('/:bookId', bookController.getABook);

route.put(
  '/:bookId',
  validateRequest(bookupdateValidationSchema),
  bookController.updateBook,
);

route.delete('/:bookId', bookController.deleteBook);

const bookRoute = route;

export default bookRoute;
