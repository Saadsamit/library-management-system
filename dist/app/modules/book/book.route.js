"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const book_controller_1 = __importDefault(require("./book.controller"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const book_validation_1 = require("./book.validation");
const route = (0, express_1.Router)();
route.post('/', (0, validateRequest_1.default)(book_validation_1.bookValidationSchema), book_controller_1.default.createBook);
route.get('/', book_controller_1.default.getAllBook);
route.get('/:bookId', book_controller_1.default.getABook);
route.put('/:bookId', (0, validateRequest_1.default)(book_validation_1.bookupdateValidationSchema), book_controller_1.default.updateBook);
route.delete('/:bookId', book_controller_1.default.deleteBook);
const bookRoute = route;
exports.default = bookRoute;
