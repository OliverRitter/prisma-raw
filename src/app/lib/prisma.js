import { PrismaClient } from "@prisma/client";

let globalForPrisma; //= global as unknown as {prisma: PrismaClient};

const prisma = globalForPrisma || new PrismaClient({ log: ["query"] });

if (process.env.NODE_ENV !== "production") globalForPrisma = prisma;

export default prisma;
