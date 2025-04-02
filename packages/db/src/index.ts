// import { PrismaClient } from "@prisma/client/extension";


// export const prismaClient = new PrismaClient()


const { PrismaClient } = require("@prisma/client");

const prismaClient = new PrismaClient();

module.exports = { prismaClient };
