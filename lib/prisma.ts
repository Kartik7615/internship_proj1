import { PrismaClient } from "@prisma/client"
import { PrismaNeon } from "@prisma/adapter-neon"

let prisma: PrismaClient

if (!process.env.DATABASE_URL) {
  // No DB configured (your local machine) – use a dummy client so imports don't fail.
  prisma = {} as unknown as PrismaClient
} else {
  const prismaClientSingleton = () => {
    const connectionString = process.env.DATABASE_URL as string
    const adapter = new PrismaNeon({ connectionString })
    return new PrismaClient({ adapter })
  }

  const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined }
  prisma = globalForPrisma.prisma ?? prismaClientSingleton()

  if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma
}

export default prisma