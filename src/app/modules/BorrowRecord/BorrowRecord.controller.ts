import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import borrowRecordService from './BorrowRecord.service';

const createborrowRecord = catchAsync(async (req, res) => {
  const body = req.body;
  const data = await borrowRecordService.createborrowRecordDB(body);

  sendResponse(res, {
    success: true,
    status: 200,
    message: 'Book borrowed successfully',
    data,
  });
});

const returnBorrowRecord = catchAsync(async (req, res) => {
  const body = req.body;
  const data = await borrowRecordService.returnBorrowRecordDB(body);

  sendResponse(res, {
    success: true,
    status: 200,
    message: 'Book returned successfully',
    data,
  });
});

const findOverdue = catchAsync(async (req, res) => {
  const data = await borrowRecordService.findOverdueDB();

  sendResponse(res, {
    success: true,
    status: 200,
    message: data.length ? 'Overdue borrow list fetched' : 'No overdue books',
    data,
  });
});

const borrowRecordController = {
  createborrowRecord,
  returnBorrowRecord,
  findOverdue,
};

export default borrowRecordController;
