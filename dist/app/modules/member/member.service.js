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
const createMemberDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.default.member.create({ data });
    return result;
});
const getAllMemberDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.default.member.findMany();
    return result;
});
const getAMemberDB = (memberId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.default.member.findUniqueOrThrow({ where: { memberId } });
    return result;
});
const updateMemberDB = (memberId, data) => __awaiter(void 0, void 0, void 0, function* () {
    yield config_1.default.member.findUniqueOrThrow({
        where: { memberId },
    });
    const result = yield config_1.default.member.update({
        where: { memberId },
        data,
    });
    return result;
});
const deleteMemberDB = (memberId) => __awaiter(void 0, void 0, void 0, function* () {
    yield config_1.default.member.findUniqueOrThrow({
        where: { memberId },
    });
    const result = yield config_1.default.member.delete({ where: { memberId } });
    return result;
});
const memberService = {
    createMemberDB,
    getAllMemberDB,
    getAMemberDB,
    updateMemberDB,
    deleteMemberDB,
};
exports.default = memberService;
