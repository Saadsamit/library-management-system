"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberUpdateValidationSchema = exports.memberValidationSchema = void 0;
const zod_1 = require("zod");
exports.memberValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
        email: zod_1.z.string().email(),
        phone: zod_1.z.string(),
        membershipDate: zod_1.z.string(),
    }),
});
exports.memberUpdateValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        email: zod_1.z.string().email().optional(),
        phone: zod_1.z.string().optional(),
        membershipDate: zod_1.z.string().optional(),
    }),
});
