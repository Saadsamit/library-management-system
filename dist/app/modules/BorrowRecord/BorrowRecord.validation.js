"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnValidationSchema = exports.BorrowValidationSchema = void 0;
const zod_1 = require("zod");
exports.BorrowValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        bookId: zod_1.z.string(),
        memberId: zod_1.z.string(),
    }),
});
exports.ReturnValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        borrowId: zod_1.z.string(),
    }),
});
