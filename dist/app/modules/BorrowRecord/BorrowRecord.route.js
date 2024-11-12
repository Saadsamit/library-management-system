"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const BorrowRecord_controller_1 = __importDefault(require("./BorrowRecord.controller"));
const BorrowRecord_validation_1 = require("./BorrowRecord.validation");
const route = (0, express_1.Router)();
route.post('/borrow', (0, validateRequest_1.default)(BorrowRecord_validation_1.BorrowValidationSchema), BorrowRecord_controller_1.default.createborrowRecord);
route.post('/return', (0, validateRequest_1.default)(BorrowRecord_validation_1.ReturnValidationSchema), BorrowRecord_controller_1.default.returnBorrowRecord);
route.get('/borrow/overdue', BorrowRecord_controller_1.default.findOverdue);
const borrowRecordRoute = route;
exports.default = borrowRecordRoute;
