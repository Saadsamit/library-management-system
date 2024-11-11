import prisma from '../../config';
import { TBook } from './book.interface';

const createBookDB = async (data: TBook) => {
  const result = await prisma.book.create({ data });
  return result;
};

const getAllBookDB = async () => {
  const result = await prisma.book.findMany();
  return result;
};

const getABookDB = async (bookId: string) => {
  const result = await prisma.book.findUniqueOrThrow({ where: { bookId } });
  return result;
};

const updateBookDB = async (bookId: string, data: Partial<TBook>) => {
  const result = await prisma.book.update({
    where: { bookId },
    data,
  });
  return result;
};

const deleteBookDB = async (bookId: string) => {
  const result = await prisma.book.delete({ where: { bookId } });
  return result;
};

const bookService = {
  createBookDB,
  getAllBookDB,
  getABookDB,
  updateBookDB,
  deleteBookDB,
};

export default bookService;
