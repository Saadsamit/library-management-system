"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookupdateValidationSchema = exports.bookValidationSchema = void 0;
const zod_1 = require("zod");
exports.bookValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string(),
        genre: zod_1.z.string(),
        publishedYear: zod_1.z.number(),
        totalCopies: zod_1.z.number().min(1),
        availableCopies: zod_1.z.number().min(1),
    }),
});
exports.bookupdateValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        genre: zod_1.z.string().optional(),
        publishedYear: zod_1.z.number().optional(),
        totalCopies: zod_1.z.number().min(1).optional(),
        availableCopies: zod_1.z.number().min(1).optional(),
    }),
});
