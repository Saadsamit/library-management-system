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
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const book_service_1 = __importDefault(require("./book.service"));
const createBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const data = yield book_service_1.default.createBookDB(body);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: 'Book created successfully',
        data,
    });
}));
const getAllBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield book_service_1.default.getAllBookDB();
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: 'Books retrieved successfully',
        data,
    });
}));
const getABook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookId = req.params.bookId;
    const data = yield book_service_1.default.getABookDB(bookId);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: 'Books retrieved successfully',
        data,
    });
}));
const updateBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookId = req.params.bookId;
    const body = req.body;
    const data = yield book_service_1.default.updateBookDB(bookId, body);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: 'Books updated successfully',
        data,
    });
}));
const deleteBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookId = req.params.bookId;
    yield book_service_1.default.deleteBookDB(bookId);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: 'Books deleted successfully',
    });
}));
const bookController = {
    createBook,
    getAllBook,
    getABook,
    updateBook,
    deleteBook,
};
exports.default = bookController;
