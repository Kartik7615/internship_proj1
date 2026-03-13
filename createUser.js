import prisma from "./lib/prisma.js"
import bcrypt from "bcrypt"

async function main() {

  const hashedPassword = await bcrypt.hash("123456", 10)

  await prisma.user.create({
    data: {
      email: "admin@test.com",
      password: hashedPassword,
      role: "ADMIN"
    }
  })

  console.log("User created")
}

main()