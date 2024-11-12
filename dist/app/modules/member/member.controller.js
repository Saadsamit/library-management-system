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
const member_service_1 = __importDefault(require("./member.service"));
const createMember = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const data = yield member_service_1.default.createMemberDB(body);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: 'Member created successfully',
        data,
    });
}));
const getAllMember = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield member_service_1.default.getAllMemberDB();
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: 'Members retrieved successfully',
        data,
    });
}));
const getAMember = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const memberId = req.params.memberId;
    const data = yield member_service_1.default.getAMemberDB(memberId);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: 'Members retrieved successfully',
        data,
    });
}));
const updateMember = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const memberId = req.params.memberId;
    const body = req.body;
    const data = yield member_service_1.default.updateMemberDB(memberId, body);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: 'Members updated successfully',
        data,
    });
}));
const deleteMember = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const memberId = req.params.memberId;
    yield member_service_1.default.deleteMemberDB(memberId);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: 'Members deleted successfully',
    });
}));
const memberController = {
    createMember,
    getAllMember,
    getAMember,
    updateMember,
    deleteMember
};
exports.default = memberController;
