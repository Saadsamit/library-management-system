import { PrismaClient } from "@prisma/client";
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

export const config = {
  port: process.env.PORT,
};

export default prisma;
