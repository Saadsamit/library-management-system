"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../../config"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const createborrowRecordDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId, memberId } = data;
    const bookData = yield config_1.default.book.findUniqueOrThrow({ where: { bookId } });
    yield config_1.default.member.findUniqueOrThrow({ where: { memberId } });
    if (bookData.availableCopies <= 0) {
        throw new AppError_1.default(500, 'the book is not available now');
    }
    const result = yield config_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        yield tx.book.update({
            where: { bookId },
            data: {
                availableCopies: {
                    decrement: 1,
                },
            },
        });
        return yield tx.borrow_record.create({ data });
    }));
    return result;
});
const returnBorrowRecordDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { borrowId } = data;
    const borrowRecordData = yield config_1.default.borrow_record.findUniqueOrThrow({
        where: { borrowId, returnDate: null },
    });
    const result = yield config_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        yield tx.book.update({
            where: { bookId: borrowRecordData.bookId },
            data: {
                availableCopies: {
                    increment: 1,
                },
            },
        });
        yield tx.borrow_record.update({
            where: { borrowId },
            data: { returnDate: new Date(Date.now()) },
        });
    }));
    return result;
});
const findOverdueDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const date = new Date(Date.now() - 14 * 24 * 60 * 60 * 1000);
    console.log(date);
    const result = yield config_1.default.borrow_record.findMany({
        where: {
            returnDate: null,
            borrowDate: {
                lte: date,
            },
        },
    });
    return result;
});
const borrowRecordService = {
    createborrowRecordDB,
    returnBorrowRecordDB,
    findOverdueDB,
};
exports.default = borrowRecordService;
