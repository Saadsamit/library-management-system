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
const BorrowRecord_service_1 = __importDefault(require("./BorrowRecord.service"));
const createborrowRecord = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const data = yield BorrowRecord_service_1.default.createborrowRecordDB(body);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: 'Book borrowed successfully',
        data,
    });
}));
const returnBorrowRecord = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const data = yield BorrowRecord_service_1.default.returnBorrowRecordDB(body);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: 'Book returned successfully',
        data,
    });
}));
const findOverdue = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield BorrowRecord_service_1.default.findOverdueDB();
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: data.length ? 'Overdue borrow list fetched' : 'No overdue books',
        data,
    });
}));
const borrowRecordController = {
    createborrowRecord,
    returnBorrowRecord,
    findOverdue,
};
exports.default = borrowRecordController;
