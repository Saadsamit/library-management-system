"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const member_controller_1 = __importDefault(require("./member.controller"));
const member_validation_1 = require("./member.validation");
const route = (0, express_1.Router)();
route.post('/', (0, validateRequest_1.default)(member_validation_1.memberValidationSchema), member_controller_1.default.createMember);
route.get('/', member_controller_1.default.getAllMember);
route.get('/:memberId', member_controller_1.default.getAMember);
route.put('/:memberId', (0, validateRequest_1.default)(member_validation_1.memberUpdateValidationSchema), member_controller_1.default.updateMember);
route.delete('/:memberId', member_controller_1.default.deleteMember);
const memberRoute = route;
exports.default = memberRoute;
