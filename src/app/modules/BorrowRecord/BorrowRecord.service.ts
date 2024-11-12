import prisma from '../../config';
import AppError from '../../errors/AppError';
import { TBorrow, TReturn } from './BorrowRecord.interface';

const createborrowRecordDB = async (data: TBorrow) => {
  const { bookId, memberId } = data;

  const bookData = await prisma.book.findUniqueOrThrow({ where: { bookId } });

  await prisma.member.findUniqueOrThrow({ where: { memberId } });

  if (bookData.availableCopies <= 0) {
    throw new AppError(500, 'the book is not available now');
  }

  const result = await prisma.$transaction(async (tx) => {
    await tx.book.update({
      where: { bookId },
      data: {
        availableCopies: {
          decrement: 1,
        },
      },
    });
    return await tx.borrow_record.create({ data });
  });

  return result;
};

const returnBorrowRecordDB = async (data: TReturn) => {
  const { borrowId } = data;

  const borrowRecordData = await prisma.borrow_record.findUniqueOrThrow({
    where: { borrowId, returnDate: null },
  });

  const result = await prisma.$transaction(async (tx) => {
    await tx.book.update({
      where: { bookId: borrowRecordData.bookId },
      data: {
        availableCopies: {
          increment: 1,
        },
      },
    });
    await tx.borrow_record.update({
      where: { borrowId },
      data: { returnDate: new Date(Date.now()) },
    });
  });

  return result;
};

const findOverdueDB = async () => {
  const date = new Date(Date.now() - 14 * 24 * 60 * 60 * 1000);
  console.log(date);
  const result = await prisma.borrow_record.findMany({
    where: {
      returnDate: null,
      borrowDate: {
        lte: date,
      },
    },
  });

  return result;
};

const borrowRecordService = {
  createborrowRecordDB,
  returnBorrowRecordDB,
  findOverdueDB,
};

export default borrowRecordService;
