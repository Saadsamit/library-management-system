import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import borrowRecordController from './BorrowRecord.controller';
import {
  BorrowValidationSchema,
  ReturnValidationSchema,
} from './BorrowRecord.validation';

const route = Router();

route.post(
  '/borrow',
  validateRequest(BorrowValidationSchema),
  borrowRecordController.createborrowRecord,
);

route.post(
  '/return',
  validateRequest(ReturnValidationSchema),
  borrowRecordController.returnBorrowRecord,
);

route.get('/borrow/overdue', borrowRecordController.findOverdue);

const borrowRecordRoute = route;

export default borrowRecordRoute;
