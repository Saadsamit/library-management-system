import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import bookService from './book.service';

const createBook = catchAsync(async (req, res) => {
  const body = req.body;
  const data = await bookService.createBookDB(body);

  sendResponse(res, {
    success: true,
    status: 200,
    message: 'Book created successfully',
    data,
  });
});

const getAllBook = catchAsync(async (req, res) => {
  const data = await bookService.getAllBookDB();

  sendResponse(res, {
    success: true,
    status: 200,
    message: 'Books retrieved successfully',
    data,
  });
});

const getABook = catchAsync(async (req, res) => {
  const bookId = req.params.bookId;
  const data = await bookService.getABookDB(bookId);

  sendResponse(res, {
    success: true,
    status: 200,
    message: 'Books retrieved successfully',
    data,
  });
});

const updateBook = catchAsync(async (req, res) => {
  const bookId = req.params.bookId;
  const body = req.body;
  const data = await bookService.updateBookDB(bookId, body);

  sendResponse(res, {
    success: true,
    status: 200,
    message: 'Books updated successfully',
    data,
  });
});

const deleteBook = catchAsync(async (req, res) => {
  const bookId = req.params.bookId;
  await bookService.deleteBookDB(bookId);

  sendResponse(res, {
    success: true,
    status: 200,
    message: 'Books deleted successfully',
  });
});

const bookController = {
  createBook,
  getAllBook,
  getABook,
  updateBook,
  deleteBook,
};

export default bookController;
