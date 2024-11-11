import prisma from '../../config';
import { TMember } from './member.interface';

const createMemberDB = async (data: TMember) => {
  const result = await prisma.member.create({ data });
  return result;
};

const getAllMemberDB = async () => {
  const result = await prisma.member.findMany();
  return result;
};

const getAMemberDB = async (memberId: string) => {
  const result = await prisma.member.findUniqueOrThrow({ where: { memberId } });
  return result;
};

const updateMemberDB = async (memberId: string, data: Partial<TMember>) => {
  const result = await prisma.member.update({
    where: { memberId },
    data,
  });
  return result;
};

const deleteMemberDB = async (memberId: string) => {
  const result = await prisma.member.delete({ where: { memberId } });
  return result;
};

const memberService = {
  createMemberDB,
  getAllMemberDB,
  getAMemberDB,
  updateMemberDB,
  deleteMemberDB,
};

export default memberService;
